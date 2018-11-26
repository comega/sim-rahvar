var express = require("express");
var Crawler = require("js-crawler");
var cheerio = require("cheerio");

const axios = require('axios');
const querystring = require('querystring');

var router = express.Router();

router.get("/info",function(req,res){
	new Crawler().configure({depth: 1})
	  .crawl("http://estelam.rahvar120.ir/index.jsp?siteid=1&fkeyid=&siteid=1&pageid=2371666", function onSuccess(page) {
	    //console.log(page.body);
	    var $  = cheerio.load(page.body);
	    //var form = page.body.header;
	    var inputs = $('#advformid');
	    var rc  = inputs.find("input[name=rc]");
	    var cptchid  = inputs.find("input[name=cptchid]");
	    var aform  = inputs.find("input[name=aform]");
	    var image  = $("#ch_capt");
	    console.log(rc.attr('value'));
	    console.log(cptchid.attr('value'));
	    console.log(aform.attr('value'));
	    var onclick_attr = (image.attr('onclick'));
	    patt = new RegExp("\/includes.*&rand=");
	    random = Math.random();
	    var captcha  = "http://estelam.rahvar120.ir"+patt.exec(onclick_attr)[0]+random; 
	    console.log(captcha);
            res.setHeader('Content-Type', 'application/json');
            res.send(JSON.stringify({"image":captcha+"","cptchid":cptchid.attr('value')+""}));
	    //console.log($('#advformid input'));
	  });
});

router.get('/', function (req, res) {
    res.send('Hello World');
 })

 router.post('/car', function (req, res) {
    var cptchid = req.body.cptchid;
    var captcha = req.body.captcha;
    var BAR_KD = req.body.BAR_KD;
    var data = {'BAR_KD':BAR_KD, capcha:captcha, cptchid:cptchid };
    var status = 0;
    var message = "";
    var payload = [];
    axios.post('http://estelam.rahvar120.ir/index.jsp?siteid=1&fkeyid=&siteid=1&pageid=2542', querystring.stringify(data))
        .then(function (response) {
            // console.log(response.data);
            if(response.status != 200){
                status = 0;
                message = "یرای استفاده از سامانه راهور باید از آپی ایران متصل شوید";
                payload=[];
            }else{
                var $  = cheerio.load(response.data);
                var CBCount = $('#t1 input[type=checkbox]').length;
                if(CBCount > 0){
                    var data = $('tbody tr td');
                    // console.log( Object.values(data) );
                    var allData = []; 
                    data.each(function(i, el) {
                        // this === el
                        items = (el.children);
                        allData[i] = items[0].data
                    });
                    //   console.log(allData.length);
                    var arrays = [], size = 13;
                    while (allData.length > 0){
                        arrays.push(allData.splice(0, size));
                    }
                    status = 1;
                    message="شما دارای خلافی های زیر هستید";
                    payload= arrays;
                }else{
                    var patt = new RegExp("deny");
                    var vpn = new RegExp("خارج از کشور");
                    // console.log((response.data));
                    var no_ticket = patt.exec(response.data);
                    var vpn_ticket = vpn.exec(response.data);
                    if(no_ticket || vpn_ticket){
                        message  = (no_ticket) ? "اطلاعات وارد شده صحیح نیست، لطفا مجددا امتحان نمایدد" : "یرای استفاده از سامانه راهور باید از آپی ایران متصل شوید";
                        status = 0;
                        // message = "اطلاعات وارد شده صحیح نیست، لطفا مجددا امتحان نمایدد";
                    }else{
                        status = 1;
                        message = "تا کنون مودرد خلافی برای شما گزارش داده نشده است";
                        payload = [];
                    }
                }
            }
            
            // console.log("//// count : ////");
            // console.log(CBCount);
            res.setHeader('Content-Type', 'application/json');
            res.send( JSON.stringify({status:status, message:message,payload:payload}) );
            // console.log(response.status);
            // console.log(response.statusText);
            // console.log(response.headers);
            // console.log(response.config);
            ///  //to find if any item is available

        })
        .catch(function (error) {
            console.log(error);
        });

    // res.send();

 })



module.exports = router;
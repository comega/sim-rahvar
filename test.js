var cheerio = require("cheerio");
var text = `

<!DOCTYPE html>
<html>
    <head>
        <meta name="publisher" content="highportal.com" />
        <meta name="generator" content="Aryanic.com" />
        <meta name="copyright" content="©2018 HighCMS/HighPortal"  license="0" licenseid="0" version="12.4"/>
        <meta name="siteid-pageid" content="1-2542" />
        <link rel="stylesheet" href="includes/227.css"/>
        <!-- Basic -->
        <meta charset="utf-8">
        <title>راهور</title>
        <meta name="keywords" content="HTML5 Template" />
        <meta name="description" content="Porto - Responsive HTML5 Template">
        <meta name="author" content="okler.net">
        <!-- Mobile Metas -->
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <!-- Vendor CSS -->
        <link rel="stylesheet" href="/uploads/1_23_1429445017170_bootstrap.css">
        <link rel="stylesheet" href="/uploads/bootstrap-rtl.css">
        <link rel="stylesheet" href="/uploads/owl.carousel.min.css" media="screen">
        <link rel="stylesheet" href="/uploads/owl.theme.default.min.css" media="screen">
        <link rel="stylesheet" href="/uploads/magnific-popup.css" media="screen">
        <!-- Theme CSS -->
        <link rel="stylesheet" href="/uploads/theme.css">
        <link rel="stylesheet" href="/uploads/theme-elements.css">
        <link rel="stylesheet" href="/uploads/theme-blog.css">
        <link rel="stylesheet" href="/uploads/theme-animate.css">
        <!-- Skin CSS -->
        <link rel="stylesheet" href="/uploads/default7.css">
        <link rel="stylesheet" href="/uploads/component.css" media="screen">
        <link rel="stylesheet" href="/uploads/nivo-slider.css" media="screen">
        <link rel="stylesheet" href="/uploads/default2.css">
        <!-- Skin CSS -->
        <!-- Theme Custom CSS -->
        <link rel="stylesheet" href="/uploads/custom.css">
        <!-- Head Libs -->
        <script type="text/javascript" src="/uploads/jquery-1.9.1.js"></script>
        <script type="text/javascript" src="/uploads/modernizr.js"></script>
        <!--[if IE]>
        <link rel="stylesheet" href="/uploads/ie.css">
        <![endif]-->
        <!--[if lte IE 8]>
        <script src="/uploads/respond.js"></script>
        <script src="/uploads/excanvas.js"></script>
        <![endif]-->
        <style type="text/css">

ul#css3menu1,ul#css3menu1 ul{   margin:0;list-style:none;padding:0;background-color:#dedede;border-width:1px;border-style:solid;border-color:#5f5f5f;-moz-border-radius:5px;-webkit-border-radius:5px;border-radius:5px;}  ul#css3menu1 ul{   display:none;position:absolute;right:0;top:100%;<##opacisty1>-moz-box-shadow:-3.5px 3.5px 5px #000000;-webkit-box-shadow:-3.5px 3.5px 5px #000000;box-shadow:-3.5px 3.5px 5px #000000;background-color:#FFFFFF;border-radius:6px;-moz-border-radius:6px;-webkit-border-radius:6px;border-color:#d4d4d4;padding:0 10px 10px;<##opacisty2>}  ul#css3menu1 li:hover>*{   display:block;}  ul#css3menu1 li{   position:relative;zoom:1;display:block;white-space:nowrap;font-size:0;float:right;}  ul#css3menu1 li:hover{   z-index:1;}  ul#css3menu1 ul ul{   position:absolute;right:100%;top:0;}  ul#css3menu1{   font-size:0;z-index:999;position:relative;display:inline-block;zoom:1;   *display:inline;}  ul#css3menu1>li,ul#css3menu1 li{   margin:0;}  * html ul#css3menu1 li a{   display:inline-block;}  ul#css3menu1 a:active, ul#css3menu1 a:focus{   outline-style:none;}  ul#css3menu1 a,ul#css3menu1 a.pressed{   display:block;vertical-align:middle;text-align:center;text-decoration:none;font:bold 14px tahoma;color:#000000;text-shadow:#FFF 0 0 1px;cursor:pointer;}  ul#css3menu1 ul li{   float:none;margin:10px 0 0;}  ul#css3menu1 ul a{   text-align:right;padding:4px;background-color:#FFFFFF;background-image:none;border-width:0;border-radius:0px;-moz-border-radius:0px;-webkit-border-radius:0px;font:normal 12px tahoma;color:#000000;text-decoration:none;}  ul#css3menu1 li:hover>a{   background-color:#0c97e2;border-color:#C0C0C0;border-style:solid;font:bold 14px tahoma;color:#000000;text-decoration:none;text-shadow:#FFF 0 0 1px;background-image:url("/cms/fmenuimages/cssmenu/m1-1/mainbk.png");background-position:0 100px;}  ul#css3menu1 img{   border:none;vertical-align:middle;margin-left:10px;}  ul#css3menu1 img.over{   display:none;}  ul#css3menu1 li:hover > a img.def{   display:none;}  ul#css3menu1 li:hover > a img.over{   display:inline;}  ul#css3menu1 li a.pressed img.over{   display:inline;}  ul#css3menu1 li a.pressed img.def{   display:none;}  ul#css3menu1 span{   display:block;overflow:visible;background-position:left center;background-repeat:no-repeat;padding-left:0px;}  ul#css3menu1 ul span{   background-image:url("/cms/fmenuimages/cssmenu/m1-1/arrowsub-rtl.png");padding-left:28px;}  ul#css3menu1 a{   padding:10px;background-color:#c1c1c1;background-image:url("/cms/fmenuimages/cssmenu/m1-1/mainbk.png");background-repeat:repeat;background-position:0 0;border-width:0 0 0 1px;border-style:solid;border-color:#C0C0C0;color:#000000;text-decoration:none;text-shadow:#FFF 0 0 1px;}  ul#css3menu1 li:hover>a,ul#css3menu1 li>a.pressed{   background-color:#0c97e2;background-image:url("/cms/fmenuimages/cssmenu/m1-1/mainbk.png");background-position:0 100px;border-style:solid;border-color:#C0C0C0;color:#000000;text-decoration:none;text-shadow:#FFF 0 0 1px;}  ul#css3menu1 ul li:hover>a,ul#css3menu1 ul li>a.pressed{   background-color:#FFFFFF;background-image:none;font:normal 12px tahoma;color:#0978b3;text-decoration:none;}  ul#css3menu1 li.topfirst>a{   border-radius:5px 0 0 5px;-moz-border-radius:5px 0 0 5px;-webkit-border-radius:5px;-webkit-border-top-right-radius:0;-webkit-border-bottom-right-radius:0;}  ul#css3menu1 li.toplast>a{   border-radius:0 5px 5px 0;-moz-border-radius:0 5px 5px 0;-webkit-border-radius:0;-webkit-border-top-right-radius:5px;-webkit-border-bottom-right-radius:5px;}

@font-face {
    font-family: 'webmitrabold';
    src: url('/uploads/webmitrabold.eot');
    src: url('/uploads/webmitrabold.eot?#iefix') format('embedded-opentype'),
         url('/uploads/webmitrabold.woff') format('woff'),
         url('/uploads/webmitrabold.ttf') format('truetype'),
         url('/uploads/webmitrabold.svg#webmitrabold') format('svg');
    font-weight: bold;
    font-style: normal;
    unicode-range: U+0600â€“06FF;
}
*{font-family: webmitrabold, tahoma !important; 
text-decoration: none !important;
}

.CssNewsTitlesSpan6{

font-size:11px !important;

}

.CssNewsTitlesSpan7{

font-size:11px !important;

}

.newssm4 {

display: block;

text-align: justify;

}

.list_carousel li div span{

display:block;

}

.newssm3 {

display: block;

text-align: justify;

}
.newssm4 {

display: block;

text-align: justify;

}
.boximg{margin: 0px;}
.boxtable{display:none}
.boxtable2{display:none}
.bordersimg{background-position: left ;background-repeat: repeat-y ; border-left: 0px #ffffff solid;border-right: 0px #ffffff solid;border-bottom: 0px #ffffff solid;border-top: 0px #ffffff solid;background-color: #FFFFFF }
.bordersimgr{background-position: right ;background-repeat: repeat-y }


        </style>
        <link rel="stylesheet" href="/includes/cms.css"/>
        <link rel="canonical" href="http://estelam.rahvar120.ir/index.jsp?pageid=2542&p=1">

    </head>
    <body>
        <header id="header">
            <div  class="main">
                <div class="back">
                    <div class="container backcont">
                        <div class="row" style=" margin:0px !important;">
                            <div class="col-md-8  hidden-xs " style="border:none !important;">
                                <!--جمله متحرک-->
                                <link rel="stylesheet" type="text/css" href="/uploads/ticker.css">
                                <div class="smarticker3 smarticker no-category no-subcategory theme2 box size1 s-rtl rtl cfalse">
                                    <ul style="display: block; height: 100%;" class="newsholder" id="newsholder">
                                        <li class="" style="display: none ; font-size:25px ; opacity: 0;" data-subcategory="مقام معظم رهبری">
                                            <a href="#">نیروی انتظامی همواره باید مظهر اقتدار و نظم وهم مظهر مهربانی،رافت و رحمت در جامعه باشد</a>
                                        </li>
                                        <li class="" style="display: none ; font-size:25px ; opacity: 0;" data-subcategory="حضرت امام خمینی (ره)">
                                            <a href="#">تخطی از مقررات راهنمایی و رانندگی شرعاٌ حرام است</a>
                                        </li>
                                        <li class="" style="display: none ; font-size:25px ; opacity: 0;" data-subcategory="آیت الله جوادی آملی">
                                            <a href="#">رعایت قوانین راهنمایی و رانندگی واجب شرعی است</a>
                                        </li>
                                        <li class="" style="display: none ; font-size:25px ; opacity: 0;" data-subcategory="مقام معظم رهبری (مد ظله العالی ):">
                                            <a href="#">سعی کنید و سعی کنند همه؛حوادث ترافیکی به حداقل اقل ممکن برسد.</a>
                                        </li>
                                        <li class="" style="display: none ; font-size:25px ; opacity: 0;" data-subcategory="هفته ناجا گرامی باد">
                                            <a href="#">"اقتدار پلیس، همدلی و همزبانی، امنیت و آرامش" </a>
                                        </li>
                                    </ul>
                                </div>
                                <script type="text/javascript" src="/uploads/ticker.js"></script>
                                <script type="text/javascript">
    
    $('.smarticker3').smarticker({
        theme: 2,
        controllerType: 2,
        speed: 1500,
        pausetime: 3600,
        title: 'اطلاعیه ها',
        direction: 'rtl',
        subcategory: true,
        controllerType: false,    
        animation: 'slide'
    });

    </script>
                            </div>
                            <!--تاريخ و ساعت-->
                            <div class="col-md-4" >
                                <div  class="date" >&#1610;&#1705;&#1588;&#1606;&#1576;&#1607;&nbsp;&#1634;&#1639;&nbsp;&#1570;&#1576;&#1575;&#1606;&nbsp;&#1633;&#1635;&#1641;&#1639;</div>
                                <div class="time">
                                    <span>
                                        <script language="javascript" src="/portal/includes/livetime.js"  type="text/javascript" ></script>
                                    </span>
                                    <span>
                                        <img src="/uploads/time.png" style="padding-right: 10px;">
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <!-- head-->
            <div  class="main">
                <div class="back">
                    <div class="container backcont">
                        <div class="row" style=" margin:0px !important;">
                            <div class="col-md-12">
                                <!--هدر سايت-->
                                <img class="img-responsive" alt="راهور 120 (هفته نیروی انتظامی)" src="/uploads/header-hafte2-asli.jpg">
                         
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <button class="btn btn-responsive-nav btn-inverse" data-toggle="collapse" data-target=".nav-main-collapse">
                <i class="fa fa-bars"></i>
            </button>
            <!-- menu-->
            <div class="navbar-collapse nav-main-collapse collapse" style="background-color:#498eed; width:100%;height: auto;padding-top: 10px;">
                <div class="container">
                    <div class="row" style=" margin:0px !important;">
                        <div class="col-md-9">
                            <nav class="nav-main mega-menu">
                                <div align='right'>
                                    <ul id='css3menu1' class='topmenu' style='direction:ltr;position:relative;z-index:1999'>
                                        <li dir='rtl' class='topfirst' >
                                            <a href='/index.jsp?fkeyid=&siteid=1&pageid=125'  style='height:18px;line-height:18px;'>صفحه اصلي</a>
                                        </li>
                                    </ul>
                                </div>
                            </nav>
                            <script>
document.getElementById("css3menu1").id = "mainMenu"; 
$('.nav-main div:first').replaceWith('
                                <span id="mySpan">' + $('.nav-main div:first').html() + "</span>");
$('#mainMenu').removeClass('topmenu').addClass('nav nav-pills nav-main');
$("#mainMenu").removeAttr("style");
$("#mainMenu li").children("a").addClass("hvr-sweep-to-bottom");
$("#mainMenu li").children("a").removeAttr("style");

$('#mainMenu li:first').addClass('active');
$('#mainMenu').find('li').each(function (){
  if($(this).parent().attr('id') === 'mainMenu')
    $(this).addClass('dropdown');
  $(this).find('ul').each(function (){
     $(this).addClass('dropdown-menu');
     $(this).find('li').each(function (){
       $(this).children().each(function (){
          if($(this)[0].tagName.toLowerCase() === 'ul'){
            $(this).parent().removeAttr('class');
            $(this).parent().addClass('dropdown-submenu');
          }
       });
       
     });
  });
});
$('.dropdown > a:first-child').addClass('dropdown-toggle');
                            </script>
                            <style>
#header nav ul.nav-main li > a.extra{display:none!important;}
</style>
                        </div>
                        <div class="col-md-3">
                            <div style="padding-right:30px" class="search">
                                <form  id="searchForm" action="/index.jsp?siteid=1&pro=search" method="POST" name="frm_search">
                                    <div class="input-group">
                                        <input aria-required="true" class="form-control search" name="T1" id="q" placeholder="جستجو..." required type="text">
                                        <span class="input-group-btn">
                                            <INPUT style="position: absolute;top: 2px;right: -220px;width: 30px;" tabIndex=0 type=image src="/uploads/iconsearch.png" name="I3">
                                    
                                        </span>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
        <!-- ...................... end radife aval.................... -->
        <!-- ...................... start radife dovom.................... -->
        <div  class="main">
            <div class="back">
                <div class="container backcont">
                    <div class="row" style=" margin:0px !important;">
                        <div class="col-md-12">
                            <div style="height: 50px;padding-top: 10px;border-bottom: 1px black dashed;" >
                                <a href="http://rahvar120.ir/">   </a>
                            </div>
                            <div style="min-height:400px">
                                <font style='font-size:1px;'>&nbsp;</font>
                                <div id="PrintArea" >
                                    <div class="pagewatermark">

</div>
                                    <style>

@media screen {
   .pagewatermark {
     display: block;
   }
}
@media print {
  .pagewatermark {
      display: block;
  }
}

.pagewatermark{
    position: absolute;
    color: #999999;
    font-size: 25px;
    width: 100%;
    top:  10%;    
    right:5%;
    text-align: center;
    z-index: 1;
    -ms-transform: rotate(0deg); /* IE 9 */
    -webkit-transform: rotate(0deg); /* Safari */
    transform: rotate(0deg); /* Standard syntax */

}
 
</style>
                                    <script>
var  myonvan='چاپ این صفحه رایگان می باشد';

for (i=0;i
                                        <12 ; i++ ){
    var marg= Math.floor((Math.random() * 250) + 0)
    var  $element=  ("
                                            <div style=\"opacity: .7;margin:5% 0px;\" class=\"watermark\"> "+ myonvan + "</div>");

    $(".pagewatermark").append($element);
}
                                        </script>
                                        <style type="text/css">

.formiframe{
     visibility: hidden;
}
#t1 {
  background: none !important;
}
#PrintArea{
   position:relative;
}
#progress-bar {
    display:none;
    font-family:nassim-bold;
    width:110%;
    height:100%;
    top:0px;
    right:0px;
    text-align:center;
    padding:300px 0px;
    position:fixed; 
    z-index:9999999999;
    background:#52B9E9;
    font-size:45px;
    color:#fff;
}
.peymentport:nth-child(2) {
  display: none;
}
 
.demo-container {
  margin: 0px!important;
  position: relative;
  z-index: 2;
}
.pagination{display:block!important;}
.footable{font-family:Tahoma, Arial !important;text-align:right !important;}
.takbox{font-family:Tahoma, Arial !important;}
.footable > tfoot .pagination ul > li {float:right}

.selected_row {
    background-color: rgb(209, 217, 226)!important;
    color: #240024;
}
.gray{
                background-color:#f2f2f2;
                margin:0!important;

}
.takbox{
                width:300px;
                margin:10px auto;
                clear:both;
}

.alboxr{
                float:right;
                width:48%;
}

.alboxl{
                float:left;
                width:48%;
}

.alert {
    margin-bottom: 10px!important;
    padding: 10px!important;
}

.plbox{
    width:278px;
    height:52px;
    background-image: url('uploads/est-pelak.png');
    margin:30px auto;
    
}

.irch{
    width:60px;
    height:25px;
    text-align:center;
    overflow:hidden;
    margin-top:18px;
    float:right;
    font-family:Tahoma;
    font-size:20px;
    font-weight:bold;
    letter-spacing:1px;
}

.plch {
    float: right;
    font-family: Tahoma;
    font-size: 20px;
    font-weight: bold;
    height: 25px;
    letter-spacing: 1px;
    margin-top: 12px;
    overflow: hidden;
    text-align: left;
    width: 85px;
}

.plch1{
    float: right;
    font-family: Tahoma;
    font-size: 20px;
    font-weight: bold;
    height: 25px;
    letter-spacing: 1px;
    margin-top: 12px;
    overflow: hidden;
    text-align: right;
    width: 75px;

}
.tooltip{font-family:Tahoma!important;}
.peymentport {
  background: #ededed;
  border: 1px solid #cccccc;
  border-radius: 5px;
  margin: 5px;
  overflow: hidden;
  padding: 2px;
  text-align: center;
  width: 86px;
  cursor:pointer;
  float:right;
}
.peymentport:hover {
  background: #dddddd;
 
}
.thumbnail {
  width: 80px;
  margin-bottom:0px;
}
#peyment_4{
   display:none;
}
#peyment_5{
   display:none;
}
</style>
                                        <link href="/uploads/footable.core.css" rel="stylesheet" type="text/css"/>
                                        <link href="/uploads/footable.metro.css" rel="stylesheet" type="text/css"/>
                                        <link href="/uploads/footable-demos.css" rel="stylesheet" type="text/css"/>
                                        <script src="/uploads/footable.js" type="text/javascript"></script>
                                        <script src="/uploads/footable.filter.js" type="text/javascript"></script>
                                        <script src="/uploads/footable.paginate.js" type="text/javascript"></script>
                                        <script src="/uploads/demos.js" type="text/javascript"></script>
                                        <script src="/uploads/persianumber.js" type="text/javascript"></script>
                                        <script type="text/javascript">
var ref=document.referrer;
if (ref.indexOf("rahvar120.ir")==-1 ) {
  
 //window.location.href="/index.jsp?fkeyid=&siteid=1&fkeyid=&siteid=1&pageid=2540" ; 

} 

    var price;
    var CBCount;
    var CBCheckedCount;
    var SumCB;
    var rowCount;
    var MainString = "";
    var temp = 0;
    var sum = 0;
    var ErrorNumbers = "";
    var TempCount = 0;
    var Inputs = 0;
    
    price=$("#warning_price").text(); 

    $(function ()
    {
        $('table').footable();

        $('.colour-switch a').click(function(e)
        {
            e.preventDefault();
            $('.colour-switch a').each(function()
            {
                $('table').removeClass($(this).data('class'));
            });
            
            $('table').addClass($(this).data('class'));
        });
    });
  
function Loading()
{
    $("#progress-bar").slideUp("slow");
    $("#SpnSumPrices").text(addCommas(GetSum())+" "+"ریال");
}

function ManageSelectAll()
{
    if(TempCount == Inputs)
    {
        $("#s1").css('display','none');
    }
    else if(TempCount < Inputs)
    {
        $("#s1").css('display','block');
    }
    else{}
}

function CheckWrongInputs()
{
    $('#t1 input[tb=cb]').each(function()
    {
        if($(this).attr('payment') == "" || $(this).attr('paper') == "")
        {
            TempCount ++;
            
            $(this).attr('type','image');
            $(this).attr('src','/uploads/disableicon.png');
            $(this).attr('data-original-title','به دلیل عدم وجود شناسه پرداخت و شناسه قبض این ردیف قابل پرداخت آنلاین نمی باشد');
            
            ErrorNumbers += $(this).attr('serial') + ', ';
        }
    });
}

$(document).ready(function()
{
    Inputs = ($('#t1 input').length)/2;

    //$("#progress-bar").slideDown("slow");

    $('#t1 input[tb=cb]').css('float','right');

    CheckWrongInputs();
    
    ManageSelectAll();

    ErrorNumbers = ErrorNumbers.substring(0,ErrorNumbers.length-2);
    //$("#desc").text(ErrorNumbers);

    slc.selectedIndex = 1;

    CBCount = $('#t1 input[type=checkbox]').length;
    CBCount1 = $('table tbody tr').length;

    $("#jam").text(CBCount1+" "+"عدد");
    $("#t1").find("input[name=rd]").css('display', 'none');
    $("#t1").find("input[type=checkbox]").attr('am', 'za');

    rowCount = $('#t1 tr').length;
    temp = 0;
    sum = 0;
    MainString = "";

    $('#ifrm').contents().find('#cr').val(0);
    $('#ifrm').contents().find('#bmibills').val("");
    $('#ifrm2').contents().find('#cr').val(0);
    $('#ifrm2').contents().find('#pecbills').val("");

    $('#ifrm3').contents().find('#cr').val(0);
    $('#ifrm3').contents().find('#samanbills').val("");
    $('#ifrm5').contents().find('#billinfo').val("");
        
    $('table tbody :checkbox').change(function (event)
    {
        $(this).closest('tr').toggleClass("selected_row", this.checked);
    });
});

function CheckIframeInputs()
{
    var cr = $('#ifrm').contents().find('#cr').val();
    var BmiBills = $('#ifrm').contents().find('#bmibills').val();
    
    if(cr == "" || BmiBills == "" || MainString == "")
    {
        alert('شما می بایست یک مورد را انتخاب نمایید');
    }
    else
    {
        var mychoice=  $(".selectpay:checked").attr("data-load");
        if (mychoice == undefined || mychoice == "" ) {
            alert('درگاه پرداخت مورد نظرتان را انتخاب کنید.');
            return false;
        }else{
            $("#"+mychoice).contents().find('#submit').trigger("click");
        }
        //$('#ifrm').contents().find('#submit').trigger("click");
    }
}

function Checker()
{
    var e = document.getElementById('slc');
    var c = e.value;
                
   if(c == 1)
   {
        ManageSelectAll();

        $('#ifrm').contents().find('#bmibills').val("");
        $("#pay").attr('disabled','disabled');
        
        $('#t1 input[tb=cb]').each(function()
        {
            if($(this).attr('payment') == "" || $(this).attr('paper') == "")
            {
                $(this).attr('type','image');
                $(this).attr('src','/uploads/disableicon.png');
                $(this).attr('data-original-title','به دلیل عدم وجود شناسه پرداخت و شناسه قبض این ردیف قابل پرداخت آنلاین نمی باشد');
            }
        }); 

        $("#t1").find("input[name=rd]").css('display', 'none');
        $("#t1").find("input[type=checkbox]").css('display', 'block');
        $('table tbody tr').css({'background-color' : '#efefef' , 'color' :'#444444'}); 
        $("tr").removeClass( "selected_row" ); 
            
        sum = 0;
        CBCheckedCount = 0;
        $("#CBCheckedCount").text('0 عدد');
        
        $("#SelectedSum").text(addCommas(sum)+" "+"ریال");
        $("#SpnSumPrices").text(addCommas(GetSum())+" "+"ریال");
   }
   else if(c == 2)
   {    
        ManageSelectAll();

        $('#ifrm').contents().find('#bmibills').val("");  
        $("#pay").attr('disabled','disabled');
        
        $('#t1 input[name=rd]').each(function()
        {
            if($(this).attr('payment') == "" || $(this).attr('paper') == "")
            {
                $(this).attr('type','image');
                $(this).attr('src','/uploads/disableicon.png');
                $(this).attr('data-original-title','به دلیل عدم وجود شناسه پرداخت و شناسه قبض این ردیف قابل پرداخت آنلاین نمی باشد');
            }
        }); 
        
        $('#t1 input[tb=cb]').each(function()
        {
            if($(this).attr('payment') == "" || $(this).attr('paper') == "")
            {
                $(this).prop('type','hidden');
            }
        }); 
        
        $("#s1").css('display','none');
        $("#t1").find("input[name=rd]").css('display', 'block');
        $("#t1").find("input[name=rd]").prop('checked', false);
        $("#t1").find("input[type=checkbox]").css('display', 'none');
        $('table tbody tr').css({'background-color' : '#efefef' , 'color' :'#444444'}); 
        $( "tr" ).removeClass( "selected_row" ); 
        
        sum = 0;
        CBCheckedCount = 0;
        $("#CBCheckedCount").text('0 عدد');

        $("#SelectedSum").text(addCommas(sum+" "+"ریال"));
        $("#SpnSumPrices").text(addCommas(GetSum())+" "+"ریال");
        
        $('input[type=checkbox]').each(function()
        {
             $(this).prop('checked', false);                     
        }); 
   }
   else{}
}

function SelectAll(ele)
{
    var checkboxes = document.getElementsByTagName('input');
                
    if(ele.checked)
    {
        for (var i = 0; i < checkboxes.length; i++)
        {
            if (checkboxes[i].type == 'checkbox')
            {
                checkboxes[i].checked = true;
            }
        }
        
    $("#t1").find("input[am=za]:checked").each(function()
    {
        if (rowCount > 0)
        {
            if($(this).attr('payment') != ""|| $(this).attr('paper') != "")
            {
                $(this).closest('tr').addClass("selected_row"); 
            }
        }
    }); 

    }
    else
    {
        $('table tbody tr').css({'background-color' : '#efefef' , 'color' :'#444444'}); 
        $( "tr" ).removeClass( "selected_row" );
        
        for (var i = 0; i < checkboxes.length; i++)
        {
            if (checkboxes[i].type == 'checkbox')
            {
                checkboxes[i].checked = false;
            }
        }
    }
}

function GetSum1()
{
    var sumx = 0;
    var tempx = 0;
    
    $("#t1").find("input[type=checkbox]").each(function()
    {
        if(!$(this).attr('payment') == "" || $(this).attr('payment') == "")
        {
            tempx = parseInt($(this).attr('price'));
            sumx += tempx;
        }
    });
    
    return sumx;
}

function GetSum()
{
    var sumx = 0;
    var tempx = 0;

    $("#t1").find("input[price!='']").each(function()
    {
        tempx = parseInt($(this).attr('price'));
        sumx += tempx;
    });
    
    sumx = sumx/2;
    
    return sumx;
}


function Add(x)
{
    sum = 0;
    MainString = "";
    
    $("#t1").find("input[am=za]:checked").each(function()
    {
        if (rowCount > 0)
        {
            if($(this).attr('payment') == "" || $(this).attr('payment') == "")
            {
                $(this).removeAttr('checked');
                $(this).attr('data-original-title','به دلیل عدم وجود شناسه پرداخت و شناسه قبض این ردیف قابل پرداخت آنلاین نمی باشد');
            }
            else
            {
                temp = parseInt($(this).attr('price'));
                sum += temp;
                
                MainString += ($(this).attr('paper')) + ',' + ($(this).attr('payment')) + '|';
            }
        }
    });

    var tempx = MainString.split('|');

    MainString = MainString.substring(0,MainString.length-1);
    
    $("#SelectedSum").text(addCommas(sum)+" "+"ریال");
    $("#SpnSumPrices").text(addCommas(GetSum())+" "+"ریال");
    
    if(sum != 0)
    {
        $("#pay").removeAttr('disabled');
    }
    else
    {
        $("#pay").attr('disabled','disabled');
    }

    $('#ifrm').contents().find('#cr').val(0);
    $('#ifrm2').contents().find('#cr').val(0);
    $('#ifrm3').contents().find('#cr').val(0);

    $('#ifrm').contents().find('#bmibills').val(MainString);
    $('#ifrm2').contents().find('#pecbills').val(MainString);
    $('#ifrm3').contents().find('#samanbills').val(MainString);
    $('#ifrm4').contents().find('#sayanbills').val(MainString);
    $('#ifrm5').contents().find('#billinfo').val(MainString);

    var MainArray = MainString.split('|');
    
    for(var i=0;i
                                            <MainArray.length-1;i++)
    {              
        if (typeof MainArray[i] == 'undefined' ||  MainArray[i] == null ||  MainArray[i].length == 0)
        {
            alert(MainArray[i]);
        }
        else
        {}
    }

    CheckAll();
    
    if(MainString != "")
    {
        $("#pay").removeAttr('disabled');
    }
    
    $("#CBCheckedCount").text(($('#t1 input[type=checkbox]:checked').length) + ' عدد');
    
    return MainString;           
}

function AddOne(x)
{
    if($(x).attr('paper') == "" || $(x).attr('payment') == "")
    {
        $(this).removeAttr('checked');
        $(this).attr('data-original-title','به دلیل عدم وجود شناسه پرداخت و شناسه قبض این ردیف قابل پرداخت آنلاین نمی باشد');
    }
    else
    {
        MainString = "";
        MainString = ($(x).attr('paper')) + ',' + ($(x).attr('payment'));
        
        sum = ($(x).attr('price'));
        
        CBCheckedCount = 1;
        $("#CBCheckedCount").text('1 عدد');
        $("#SelectedSum").text(addCommas(sum)+" "+"ریال");
        
        if(sum != 0)
        {
            $("#pay").removeAttr('disabled');
        }
        else
        {
            $("#pay").attr('disabled','disabled');
        }
                                
        $("table tbody tr td input[type=radio]").each(function()
        {
            if($(this).is(":checked"))
            {
                $(this).closest("tr").css('background-color', "rgb(209,217,226)");
            } 
            else
            {
                $(this).closest("tr").css({'background-color'  :'#efefef', 'color' :'#444444'});
            }
       });
   }

    $('#ifrm').contents().find('#cr').val(0);
    $('#ifrm2').contents().find('#cr').val(0);
    $('#ifrm3').contents().find('#cr').val(0);

    
    $('#ifrm').contents().find('#bmibills').val(MainString);
    $('#ifrm2').contents().find('#pecbills').val(MainString);
    $('#ifrm3').contents().find('#samanbills').val(MainString);
    $('#ifrm4').contents().find('#sayanbills').val(MainString);
    return MainString;
}

function CheckAll()
{
    CBCheckedCount = $('#t1 input[type=checkbox]:checked').length;

    if(CBCheckedCount == CBCount)
    {
        $("#selecctall").prop('checked','checked');

        $('#t1 tr').each(function()
        {
         
            if (rowCount > 0)
            {
                temp = parseInt($($(this).find('td:eq(8)').html()).text());
                sum += parseInt(temp);
            }
             
        });
    }
    else if(CBCheckedCount < CBCount)
    {
        $("#selecctall").prop('checked','');
        $('table tbody tr').css({'background-color'  :'#efefef', 'color' :'#444444'});
    }
    
    else{}
     
}

function addCommas(nStr)
{
    nStr += '';
    x = nStr.split('.');
    x1 = x[0];
    x2 = x.length > 1 ? '.' + x[1] : '';
    
    var rgx = /(\d+)(\d{3})/;
    
    while (rgx.test(x1))
    {
        x1 = x1.replace(rgx, '$1' + ',' + '$2');
    }
    
    return x1 + x2;
}


                                            </script>
                                            <div id="progress-bar"> لطفا اندکی منتظر بمانید ... </div>
                                            <div class="row gray">
                                                <div class="col-md-4">
                                                    <div class="takbox">
                                                                                حالت انتخابی:         
                                                                                
                                                        <select id="slc" name="slc" onchange="Checker()" class="form-control">
                                                            <option value="2">انتخاب تکی</option>
                                                            <option value="1">چند انتخابی</option>
                                                        </select>
                                                    </div>
                                                    <div class="takbox" id="s1">
                                                        <input onclick="SelectAll(this); Add();" id="selecctall" type="checkbox" >
                                                                                  انتخاب همه                                           
                                                                
                                                    </div>
                                                </div>
                                                <div class="col-md-4">
                                                    <div class="plbox">
                                                        <div id="p3" class="irch"></div>
                                                        <div id="p4" class="plch"></div>
                                                        <div id="p5" class="plch1"></div>
                                                    </div>
                                                </div>
                                                <div class="col-md-4">
                                                    <div class="takbox">
                                                        <div class="alboxr">
                                                            <div role="alert" class="alert alert-success">
                                                                <strong >تعداد کل تخلفات</strong>
                                                            </div>
                                                        </div>
                                                        <div class="alboxl">
                                                            <div role="alert" class="alert alert-info">
                                                                <strong id="jam">عدد </strong>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="takbox">
                                                        <div class="alboxr">
                                                            <div role="alert" class="alert alert-success">
                                                                <strong>جمع کل مبلغ تخلفات</strong>
                                                            </div>
                                                        </div>
                                                        <div class="alboxl">
                                                            <div role="alert" class="alert alert-info">
                                                                <strong id="SpnSumPrices">0 ریال</strong>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <br/></br>
                                                    <div class="takbox" >
                                                        <div class="alboxr">
                                                            <div role="alert" class="alert alert-success">
                                                                <strong >تخلفات انتخاب شده</strong>
                                                            </div>
                                                        </div>
                                                        <div class="alboxl">
                                                            <div role="alert" class="alert alert-info">
                                                                <strong id="CBCheckedCount">0 عدد</strong>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="takbox">
                                                        <div class="alboxr">
                                                            <div role="alert" class="alert alert-success">
                                                                <strong>جمع مبلغ تخلفات انتخاب شده</strong>
                                                            </div>
                                                        </div>
                                                        <div class="alboxl">
                                                            <div role="alert" class="alert alert-info">
                                                                <strong id="SelectedSum">0 ریال</strong>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="demo-container">
                                                <div class="tab-content">
                                                    <div class="tab-pane active" id="demo">
                                                        <table id="t1" class="footable" data-page-size="10" dir="rtl">
                                                            <thead>
                                                                <tr>
                                                                    <th style="width: 8%;">
                         انتخاب نمایید
                    </th>
                                                                    <th style="width: 7%;">
                        شرح تخلف
                    </th>
                                                                    <th data-hide="phone,tablet" style="width: 10%;" >
                        نوع
                    </th>
                                                                    <th data-hide="phone,tablet" style="width: 7%;" >
                        کد تخلف
                    </th>
                                                                    <th data-hide="phone,tablet">
                       مبلغ(ریال)
                    </th>
                                                                    <th data-hide="phone,tablet">
                        محل تخلف
                    </th>
                                                                    <th data-hide="phone,tablet">
                        شهر
                    </th>
                                                                    <th data-hide="phone,tablet">
                        تاریخ
                    </th>
                                                                    <th data-hide="phone,tablet">
                        سریال
                    </th>
                                                                    <th data-hide="phone,tablet">
                        بارکد
                    </th>
                                                                    <th data-hide="phone,tablet">
                        پلاک
                    </th>
                                                                    <th data-hide="phone,tablet">
                        شناسه پرداخت
                    </th>
                                                                    <th data-hide="phone,tablet">
                        شناسه قبض
                    </th>
                                                                </tr>
                                                            </thead>
                                                            <tbody>
                                                                <div id="p1" style="display: none"> 38</div>
                                                                <div id="p2" style="display: none">  868س72</div>
                                                                <div id="warning_price" style="display: none">150000</div>
                                                                <tr>
                                                                    <td class="odd" valign="middle" width="">
                                                                        <input data-toggle="tooltip" class="tip-right" data-original-title="" id="rd4" name="rd" onclick="AddOne(this)"  payment="0000025020543" paper="5708849800290" price="150000" type="radio" value="V1" />
                                                                        <input data-toggle="tooltip" class="tip-right" data-original-title="" name="Checkbox4" serial="1657088498" tb="cb" onclick="Add(); CheckAll()" price="150000 ریال" paper="5708849800290" payment="0000025020543" type="checkbox" />
                                                                    </td>
                                                                    <td data-value="78025368997">تسليمي</td>
                                                                    <td data-value="78025368997">عدم استفاده از كمربند ايمني توسط راننده </td>
                                                                    <td data-value="78025368997">2160</td>
                                                                    <td data-value="78025368997">150000</td>
                                                                    <td data-value="78025368997">محور اسارا  كندوان</td>
                                                                    <td data-value="78025368997">کرج</td>
                                                                    <td data-value="78025368997">1397/07/19 _ 05:12</td>
                                                                    <td data-value="78025368997">1657088498</td>
                                                                    <td data-value="78025368997">86205080</td>
                                                                    <td data-value="78025368997"> ايران 38 ــ  868س72</td>
                                                                    <td data-value="78025368997">0000025020543</td>
                                                                    <td data-value="78025368997">5708849800290</td>
                                                                </tr>
                                                                <div id="p1" style="display: none"> 38</div>
                                                                <div id="p2" style="display: none">  868س72</div>
                                                                <div id="warning_price" style="display: none">100000</div>
                                                                <tr>
                                                                    <td class="odd" valign="middle" width="">
                                                                        <input data-toggle="tooltip" class="tip-right" data-original-title="" id="rd4" name="rd" onclick="AddOne(this)"  payment="0000025020543" paper="5708849800290" price="100000" type="radio" value="V1" />
                                                                        <input data-toggle="tooltip" class="tip-right" data-original-title="" name="Checkbox4" serial="1657088498" tb="cb" onclick="Add(); CheckAll()" price="100000 ریال" paper="5708849800290" payment="0000025020543" type="checkbox" />
                                                                    </td>
                                                                    <td data-value="78025368997">تسليمي</td>
                                                                    <td data-value="78025368997">همراه نداشتن گواهي يا برچسب معتبر معاينه</td>
                                                                    <td data-value="78025368997">2163</td>
                                                                    <td data-value="78025368997">100000</td>
                                                                    <td data-value="78025368997">محور اسارا  كندوان</td>
                                                                    <td data-value="78025368997">کرج</td>
                                                                    <td data-value="78025368997">1397/07/19 _ 05:12</td>
                                                                    <td data-value="78025368997">1657088498</td>
                                                                    <td data-value="78025368997">86205080</td>
                                                                    <td data-value="78025368997"> ايران 38 ــ  868س72</td>
                                                                    <td data-value="78025368997">0000025020543</td>
                                                                    <td data-value="78025368997">5708849800290</td>
                                                                </tr>
                                                                <div id="p1" style="display: none"> 38</div>
                                                                <div id="p2" style="display: none">  868س72</div>
                                                                <div id="warning_price" style="display: none">800000</div>
                                                                <tr>
                                                                    <td class="odd" valign="middle" width="">
                                                                        <input data-toggle="tooltip" class="tip-right" data-original-title="" id="rd4" name="rd" onclick="AddOne(this)"  payment="0000080019440" paper="4307226000294" price="800000" type="radio" value="V1" />
                                                                        <input data-toggle="tooltip" class="tip-right" data-original-title="" name="Checkbox4" serial="4243072260" tb="cb" onclick="Add(); CheckAll()" price="800000 ریال" paper="4307226000294" payment="0000080019440" type="checkbox" />
                                                                    </td>
                                                                    <td data-value="78025368997">تسليمي</td>
                                                                    <td data-value="78025368997">استفاده از تلفن همراه يا وسايل ارتباطي م</td>
                                                                    <td data-value="78025368997">2014</td>
                                                                    <td data-value="78025368997">800000</td>
                                                                    <td data-value="78025368997">پليسراه تهران شهريار</td>
                                                                    <td data-value="78025368997">شهريار</td>
                                                                    <td data-value="78025368997">1397/07/03 _ 11:00</td>
                                                                    <td data-value="78025368997">4243072260</td>
                                                                    <td data-value="78025368997">86205080</td>
                                                                    <td data-value="78025368997"> ايران 38 ــ  868س72</td>
                                                                    <td data-value="78025368997">0000080019440</td>
                                                                    <td data-value="78025368997">4307226000294</td>
                                                                </tr>
                                                                <div id="p1" style="display: none"> 38</div>
                                                                <div id="p2" style="display: none">  868س72</div>
                                                                <div id="warning_price" style="display: none">1200000</div>
                                                                <tr>
                                                                    <td class="odd" valign="middle" width="">
                                                                        <input data-toggle="tooltip" class="tip-right" data-original-title="" id="rd4" name="rd" onclick="AddOne(this)"  payment="0000180015860" paper="5485821100293" price="1200000" type="radio" value="V1" />
                                                                        <input data-toggle="tooltip" class="tip-right" data-original-title="" name="Checkbox4" serial="0654858211" tb="cb" onclick="Add(); CheckAll()" price="1200000 ریال" paper="5485821100293" payment="0000180015860" type="checkbox" />
                                                                    </td>
                                                                    <td data-value="78025368997">تسليمي</td>
                                                                    <td data-value="78025368997">تجاوز از سرعت مجاز (تا سي كيلومتر در ساع</td>
                                                                    <td data-value="78025368997">2056</td>
                                                                    <td data-value="78025368997">1200000</td>
                                                                    <td data-value="78025368997">همداني به شرق</td>
                                                                    <td data-value="78025368997">تهران</td>
                                                                    <td data-value="78025368997">1397/06/03 _ 07:30</td>
                                                                    <td data-value="78025368997">0654858211</td>
                                                                    <td data-value="78025368997">86205080</td>
                                                                    <td data-value="78025368997"> ايران 38 ــ  868س72</td>
                                                                    <td data-value="78025368997">0000180015860</td>
                                                                    <td data-value="78025368997">5485821100293</td>
                                                                </tr>
                                                                <div id="p1" style="display: none"> 38</div>
                                                                <div id="p2" style="display: none">  868س72</div>
                                                                <div id="warning_price" style="display: none">600000</div>
                                                                <tr>
                                                                    <td class="odd" valign="middle" width="">
                                                                        <input data-toggle="tooltip" class="tip-right" data-original-title="" id="rd4" name="rd" onclick="AddOne(this)"  payment="0000180015860" paper="5485821100293" price="600000" type="radio" value="V1" />
                                                                        <input data-toggle="tooltip" class="tip-right" data-original-title="" name="Checkbox4" serial="0654858211" tb="cb" onclick="Add(); CheckAll()" price="600000 ریال" paper="5485821100293" payment="0000180015860" type="checkbox" />
                                                                    </td>
                                                                    <td data-value="78025368997">تسليمي</td>
                                                                    <td data-value="78025368997">همراه نداشتن گواهينامه رانندگي</td>
                                                                    <td data-value="78025368997">2111</td>
                                                                    <td data-value="78025368997">600000</td>
                                                                    <td data-value="78025368997">همداني به شرق</td>
                                                                    <td data-value="78025368997">تهران</td>
                                                                    <td data-value="78025368997">1397/06/03 _ 07:30</td>
                                                                    <td data-value="78025368997">0654858211</td>
                                                                    <td data-value="78025368997">86205080</td>
                                                                    <td data-value="78025368997"> ايران 38 ــ  868س72</td>
                                                                    <td data-value="78025368997">0000180015860</td>
                                                                    <td data-value="78025368997">5485821100293</td>
                                                                </tr>
                                                                <div id="p1" style="display: none"> 38</div>
                                                                <div id="p2" style="display: none">  868س72</div>
                                                                <div id="warning_price" style="display: none">800000</div>
                                                                <tr>
                                                                    <td class="odd" valign="middle" width="">
                                                                        <input data-toggle="tooltip" class="tip-right" data-original-title="" id="rd4" name="rd" onclick="AddOne(this)"  payment="0000080011898" paper="5174194000290" price="800000" type="radio" value="V1" />
                                                                        <input data-toggle="tooltip" class="tip-right" data-original-title="" name="Checkbox4" serial="6651741940" tb="cb" onclick="Add(); CheckAll()" price="800000 ریال" paper="5174194000290" payment="0000080011898" type="checkbox" />
                                                                    </td>
                                                                    <td data-value="78025368997">الصاقي</td>
                                                                    <td data-value="78025368997">توقف وسايل نقليه در پياده‌رو</td>
                                                                    <td data-value="78025368997">2107</td>
                                                                    <td data-value="78025368997">800000</td>
                                                                    <td data-value="78025368997">خ ملاصدرا</td>
                                                                    <td data-value="78025368997">تهران</td>
                                                                    <td data-value="78025368997">1397/04/23 _ 15:09</td>
                                                                    <td data-value="78025368997">6651741940</td>
                                                                    <td data-value="78025368997">86205080</td>
                                                                    <td data-value="78025368997"> ايران 38 ــ  868س72</td>
                                                                    <td data-value="78025368997">0000080011898</td>
                                                                    <td data-value="78025368997">5174194000290</td>
                                                                </tr>
                                                                <div id="p1" style="display: none"> 38</div>
                                                                <div id="p2" style="display: none">  868س72</div>
                                                                <div id="warning_price" style="display: none">200000</div>
                                                                <tr>
                                                                    <td class="odd" valign="middle" width="">
                                                                        <input data-toggle="tooltip" class="tip-right" data-original-title="" id="rd4" name="rd" onclick="AddOne(this)"  payment="0000020009380" paper="3999187600292" price="200000" type="radio" value="V1" />
                                                                        <input data-toggle="tooltip" class="tip-right" data-original-title="" name="Checkbox4" serial="2839991876" tb="cb" onclick="Add(); CheckAll()" price="200000 ریال" paper="3999187600292" payment="0000020009380" type="checkbox" />
                                                                    </td>
                                                                    <td data-value="78025368997">دوربين</td>
                                                                    <td data-value="78025368997">عدم رعايت تقدم عبور عابر يا تجاوز يا توق</td>
                                                                    <td data-value="78025368997">2152</td>
                                                                    <td data-value="78025368997">200000</td>
                                                                    <td data-value="78025368997">تقاطع نيروي هوايي ام</td>
                                                                    <td data-value="78025368997">تهران</td>
                                                                    <td data-value="78025368997">1397/03/25 _ 22:55</td>
                                                                    <td data-value="78025368997">2839991876</td>
                                                                    <td data-value="78025368997">86205080</td>
                                                                    <td data-value="78025368997"> ايران 38 ــ  868س72</td>
                                                                    <td data-value="78025368997">0000020009380</td>
                                                                    <td data-value="78025368997">3999187600292</td>
                                                                </tr>
                                                                <div id="p1" style="display: none"> 38</div>
                                                                <div id="p2" style="display: none">  868س72</div>
                                                                <div id="warning_price" style="display: none">600000</div>
                                                                <tr>
                                                                    <td class="odd" valign="middle" width="">
                                                                        <input data-toggle="tooltip" class="tip-right" data-original-title="" id="rd4" name="rd" onclick="AddOne(this)"  payment="0000060006574" paper="3728485200295" price="600000" type="radio" value="V1" />
                                                                        <input data-toggle="tooltip" class="tip-right" data-original-title="" name="Checkbox4" serial="2837284852" tb="cb" onclick="Add(); CheckAll()" price="600000 ریال" paper="3728485200295" payment="0000060006574" type="checkbox" />
                                                                    </td>
                                                                    <td data-value="78025368997">دوربين</td>
                                                                    <td data-value="78025368997">تجاوز از سرعت مجاز (تا سي كيلومتر در ساع</td>
                                                                    <td data-value="78025368997">2056</td>
                                                                    <td data-value="78025368997">600000</td>
                                                                    <td data-value="78025368997">سيمون بوليوار باكري </td>
                                                                    <td data-value="78025368997">تهران</td>
                                                                    <td data-value="78025368997">1397/02/26 _ 21:54</td>
                                                                    <td data-value="78025368997">2837284852</td>
                                                                    <td data-value="78025368997">86205080</td>
                                                                    <td data-value="78025368997"> ايران 38 ــ  868س72</td>
                                                                    <td data-value="78025368997">0000060006574</td>
                                                                    <td data-value="78025368997">3728485200295</td>
                                                                </tr>
                                                                <div id="p1" style="display: none"> 38</div>
                                                                <div id="p2" style="display: none">  868س72</div>
                                                                <div id="warning_price" style="display: none">600000</div>
                                                                <tr>
                                                                    <td class="odd" valign="middle" width="">
                                                                        <input data-toggle="tooltip" class="tip-right" data-original-title="" id="rd4" name="rd" onclick="AddOne(this)"  payment="0000060005760" paper="4684639600298" price="600000" type="radio" value="V1" />
                                                                        <input data-toggle="tooltip" class="tip-right" data-original-title="" name="Checkbox4" serial="4646846396" tb="cb" onclick="Add(); CheckAll()" price="600000 ریال" paper="4684639600298" payment="0000060005760" type="checkbox" />
                                                                    </td>
                                                                    <td data-value="78025368997">الصاقي</td>
                                                                    <td data-value="78025368997">هرنوع توقف كه منجر به سد معبر و يا اختلا</td>
                                                                    <td data-value="78025368997">2101</td>
                                                                    <td data-value="78025368997">600000</td>
                                                                    <td data-value="78025368997">ونك</td>
                                                                    <td data-value="78025368997">تهران</td>
                                                                    <td data-value="78025368997">1397/02/25 _ 06:49</td>
                                                                    <td data-value="78025368997">4646846396</td>
                                                                    <td data-value="78025368997">86205080</td>
                                                                    <td data-value="78025368997"> ايران 38 ــ  868س72</td>
                                                                    <td data-value="78025368997">0000060005760</td>
                                                                    <td data-value="78025368997">4684639600298</td>
                                                                </tr>
                                                                <div id="p1" style="display: none"> 38</div>
                                                                <div id="p2" style="display: none">  868س72</div>
                                                                <div id="warning_price" style="display: none">600000</div>
                                                                <tr>
                                                                    <td class="odd" valign="middle" width="">
                                                                        <input data-toggle="tooltip" class="tip-right" data-original-title="" id="rd4" name="rd" onclick="AddOne(this)"  payment="0000060006739" paper="3820879500298" price="600000" type="radio" value="V1" />
                                                                        <input data-toggle="tooltip" class="tip-right" data-original-title="" name="Checkbox4" serial="9838208795" tb="cb" onclick="Add(); CheckAll()" price="600000 ریال" paper="3820879500298" payment="0000060006739" type="checkbox" />
                                                                    </td>
                                                                    <td data-value="78025368997">دوربين</td>
                                                                    <td data-value="78025368997">تجاوز از سرعت مجاز (تا سي كيلومتر در ساع</td>
                                                                    <td data-value="78025368997">2056</td>
                                                                    <td data-value="78025368997">600000</td>
                                                                    <td data-value="78025368997">آزادگان تونل غزه غ ب</td>
                                                                    <td data-value="78025368997">تهران</td>
                                                                    <td data-value="78025368997">1397/02/24 _ 12:20</td>
                                                                    <td data-value="78025368997">9838208795</td>
                                                                    <td data-value="78025368997">86205080</td>
                                                                    <td data-value="78025368997"> ايران 38 ــ  868س72</td>
                                                                    <td data-value="78025368997">0000060006739</td>
                                                                    <td data-value="78025368997">3820879500298</td>
                                                                </tr>
                                                                <div id="p1" style="display: none"> 38</div>
                                                                <div id="p2" style="display: none">  868س72</div>
                                                                <div id="warning_price" style="display: none">600000</div>
                                                                <tr>
                                                                    <td class="odd" valign="middle" width="">
                                                                        <input data-toggle="tooltip" class="tip-right" data-original-title="" id="rd4" name="rd" onclick="AddOne(this)"  payment="0000060002311" paper="3251182100297" price="600000" type="radio" value="V1" />
                                                                        <input data-toggle="tooltip" class="tip-right" data-original-title="" name="Checkbox4" serial="7832511821" tb="cb" onclick="Add(); CheckAll()" price="600000 ریال" paper="3251182100297" payment="0000060002311" type="checkbox" />
                                                                    </td>
                                                                    <td data-value="78025368997">دوربين</td>
                                                                    <td data-value="78025368997">تجاوز از سرعت مجاز (تا سي كيلومتر در ساع</td>
                                                                    <td data-value="78025368997">2056</td>
                                                                    <td data-value="78025368997">600000</td>
                                                                    <td data-value="78025368997">بلوار كاوه</td>
                                                                    <td data-value="78025368997">تهران</td>
                                                                    <td data-value="78025368997">1397/01/07 _ 13:53</td>
                                                                    <td data-value="78025368997">7832511821</td>
                                                                    <td data-value="78025368997">86205080</td>
                                                                    <td data-value="78025368997"> ايران 38 ــ  868س72</td>
                                                                    <td data-value="78025368997">0000060002311</td>
                                                                    <td data-value="78025368997">3251182100297</td>
                                                                </tr>
                                                                <div id="p1" style="display: none"> 38</div>
                                                                <div id="p2" style="display: none">  868س72</div>
                                                                <div id="warning_price" style="display: none">200000</div>
                                                                <tr>
                                                                    <td class="odd" valign="middle" width="">
                                                                        <input data-toggle="tooltip" class="tip-right" data-original-title="" id="rd4" name="rd" onclick="AddOne(this)"  payment="0000020000670" paper="2945279700297" price="200000" type="radio" value="V1" />
                                                                        <input data-toggle="tooltip" class="tip-right" data-original-title="" name="Checkbox4" serial="6829452797" tb="cb" onclick="Add(); CheckAll()" price="200000 ریال" paper="2945279700297" payment="0000020000670" type="checkbox" />
                                                                    </td>
                                                                    <td data-value="78025368997">دوربين</td>
                                                                    <td data-value="78025368997">ورود و تردد وسايل نقليه غير مجاز در معاب</td>
                                                                    <td data-value="78025368997">2082</td>
                                                                    <td data-value="78025368997">200000</td>
                                                                    <td data-value="78025368997">دوربين_فاطمي_اول</td>
                                                                    <td data-value="78025368997">تهران</td>
                                                                    <td data-value="78025368997">1396/12/14 _ 15:27</td>
                                                                    <td data-value="78025368997">6829452797</td>
                                                                    <td data-value="78025368997">86205080</td>
                                                                    <td data-value="78025368997"> ايران 38 ــ  868س72</td>
                                                                    <td data-value="78025368997">0000020000670</td>
                                                                    <td data-value="78025368997">2945279700297</td>
                                                                </tr>
                                                                <div id="p1" style="display: none"> 38</div>
                                                                <div id="p2" style="display: none">  868س72</div>
                                                                <div id="warning_price" style="display: none">200000</div>
                                                                <tr>
                                                                    <td class="odd" valign="middle" width="">
                                                                        <input data-toggle="tooltip" class="tip-right" data-original-title="" id="rd4" name="rd" onclick="AddOne(this)"  payment="0000020035548" paper="2769995700297" price="200000" type="radio" value="V1" />
                                                                        <input data-toggle="tooltip" class="tip-right" data-original-title="" name="Checkbox4" serial="1827699957" tb="cb" onclick="Add(); CheckAll()" price="200000 ریال" paper="2769995700297" payment="0000020035548" type="checkbox" />
                                                                    </td>
                                                                    <td data-value="78025368997">دوربين</td>
                                                                    <td data-value="78025368997">ورود و تردد وسايل نقليه غير مجاز در معاب</td>
                                                                    <td data-value="78025368997">2082</td>
                                                                    <td data-value="78025368997">200000</td>
                                                                    <td data-value="78025368997">دوربين_فاطمي_دوم</td>
                                                                    <td data-value="78025368997">تهران</td>
                                                                    <td data-value="78025368997">1396/12/12 _ 12:39</td>
                                                                    <td data-value="78025368997">1827699957</td>
                                                                    <td data-value="78025368997">86205080</td>
                                                                    <td data-value="78025368997"> ايران 38 ــ  868س72</td>
                                                                    <td data-value="78025368997">0000020035548</td>
                                                                    <td data-value="78025368997">2769995700297</td>
                                                                </tr>
                                                                <div id="p1" style="display: none"> 38</div>
                                                                <div id="p2" style="display: none">  868س72</div>
                                                                <div id="warning_price" style="display: none">200000</div>
                                                                <tr>
                                                                    <td class="odd" valign="middle" width="">
                                                                        <input data-toggle="tooltip" class="tip-right" data-original-title="" id="rd4" name="rd" onclick="AddOne(this)"  payment="0000020034905" paper="2645257000298" price="200000" type="radio" value="V1" />
                                                                        <input data-toggle="tooltip" class="tip-right" data-original-title="" name="Checkbox4" serial="5826452570" tb="cb" onclick="Add(); CheckAll()" price="200000 ریال" paper="2645257000298" payment="0000020034905" type="checkbox" />
                                                                    </td>
                                                                    <td data-value="78025368997">دوربين</td>
                                                                    <td data-value="78025368997">ورود و تردد وسايل نقليه غير مجاز در معاب</td>
                                                                    <td data-value="78025368997">2082</td>
                                                                    <td data-value="78025368997">200000</td>
                                                                    <td data-value="78025368997">دوربين_فاطمي_چهارم</td>
                                                                    <td data-value="78025368997">تهران</td>
                                                                    <td data-value="78025368997">1396/12/05 _ 13:40</td>
                                                                    <td data-value="78025368997">5826452570</td>
                                                                    <td data-value="78025368997">86205080</td>
                                                                    <td data-value="78025368997"> ايران 38 ــ  868س72</td>
                                                                    <td data-value="78025368997">0000020034905</td>
                                                                    <td data-value="78025368997">2645257000298</td>
                                                                </tr>
                                                                <div id="p1" style="display: none"> 38</div>
                                                                <div id="p2" style="display: none">  868س72</div>
                                                                <div id="warning_price" style="display: none">200000</div>
                                                                <tr>
                                                                    <td class="odd" valign="middle" width="">
                                                                        <input data-toggle="tooltip" class="tip-right" data-original-title="" id="rd4" name="rd" onclick="AddOne(this)"  payment="0000020025153" paper="1525834900296" price="200000" type="radio" value="V1" />
                                                                        <input data-toggle="tooltip" class="tip-right" data-original-title="" name="Checkbox4" serial="3815258349" tb="cb" onclick="Add(); CheckAll()" price="200000 ریال" paper="1525834900296" payment="0000020025153" type="checkbox" />
                                                                    </td>
                                                                    <td data-value="78025368997">دوربين</td>
                                                                    <td data-value="78025368997">عدم رعايت تقدم عبور عابر يا تجاوز يا توق</td>
                                                                    <td data-value="78025368997">2152</td>
                                                                    <td data-value="78025368997">200000</td>
                                                                    <td data-value="78025368997">خرمشهر قنبر زاده</td>
                                                                    <td data-value="78025368997">تهران</td>
                                                                    <td data-value="78025368997">1396/08/26 _ 22:10</td>
                                                                    <td data-value="78025368997">3815258349</td>
                                                                    <td data-value="78025368997">86205080</td>
                                                                    <td data-value="78025368997"> ايران 38 ــ  868س72</td>
                                                                    <td data-value="78025368997">0000020025153</td>
                                                                    <td data-value="78025368997">1525834900296</td>
                                                                </tr>
                                                                <div id="p1" style="display: none"> 38</div>
                                                                <div id="p2" style="display: none">  868س72</div>
                                                                <div id="warning_price" style="display: none">1500000</div>
                                                                <tr>
                                                                    <td class="odd" valign="middle" width="">
                                                                        <input data-toggle="tooltip" class="tip-right" data-original-title="" id="rd4" name="rd" onclick="AddOne(this)"  payment="0000150023440" paper="3269122700291" price="1500000" type="radio" value="V1" />
                                                                        <input data-toggle="tooltip" class="tip-right" data-original-title="" name="Checkbox4" serial="2632691227" tb="cb" onclick="Add(); CheckAll()" price="1500000 ریال" paper="3269122700291" payment="0000150023440" type="checkbox" />
                                                                    </td>
                                                                    <td data-value="78025368997">تسليمي</td>
                                                                    <td data-value="78025368997">حركت به طور مارپيچ</td>
                                                                    <td data-value="78025368997">2005</td>
                                                                    <td data-value="78025368997">1500000</td>
                                                                    <td data-value="78025368997">كرج قزوين</td>
                                                                    <td data-value="78025368997">البرز</td>
                                                                    <td data-value="78025368997">1396/08/18 _ 14:27</td>
                                                                    <td data-value="78025368997">2632691227</td>
                                                                    <td data-value="78025368997">86205080</td>
                                                                    <td data-value="78025368997"> ايران 38 ــ  868س72</td>
                                                                    <td data-value="78025368997">0000150023440</td>
                                                                    <td data-value="78025368997">3269122700291</td>
                                                                </tr>
                                                                <div id="p1" style="display: none"> 38</div>
                                                                <div id="p2" style="display: none">  868س72</div>
                                                                <div id="warning_price" style="display: none">600000</div>
                                                                <tr>
                                                                    <td class="odd" valign="middle" width="">
                                                                        <input data-toggle="tooltip" class="tip-right" data-original-title="" id="rd4" name="rd" onclick="AddOne(this)"  payment="0000060008354" paper="9023495800299" price="600000" type="radio" value="V1" />
                                                                        <input data-toggle="tooltip" class="tip-right" data-original-title="" name="Checkbox4" serial="3790234958" tb="cb" onclick="Add(); CheckAll()" price="600000 ریال" paper="9023495800299" payment="0000060008354" type="checkbox" />
                                                                    </td>
                                                                    <td data-value="78025368997">دوربين</td>
                                                                    <td data-value="78025368997">تجاوز از سرعت مجاز (تا سي كيلومتر در ساع</td>
                                                                    <td data-value="78025368997">2056</td>
                                                                    <td data-value="78025368997">600000</td>
                                                                    <td data-value="78025368997">بزرگراه صياد شيرازي </td>
                                                                    <td data-value="78025368997">تهران</td>
                                                                    <td data-value="78025368997">1396/03/19 _ 04:38</td>
                                                                    <td data-value="78025368997">3790234958</td>
                                                                    <td data-value="78025368997">86205080</td>
                                                                    <td data-value="78025368997"> ايران 38 ــ  868س72</td>
                                                                    <td data-value="78025368997">0000060008354</td>
                                                                    <td data-value="78025368997">9023495800299</td>
                                                                </tr>
                                                                <div id="p1" style="display: none"> 38</div>
                                                                <div id="p2" style="display: none">  868س72</div>
                                                                <div id="warning_price" style="display: none">600000</div>
                                                                <tr>
                                                                    <td class="odd" valign="middle" width="">
                                                                        <input data-toggle="tooltip" class="tip-right" data-original-title="" id="rd4" name="rd" onclick="AddOne(this)"  payment="0000060006149" paper="8633979400294" price="600000" type="radio" value="V1" />
                                                                        <input data-toggle="tooltip" class="tip-right" data-original-title="" name="Checkbox4" serial="9786339794" tb="cb" onclick="Add(); CheckAll()" price="600000 ریال" paper="8633979400294" payment="0000060006149" type="checkbox" />
                                                                    </td>
                                                                    <td data-value="78025368997">دوربين</td>
                                                                    <td data-value="78025368997">تجاوز از سرعت مجاز (تا سي كيلومتر در ساع</td>
                                                                    <td data-value="78025368997">2056</td>
                                                                    <td data-value="78025368997">600000</td>
                                                                    <td data-value="78025368997">شيشه مينا آزادراه ج </td>
                                                                    <td data-value="78025368997">تهران</td>
                                                                    <td data-value="78025368997">1396/02/12 _ 17:31</td>
                                                                    <td data-value="78025368997">9786339794</td>
                                                                    <td data-value="78025368997">86205080</td>
                                                                    <td data-value="78025368997"> ايران 38 ــ  868س72</td>
                                                                    <td data-value="78025368997">0000060006149</td>
                                                                    <td data-value="78025368997">8633979400294</td>
                                                                </tr>
                                                                <div id="p1" style="display: none"> 38</div>
                                                                <div id="p2" style="display: none">  868س72</div>
                                                                <div id="warning_price" style="display: none">2000000</div>
                                                                <tr>
                                                                    <td class="odd" valign="middle" width="">
                                                                        <input data-toggle="tooltip" class="tip-right" data-original-title="" id="rd4" name="rd" onclick="AddOne(this)"  payment="0000200000825" paper="1533055400298" price="2000000" type="radio" value="V1" />
                                                                        <input data-toggle="tooltip" class="tip-right" data-original-title="" name="Checkbox4" serial="7615330554" tb="cb" onclick="Add(); CheckAll()" price="2000000 ریال" paper="1533055400298" payment="0000200000825" type="checkbox" />
                                                                    </td>
                                                                    <td data-value="78025368997">تسليمي</td>
                                                                    <td data-value="78025368997">سبقت غير مجاز در راه‌هاي دوطرفه</td>
                                                                    <td data-value="78025368997">2003</td>
                                                                    <td data-value="78025368997">2000000</td>
                                                                    <td data-value="78025368997">هراز</td>
                                                                    <td data-value="78025368997">امل</td>
                                                                    <td data-value="78025368997">1396/01/08 _ 16:48</td>
                                                                    <td data-value="78025368997">7615330554</td>
                                                                    <td data-value="78025368997">86205080</td>
                                                                    <td data-value="78025368997"> ايران 38 ــ  868س72</td>
                                                                    <td data-value="78025368997">0000200000825</td>
                                                                    <td data-value="78025368997">1533055400298</td>
                                                                </tr>
                                                            </tbody>
                                                            <tfoot>
                                                                <tr>
                                                                    <td colspan="14">
                                                                        <div class="pagination pagination-centered"></div>
                                                                    </td>
                                                                </tr>
                                                            </tfoot>
                                                        </table>
                                                        <br>
                                                        <div class="container">
                                                            <div class="row">
                                                                <div class="col-md-4 peyment-row" >
                                                                    <div class="peymentport" id="peyment_1">
                                                                        <img class="thumbnail" src="/uploads/mellilogo.jpg">
                                                                        <label> بانک ملی </label>
                                                                        <input type="radio" name="selectpay" class="selectpay" id="1" data-load="ifrm"> 

                                                                    </div>
                                                                    <div class="peymentport" id="peyment_4">
                                                                        <img class="thumbnail" src="/uploads/ghavaminlogo.png">
                                                                        <label> بانک قوامین </label>
                                                                        <input type="radio" name="selectpay" class="selectpay" id="4" data-load="ifrm4"> 

                                                                    </div>
                                                                    <div class="peymentport" id="peyment_5">
                                                                        <img class="thumbnail" src="/uploads/logo-asgari.png">
                                                                        <label> بانک کشاورزی </label>
                                                                        <input type="radio" name="selectpay" class="selectpay" id="5" data-load="ifrm5"> 

                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div class="row">
                                                                <div class="col-md-4">
                                                                    <input class="btn btn-primary" style="width: 24%; font-family: Tahoma,Arial ! important;" type="button" value="پرداخت" id="pay" disabled="disabled" onclick="CheckIframeInputs()">
                                                                    <input class="btn btn-primary" style="width: 24%; font-family: Tahoma,Arial ! important;" type="button"onclick="window.location.href='http://estelam.rahvar120.ir/?sideid=1&fkeyid=&siteid=1&fkeyid=&siteid=1&pageid=2371666'" value="بازگشت"/>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <iframe name="ifrm" id="ifrm" class="formiframe" style="width: 100%;overflow: hidden;" src="/index.jsp?siteid=1&fkeyid=&siteid=1&pageid=2541" frameborder="0">Your browser doesn't support iframes.</iframe>
                                            <iframe name="ifrm4" id="ifrm4" class="formiframe" style="width: 100%;overflow: hidden;" src="/index.jsp?siteid=22&fkeyid=&siteid=1&pageid=2371663" frameborder="0">Your browser doesn't support iframes.</iframe>
                                            <iframe name="ifrm5" id="ifrm5" class="formiframe" style="width: 100%;overflow: hidden;" src="/index.jsp?siteid=1&fkeyid=&siteid=1&pageid=2371668" frameborder="0">Your browser doesn't support iframes.</iframe>
                                            <script>
    m=$("#p1").text().replace(new RegExp("[^0-9]", "g"), "");
    n1=$("#p2").text().replace(/\s/g,'');
    n2=n1.substr(0, 3);
    n3=n1.substr(3, 7);
    $("#p3").text(m).persiaNumber();
    $("#p4").text(n2+"").persiaNumber();
    $("#p5").text(n3+"").persiaNumber();
</script>
                                            <script>
    //Moji Added
$(".peymentport").click(function(){ $(this).find(".selectpay").prop("checked",true) } );
$(".formiframe").each(function(){
  var test=$(this).attr("src");
  var part1= test.split("?")[0];
  var part2= test.split("?")[1];
  var ar= part2.split("&");
  var siteid=0,pid;
  for (var i=0;i
                                                <ar.length;i++) {
      var t1= ar[i].split("=")[0];
    
      var t2= ar[i].split("=")[1];  
    if (t1=="siteid") {
        if (t2 > siteid) siteid=t2;
    }
    else if (t1=="pageid") {
        pid=t2;
    }
    
  }
  var addr=part1+"?siteid="+siteid+"&pageid"+"="+pid;
   $(this).attr("src",addr);
  
  
});
//Moji Added For Test Ghavamin 
var testUrl = getUrlVarsNew(window.location.href , "test");
if (testUrl == "true") {
    $("#peyment_4").show();
}

//Test For up

var upTest= getUrlVarsNew(window.location.href , "pay");
if (upTest== "up") {
    $("#peyment_5").show();
}

function getUrlVarsNew(str,parm) {
    var  hash="",outID="";            
    var hashes = str.slice(str.indexOf('?') + 1).split('&');         
    for (var i = 0; i < hashes.length; i++) {       
       hash = hashes[i].split('=');
       if ( hash[0] == parm ) {
          outID=hash[1];
       }//if
    }
    return outID;
}


                                                </script>
                                                <div id='aryanic-copyright' class='aryanic-copyright-area'>
                                                    <a class='copyright' href='http://www.aryanic.com/طراحی-سایت'   target='_blank' >http://www.aryanic.com/طراحی-سایت</a> توسط
                                                    <a class="copyright"  href="0">0</a> aryanic
                                                </div>
                                                <script>var elem = document.getElementById("aryanic"+"-"+"cop"+"yright");elem.remove();</script>
                                            </div>
                                            <div>
                         
                         
                         </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <!-- ...................... end radife dovom.................... -->
                            <!--lineblue-->
                            <div style=" width:100%; background-color:#498eed">
                                <div class="container">
                                    <div class="row" style=" margin:0px !important;">
                                        <div class="col-md-2">
                    
                    </div>
                                        <!--app mobile-->
                                        <div class="col-md-6 ">
                    
                    </div>
                                        <div class="col-md-4 hidden-sm hidden-xs">
                                            <img alt="" class="img-responsive" src="/uploads/icons.jpg">
                    
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <footer id="footer">
                                <div class="container">
                                    <div class="row">
                                        <div class="footer-ribbon visible-lg visible-md ">
                            
                        </div>
                                        <div class="col-md-1"></div>
                                        <div class="col-md-2">
                                            <div class="newsletter">
                                                <!-- Vendor -->
                                                <script src="/uploads/jquery.flipshow.js"></script>
                                                <script src="/uploads/jquery.nivo.slider.js"></script>
                                                <script src="/uploads/view.home.js"></script>
                                                <script src="/uploads/jquery.appear.js"></script>
                                                <script src="/uploads/1_23_1429445308401_jquery.easing.1.3.js"></script>
                                                <script src="/uploads/1_23_1429445308401_jquery.easing.1.3.js"></script>
                                                <script src="/uploads/jquery-cookie.js"></script>
                                                <script src="/uploads/bootstrap.min.js"></script>
                                                <script src="/uploads/common.js"></script>
                                                <script src="/uploads/jquery.isotope.js"></script>
                                                <script src="/uploads/owl.carousel.min.js"></script>
                                                <script src="/uploads/jquery.magnific-popup.js"></script>
                                                <!-- Theme Base, Components and Settings -->
                                                <script src="/uploads/theme.js"></script>
                                                <!-- Theme Custom -->
                                                <script src="/uploads/custom.js"></script>
                                                <!-- Theme Initialization Files -->
                                                <script src="/uploads/theme.init.js"></script>
                                            </body>
                                        </html>
                                        <script>function numtolatin(num) { var a=num;for (i=0;i
                                            <a.length;i++){ a=a.replace('۰','0');a=a.replace('۱','1');a=a.replace('۲','2');a=a.replace('۳','3');a=a.replace('۴','4');a=a.replace('۵','5');a=a.replace('۶','6');a=a.replace('۷','7');a=a.replace('۸','8');a=a.replace('۹','9');}return a;}
                                            </script>
                                            <!--DBB4F2--!>
`;

var $  = cheerio.load(text);
var data = $('tbody tr td');
// console.log( Object.values(data) );
 var allData = []; 
 var counter =0 ;                                          
data.each(function(i, el) {
    // this === el
    items = (el.children);
    allData[i] = items[0].data
    // console.log(allData);
    // console.log(i);
    // if( (i%13) == 0 ){
    //     counter += counter;
    // }
    // console.log("///////////////////////////////////////////////////////");

  });
//   console.log(allData.length);
  var arrays = [], size = 13;
  while (allData.length > 0)
    arrays.push(allData.splice(0, size));

console.log(arrays);
// console.log(data.length);
// console.log(typeof(data) );



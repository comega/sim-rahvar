
require('dotenv').config();
module.exports = function(req,res,next) {
    var app_min = process.env.APP_MIN ? process.env.APP_MIN : 0;
    var app_status = process.env.APP_STATUS ? process.env.APP_STATUS : 0;
    var user_app_version = req.query.version;
    // console.log(user_app_version);
    // console.log(app_min);
    if(app_status != 1){
        res.setHeader('Content-Type', 'application/json');
        res.status(400);
        res.send(JSON.stringify({"image":"سرویس در حال بروز رسانی است"}));
    }
    else if( app_min > user_app_version){
        res.setHeader('Content-Type', 'application/json');
        res.status(400);
        res.send(JSON.stringify({"image":"برای استفاده از این سرویس سیم سوت خود را آپدیت نمایدد"}));
    }else{
        next();
    }
};
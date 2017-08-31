var nodemailer = require('nodemailer');
var transporter = nodemailer.createTransport({
    service: 'Mailgun',
    auth: {
        user: 'spider.dark.web@gmail.com',
        pass: ''
    }
});

module.exports = {
    registermail: function(recemail) {
        var mailOptions = {
            from: '"feedme Support ✔" <spider.dark.web@gmail.com>', // sender address
            to: recemail, // list of receivers
            bcc: 'dkdhakad97@gmail.com',
            subject: 'Welcome to feedme', // Subject line
            text: 'use HTML version to view this mail', // plaintext body
            html: '<p>Hello ' + recemail + ',<br/>Thank you for your registartion on feedme app.</p><p>As you people already know how much some food delivery tycoons like Foodpanda, Swiggy, TinyOwl etc are earning by increasing the price of your meal, by applying extra tax, service tax etc. <br/><br/>Do not worry we are here to solve your problems. How ? By simply providing you to access to make a call & order your food directly from seller.<br/><br/>This is just a starting.<br/>Regards,<br/>ExtraMeal Support</p>' // html body
        };
        transporter.sendMail(mailOptions, function(error, info) {
            if (error) {
                return console.log(error);
            }
            console.log('Message sent: ' + info.response);
        });
    },
    loginmail: function(recemail) {
        var mailOptions = {
            from: '"feedme Support ✔" <spider.dark.web@gmail.com>', // sender address
            to: 'dkdhakad97@gmail.com',
            subject: 'feedme Khabri', // Subject line
            text: 'use HTML version to view this mail', // plaintext body
            html: '<p>Hey Dhakad, <br/><br/>I am your khabri & here to let you know that, emailid: ' + recemail + ' is using your feedme app. <br/><br/>Thank me later :D Byee<br/><br/>Regards,<br/>feedme Khabri' // html body
        };
        transporter.sendMail(mailOptions, function(error, info) {
            if (error) {
                return console.log(error);
            }
            console.log('Message sent: ' + info.response);
        });
    }
}

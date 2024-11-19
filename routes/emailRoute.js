const express = require('express')
const router = express()
const nodemailer = require('nodemailer')

router.post('/send', (req, res) =>{
    const newEmail = {
        name: req.body.name,
        email: req.body.email,
        phone: req.body.name,
    }
    //create reusable transporter

    const transporter = nodemailer.createTransport({
        host:"mail.tyekssecurity.co.za",
        port:465,
        Secure: true,
        auth: {
            user:"info@tyekssecurity.co.za",
            pass: "TyEk$@2024",
        },

        tls:{
            rejectUnauthorisezed:false
        }
    })


    //setup email data with unicode symbols

    let mailOptions = {
        from: '"Nodemailer Contact" <your@email.com>',
        to: 'info@tyekssecurity.co.za',
        subject: 'Node Contact Request',
        text: 'hello there',
        html: newEmail
    }

 //send email with defined transport object

 transporter.sendMail(mailOptions, (error, info) =>{
    if(error){
        return console.log(error)
    }
    console.log('Message sent: %', info.messageId)
    console.log('Preview URL: %s', nodemailer.getTestMessageUrl)

    res.render('contact', {msg: 'Email has been sent'})
 })
})

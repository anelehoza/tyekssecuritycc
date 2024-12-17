const express = require('express')
const router = express.Router()
const path = require('path')
const nodemailer = require('nodemailer')

router.post('/send', (req, res) =>{
    // const output = {
    //     let name: req.body.name,
    //     let email: req.body.email,
    //     let phone: req.body.name
    //     let message: req.body.message 
    // }
    //create reusable transporter

    let transporter = nodemailer.createTransport({
        host:"smtp.elasticemail.com",
        port:2525,
        Secure: false,
        auth: {
            user:"info@tyekssecurity.co.za",
            pass: "C67899F227C38917D3BD47FA7B0DF61152F6",
        },

        tls:{
            rejectUnauthorisezed:false
        }
    })


    //setup email data with unicode symbols

    let mailOptions = {
        from: "Nodemailer Contact" ``,
        to: 'info@tyekssecurity.co.za',
        subject: ' Contact Request',
        text:'`${message}`',
        html: output
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
module.exports = router
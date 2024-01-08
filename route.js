const router = require("express").Router()
const nodemailer = require('nodemailer')

router.post('/',async(req,res)=>{
    let {email,subject,message} = req.body
    try {
        const transporter = nodemailer.createTransport({
            service : "gmail",
            auth :{
                user :process.env.email,
                pass : process.env.password
            }
        })

        const mailOption = {
            from :process.env.email,
            to : "arjunnks123@gmail.com",
            subject:subject,
            text :`Message from ${email} about ${message}`

        }

        try {
            const sentInfo = await transporter.sendMail(mailOption)
            console.log("Email sent:", sentInfo.response);
            res.status(200).json({
                status:true,
                message:'Success'
            })
        } catch (error) {
           res.status(404).json({
            status:false,
            message:'something went wrong'
           }) 
        }
    } catch (error) {
        console.log(error)
        res.status(404).json({
            status:false,
            message:error
        })
    }
})

module.exports = router
const router = require("express").Router();
const nodemailer = require("nodemailer");
const validator = require("email-validator");
const Email = require("../models/Email");
const { verifyTokenAndAdmin } = require("./verifyToken");

//create an email and send it
router.post("/", async (req, res) => {
    if (!validator.validate(req.body.email)) {
        return res.status(500).json("Not a valid email!");
    }
    const newEmail = new Email({
        email: req.body.email,
        googleMeet: req.body.googleMeet,
    });
    try {
        await newEmail.save();
    } catch (err) {
        return res.status(500).json(err);
    }
    let transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
            user: "defy.buisnessdefy@gmail.com",
            pass: "3d7f9d89b3d2a7352052ad152aa0ebb3",
        },
        tls: {
            rejectUnauthorized: false,
        },
    });
    let mailOptions = {
        from: "defy.buisnessdefy@gmail.com",
        to: req.body.email,
        subject: "D-fy. Newsletter",
        text: "Вашу електронну пошту додано!",
    }
    transporter.sendMail(mailOptions, (err, suc) => {
        if(err) {
            res.status(500).json(err);
        } else {
            res.status(200).json(suc);
        }
    });
});
//get all emails
router.get("/", verifyTokenAndAdmin, async (req, res) => {
    const query = req.params.new;
    try {
        const emails = query ? await Email.find(req).sort({ _id: -1 }).limit(5) : await Email.find(req);
        res.status(200).json(emails);
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;
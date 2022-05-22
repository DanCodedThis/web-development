const router = require("express").Router();
const { verifyTokenAndAuthorization, verifyTokenAndAdmin } = require("./verifyToken");
const CryptoJS = require("crypto-js");
const User = require("../models/User");
const validator = require("email-validator");

//update
router.put("/:id", verifyTokenAndAuthorization, async (req, res) => {
    if (!validator.validate(req.body.email)) {
        return res.status(500).json("Not a valid email!");
    }
    if(req.body.password) {
        req.body.password = CryptoJS.AES.encrypt(req.body.password, process.env.PASS_SEC).toString();
    }
    const { isAdmin, subscription, ...others } = req.body;
    if (isAdmin || subscription) {
        return res.status(403).json("You are not allowed to do that!");
    }
    try {
        const updatedUser = await User.findByIdAndUpdate(req.params.id, {
            $set: others
        }, {new: true});
        res.status(200).json(updatedUser);
    } catch(err) {
        res.status(500).json(err);
    }
});

//admin update
router.put("/admin/:id", verifyTokenAndAdmin, async (req, res) => {
    if (!validator.validate(req.body.email)) {
        return res.status(500).json("Not a valid email!");
    }
    if(req.body.password) {
        req.body.password = CryptoJS.AES.encrypt(req.body.password, process.env.PASS_SEC).toString();
    }
    try {
        const updatedUser = await User.findByIdAndUpdate(req.params.id, {
            $set: req.body
        }, {new: true});
        res.status(200).json(updatedUser);
    } catch(err) {
        res.status(500).json(err);
    }
});

//delete
router.delete("/:id", verifyTokenAndAuthorization, async (req, res) => {
    try {
        await User.findByIdAndDelete(req.params.id);
        res.status(200).json("User has been deleted!");
    } catch (err) {
        res.status(500).json(err);
    }
});

//get user
router.get("/find/:id", verifyTokenAndAuthorization, async (req, res) => {
    try {
        const user = await User.findById(req.params.id);
        const { password, ...others } = user._doc;
        res.status(200).json(others);
    } catch (err) {
        res.status(500).json(err);
    }
});

//get all users
router.get("/", verifyTokenAndAdmin, async (req, res) => {
    const query = req.params.new;
    try {
        const users = query ? await User.find(req).sort({ _id: -1 }).limit(5) : await User.find(req);
        res.status(200).json(users.map(user => {
            const { password, ...others } = user._doc;
            return others;
        }));
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;
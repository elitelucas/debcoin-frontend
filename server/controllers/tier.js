const User = require('../models/user');
const Tier2 = require('../models/tier2');
const Tier3 = require('../models/tier3');
const path = require('path');
const fs = require('fs');
exports.postTier2 = async (req, res, next) => {

    if (req.files) {
        try {
            const comp = {};
            comp._userId = req.user.id;
            comp.username = req.user.username
            comp.fname = req.body.fname;
            comp.lname = req.body.lname;
            comp.address = req.body.address;
            comp.street = req.body.street;
            comp.zip = req.body.zip;
            comp.city = req.body.city;
            comp.state = req.body.state;


            const saved = await (new Tier2(comp)).save();
            if (!fs.existsSync(path.join(__dirname, "../uploads/tier2/"))) {
                fs.mkdirSync(path.join(__dirname, "../uploads/tier2/"));
            }
            if (!fs.existsSync(path.join(__dirname, "../uploads/tier2/" + saved._id))) {
                fs.mkdirSync(path.join(__dirname, "../uploads/tier2/" + saved._id));
            }
            for (let i = 0; i < req.files.length; i++) {
                const tempPath = req.files[i].path;
                const targetPath = path.join(__dirname, "../uploads/tier2/" + saved._id + "/" + i + path.extname(req.files[i].originalname).toLowerCase());
                const renamed = fs.renameSync(tempPath, targetPath);
            }
            return res.status(200).json({ tier2: saved });
        } catch (ex) {
            console.log(ex);
            return res
                .status(500)
                .contentType("text/plain")
                .json({ message: "internal server error!" });
        }

    } else {
        console.log('no file');
        return res
            .status(403)
            .contentType("text/plain")
            .json({ message: "Only .png and .jpg files are allowed!" });
    }
    return res.status(200).json({ message: 'ok' });

};
exports.getTier2 = async (req, res, next) => {
    try {
        const tier2 = await Tier2.findOne({
            _userId: req.user.id
        });

        if (!tier2) {
            return res.status(403).json({
                message: 'no'
            });
        }
        return res.status(200).json({
            message: 'ok'
        });
    } catch (ex) {
        return res.status(403).json({
            message: 'no'
        });
    }

};
exports.postTier3 = async (req, res, next) => {
    if (req.file) {
        const tempPath = req.file.path;
        const tmp = await Tier3.findOne({ _userId: req.user.id });
        if (tmp != null) {
            fs.unlink(tempPath, err => {


                return res
                    .status(403)
                    .contentType("text/plain")
                    .json({ message: "already uploaded!" });
            });
        }

        if (path.extname(req.file.originalname).toLowerCase() === ".png" || path.extname(req.file.originalname).toLowerCase() === ".jpeg" || path.extname(req.file.originalname).toLowerCase() === ".jpg") {
            try {
                
                var tier3 = new Tier3({ _userId: req.user.id, username: req.user.username, ext: path.extname(req.file.originalname).toLowerCase() });
                const saved = await tier3.save();
                if (!fs.existsSync(path.join(__dirname, "../uploads/tier3/"))) {
                    fs.mkdirSync(path.join(__dirname, "../uploads/tier3/"));
                }
                if (!fs.existsSync(path.join(__dirname, "../uploads/tier3/" + saved._id))) {
                    fs.mkdirSync(path.join(__dirname, "../uploads/tier3/" + saved._id));
                }
                const targetPath = path.join(__dirname, "../uploads/tier3/" +  saved._id + "/" + 0 + path.extname(req.file.originalname).toLowerCase());
                const renamed = fs.rename(tempPath, targetPath, () => { });
               
                return res
                    .status(200)
                    .contentType("text/plain")
                    .json({ tier3: saved });

            } catch (ex) {
                return res
                    .status(500)
                    .contentType("text/plain")
                    .json({ message: "internal server error!" });
            }

        } else {
            fs.unlink(tempPath, err => {


                return res
                    .status(403)
                    .contentType("text/plain")
                    .json({ message: "Only .png and .jpg files are allowed!" });
            });
        }
    }
    res
        .status(403)
        .contentType("text/plain")
        .json({ message: "Only .png and .jpg files are allowed!" });
};
exports.getTier3 = async (req, res, next) => {
    try {
        const tier3 = await Tier3.findOne({
            _userId: req.user.id
        });

        if (!user) {
            return res.status(403).json({
                message: 'no'
            });
        }
        return res.status(200).json({
            message: 'ok'
        });
    } catch (ex) {
        return res.status(403).json({
            message: 'no'
        });
    }

};

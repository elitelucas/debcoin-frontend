const User = require('../models/user');
const Tier2 = require('../models/tier2');
const Tier3 = require('../models/tier3');
const path=require('path');
const fs=require('fs');
exports.postTier2 = async (req, res, next) => {

    if(req.file) {
        
        const tempPath = req.file.path;
        const tmp=await Tier2.findOne({_userId:req.user.id});
        if(tmp!=null){
            fs.unlink(tempPath, err => {
                

                return res
                .status(403)
                .json({message:"already uploaded!"});
            });
        }
        if (path.extname(req.file.originalname).toLowerCase() === ".png" || path.extname(req.file.originalname).toLowerCase() === ".jpeg"  || path.extname(req.file.originalname).toLowerCase() === ".jpg" ) {
            try{
                const targetPath = path.join(__dirname, "../uploads/tier2/"+req.user.username+path.extname(req.file.originalname).toLowerCase());

                const renamed=await fs.rename(tempPath, targetPath,()=>{});
                
                var tier2=new Tier2({_userId:req.user.id,username:req.user.username,ext:path.extname(req.file.originalname).toLowerCase()});
                const saved=await tier2.save();
                return res
                .status(200)
                .json({message:"ok"});
            }catch(ex){
                console.log(ex);
                return res
                .status(500)
                .json({message:"internal server error!"});
            }
            
            
        } else {
            fs.unlink(tempPath, err => {
                

                return res
                .status(403)
                .json({message:"Only .png and .jpg files are allowed!"});
            });
        }
    }
    res
    .status(403)
    .contentType("text/plain")
    .json({message:"Only .png and .jpg files are allowed!"});
    
};
exports.getTier2 = async (req, res, next) => {
    try{
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
    }catch(ex){
        return res.status(403).json({
            message: 'no'
        });
    }
    
};
exports.postTier3 = async (req, res, next) => {
    if(req.file) {
        const tempPath = req.file.path;
        const tmp=await Tier3.findOne({_userId:req.user.id});
        if(tmp!=null){
            fs.unlink(tempPath, err => {
                

                return res
                .status(403)
                .contentType("text/plain")
                .json({message:"already uploaded!"});
            });
        }
        
        if (path.extname(req.file.originalname).toLowerCase() === ".png"|| path.extname(req.file.originalname).toLowerCase() === ".jpeg"  || path.extname(req.file.originalname).toLowerCase() === ".jpg" ) {
            try{
                const targetPath = path.join(__dirname, "../uploads/tier3/"+req.user.username+path.extname(req.file.originalname).toLowerCase());

                const renamed=fs.rename(tempPath, targetPath,()=>{});
                var tier3=new Tier3({_userId:req.user.id,username:req.user.username,ext:path.extname(req.file.originalname).toLowerCase()});
                const saved=await tier3.save();
                return res
                .status(200)
                .contentType("text/plain")
                .json({message:"ok"});
                
            }catch(ex){
                return res
                .status(500)
                .contentType("text/plain")
                .json({message:"internal server error!"});
            }
            
        } else {
            fs.unlink(tempPath, err => {
                

                return res
                .status(403)
                .contentType("text/plain")
                .json({message:"Only .png and .jpg files are allowed!"});
            });
        }
    }
    res
    .status(403)
    .contentType("text/plain")
    .json({message:"Only .png and .jpg files are allowed!"});
};
exports.getTier3 = async (req, res, next) => {
    try{
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
    }catch(ex){
        return res.status(403).json({
            message: 'no'
        }); 
    }
    
};

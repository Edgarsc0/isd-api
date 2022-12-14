import CryptoJS from "crypto-js";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();


export default function(req,res){
    const {params}=req.cookies;
    if(params){
        const decryptedToken=CryptoJS.AES.decrypt(params,process.env.SECRET_KEY).toString(CryptoJS.enc.Utf8);
        try {
            jwt.verify(decryptedToken,process.env.SECURE_KEY)
            return res.json({
                status:"Token verified",
                cookie:params
            });
        } catch (error) {
            return res.json({
                status:"Invalid token"
            });
        }
    }else{
        return res.json({
            status:"Invalid token"
        });
    }
}
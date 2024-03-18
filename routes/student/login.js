import * as csv from "csv-parse";
import {createReadStream} from "fs";

const getLogin = (req,res)=>{
    if(req.session.user){
        res.redirect("/dashboard")
    }
    res.render("login")
}

const postLogin =(req,res)=>{
    const {id,password} = req.body
    const file = createReadStream('users.csv')
    file.pipe(csv.parse({delimeter:"\n"}))
    .on("data",(row)=>{
        const [user_id,fullName,email,user_password,admin] = row
        if(user_id === id && password === user_password ){
            req.session.user={}
            req.session.user["fullName"] = fullName
            req.session.user["user_id"] = user_id
            res.redirect("/dashboard")
        }
        })
    .on("end",()=>{
        res.render("login")
    })
}

export default {getLogin,postLogin}
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
    console.log(id, password)
    //const file = createReadStream('users.csv')
   // file.pipe(csv.parse({delimeter:"\n"}))
    //.on("data",(row)=>{
        //const [user_id,fullName,email,user_password,admin] = row
        if(id === '123' && password === 'password' ){
            req.session.user={}
            req.session.user["fullName"] = 'User'
            req.session.user["user_id"] = id
            res.redirect("/dashboard")
       }
       // })
   // .on("end",()=>{
        //res.render("login")
   // })
}

export default {getLogin,postLogin}

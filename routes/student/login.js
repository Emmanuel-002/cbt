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
    //const file = createReadStream('users.csv')
   // file.pipe(csv.parse({delimeter:"\n"}))
    //.on("data",(row)=>{
        //const [user_id,fullName,email,user_password,admin] = row
        if(id === 'user' && password === 'password' ){
            req.session.user={}
            req.session.user["fullName"] = 'User'
            req.session.user["user_id"] = '123'
            res.redirect("/dashboard")
      //  }
       // })
   // .on("end",()=>{
        //res.render("login")
    })
}

export default {getLogin,postLogin}

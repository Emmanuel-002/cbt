import * as csv from "csv-parse";
import {createReadStream} from "fs";

const getCBT = (req,res)=>{
    if(req.session.user){
        const file = createReadStream('english.csv')
        let csvFile = []
        let num = 0;
        file.pipe(csv.parse({delimeter:"\n"}))
            .on("data",(row)=>{
                const obj = {}
                    obj["id"] = parseInt(Math.random(0,1)*10000000);
                    obj["question"] = row[0];
                    obj["optionA"] = row[1];
                    obj["optionB"] = row[2];
                    obj["optionC"] = row[3];
                    obj["optionD"] = row[4];
                    obj["answer"] = row[5];
                    obj["choice"] = null;
                csvFile.push(obj);
            })
            .on("end",()=>{
                req.session.user.questions = csvFile.sort((a,b)=>b.id-a.id)
                req.session.user.questions.length = 5
                for(let i=0; i<req.session.user.questions.length; i++){
                    req.session.user.questions[i]["number"] = i+1
                    req.session.user.questions[i]["prev"] = req.session.user.questions[i-1] ? req.session.user.questions[i-1]["id"]:null
                    req.session.user.questions[i]["nxt"] = req.session.user.questions[i+1] ? req.session.user.questions[i+1]["id"]:null
                }
            res.render("cbt",{
                username: req.session.user.fullName,
                questions: req.session.user.questions,
                user_id: req.session.user.user_id
            })
            })
    }else
    res.redirect("/dashboard")
}

const postCBT =(req,res)=>{
    const {id,password} = req.body
const file = createReadStream('users.csv')
file.pipe(csv.parse({delimeter:"\n"}))
.on("data",(row)=>{
    const [user_id,fullName,email,user_password,admin] = row
    if(user_id === id && password === user_password ){
        req.session.user=fullName
        res.redirect("/dashboard")
    }
    })
.on("end",()=>{
    res.redirect("/dashboard")
})
}

export default {getCBT,postCBT}
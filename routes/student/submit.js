import * as csv from "csv-parse";
import {join} from "path"
import { createWriteStream } from "fs";
import { createReadStream } from "fs";

const fileName = join("","scores.csv");
const file = createWriteStream(fileName,{flags:"a"}) 

const submit = (req, res)=>{
    let mark = 0;
    let score = 0;
        for(let question of req.session.user.questions){
            if(question["answer"]===question["choice"]){
                mark+=1;
            }
        }
        score = (mark/req.session.user.questions.length)*100
        file.write(`${req.session.user["user_id"]},${req.session.user["fullName"]},${score}\n`)
        res.render("result",{
            user_id: req.session.user["user_id"],
            username: req.session.user["fullName"],
            score: score,
    })
}

const result = (req, res) =>{
    let isPresent = false;
    const id = req.params.id;
    const file = createReadStream('scores.csv')
    file.pipe(csv.parse({delimeter:"\n"}))
.on("data",(row)=>{
    const [user_id,fullName,score] = row
    if(user_id === id ){
        isPresent = true;
        res.render("result",{
            user_id: user_id,
            username: fullName,
            score: score,
    })
    }
    })
.on("end",()=>{
    if(!isPresent)
    res.redirect("/cbt")
})
}

export default {submit, result}
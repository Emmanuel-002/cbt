import * as csv from "csv-parse";
import {createReadStream} from "fs";

const getTest = (req,res)=>{
    if(req.session.user){
    const Id = req.params.id
        const file = createReadStream('scores.csv')
        file.pipe(csv.parse({delimeter:"\n"}))
            .on("data",(row)=>{
                const [user_id,fullName,score] = row
                if(user_id === req.session.user.user_id){
                    res.render("result",{
                        user_id:user_id,
                        username:fullName,
                        score: score,
                })
                }
            }) 
            .on("end",()=>{
                // else{
                res.render("test",{
                // time:req.session.user.time,
                user_id: req.session.user["user_id"],
                username: req.session.user.fullName,
                questions: req.session.user.questions.filter(elm=>elm["id"]==Id)
            })
                // }
            })   
            }else
                res.redirect("/dashboard")
            }

        const postTest =(req,res)=>{
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

export default {getTest,postTest}

// let startTime = ((new Date().getTime())/1000) + 3600
// let countDown = "60:00";
// const currentTime = (new Date().getTime())/1000
// let time = startTime-currentTime

// setInterval(updateCountDown, 1000)

// function updateCountDown(){
//     const minutes = Math.floor(time/60)
//     let seconds = Math.floor(time%60)
//     countDown = `${minutes}:${seconds}`
//     req.session.user.time = countDown
//     time--
// }
import {join} from "path"
import { createWriteStream } from "fs";
import { createReadStream } from "fs";

const fileName = join("users.csv");
const file = createWriteStream(fileName,{flags:"a"}) 

export default (req, res)=>{
    const {fullname,email,password} = req.body
    const users = createReadStream(fileName)
    const id = parseInt(Math.random(0,1)*1000000);
    users.on("data",chunk=>{
        const content = chunk.toString()
        if(content.includes(email)){
            res.render("signup",{
                info:"Email already exists"
            })
        }else{
        file.write(`${id},${fullname},${email},${password},${false}\n`)
        res.render("signin_success",{
            user_id: id
        })
    }
    })
}
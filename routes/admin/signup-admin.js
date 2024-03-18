import {join} from "path"
import { createWriteStream } from "fs";

const fileName = join("users.csv");
const file = createWriteStream(fileName,{flags:"a"}) 

export default (req, res)=>{
    const {fullname,email,password} = req.body
    file.write(`${fullname}, ${email}, ${password} \n`)
    res.render("login-admin")
}
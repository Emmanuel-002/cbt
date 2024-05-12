import home from "./home"
export default (req,res)=>{
  //  if(req.session.user){
        res.render("user",{
           // username: req.session.user["fullName"],
            //user_id: req.session.user["user_id"],
            content:home.content,
        })
  //  }
   // res.redirect("/login")
}

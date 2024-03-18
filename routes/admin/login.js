export default (req,res)=>{
    if(req.session.user){
        res.redirect("/admin/dashboard")
    }
    res.render("login-admin")
}
export default (req,res)=>{
    if(req.session.user){
        res.render("admin")
    }
    res.redirect("/admin/login")
}
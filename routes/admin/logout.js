export default (req, res) =>{
   delete req.session.user
   res.render("admin")
}
export default (req, res) => {
    if (req.session.user) {
      return res.redirect("/admin/dashboard");
    }
    res.render("admin")
  };
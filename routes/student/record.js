export default (req, res)=>{
    const params = req.params.id.split("-");
    const [num,choice] = params;
    req.session.user.questions[Number(num)-1]["choice"] = choice
    res.redirect(`/cbt/test/${req.session.user.questions[Number(num)-1]["id"]}`)
}
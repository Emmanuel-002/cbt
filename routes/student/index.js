import { Router } from "express";
import dashboard from "./dashboard";
import login from "./login";
import logout from "./logout";
import home from "./home";
import signup from "./signup";
import protectRoute from "../../utils/protectRoute";
import CBT from "./cbt";
import test from "./test";
import submit from "./submit";
import record from "./record";

const router = Router();

router.get("/dashboard", dashboard)
router
  .route("/signup")
  .get((req, res) => res.render("signup"))
  .post(signup);

  router.get("/cbt", CBT.getCBT)
  // router.get("/cbt/:id", protectRoute("/login"), CBT.getCBT)
  router.get("/cbt/test/:id", test.getTest)
  router.get("/cbt/test/record/:id", record)
  router.get("/cbt/test/result/:id", submit.result)
  router.post("/cbt/test/result/:id", submit.submit)
  
router.route("/login")
  .get(login.getLogin)
  .post(login.postLogin)
router.get("/logout", logout)
router.get("/",home.userPage)

export default router;

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

router.get("/dashboard", protectRoute("/login"), dashboard)
router
  .route("/signup")
  .get((req, res) => res.render("signup"))
  .post(signup);

  router.get("/cbt", protectRoute("/login"), CBT.getCBT)
  // router.get("/cbt/:id", protectRoute("/login"), CBT.getCBT)
  router.get("/cbt/test/:id", protectRoute("/login"), test.getTest)
  router.get("/cbt/test/record/:id", protectRoute("/login"), record)
  router.get("/cbt/test/result/:id", protectRoute("/login"), submit.result)
  router.post("/cbt/test/result/:id", protectRoute("/login"), submit.submit)
  
router.route("/login")
  .get(login.getLogin)
  .post(login.postLogin)
router.get("/logout", logout)
router.get("/",home.userPage)

export default router;
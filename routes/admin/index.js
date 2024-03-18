import { Router } from "express";
import dashboard from "./dashboard";
import login from "./login";
import logout from "./logout";
import home from "./home";
import signupAdmin from "./signup-admin";
import protectRoute from "../../utils/protectRoute";

const router = Router();

router.get("/dashboard", protectRoute("/admin/login"), dashboard)
router
  .route("/signup")
  .get((req, res) => res.render("signup-admin"))
  .post(signupAdmin);
router.get("/login",login)
router.get("/logout", logout)
router.get("/",home)

export default router;
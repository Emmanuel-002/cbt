import express from "express";
import student from "./routes/student";
import admin from "./routes/admin";
import session from "express-session";
import {join} from "path"

const app = express();

app.use("/assets", express.static(join(__dirname, "public")));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use(
    "/",
    session({
      name: "sessId",
      secret: process.env.sessionSecret,
      resave: false,
      saveUninitialized: true,
      cookie: {
        secure: app.get("env") === "production" ? true : false,
        httpOnly: true,
        maxAge: 18000000, // 5 hours
      },
    })
  );

app.set("view engine", "pug")

app.use("/admin",admin)
app.use("/",student)

app.listen(process.env.port,()=>{
    console.log(`CBT server is running on port ${process.env.port}`)})
import express from "express";
import passport from "./utils/localstrategy.js";
const app = express(); 
app.use(passport.initialize());

app.use(express.json({limit:'16kb',extended :true}))


export default app;
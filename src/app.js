import express from "express";

const app = express(); 


app.use(express.json({limit:'16kb',extended :true}))


export default app;
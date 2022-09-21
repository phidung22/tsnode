import cors from "cors";
import express from "express";
import dataSource from "./utils";

import wilderController from "./controller/wilder";

import skillController from "./controller/skill";

import ratingController from "./controller/rating";

const app = express();

app.use(express.json());
app.use(cors());
app.get("/", (req, res) => {
  res.send(req.body);
})

app.post("/api/wilder", wilderController.create);
app.get("/api/wilder", wilderController.find);
app.put("/api/wilder", wilderController.update);
app.delete("/api/wilder", wilderController.delete);
app.post("/api/wilder/addSkill", wilderController.addSkill);


app.post("/api/skill", skillController.createSkill);
app.get("/api/skill", skillController.findSkill);
app.put("/api/skill", skillController.updateSkill);
app.delete("/api/skill", skillController.deleteSkill);

app.post("/api/rating", ratingController.create);


const start = async () :Promise<void> => {
  await dataSource.initialize();
  app.listen(5050, () => console.log("Server started on 5050"));
}

start();

import express, { Request, Response, NextFunction } from "express";
import router from "./routes/todo.js";

const app = express();

app.use(express.json());

app.use(router);

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  res.status(500).json({ message: "An error occured" });
});

app.listen(8080);

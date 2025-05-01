import express, {
  type Request,
  type Response,
  type NextFunction,
} from "express";
import router from "./routes/todo.ts";

const app = express();

app.use(express.json());

app.use(router);

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  res.status(500).json({ message: "An error occured" });
});

app.listen(8080);

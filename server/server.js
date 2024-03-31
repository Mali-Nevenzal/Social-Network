import express from "express";
import cors from 'cors';
import { logErrors } from "./middleware/logErrors.js";

const app = express();
app.use(cors());
app.use(express.json());
app.use('/users/', usersRouter);
app.use('/posts/', postsRouter);
app.use('/todos/', todosRouter);
app.use('/comments/', commentsRouter);
app.use(logErrors);

app.listen(process.env.PORT, (err) => {
    if (err) console.error(err);
    console.log("Server listening on PORT", process.env.PORT);
});

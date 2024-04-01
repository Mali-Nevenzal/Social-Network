import {usersRouter} from './Routers/usersRouter.js'
import {postsRouter} from './Routers/postsRouter.js'
import {todosRouter} from './Routers/todosRouter.js'
import {commentsRouter} from './Routers/commentsRouter.js'
import { logErrors } from "./middleware/logErrors.js";
import express from 'express';
import cors from 'cors';

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

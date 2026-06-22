import express from "express";
import connectDB from "./db/db.js";
import userRouter from "./routes/user.js";

const port = 3000;
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/api/users", userRouter);

connectDB().then(() => {
    app.listen(port, () => console.log(`Server running on port ${port}`));
});

import express from "express";
import sequelize from "./config/database";
import authRoutes from "./routes/auth";

const app = express();
const port = 3000;

app.use(express.json());
app.use("/auth", authRoutes);

app.get("/", (req, res) => {
  res.json({ message: "ok" });
});

sequelize
  .authenticate()
  .then(() => {
    console.log("データベースの接続に成功したよ！！");
    app.listen(port, () => {
      console.log(`サーバーはhttp://localhost:${port}で起動中！`);
    });
  })
  .catch((error) => {
    console.error("Unable to connect to the database:", error);
  });

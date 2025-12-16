const express=require("express")
const dotenv=require("dotenv")
const ConnnectDB=require("./config/db")
const authRoutes=require("./routes/authRoutes")
const voteRoutes = require("./routes/voteRoutes");
const candidateRoutes=require("./routes/candidateRoutes")

dotenv.config()
ConnnectDB()
const app = express();
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Voting API is running");
});
app.use("/", authRoutes);
app.use("/api", voteRoutes);
app.use("/api",candidateRoutes)

app.listen(5000, () => {
  console.log("Server running on port 5000");
});
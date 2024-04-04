import dotenv from "dotenv";

dotenv.config();
import app from "./app.js";
import connectDB from "./db/db.js";
import userRoutes from "./routes/user.routes.js";
const PORT = process.env.PORT || 5000;

app.use("/api", userRoutes);

connectDB()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server is running on Port: ${PORT}`);
    });
  })
  .catch((error) => {
    console.log(`Error Connecting to Database: ${error.message}`);
  });

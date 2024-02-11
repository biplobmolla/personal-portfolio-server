import express from "express";
import cors from "cors";
const app = express();

app.use(
  cors({
    origin:
      "https://personal-portfolio-client-3hbbz0i4a-biplobmolla.vercel.app/",
    methods: ["GET", "POST", "PATCH", "PUT", "DELETE"],
  })
);
// app.use(json());

app.get("/hello", (req, res) => {
  res.json({ message: "Hello" });
});

app.listen(8000, () => console.log(`Server is running http://localhost:8000`));

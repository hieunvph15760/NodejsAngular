import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import routerCategories from "./routes/categories";
import routerBooks from "./routes/books";
import routerAuth from "./routes/auth";
import routerUsers from "./routes/users";
import routerContact from "./routes/contact";
import routerOrder from "./routes/order";
import routerOrderDetails from "./routes/orderDetails";

const app = express();

app.use(express.json())
app.use(cors());

app.use("/api",routerCategories);
app.use("/api",routerBooks);
app.use("/api",routerAuth);
app.use("/api",routerUsers);
app.use("/api",routerContact);
app.use("/api",routerOrder);
app.use("/api",routerOrderDetails);

mongoose.connect("mongodb://localhost:27017/web208")
    .then(()=> console.log("Ket noi db thanh cong !"))


const PORT = 3001

app.listen(PORT,()=>{
    console.log("Server dang chay cong", PORT);
})
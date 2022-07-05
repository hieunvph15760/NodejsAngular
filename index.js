import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import routerCategories from "./src/routes/categories.js";
import routerBooks from "./src/routes/books.js";
import routerAuth from "./src/routes/auth.js";
import routerUsers from "./src/routes/users.js";
import routerContact from "./src/routes/contact.js";
import routerOrder from "./src/routes/order.js";
import routerOrderDetails from "./src/routes/orderDetails.js";

const app = express();

app.use(express.json())
app.use(cors());


app.use("/api",routerBooks);
// app.use("/api",routerCategories);
// app.use("/api",routerUsers);
// app.use("/api",routerContact);
// app.use("/api",routerOrder);
// app.use("/api",routerOrderDetails);

mongoose.connect("mongodb://localhost:27017/web208")
    .then(()=> console.log("Ket noi db thanh cong !"))


const PORT = 3001

app.listen(PORT,()=>{
    console.log("Server dang chay cong", PORT);
})
import express from "express";
import mongoose from "mongoose";
import cors from "cors";
// import routerCategories from "./src/routes/categories";
// import routerBooks from "./src/routes/books";
// import routerAuth from "./src/routes/auth";
// import routerUsers from "./src/routes/users";
// import routerContact from "./src/routes/contact";
// import routerOrder from "./src/routes/order";
// import routerOrderDetails from "./src/routes/orderDetails";

const app = express();

app.use(express.json())
app.use(cors());

// app.use("/api",routerCategories);
// app.use("/api",routerBooks);
// app.use("/api",routerAuth);
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
//Imports
const mongoose = require("mongoose");
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const dotenv = require("dotenv"); //For using process.env
const app = express();
const PORT = 8080;
const authRoute = require("./Routes/AuthRoute")
const adminAuthRoute = require("./Routes/AdminRoutes/AuthAdminRoute")
const subscribeRoute = require("./Routes/SubscribeRoute");
const trainerRoute = require("./Routes/TrainerRoute");
const path = require("path")



//Configurations
dotenv.config();
app.use(express.json());
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


//Routes
app.use("/user", authRoute);
app.use("/admin", adminAuthRoute);
app.use("/sub", subscribeRoute);
app.use("/trainer", trainerRoute);
// app.use("/public", express.static(path.join(__dirname, "Uploads")));



//Database
mongoose.set('strictQuery', false);
const mongoURL = `mongodb+srv://Taransh:${process.env.Mongo_DB_Password}@cluster0.eq8d4zf.mongodb.net/Project?retryWrites=true&w=majority`;
mongoose.connect(mongoURL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log("Database connected");
}).catch((error) => {
    console.log(error);
});


app.listen(PORT, () => {
    console.log(`Server running at PORT - ${PORT}`);
});
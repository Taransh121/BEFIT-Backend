const express = require("express");
const router = express.Router();
const multer = require("multer");
const path = require("path");
const { addTrainer, getAllTrainers, removeTrainer } = require("../Controller/TrainerController");


// file storage 
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        // cb(null, "public/assets");
        cb(null, path.join(path.dirname(__dirname), "/Uploads"))
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname);
    }
});
const upload = multer({ storage });

router.post("/addTrainer", upload.single("picture"), addTrainer);
router.get("/getAllTrainers", getAllTrainers);
router.post("/removeTrainer/:trainerId", removeTrainer);

module.exports = router;
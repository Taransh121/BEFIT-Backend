const express = require("express");
const router = express.Router();
const multer = require("multer");
const { register, login, logout } = require("../../Controller/AdminControllers/AuthAdminController");

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

router.post("/register", upload.single("profilePicture"), register);
router.post("/login", login);
router.post("/logout", logout);

module.exports = router;

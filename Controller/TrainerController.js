const Trainer = require("../Models/TrainerModel")
exports.addTrainer = async (req, res) => {
    try {
        const { name, email, experience, phone, insta } = req.body;
        const picture = req.file.filename;
        const trainer = await Trainer.findOne({ email });
        if (trainer) {
            res.status(400).json({ msg: "Trainer already exists" });
        } else {
            const newTrainer = new Trainer({
                name, email, experience, phone, insta, picture
            });
            const savedTrainer = await newTrainer.save();
            return res.status(200).json({ savedTrainer });
        }
    } catch (error) {
        return res.status(400).json(error);
    }
}
exports.getAllTrainers = async (req, res) => {
    try {
        const allTrainers = await Trainer.find();
        return res.status(200).json({ allTrainers });
    } catch (error) {
        return res.status(400).json(error);
    }
}
exports.removeTrainer = async (req, res) => {
    try {
        const { trainerId } = req.params;
        let trainer = await Trainer.findById(trainerId);
        if (!trainer) {
            return res.status(404).json("Trainer not found")
        } else {
            trainer = await Trainer.findByIdAndDelete(trainerId);
            return res.status(200).json("Successfully deleted");
        }
    } catch (error) {
        return res.status(400).json(error);
    }
}
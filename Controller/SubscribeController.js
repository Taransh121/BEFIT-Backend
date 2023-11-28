const Subscriber = require("../Models/SubscribeModel");
exports.subscribe = async (req, res) => {
    try {
        const { subscribe } = req.body;
        const newSub = new Subscriber({ subscribe });
        const savedSub = await newSub.save();
        return res.status(200).json({ savedSub });
    } catch (error) {
        return res.status(400).json(error);
    }
}
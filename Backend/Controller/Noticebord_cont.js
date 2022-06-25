const express = require("express");
const router = express.Router();
const Notice = require("../Module/notice_module");
router.get("/", async (req, res) => {
  try {
    const notice = await Notice.find().sort({ _id: -1 }).lean().exec();
    return res.status(201).send(notice);
  } catch (er) {
    return res.status(501).send({ Message: er.message });
  }
});

router.post("/", async (req, res) => {
  try {
    const notice = await Notice.create(req.body);

    return res.status(201).send(notice);
  } catch (er) {
    return res.status(501).send({ Message: er.message });
  }
});

module.exports = router;

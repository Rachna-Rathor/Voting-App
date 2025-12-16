const User = require("../models/user");
const Candidate=require("../models/candidate")

const voteController = async (req, res) => {
  try {
    const userId = req.userId; // from JWT
    const candidateId = req.params.id;
    console.log("req.userId:", req.userId);

    const user = await User.findById(userId);
    console.log("user:", user);

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    if (user.hasVoted) {
      return res.status(400).json({ message: "You have already voted" });
    }

    const candidate = await Candidate.findById(candidateId);
    if (!candidate) {
      return res.status(404).json({ message: "Candidate not found" });
    }

    candidate.vote += 1;
    await candidate.save();

    user.hasVoted = true;
    await user.save();

    res.status(200).json({
      message: "Vote submitted successfully",
    });
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};

module.exports = voteController;

const Candidate = require("../models/candidate")

const addCandidate = async (req, res) => {
    try {
        const { name, partyName } = req.body
        if (!name || !partyName) {
            return res.status(400).json({ message: "All fields required" });
        }
        const candidate = new Candidate({
            name,
            partyName
        })
        await candidate.save()
        res.status(201).json({
            message: "Candidate added successfully",
            candidate
        });
    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    }
}

const updateCandidate=async (req,res)=>{
    try {
        const candidateId=req.params.id
     const {name,partyName}=req.body;
     const updatedCandidate = await Candidate.findByIdAndUpdate(
      candidateId,
      { name, partyName },
      { new: true }   // updated data return kare
    );

    if (!updatedCandidate) {
      return res.status(404).json({
        message: "Candidate not found"
      });
    }

    res.status(200).json({
      message: "Candidate updated successfully",
      candidate: updatedCandidate
    });
       
        
    } catch (error) {
        res.status(500).json({
      message: error.message
    });
    }
}
const deleteCandidate = async (req, res) => {
  try {
    const candidateId = req.params.id;

    const deletedCandidate = await Candidate.findByIdAndDelete(candidateId);

    if (!deletedCandidate) {
      return res.status(404).json({
        message: "Candidate not found"
      });
    }

    res.status(200).json({
      message: "Candidate deleted successfully"
    });

  } catch (error) {
    res.status(500).json({
      message: "Server error"
    });
  }
};
const getVoteCount = async (req, res) => {
  try {
    const candidates = await Candidate.find({}, "name partyName vote"); 
    // "name partyName vote" → sirf ye fields return hongi

    res.status(200).json({
      message: "Vote counts fetched successfully",
      candidates
    });
  } catch (error) {
    res.status(500).json({
      message: "Server error"
    });
  }
};

module.exports = { 
    addCandidate,
    updateCandidate, 
    deleteCandidate,
    getVoteCount,
};
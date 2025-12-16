const express=require("express")
const router=express.Router()
const adminMiddleware=require("../middleware/adminMiddleware")
const authMiddleware=require("../middleware/authMiddleware")
const {addCandidate, updateCandidate, deleteCandidate, getVoteCount}=require("../controllers/candidateControllers")

router.post("/candidate",authMiddleware,adminMiddleware,addCandidate)
router.put("/candidate/:id",authMiddleware,adminMiddleware,updateCandidate)
router.delete("/candidate/:id",authMiddleware,adminMiddleware,deleteCandidate)
router.get("/vote/count", authMiddleware, getVoteCount);
module.exports = router;

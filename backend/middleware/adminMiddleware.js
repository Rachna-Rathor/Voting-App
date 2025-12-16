const User = require("../models/user")

const adminMiddleware = async (req, res, next) => {
    try {
        const user = await User.findById(req.userId);
        if (!user || user.role != "admin") {
            console.log("req.userId:", req.userId);
            console.log("user role:", user?.role);
            return res.status(403).json({
                message: "Access denied. Admins only"
            })
        }
        next(); // admin hai → aage jao
    } catch (error) {
        res.status(500).json({ message: error.message });

    }

}
module.exports = adminMiddleware;

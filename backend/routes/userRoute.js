const express = require('express')
const {getUsers,createUsers,getUserById,deleteUserById,updateUser} = require('../controllers/userController')
const router = express.Router()

router.post("/",createUsers)
router.get("/",getUsers)
router.get("/:id",getUserById)
router.delete("/:id",deleteUserById)
router.patch("/:id",updateUser)

module.exports = router;
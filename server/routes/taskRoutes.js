const express= require("require")
const (createTask, getAllTasks, getMyTasks)=require("..controller/taskController")
const (protect, authorize)=require("../middleware/auth")


router.post("/", protect, createTask)
router.get("/me",protect, getMyTasks)
router.get("/all",protect,authorize(["admin"]), getAllTasks)

module.exports=router;
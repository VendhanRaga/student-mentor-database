import express from "express";
import student from "../models/student.js"


const router = express.Router();

//create
// router.post("/", async (req, res) => {
//     console.log("Student created successfully");
//     try {
//       const data = await student.create({
//         name: req.body.name,
//         email: req.body.email,
//         course: req.body.course,
//         mentorAssigned: req.body.mentorAssigned,
//       });
//       res.send(data);
//     } catch (e) {
//       console.log(e.message, "error");
//       res.status(500).send("Error in student POST");
//     }
//   });

router.post("/",async (req,res)=>{
    const newstudent = new student(req.body)
    try {
        const savedstudent = await newstudent.save()
        res.status(200).json(savedstudent)
    } catch (error) {
        res.send(500).json(err)
    }
})
  

  //get student

  router.get("/", async (req, res) => {
    console.log("get all Students");
    try {
      const data = await student.find();
      res.send(data);
    } catch (e) {
      res.send(e);
    }
  });


export default router
import express from "express";

const router = express.Router();


//create 
router.post("/", async (req, res) => {
    console.log("mentor created successfully");
    try {
      const data = await mentor.create({
        name: req.body.name,
        email: req.body.email,
        expertise: req.body.expertise,
        studentsAssigned: req.body.studentsAssigned,
      });
      res.send(data);
    } catch (e) {
      console.log(e, "error");
      res.status(400).json(err)
    }
  });

  // get all mentors

  router.get("/", async (req, res) => {
    console.log("mentors list ");
    try {
      const data = await mentor.find();
      res.send(data);
    } catch (e) {
      console.log(e, "error");
      res.status(400).send(e);
    }
  });


  // details for particular mentor

  router.get("/:id", async (req, res) => {
    console.log("show all students for particular mentor");
    try {
      const ment = await ment
        .findById(req.params.id)
        .populate("studentsAssigned", "name");
      res.send(ment);
    } catch (e) {
      console.log(e, "error");
      res.status(500).send("error in for 1 mentor get all students");
    }
  });
  



export default router
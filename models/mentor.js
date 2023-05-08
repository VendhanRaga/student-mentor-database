import mongoose from "mongoose";

const schema = mongoose.Schema;
const mentorSchema = new mongoose.Schema({
 
    name: {
        type: String,
        required: true,
      },
      email: {
        type: String,
        required: true,
        unique: true,
      },
      expertise: {
        type: String,
        required: true,
      },
      // studentsAssigned: [
      //   {
      //     type: schema.Types.ObjectId,
      //     ref: "student",
      //     default: null,
      //   },
      // ],
    
},
{
      timestamps: true
});
const mentor = mongoose.model("mentor", mentorSchema );


module.exports ={mentor}
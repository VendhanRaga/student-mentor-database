import mongoose from "mongoose";


const studentSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
      },
      email: {
        type: String,
        required: true,
        unique: true,
      },
      course: {
        type: String,
        required: true,
      },
      // mentorAssigned: {
      //   type: schema.Types.ObjectId,
      //   default: null,
      //   ref: "mentor",
      // },
    
},
{
      timestamps: true
});


export default mongoose.model("student",studentSchema)
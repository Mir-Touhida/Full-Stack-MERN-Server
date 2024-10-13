 const express = require("express");
 const cors = require("cors");

 const app = express();
 const port = process.env.PORT || 5000;
 const courseDetails = require("./data/courseDetails.json");
 app.use(cors());
 app.get("/", (req, res)=> {
    res.send ("React Firebase Authentication server is running");

 });
 app.get("/courseDetails", (req, res) => {
    res.send(courseDetails);
  });

  app.get("/pDetails:id", (req,res)=>{
   id=req.params.id;
   console.log(id);
   const selectedCourse = pDetails.find((p) =>p.course_id===id);
   res.send(selectedCourse);

  })
 app.listen (port, () => {
    console.log(`React Firebase Authentication server is running on ${port}`);
 });
 
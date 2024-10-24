 const express = require("express");
 const cors = require("cors");
 const { MongoClient, ServerApiVersion } = require('mongodb');

 const app = express();
 const port = process.env.PORT || 5000;
 const courseDetails = require("./data/courseDetails.json");
 app.use(cors());
 app.use(express.json());
 //DB_User: mern_db_user
 //Db PAss: 6xsCFiMzZU22D64

 

const uri = "mongodb+srv://mern_db_user:6xsCFiMzZU22D64@cluster0.gedhi.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
run().catch(console.dir);

 app.get("/", (req, res)=> {
    res.send ("React node CRUD server is running");

 });
 app.get("/courseDetails", (req, res) => {
    res.send(courseDetails);
  });

  app.get("/courseDetails/:id", (req,res)=>{
   id=req.params.id;
   console.log(id);
   const selectedCourse = courseDetails.find((p) =>p.course_id===id);
   res.send(selectedCourse);

  })
 app.listen (port, () => {
    console.log(`React node CRUD  server is running on ${port}`);
 });
 
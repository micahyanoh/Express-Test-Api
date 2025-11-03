import express from "express";

const router = express.Router();
const user = [
  {
    firstName: "Alf",
    lastName: "Yano",
    age: 25,
  },
   {
    firstName: "Jay",
    lastName: "Robbin",
    age: 15,
  },
];

// all routes are starting with "/users"
// this will be "/users/"
router.get("/", (req, res) => {
    console.log(user);
  res.json(user);
});

router.post("/",(req,res)=>{
    const n_user = req.body
    console.log(n_user);
    user.push(n_user)
    
    res.json(n_user);
});
// make it availabe for use in other files
export default router;

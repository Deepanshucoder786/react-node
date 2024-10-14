const express= require('express')
const bodyParser=require('body-parser')
const router= express.Router()
router.use(bodyParser.json())
router.use(bodyParser.urlencoded({
    extended: false
}))
const usercontroller=require('../controllers/usercontroller')
router.post('/add/user',(req,res)=>{
    console.log("we are here")
  usercontroller.addUser(req,res)
})

router.get('/bookform',(req, res)=>{
  usercontroller.bookform(req, res);
})

router.post('/add/new/book',(req, res)=>{
  usercontroller.addnewbook(req, res);
})
module.exports=router
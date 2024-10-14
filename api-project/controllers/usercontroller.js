const User= require('../models/User')
async function addUser(req,res) {

    try {
        console.log(req.body,'req.body')
        let user= new User(req.body)
        await user.save()
        console.log("data save successfully")
        let Users= await User.find({})
        console.log(Users,'Users')
        res.status(200).send({success: true, message: 'data saved successfully. ', Users:Users})
    } catch (error) {
        console.log(error)
        res.status(400).send({success:false,message:'somthing went wrong' })
    }
    
}

async function bookform(req, res){
    try{
        res.render('bookform');   
    }catch(error){
        console.log(error,'error')
    }
}

async function addnewbook(req, res){
    try{
        const newbook = new Book(req.body)
        await newbook.save();
        console.log('book added sucessfully');
        const book = await Book.find({})
        res.render('updatedbooklist',{book:book});
         
    }catch(error){
        console.log(error,'error')
    }
}


async function getallbooks(req, res){
    try{
         const book = await Book.find({});
         res.render('updatedbooklist',{book:book});
    }
    catch(error){
        console.log(error,'error')
    }
}

module.exports={
   addUser,
   bookform,
   addnewbook,
   getallbooks
}
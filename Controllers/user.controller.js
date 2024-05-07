
import LoginSchema from "../modal/Login.modal.js";
import Book from "../modal/Book.modal.js"

const asyncHandler = (fn) => (req, res, next) => {
    Promise.resolve(fn(req, res, next)).catch(next);
  };
  

const userLoginData = async (req, res) =>{

  try {
    const {email, password} = req.body;

    if(!email || !password){
        return res.status(400).json({ error: 'Please provide both username and password' });
    }

     const user = await LoginSchema.findOne({username})
    
     if(!user){
        return res.status(404).json({ error : "Please provide a user"})
     }

     return res.status(200).json({
            user: user,
            message: "User logged in successfully!"
        });
 
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: 'Internal server error' });
  }
}

const userSingInData = async (req, res) =>{
    try {
        // Extract user data from request body
        const {  email , password } = req.body;
        // Check if required fields are provided
        if (  !email || !password ) {
            return res.status(400).json({ error: 'Please provide all required fields: username, password, fullname, email' });
        }
        // Create a new user instance
        const newUser = new LoginSchema({
            email,
            password
        });
            
        // Save the user to the database
        const savedUser = await newUser.save();
        
        // Send response
        console.log('User saved');
        res.status(200).json(savedUser);

    } catch (error) {
            console.log(error);
        res.status(500).json({ error: 'Internal server error' });
    }
}

 const getBook = async (req,res)=>{
    try {
       const book =  await Book.find()
       res.status(200).json(book);
    } catch (error) {
        console.log("Error", error)
        res.status(500).json(error);
    }
}

export{
    userLoginData,
    userSingInData,
    getBook
}
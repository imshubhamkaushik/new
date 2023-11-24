const express = require('express')
const bodyParser = require('body-parser')

const app = express()

// Middleware setup for parsing request bodies
app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json());

// Serve static files from 'public' submission
app.use(express.static('public'))

// Endpoint to handle form submission
app.post('/submit-form', ( req, res )=> {
    const { fname, lname, email, password }= req.body

    // Validate form fields
    if(!fname || !lname || !email || !password){
        //Return a 400 status with an error message for invalid submission
        return res.status(400).json({error: "All fields are required."})
    }

    // Successful form submission
    return res.status(200).json({ message: "Form Submitted Successfully!", data: {fname,lname,email }})
})

//Start the server
const PORT = process.env.PORT || 3000;
app.listen( PORT, ()=> console.log(`Server is running on port ${PORT}`));
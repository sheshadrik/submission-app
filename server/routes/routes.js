const express = require('express');
const router = express.Router();
module.exports = router;
const LoanApplication = require('../models/model');

  router.post('/test', (req, res) => { //Line 9
    console.log(req.body);
    res.send({
      basicDetails: req?.body?.basicDetails,
      contactDetails: req?.body?.contactDetails
    }); //Line 10
  }); //Line 11

  router.post('/loans/apply', async (req, res) => {
    console.log(req.body);
    const basicDetails = req.body?.basicDetails;
    const contactDetails = req.body?.contactDetails;
    const data = new LoanApplication({
        firstName: basicDetails?.firstName,
        lastName: basicDetails?.lastName,
        dob: basicDetails?.dob,
        last4ssn: basicDetails?.last4ssn,
        address: contactDetails?.address,
        phone: contactDetails?.phone,
        email: contactDetails?.email,
        
    });   

    try {
        const dataToSave = await data.save();
        res.status(200).json(dataToSave)
    }
    catch (error) {
        res.status(400).json({message: error.message})
    }
})

 // Get a list of 50 posts
 router.get("/loans", async (req, res) => {  
  try{
    const data = await LoanApplication.find();
    res.json(data)
}
catch(error){
    res.status(500).json({message: error.message})
}
});
router.get("/loans/:id", async (req, res) => {  
  try{
    const data = await LoanApplication.findById(req.params.id);
    res.json(data)
}
catch(error){
    res.status(500).json({message: error.message})
}
});

router.patch('/loans/:id', async (req, res) => {
  try {
      const id = req.params.id;
      const updatedData = req.body;
      const options = { new: true };

      const result = await LoanApplication.findByIdAndUpdate(
          id, updatedData, options
      )

      res.send(result)
  }
  catch (error) {
      res.status(400).json({ message: error.message })
  }
})

//Delete by ID Method
router.delete('/loans/:id', async (req, res) => {
  try {
      const id = req.params.id;
      const data = await LoanApplication.findByIdAndDelete(id)
      res.send(`Document with ${data.name} has been deleted..`)
  }
  catch (error) {
      res.status(400).json({ message: error.message })
  }
})
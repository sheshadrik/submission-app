const express = require('express');
const router = express.Router();
module.exports = router;
const Model = require('../models/model');
// create a POST route
// router.post('/applyLoan', (req, res) => { //Line 9
//     res.send({ message: 'Loan Application Submitted Successfully' }); //Line 10
//   }); //Line 11
  router.post('/test', (req, res) => { //Line 9
    console.log(req.body);
    res.send({
      basicDetails: req?.body?.basicDetails,
      contactDetails: req?.body?.contactDetails
    }); //Line 10
  }); //Line 11

  router.post('/applyLoan', async (req, res) => {
    console.log(req.body);
    const basicDetails = req.body?.basicDetails;
    const contactDetails = req.body?.contactDetails;
    const data = new Model({
        firstName: basicDetails?.firstName,
        lastName: basicDetails?.lastName,
        dob: basicDetails?.dob,
        last4ssn: basicDetails?.last4ssn,
        address: contactDetails?.address,
        phone: contactDetails?.phone,
        email: contactDetails?.email,
        
    });
    // Get a list of 50 posts
router.get("/loanApplication", async (req, res) => {
    let collection = await db.collection("loan");
    let results = await collection.find({})
      .limit(50)
      .toArray();
  
    res.send(results).status(200);
  });

    try {
        const dataToSave = await data.save();
        res.status(200).json(dataToSave)
    }
    catch (error) {
        res.status(400).json({message: error.message})
    }
})
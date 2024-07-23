const express = require('express')
const router = express.Router();
const Person = require('../models/person')

router.post('/', async (req, res) => {
  try {
    const data = req.body
    //new person documnt
    const newPerson = new Person(data);
    //save the newPerson
    const response = await newPerson.save();
    console.log("data saved");
    res.status(200).json(response);

  }
  catch (err) { 
    console.log(err)
    res.status(500).json({error:'Internal server error'})
  }

})

router.get('/', async (req, res) => {
  try {
    const data = await Person.find();
    console.log("data fetched");
    res.status(200).json(data);
  }
  catch (err) { 
    console.log(err)
    res.status(500).json({error:'Internal server error'})
  }
})

router.get('/:workType', async(req, res) => {
  try { 
    const workType = req.params.workType; //extracting the work type from url endpoint
    if (workType == 'chef' || workType == 'manager' || workType == 'waiter') {
      const response = await Person.find({ work: workType })
      res.status(200).json(response)
    }
    else {
      res.status(500).json({error:'Invalid workType'})
    }
  }
  catch (err) {
    console.log(err)
    res.status(500).json({error:'Internal server error'})
  }
})

router.put('/:id', async (req, res) => {
  try {
    const personId = req.params.id;//retrive the parameter from the id url
    const updatePerson = req.body;//retrive data from the body by the miiddle ware body-parser
    
    const response = await Person.findByIdAndUpdate(personId, updatePerson, {
      new: true,
      runValidators: true,
    })
    if (!response) {
      res.status(404).json({ errro: `Not found person having Id ${personId}` })
      console.log(`Not found person having Id ${personId}`)
    }
    console.log('data updated');
    res.status(200).json(response)
  }
  catch (err) {
    console.log(err)
    res.status(500).json({ error: 'Internal server error' })
  }
});

router.delete('/:id', async (req, res) => {
  try {
    deleteId = req.params.id;
    response = await Person.findByIdAndDelete(deleteId)
    if (!response) {
      return res.status(404).json({error:'Person Not Found'})
    }
    console.log(`deleted successfully ${deleteId}`);
    res.status(200).json({message:'Deleted Successfully.'})
   }
  catch (err) {
    console.log(err)
    res.status(500).json({error:'Internal server error'})
  }
})

module.exports = router;
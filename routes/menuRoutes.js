const express = require('express')
const router = express.Router();
const Menu=require('../models/menu')

router.post('/', async (req, res) => {
  try {
    const data = req.body;
  const newMenu = Menu(data);
    const response = await newMenu.save();
    console.log(` added dish: ${response.name}`)
    res.status(200).json(`Added Dish:${response.name}`)
  }
  catch (err) {
    console.log(err)
    res.status(500).json({error:'Internal server error'})
  }
})

router.get('/', async (req, res) => {
  try {
    const data = await Menu.find();
    console.log(`data fetched from menu `)
     res.status(200).json(data)
  }
  catch (err) {
    console.log(err)
    res.status(200).json({error:'Internal Server Error'})
  }
})

router.get('/:tasteType', async (req, res) => {
    try {
        const tasteType = req.params.tasteType;
        if (tasteType == 'spicy' || tasteType == 'sweet' || tasteType == 'sour') {
            response = await Menu.find({ taste: tasteType })
             res.status(200).json(response)
        }
        else {
        res.status(500).json({error:'Invalid Tastetype search between SWEET SOUR SPICY'})
    }
    }
    catch (err) {
        res.status(500).json({error:'Internal server error'})
    }
})

router.put('/:id', async (req, res)=>{
  try { 
    tasteId = req.params.id;
    updatedMenu = req.body;
    response = await Menu.findByIdAndUpdate(tasteId, updatedMenu, {
      new: true,
      runValidators: true,
    });
    if (!response) {
      console.log(`menu not found havingid :${tasteId}`)
      res.status(404).json({error:'not found '})
    }
    console.log("Updated successfully")
    res.status(200).json(response)
  }
  catch (err) {
    console.log(err);
    res.status(500).json({error:'Internal Server error'})
  }
})

router.delete('/:id', async (req, res) => {
  try {
    deleteId = req.params.id;
    response = await Menu.findByIdAndDelete(deleteId)
    if (!response) {
      console.log(`not found having the id :${deleteId}`)
      res.status(404).json({ error: 'Not found the menu ' })
    }
    console.log(`found id:${deleteId} and deleted `)
    res.status(200).json({ message: 'deleted successfully' })
  }
  catch (err) {
    console.log(err)
    res.status(500).json({ errro: 'Internal server error' })
  }
})


module.exports = router;
























// router.get('/:priceType', async (req, res) => {
//     try {
//         const priceType = parseInt(req.params.priceType, 10); // Convert priceType to an integer
//         if (priceType <= 100) {
//             data = await Menu.find({ price: { priceType: { $lte: 100 }}});
//         } else if (priceType > 100 && priceType <= 150) {
//             data = await Menu.find({ price: {priceType:{ $gt: 100, $lte: 150 }} });
//         } else if (priceType > 150) {
//             data = await Menu.find({ price: {priceType:{ $gt: 150 }} });
//         } else {
//             return res.status(404).send('Not found');
//         }

//         res.status(200).json(data);
//     } catch (err) {
//         res.status(500).json({ error: 'Internal server error' });
//     }
// });
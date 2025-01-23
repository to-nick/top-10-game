const express = require('express');
const router = express.Router();

router.get('/random-list', async function(req, res, next){
    console.log("Random list route called");
   try{
        const countResult = await req.db
            .from('top_10_lists')
            .count('id as count').first();
        
        const total = countResult.count;
        const randomOffset = Math.floor(Math.random() * total);
        
        const randomList = await req.db
            .from('top_10_lists')
            .offset(randomOffset)
            .limit(1)
            .first()
        
        res.status(200).json(
            randomList    
        )
   } catch {
    res.status(500).json({
        error: true,
        message: "There was an error fetching the list from the database"
    })
   }
})

router.get('/category', async function (req, res, next){

    try{
        const allCategories = await req.db
            .from('top_10_lists')
            .distinct('category')
            .pluck('category')
        res.status(200).json(allCategories)
    } catch{
        res.status(400).json({
            error: true,
            message: "There was an error fetching all catgories"
        })
    }
})

router.get('/category-list', async function (req, res, next){
    const { category } = req.query;
    console.log(category);
    try{
        const countResult = await req.db
            .from('top_10_lists')
            .where('category', 'like', category)
            .count('id as count').first()

        console.log(countResult);
        const count = countResult.count;
        const randomOffset = Math.floor(Math.random() * count);

        const list = await req.db
            .from('top_10_lists')
            .where('category', 'like', category)
            .offset(randomOffset)
            .limit(1).first()

        res.status(200).json(
            list
        )
    } catch(error){
        res.status(500).json({
            error: true,
            message: "There was an error fetching a category specific list from the database",
            details: error
        })
    } 
})

module.exports = router;
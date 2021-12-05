const express = require('express')
const pool = require('../modules/pool')
const router = express.Router();


//GET route
router.get('/', (req, res) => {
    pool.query('SELECT * FROM "feedback";')
        .then((result) => {
            res.send(result.rows);
    }).catch((error) => {
        console.log('Error GET ROUTE', error);
            res.sendStatus(500);  
    });
})


// POST route
router.post('/', (req,res) => {

       let survey = req.body;
       
       const sqlQuery = `INSERT INTO "feedback"
                        ("feeling", "understanding", "support", "comments")
                      VALUES
                         ($1, $2, $3, $4)`;
        params = [

                survey.feeling,
                survey.understanding,
                survey.support,
                survey.comments

                    ]
        pool.query(sqlQuery, params)
            .then((result) => {
                res.sendStatus(201);
        })
            .catch((error) => {
                console.log('POST /api/survey Error:', error);
                    res.sendStatus(500);
        });
        
});

module.exports = router;
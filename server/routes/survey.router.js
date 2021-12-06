const express = require('express')
const router = express.Router();
const pg = require('pg');
const Pool = pg.Pool;
const pool = new Pool ({
    host: 'localhost',
    database: 'prime_feedback'
})


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
                         ($1, $2, $3, $4);`;
        let queryText = [

                survey.feeling,
                survey.understanding,
                survey.support,
                survey.comments

                    ]
        pool.query(sqlQuery, queryText)
            .then((dbResult) => {
                console.log('insert success', dbResult)
                res.sendStatus(201);
        })
            .catch((dbErr) => {
                console.log('POST /api/survey Error:', dbErr);
                    res.sendStatus(500);
        });
        
});

module.exports = router;
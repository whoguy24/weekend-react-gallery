// LOAD EXPRESS / POOL MODULES
const express = require('express');
const router = express.Router();
const pool = require('../modules/pool.js');

// GET ROUTE
router.get('/', (req, res) => {

    // Define SQL Text
    const sqlText = `SELECT * FROM gallery_items ORDER BY id;`;

    // Pool Database Query
    pool.query(sqlText)
    .then((result) => {
        console.log(`GET request from database:`, result);
        res.sendStatus(200);
        // res.send(result.rows);
    })
    .catch((error) => {
        console.log(`GET request from database failed:`, error);
        res.sendStatus(500);
    })

})

// PUT ROUTE
router.put('/like/:id', (req, res) => {

    // Retrieve ID, Value to Modify
    const galleryItemID = req.params.id;
    let likes = Number(req.body.likes);
    likes += 1;

    // Define SQL Text, Retrieved Values
    const sqlText = `
    UPDATE "gallery_items"
        SET "likes"=$1
        WHERE "id"=$2;
    `;
    const sqlValues = [
        likes,
        galleryItemID
    ]

    // Pool Database Query
    pool.query(sqlText, sqlValues)
    .then((result) => {
        console.log(`PUT request from database:`, result);
        res.sendStatus(200);
    })
    .catch((error) => {
        console.log(`PUT request from database failed:`, error);
        res.sendStatus(500);
    })

});

// POST ROUTE
router.post('/', (req, res) => {

    // Build Posted Gallery Item
    const galleryItem = req.body;

    // Define SQL Text, Values From Built Item
    const sqlText = `
      INSERT INTO "gallery_items"
        ("title", "description", "filepath", "likes")
      VALUES
        ($1, $2, $3, $4, $5);
    `;
    const sqlValues = [
        galleryItem.title,
        galleryItem.description,
        galleryItem.filepath,
        0
    ];

    // Pool Database Query
    pool.query(sqlText, sqlValues)
    .then((result) => {
        console.log(`POST request from database:`, result);
        res.sendStatus(201);
    })
    .catch((error) => {
        console.log(`POST request from database failed:`, error);
        res.sendStatus(500);
    });

});

// DELETE ROUTE
router.delete('/:id', (req, res) => {

    // Retrieve ID of Gallery Item to Delete
    const galleryItemID = req.params.id;

    // Define SQL Text
    const sqlText = `
      DELETE FROM "gallery_items"
        WHERE "id"=$1;
    `;
    const sqlValues = [ galleryItemID ];

    // Pool Database Query
    pool.query(sqlText, sqlValues)
    .then((result) => {
        console.log(`DELETE request from database:`, result);
        res.sendStatus(200);
    })
    .catch((error) => {
        console.log(`DELETE request from database failed:`, error);
        res.sendStatus(500);
    })
    
});













module.exports = router;
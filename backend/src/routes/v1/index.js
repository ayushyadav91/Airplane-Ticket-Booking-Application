const express = require('express');
const router = express.Router();

router.get('/info', (req, res) => { 
    res.send('Hello World!');
});
 
module.exports = router;
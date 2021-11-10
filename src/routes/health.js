const router = require('express').Router();


router.get('/health', (req,res) => res.send('GraphQL Server OK'));


module.exports = router;
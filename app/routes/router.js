const express   = require('express');
const router    = express.Router();


router.use('/car', require('./api/carRoutes'));
router.use('/driver', require('./api/driverRoutes'));

module.exports = router;
'use strict';

import express from 'express';
import passport from 'passport';
import config from '../config/environment';
import User from '../api/user/user.model';

// Passport Configuration
require('./github/passport').setup(User, config);

var router = express.Router();
router.use('/github', require('./github'));

module.exports = router;

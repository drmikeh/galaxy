'use strict';

import express from 'express';
import passport from 'passport';
import config from '../config/environment';
import User from '../api/user/user.model';

// Passport Configuration
require('./local/passport').setup(User, config);
require('./google/passport').setup(User, config);
require('./twitter/passport').setup(User, config);
require('./github/passport').setup(User, config);

var router = express.Router();

router.use('/local', require('./local'));
router.use('/twitter', require('./twitter'));
router.use('/google', require('./google'));
router.use('/github', require('./github'));

module.exports = router;

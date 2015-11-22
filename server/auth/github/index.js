'use strict';

import express from 'express';
import passport from 'passport';
import auth from '../auth.service';

var router = express.Router();

router
  .get('/', passport.authenticate('github', {
    failureRedirect: '/signup',
    session: false
  }))

  .get('/callback', passport.authenticate('github', {
    failureRedirect: '/signup',
    session: false
  }), auth.setTokenCookie);

module.exports = router;

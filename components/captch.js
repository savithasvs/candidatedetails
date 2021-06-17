const fetch = require('node-fetch');
const { stringify } = require('querystring');
const express = require('express');
const route = express.Router();

route.post('/captchaData', async (req, res) => {
    if (!req.body.captcha)
      return res.json({ success: false, msg: 'Please select captcha' });
  
    // Secret key
    const secretKey = '6Lc0yQEbAAAAABdHunCiQOi4_8LLvBaEqw9qSJmi';
  
    // Verify URL
    const query = stringify({
      secret: secretKey,
      response: req.body.captcha,
      remoteip: req.connection.remoteAddress
    });
    const verifyURL = `https://google.com/recaptcha/api/siteverify?${query}`;
  
    // Make a request to verifyURL
    const body = await fetch(verifyURL).then(res => res.json());
  
    // If not successful
    if (body.success !== undefined && !body.success)
      return res.json({ success: false, msg: 'Failed captcha verification' });
  
    // If successful
    return (
      res.json({ success: true, msg: 'Captcha passed'})
      )
  });
  
module.exports = route;
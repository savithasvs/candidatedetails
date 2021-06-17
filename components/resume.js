// const multer = require('multer');                 //file
// const GridFs = require("multer-gridfs-storage");
// const Grid = require('gridfs-stream');
// const uuid = require('uuid').v4;                  //generate unique I'ds
// const crypto = require("crypto");
const mongoose =  require('mongoose');
const Sentiment = require('sentiment');
const sentiment = new Sentiment();
const emailValidator = require('deep-email-validator-extended');


const express = require('express');
const route = express.Router();
const User = require('./models/User');
const mongoURI = "mongodb+srv://ABCvirtualmaze:<ABC@virtualmaze>@cluster0.zlmkh.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";



var filename;
const conn = mongoose.createConnection(mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
  });
  
  
  //   const upload = multer({ storage} );
  
route.post('/', async (req, res) => {
  console.log(req.body);
  
    

      // // console.log(storage);
      const users = new User({
        Register_number: req.body.register_number,
        Student_Name: req.body.Student_Name,
        date: req.body.date,
        Gender: req.body.Gender,
        email: req.body.email,
        mobile: req.body.mobile,
        sslc: req.body.sslc,
        Board:req.body.sslc_Board,
        medium:req.body.sslc_medium,
        year:req.body.sslc_year,
        hsc: req.body.hsc,
        Board:req.body.hsc_Board,
        medium:req.body.hsc_medium,
        year:req.body.hsc_year,
        cutoff: req.body.hsc_cutoff,
        degree: req.body.degree,
        branch: req.body.branch,
        CGPA:req.body.cgpa,
        sem_1:req.body.sem_1,
        sem_2:req.body.sem_2,
        sem_3:req.body.sem_3,
        sem_4:req.body.sem_4,
        sem_5:req.body.sem_5,
        sem_6:req.body.sem_6,
        sem_7:req.body.sem_7,
        sem_8:req.body.sem_8,
        history_of_arreas:req.body.history_of_arreas,
        current_backbogs:req.body.current_backbogs,
        Father_name:req.body.Father_name,
        qualification:req.body.Fathers_qualification,
        Fathers_occupation:req.body.Fathers_occupation,
        Fathers_mobile: req.body.Fathers_mobile,
        Mother_name: req.body.Mother_name,
        Mother_qualification: req.body.Mother_qualification,
        Mother_occupation: req.body. Mother_occupation,
        mother_mobile: req.body.mother_mobile,
        landline: req.body.landline,
        Address: req.body.Address,
        district: req.body.district,
        pincode: req.body.pincode,
        submit: req.body.submit,
        reset: req.body.reset,
        // resume: `https://career-page-vms.herokuapp.com/file/${filename}`,
        });
      users.save()
        .then(result => {
          console.log("Data saved");
          res.redirect('/success');
        })
        .catch(err => {
          console.log(err);
        });
    // } //else {
      //return res.status(400).render('invalid',{err: `${messy}`})
   // }
});


  
  
  module.exports = route;  



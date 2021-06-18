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
route.use(express.json());
// const mongoURI = "URI custom";



// var filename;
// const conn = mongoose.createConnection(mongoURI, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//     useFindAndModify: false
//   });
  
  // let gfs;
  // conn.once('open', ()=> {
  //   gfs = Grid(conn.db,mongoose.mongo);
  //   gfs.collection('user');
    
  //   });
    
  //   //create file storage
  //   const storage = new GridFs({
  //   url:mongoURI,
  //   file:(req,file) =>{
  //      return new Promise((resolve,reject) =>{
  //      crypto.randomBytes(4, (err, buf)=>{
  //     if(err) {
  //         return reject(err);
  //     }
  //     //const filename = buf.toString('hex') + path.extname(file.originalname);
  //     filename = `${buf.toString('hex')}_${file.originalname}`;
  //     // gfs = new mongoose.mongo.GridFSBucket(conn.db, {bucketName: 'user'});
  //     const fileinfo = {
  //         filename: `${filename}`,
  //         bucketName:'user'
  //          };
  //          resolve(fileinfo);
  //        });
  //      });
  //     }
  //   });
  //   const upload = multer({ storage} );
  
route.post('/',(req, res) => {
  console.log(req.body);
  // let messy ="";
  // let Name = sentiment.analyze(req.body.name).score;
  // let Location = sentiment.analyze(req.body.location).score;
  // let College = sentiment.analyze(req.body.college).score;
  // //let Skills = sentiment.analyze(req.body.skill).score;
  // async function isEmailValid(email) {
  //   return emailValidator.validate(email)
  //  }
  //  let sentCheck = []
  //  if(Name<0){
  //    sentCheck.push('Name');
  //   }
  //   if(Location<0){
  //     sentCheck.push('Location');
  //   }
  //   if(College<0){
  //     sentCheck.push('College/Company');
  //   }
    // //if(Skills<0){
      //   sentCheck.push('Skills');
      // }
      
     // for (const senErr of sentCheck) {
     //   messy = messy +"Invalid field entry "+ senErr + ".        ";
     // }
     // console.log(messy)
      
      
  // let Email = (req.body.email);
  // const validMail = await isEmailValid(Email);
  // console.log(validMail.valid)
 ///if (!validMail.valid){
   //////// messy = messy + `Please provide a valid email address.        `;
   ///////// return res.status(400).render('invalid',{err: `${messy}`})

  //////}else if(sentCheck.length==0){

      // console.log(req.body);
      const users = new User({
        register_number: req.body.register_number,
        Student_Name: req.body.Student_Name,
        dob:req.body.dob,
        Gender: req.body.Gender,
        email: req.body.email,
        mobile: req.body.mobile,
        sslc: req.body.sslc,
        sslc_Board:req.body.sslc_Board,
        sslc_medium:req.body.sslc_medium,
        sslc_year:req.body.sslc_year,
        hsc: req.body.hsc,
        hsc_Board:req.body.hsc_Board,
        hsc_medium:req.body.hsc_medium,
        hsc_year:req.body.hsc_year,
        hsc_cutoff:req.body.hsc_cutoff,
        degree: req.body.degree,
        Branch: req.body.Branch,
        cgpa:req.body.cgpa,
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
        Fathers_name:req.body.Fathers_name,
        Fathers_qualification:req.body.Fathers_qualification,
        Fathers_occupation:req.body.Fathers_occupation,
        Fathers_mobile:req.body.Fathers_mobile,
        Mother_name: req.body.Mother_name,
        Mother_qualification:req.body.Mother_qualification,
        Mothers_occupation:req.body.Mothers_occupation,
        mother_mobile:req.body.mother_mobile,
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
    // } else {
    //   return res.status(400).render('invalid',{err: `${messy}`})
    // }
});

// const { requireAuth} = require('./authMiddleware');

// route.get('/file/:fileName',requireAuth, (req,res) =>{
//   gfs.files.findOne({filename: req.params.fileName}, (err, file) =>{
//       if(!file || file.length === 0) {
//         // console.log(err);
//         // console.log(file);
//           return res.status(404).render('404',{ err: `file ${req.params.fileName} not found` });
//           // json({
//           // err: `file ${req.paramas.filename}`
//           // }).sendFile(__dirname + '/404.ejs',, { root: __dirname });;
//       }
//       else{
//         const readstream = gfs.createReadStream(file.filename);
//         readstream.pipe(res);
//       }
//     });
// });
  
  
  module.exports = route;  



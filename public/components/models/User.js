const mongoose = require('mongoose');
const Schema = mongoose.Schema;
//mongoDB Connection
const mongoURI = "mongodb+srv://ABCvirtualmaze:ABC@virtualmaze@cluster0.zlmkh.mongodb.net/myFirstDatabase";

// connect to DB
mongoose.connect(mongoURI,{
  useNewUrlParser: true, 
  useUnifiedTopology: true,
  useFindAndModify: true, 
}).catch(err => console.log(err));

const userSchema = new Schema({
  register_number: {
    type: Number,
    required: true
  },
  Student_Name: {
    type: String,
    required: true
  },
  dob: {
    type: String,
    required: true
  },
  Gender: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  mobile: {
    type: Number,
    required: true
  },
  sslc: {
    type: Number,
    required: true
  },
  sslc_Board: {
    type: String,
    required: true 
  },
  sslc_medium: {
    type: String,
    required: true
  },
  sslc_year: {
    type: Number ,
    required: true
  },
  hsc: {
    type: Number,
    required: true
  },
  hsc_Board: {
    type:  String ,
    required: true
  },
  hsc_medium: {
    type:  String ,
    required: true
  },
  hsc_year: {
    type: Number ,
    required: true
  },
  hsc_cutoff: {
    type: Number ,
    required: true
  },
  degree: {
    type: String,
    required: true
  },
  Branch: {
    type: String ,
    required: true
  },
  cgpa: {
    type: Number,
    required: true
  },
  sem_1: {
    type: Number,
    required: true
  },
  sem_2: {
    type: Number,
    required: true
  },
  sem_3: {
    type: Number,
    required: true
  },
  sem_4: {
    type: Number,
    required: true
  },
  sem_5: {
    type: Number,
    required: true
  },
  sem_6: {
    type: Number,
    required: true
  },
  sem_7: {
    type: Number,
    required: true
  },
  sem_8: {
    type: Number,
    required: true
  },
  history_of_arreas: {
    type: Number,
    required: true
  },
  current_backbogs: {
    type: Number,
    required: true
  },
  Fathers_name: {
    type: String,
    required: true
  },
  Fathers_qualification: {
    type: String,
    required: true
  },
  Fathers_occupation: {
    type: String,
    required: true
  },
  Fathers_mobile: {
    type: Number,
    required: true
  },  
  Mother_name: {
    type: String,
    required: true
  },
  Mother_qualification: {
    type: String,
    required: true
  },
  Mothers_occupation: {
    type: String,
    required: true
  },
  mother_mobile : {
    type: Number,
    required: true
  },
  landline: {
    type:Number,
    required: true
  },
  Address:{
    type: String,
    required: true 
  },
  district:{
    type: String,
    required: true 
  },
  pincode: {
    type:Number,
    required: true
  } 


}, { timestamps: true });

const User = mongoose.model('User', userSchema);
module.exports = User;

//String,Integer,Double,Boolean,Null,ObjectId,Undefined,BinaryData,DateNumb
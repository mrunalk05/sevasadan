const mongoose = require("mongoose");

const patientSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  gender: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
});

const Patient = mongoose.model("Patient", patientSchema);

module.exports = Patient;


const bedSchema= new mongoose.Schema({
  roomno:{
    type: String,
    required: true
  },
  bedno:{
    type:String,
    reuired:true
  },
  patient:{
    type:String,
    reuired:true
  }
});

const bedmodel = mongoose.model("bedmodel", bedSchema);

module.exports= bedmodel;




const invenSchema= new mongoose.Schema({
  medname:{
    type: String,
    required: true
  },
  medcompany:{
    type: String,
    required: true
  },
  quantity:{
    type: String,
    required: true
  },
  disease:{
    type: String,
    required: true
  }
});

const medd= mongoose.model('medd', invenSchema);
module.exports= medd;
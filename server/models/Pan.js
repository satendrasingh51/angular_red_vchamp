const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define collection and schema
let Pan = new Schema({
  
   updated: { 
      type: Date,
      default: Date.now
  },
   areaoffice: {
      type: String
   },
   aocode:{
      type: String
   },
   ao:{
      type: String
   },
   range:{
      type: String
   },
   aonumber:{
      type: String
   },
   application: {
      type: String
   },
   old_pan: {
      type: String
   },
   category: {
      type: String
   },
   applicant: {
      type: String
   },
   firstname: {
      type: String
   },
   middlename: {
      type: String
   },
   lastname: {
      type: String
   },
   ffirstname: {
      type: String
   },
   fmiddlename: {
      type: String
   },
   flastname: {
      type: String
   },
   cardHolder: {
      type: String
   },
   dob: {
      type: String
   },
   contect_number: {
      type: String
   },
   email: {
      type: String
   },
   proofid: {
      type: String
   },
   proofadd: {
      type: String
   },
   proofdob: {
      type: String
   },
   gender: {
      type: String
   },
   adhar_number: {
      type: String
   },
   address_f: {
      type: String
   },
   address_v: {
      type: String
   },
   address_p: {
      type: String
   },
   address_divi: {
      type: String
   },
   address_d: {
      type: String
   },
   state: {
      type: String
   },
   pin_code: {
      type: String
   },
   document: {
      type: String
   },
}, {
   collection: 'pan'
})

module.exports = mongoose.model('Pan', Pan)
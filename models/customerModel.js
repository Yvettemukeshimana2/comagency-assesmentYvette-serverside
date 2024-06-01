import mongoose from "mongoose";

const customerSchema = new mongoose.Schema({
  fullName: {
    type: String,
    required: true
  },
  age: {
    type: Number,
    required: true
  },
  gender: {
    type: String,

    required: true
  },
  nationality: {
    type: String,
    
    required: true
  },
  identification: {
    type: String
  },
  passport: {
    type: Number,
   
  },
  purposeOfVisit: {
    type: String,
 
    required: true
  },
  durationOfStay: {
    type: Number,
    required: true
  },
  dateOfEntry: {
    type: Date,
    required: true
  },
  portOfEntry: {
    type: String,
    required: true
  },
  emailAddress: {
    type: String,
    required: true
  },
  phoneNumber: {
    type: String,
    required: true
  }
});

const Customer = mongoose.model("Customer", customerSchema);

export default Customer;

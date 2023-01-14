import mongoose from 'mongoose';

const { Schema } = mongoose;

const userSchema = new Schema( {
  name: {
    type: String,
    trim: true,
    required: "Name is required"

  },
  email: {
    type: String,
    trim: true,
    required: "Email is required",
    unique: true,
  }



  
} );
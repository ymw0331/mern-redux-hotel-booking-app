import mongoose from 'mongoose';
import bcyrpt from 'bcrypt';


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
  },
  password: {
    type: String,
    required: true,
    min: 6,
    max: 64
  },
  stripe_account_id: '',
  stripe_seller: {},
  stripeSession: {}

}, {
  timestamps: true
} );

userSchema.pre( 'save', function ( next )
{
  let user = this;

  if ( user.isModified( 'password' ) )
  {
    return bcyrpt.hash( user.password, 12, function (err, hash){
      if(err){
        console.log('BCRYPT HASH ERR')
      }
    });
  }

} );

export default mongoose.model( "User", userSchema );
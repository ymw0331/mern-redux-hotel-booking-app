import User from "../models/user";
const stripe = require( 'stripe' )( process.env.STRIPE_SECRET );

export const createConnectAccount = async ( req, res ) =>
{
  //1. find user from db
  const user = await User.findById( req.auth._id ).exec();
  console.log( "USER ===>", user );

  //2. if user don't have stripe_account_id yet, create new
  const account = await stripe.accountLinks.create( {
    type: "express"
  } );
  console.log( "ACCOUNT ==>", account );

  //3. create account link based on account id (for frontedn to complete onboarding)

  //4. update payment schedule (optional. default is 2 days)

};
import User from "../models/user";
const stripe = require( 'stripe' )( process.env.STRIPE_SECRET );

export const createConnectAccount = async ( req, res ) =>
{

  try
  {
    //1. find user from db
    const user = await User.findById( req.auth._id ).exec();
    console.log( "USER ===>", user );

    console.log( "CREATING STRIPE ID FOR ACCOUNT" );
    //2. if user don't have stripe_account_id yet, create new
    if ( !user.stripe_account_id )
    {
      console.log( "CREATING STRIPE ID FOR ACCOUNT" );
      const account = await stripe.accounts.create( { type: "standard" } );
      console.log( 'ACCOUNT => ', account.id );
      user.stripe_account_id = account.id;
      // user.save();
      // console.log( "CREATED AND SAVED STRIPE ID" );

    }
    //3. create account link based on account id (for frontedn to complete onboarding)

    //4. update payment schedule (optional. default is 2 days)


  } catch ( error )
  {
    console.log( " Error createConnectAccount ==>", error );
  }


};
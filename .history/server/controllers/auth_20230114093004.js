export const showMessage = ( req, res ) =>
{
  res.status( 200 ).send( ` Here is your message: ${ req.params.message } ` );
};

export const register = async ( req, res ) =>
{
  try
  {
    const { name, email, password } = req.body;
    console.table( { name, email, password } );
 
  } catch ( err )
  {
    console.log( err );
  }
};

export const login = async ( req, res ) =>
{
  try
  {
    // 1. destructure name, email, password from req.body
    const { email, password } = req.body;
    // 2. all fields require validation
    if ( !email )
    {
      return res.json( { error: "Email is taken" } );
    }
    if ( !password || password.length < 6 )
    {
      return res.json( { error: "Password must be at least 6 characters long" } );
    }
    // 3. check if email is taken
    const user = await User.findOne( { email } );
    if ( !user )
    {
      return res.json( { error: "User not found" } );
    }
    // 4. compare password
    const match = await comparePassword( password, user.password );
    if ( !match )
    {
      return res.json( { error: "Wrong password" } );
    }
    // 5. create signed jwt
    const token = jwt.sign( { _id: user._id }, process.env.JWT_SECRET, {
      expiresIn: "7d",
    } );
    // 7. send response
    res.json( {
      user: {
        name: user.name,
        email: user.email,
        role: user.role,
        address: user.address,
      },
      token,
    } );
  } catch ( err )
  {
    console.log( err );
  }
};
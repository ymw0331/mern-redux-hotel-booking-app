import { currencyFormatter } from '../../actions/stripe';

/* eslint-disable jsx-a11y/img-redundant-alt */
const SmallCard = ( { h } ) => (
  <>
    <div className='card mb-3'>
      <div className='row nol-gutters'>
        <div className='col-md-4'>
          <img
            src='https://placeholder.com/900x500.png?text=MERN+Booking'
            alt='default hotel image'
          />
        </div>

        <div className='col-md-8'>
          <div className='card-body'>
            <h5 className='card-title'>
              { h.title } <span className='float-right text-primart'>
                { currencyFormatter( {
                  amount: h.price,
currency: ""
                } ) }

              </span>
            </h5>

          </div>

        </div>

      </div>
    </div>
  </>

);


export default SmallCard;
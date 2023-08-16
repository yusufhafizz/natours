import axios from 'axios';
import { showAlert } from './alerts';
const stripe = Stripe(
  'pk_test_51Nevb2SE90Wzy4sPICPOP0xzs0BUxFLBArk9lNkuDp7M3lmrNqFYPF9HrcSI3XgSVG25zDoawnX5nWxcTP199tqf00tOcPToNX'
);
export const bookTour = async (tourId) => {
  try {
    const session = await axios(
      `http://127.0.0.1:3000/api/v1/bookings/checkout-session/${tourId}`
    );

    await stripe.redirectToCheckout({
      sessionId: session.data.session.id,
    });
  } catch (err) {
    console.log(err);
    showAlert('error', err);
  }
};

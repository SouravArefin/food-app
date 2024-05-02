import { Order } from '@/models/Order';


const stripe = require('stripe')(process.env.STRIPE_SK);
console.log(process.env.STRIPE_SK,"webhook=============webhook")
export async function POST(req) {
  const sig = req.headers.get('stripe-signature');
  let event;
//console.log("enter webhook")
  try {
    const reqBuffer = await req.text();
      const signSecret = process.env.STRIPE_SIGN_SECRET;
     // console.log(signSecret, "signsecret===========sign secret")
    event = stripe.webhooks.constructEvent(reqBuffer, sig, signSecret);
  } catch (e) {
    //console.error('stripe error');
   // console.log(e);
    return Response.json(e, {status: 400});
  }

  if (event.type === 'checkout.session.completed') {
    console.log(event,"event is checkout.session.completed======");
    const orderId = event?.data?.object?.metadata?.orderId;
    const isPaid = event?.data?.object?.payment_status === 'paid';
    if (isPaid) {
      await Order.updateOne({_id:orderId}, {paid:true});
    }
  }

  return Response.json('ok', {status: 200});
}
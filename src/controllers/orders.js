import bodyParser from 'body-parser';
import createFirebaseInstance from '../middlewares/createFirebaseInstance';

export const createOrder = [
  bodyParser.json(),
  createFirebaseInstance(),
  (req, res) => {
    // TODO: Use Token for login
    req.auth.signInWithEmailAndPassword(
        // (JUST FOR TEST)
        'coding-challenge@construyo.de',
        'coding-challenge@construyo.de',
    )
       .then(() => {
         req.db
            .collection('orders')
            .doc()
            .set(req.body);
         return res.send('created');

       })
       .catch((error) => {
         return res.send(error.message);
       });
  },
];

export const editOrder = [
  bodyParser.json(),
  createFirebaseInstance(),
  (req, res) => {
    // TODO: Use Token for login
    req.auth.signInWithEmailAndPassword(
        // (JUST FOR TEST)
        'coding-challenge@construyo.de',
        'coding-challenge@construyo.de',
    )
       .then(() => {
         req.db
            .collection('orders')
            .doc(req.params.orderId)
            .set(req.body);
         return res.send('Updated');

       })
       .catch((error) => {
         return res.send(error.message);
       });
  },
];

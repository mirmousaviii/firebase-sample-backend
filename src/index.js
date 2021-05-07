import express from 'express';
import {createOrder, editOrder} from './controllers/orders';

const PORT = parseInt(process.env.PORT || 3100);
const app = express();

app.post('/orders', ...createOrder);
app.put('/orders/:orderId', ...editOrder);

app.listen(PORT, () => {
  console.log(`Server started on :${PORT}!`);
});

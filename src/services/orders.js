import { v4 as uuidv4 } from 'uuid';

/**
 * Create a new order
 * @returns {void}
 */
export const createOrderService = () => {  
  const newOrder = generateNewOrder();
  persistOrdersCreated(newOrder);
}

/**
 * Generate a new order
 * @returns {Object}
 */
const generateNewOrder = () =>{
  return {
    createdAt: new Date().getTime(),
    data: {
      transactionId: uuidv4(),
      cartId: Math.floor(Math.random() * 100000)
      // name: 'Order 1',
      // description: 'Description 1',
      // details: [
      //   {
      //     sku: Math.random().toString(36).substring(7),
      //     quantity: Math.floor(Math.random() * 10),
      //   }
      // ], total: Math.floor(Math.random() * 100000),
    },
  }
}

/*
* Persist the order created in storage
* @param {Object} newOrder
* @returns {void}
*/
const persistOrdersCreated = (newOrder) => {
  localStorage.getItem('orders')
    ? localStorage.setItem('orders', JSON.stringify([...JSON.parse(localStorage.getItem('orders')), newOrder]))
    : localStorage.setItem('orders', JSON.stringify([newOrder]));
}
self.onmessage = function(event) {
    const orders = JSON.parse(event.data).sort((a, b) => a.createdAt - b.createdAt);
    if (orders.length > 0){
        createOrder(orders[0]);
    }
}

const createOrder = (order) => {
    // const url = '';

    // fetch(url, {
    //     method: 'POST',
    //     headers: {
    //         'Content-Type': 'application/json'
    //     },
    //     body: JSON.stringify(order)
    // })
    // .then(response => response.json())
    // .then(data => {
    //     console.log('Order created:', data);
    // })
    // .catch(error => {
    //     console.error('Error creating order:', error);
    // });

    // Simulate a delay to create the order
    setTimeout(() => {
        const data = {
            transactionId: order.data.transactionId,
            message: 'Order created'
        };
        self.postMessage(data);
    }, 3000);

    // TODO: Implement the logic to create the order with status management
}
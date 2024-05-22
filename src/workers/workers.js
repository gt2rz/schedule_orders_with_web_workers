// Este archivo esta en el hilo principal
var ordersWorker = new Worker('src/workers/orders.js');

ordersWorker.onmessage = function(e) {
    const { transactionId } = e.data;

    let orders = JSON.parse(localStorage.getItem('orders'));
    orders = orders.filter(order => order.data.transactionId !== transactionId);

    console.log(orders);

    localStorage.setItem('orders', JSON.stringify(orders));
       
    notifyUser('Orden creada', "Se ha creado exitosamente la orden con el ID: " + transactionId);
}
 
setInterval(() => {
    if(!navigator.onLine){
        console.log('No hay conexión a internet');
        return;
    }

    const value = localStorage.getItem('orders');
    if(!value || JSON.parse(value).length === 0) return;

    ordersWorker.postMessage(value);    
}, 5000);

function notifyUser(title, message) {
    const notifyOrderCreated = localStorage.getItem('notifyOrderCreated');
    if(!notifyOrderCreated || notifyOrderCreated != 1) return;

    var options = {
        body: message,
        icon: 'src/assets/check.svg',
      };

    // Puede ser reemplazado por un servicio de notificaciones
    if (!("Notification" in window)) {
        alert("This browser does not support desktop notification");

    } else if (Notification.permission === "granted") {
        new Notification(title, options);

    } else if (Notification.permission !== "denied") {
        Notification.requestPermission(function (permission) {
            if (permission === "granted") {
                new Notification(title, options);
            }
        });
    }
  }
  
let total = 0;
function addItem() {
    const itemSelect = document.getElementById('item');
    const quantityInput = document.getElementById('quantity');
    const orderList = document.getElementById('order-list');
    const totalSpan = document.getElementById('total');

    const selectedOption = itemSelect.options[itemSelect.selectedIndex];
    const itemName = selectedOption.text;
    const itemPrice = parseFloat(selectedOption.getAttribute('data-price'));
    const quantity = parseInt(quantityInput.value);

    const totalPrice = itemPrice * quantity;
    total += totalPrice;

    const listItem = document.createElement('li');
    listItem.textContent = `${itemName} x${quantity} - $${totalPrice}`;
    orderList.appendChild(listItem);

    totalSpan.textContent = total.toFixed(2);
    quantityInput.value = 1;
}

function clearOrder() {
    document.getElementById('order-list').innerHTML = '';
    total = 0;
    document.getElementById('total').textContent = total.toFixed(2);
    document.getElementById('cash').value = '';
    document.getElementById('change').textContent = '0';
}
function processPayment() {
    // Existing code

    // Update receipt details
    document.getElementById('receipt-total').textContent = total.toFixed(2);
    document.getElementById('receipt-cash').textContent = document.getElementById('cash').value;
    document.getElementById('receipt-change').textContent = document.getElementById('change').textContent;

    // Copy order list to receipt
    document.getElementById('receipt-list').innerHTML = document.getElementById('order-list').innerHTML;

    // Show receipt modal
    document.getElementById('receipt-modal').style.display = 'block';
}

function showReceipt() {
    const receiptContent = document.getElementById('receipt').innerHTML;
    const printWindow = window.open('', '', 'height=600,width=800');

    printWindow.document.write('<html><head><title>Print Receipt</title>');
    printWindow.document.write('<style>');
    printWindow.document.write('body { font-family: Arial, sans-serif; margin: 20px; }');
    printWindow.document.write('h1, h2 { color: #ff6f61; }');
    printWindow.document.write('ul { list-style-type: none; padding: 0; }');
    printWindow.document.write('li { padding: 5px 0; border-bottom: 1px solid #e2e8f0; }');
    printWindow.document.write('</style>');
    printWindow.document.write('</head><body>');
    printWindow.document.write(receiptContent);
    printWindow.document.write('</body></html>');

    printWindow.document.close();

    printWindow.onload = function() {
        printWindow.focus();
        printWindow.print();
        // printWindow.close(); // Optionally close after printing
    };
}
function showReceipt() {
    const receiptContent = document.getElementById('receipt').innerHTML;
    const printWindow = window.open('', '', 'height=600,width=800');

    printWindow.document.write('<html><head><title>Print Receipt</title>');
    printWindow.document.write('<style>');
    printWindow.document.write('body { font-family: Arial, sans-serif; margin: 20px; }');
    printWindow.document.write('h1, h2 { color: #ff6f61; }');
    printWindow.document.write('ul { list-style-type: none; padding: 0; }');
    printWindow.document.write('li { padding: 5px 0; border-bottom: 1px solid #e2e8f0; }');
    printWindow.document.write('</style>');
    printWindow.document.write('</head><body>');
    printWindow.document.write(receiptContent);
    printWindow.document.write('</body></html>');

    printWindow.document.close();

    printWindow.onload = function() {
        printWindow.focus();
        printWindow.print();
    };
}

function closeReceipt() {
    document.getElementById('receipt-modal').style.display = 'none';
}

/*function closeReceipt() {
    // Hide the receipt modal
    document.getElementById('receipt-modal').style.display = 'none';
}

/*function processPayment() {
    const cashReceived = parseFloat(document.getElementById('cash').value);
    const change = cashReceived - total;
    document.getElementById('change').textContent = change.toFixed(2);

    // Update receipt details
    document.getElementById('receipt-total').textContent = total.toFixed(2);
    document.getElementById('receipt-cash').textContent = cashReceived.toFixed(2);
    document.getElementById('receipt-change').textContent = change.toFixed(2);

    // Copy order list to receipt
    const orderItems = document.getElementById('order-list').innerHTML;
    document.getElementById('receipt-list').innerHTML = orderItems;

    // Show receipt section for printing
    document.getElementById('receipt').style.display = 'block';
}*/
/*function processPayment() {
    // Existing code

    // Update receipt details
    document.getElementById('receipt-total').textContent = total.toFixed(2);
    document.getElementById('receipt-cash').textContent = document.getElementById('cash').value;
    document.getElementById('receipt-change').textContent = document.getElementById('change').textContent;

    // Copy order list to receipt
    document.getElementById('receipt-list').innerHTML = document.getElementById('order-list').innerHTML;

    // Show receipt section for printing
    document.getElementById('receipt').style.display = 'block';
}

function printReceipt() {
    const receiptContent = document.getElementById('receipt').innerHTML;
    const printWindow = window.open('', '', 'height=600,width=800');

    printWindow.document.write('<html><head><title>Print Receipt</title>');
    printWindow.document.write('<style>');
    printWindow.document.write('body { font-family: Arial, sans-serif; margin: 20px; }');
    printWindow.document.write('h1, h2 { color: #ff6f61; }');
    printWindow.document.write('ul { list-style-type: none; padding: 0; }');
    printWindow.document.write('li { padding: 5px 0; border-bottom: 1px solid #e2e8f0; }');
    printWindow.document.write('</style>');
    printWindow.document.write('</head><body>');
    printWindow.document.write(receiptContent);
    printWindow.document.write('</body></html>');

    printWindow.document.close();

    printWindow.onload = function() {
        printWindow.focus();
        printWindow.print();
        printWindow.close();
    };
}
/*

function printReceipt() {
    // Get the receipt content
    const receiptContent = document.getElementById('receipt').innerHTML;

    // Open a new window for printing
    const printWindow = window.open('', '', 'height=600,width=800');

    // Write the HTML for the new window
    printWindow.document.write('<html><head><title>Print Receipt</title>');
    printWindow.document.write('<style>');
    printWindow.document.write('body { font-family: Arial, sans-serif; margin: 20px; }');
    printWindow.document.write('h1, h2 { color: #ff6f61; }');
    printWindow.document.write('ul { list-style-type: none; padding: 0; }');
    printWindow.document.write('li { padding: 5px 0; border-bottom: 1px solid #e2e8f0; }');
    printWindow.document.write('</style>');
    printWindow.document.write('</head><body>');
    printWindow.document.write(receiptContent);
    printWindow.document.write('</body></html>');

    // Close the document to finish writing
    printWindow.document.close();

    // Wait for the new window to finish loading before printing
    printWindow.onload = function() {
        printWindow.focus(); // Ensure the window is focused
        printWindow.print(); // Open the print dialog
        printWindow.close(); // Close the print window after printing
    };
}*/
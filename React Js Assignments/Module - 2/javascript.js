<script>

function updateSubtotal(row) 
{
  var quantity = document.getElementById("quantity" + row).value;
  var unitPrice = parseFloat(document.getElementById("subtotal" + row).innerText.replace('$', ''));
  var subtotal = quantity * unitPrice;
  document.getElementById("subtotal" + row).innerText = '$' + subtotal.toFixed(2);
  updateTotal();
}

function removeItem(row) 
{
  var subtotalElement = document.getElementById("subtotal" + row);
  subtotalElement.innerText = '$0.00';
  updateTotal();
}

function updateTotal() 
{
  var total = 0;
  for (var i = 1; i <= 2; i++) {
    var subtotal = parseFloat(document.getElementById("subtotal" + i).innerText.replace('$', ''));
    total += subtotal;
  }
  document.getElementById("total").innerText = '$' + total.toFixed(2);
}

</script>
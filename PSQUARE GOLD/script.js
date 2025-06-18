function generateBill(event) {
  event.preventDefault(); 

  var price = Number(document.getElementById("price").value);
  var weight = Number(document.getElementById("weight").value);


  if (price <= 0 || weight <= 0) {
    alert("Price and Weight must be greater than zero.");
    return;
  }

  var total = price * weight;

  var today = new Date();
  var date = today.getDate() + "-" + (today.getMonth() + 1) + "-" + today.getFullYear();

  var outputHTML = "<h3 style='color: goldenrod;'>Gold Purchase Bill</h3>";
  outputHTML += "<p><b>Date:</b> " + date + "</p>";
  outputHTML += "<p><b>Price per gram:</b> Rs." + price.toLocaleString("en-IN", {minimumFractionDigits: 2}) + "</p>";
  outputHTML += "<p><b>Weight:</b> " + weight.toLocaleString("en-IN", {minimumFractionDigits: 2}) + " grams</p>";
  outputHTML += "<p><b>Total Amount:</b> Rs." + total.toLocaleString("en-IN", {minimumFractionDigits: 2}) + "</p>";
  outputHTML += "<button class='btn' onclick='window.print()'>Print</button>";

  document.getElementById("output").innerHTML = outputHTML;
}

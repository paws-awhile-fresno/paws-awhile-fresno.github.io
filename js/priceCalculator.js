var pricingForm = document.forms["pricing"];

function getTypePricing() {
  // Get relevant pricing form for pet type
  var type = pricingForm.elements["type"];
  return pricingDict[type.value];
}

function calculateTotal()
{
  // Look up price based on user inputs
  prices = getTypePricing();

  var price = 0;
  var checkable = ['bath', 'shave', 'nails', 'sentry'];
  for (var i = 0; i < checkable.length; i++) {
    boxName = checkable[i];
    if (pricingForm.elements[boxName].checked) {
      price += prices[boxName] * 1;
    }
  }

  //display the result
  document.getElementById('totalPrice').innerHTML = "Your initial price estimate is $" + Math.max(50, price) + ". Kindly note that this estimate is not final. Please call (559) 978-5052 for a final quote -- every pet is unique, and actual pricing may vary.";
}

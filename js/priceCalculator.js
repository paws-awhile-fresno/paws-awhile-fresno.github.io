var pricingForm = document.forms["pricing"];
var type;

function getTypePricing() {
  // Get relevant pricing form for pet type
  type = pricingForm.elements["type"].value;
  return pricingDict[type];
}

function calculateTotal()
{
  // Look up price based on user inputs
  prices = getTypePricing();

  var price = 0;
  var checkable = ['bath', 'shave', 'nails', 'sentry'];
  var services = [];
  for (var i = 0; i < checkable.length; i++) {
    boxName = checkable[i];
    if (pricingForm.elements[boxName].checked) {
      price += prices[boxName] * 1;
      placeholderText += 'a ' + boxName + ', '
      services.push(boxName)
    }
  }
  
  // update message placeholder
  var petTypeDescriptions = {
      "d0": "dog (< 25 lbs)",
      "d25": "dog (25-50 lbs)",
      "d50": "dog (50-75 lbs)",
      "d75": "dog (> 75 lbs)",
      "cs": "shorthaired cat",
      "cl": "longhaired cat"
  };
  var serviceDescriptions = {
      "shave": "shave",
      "nails": "nail trim",
      "sentry": "sentry application",
      "bath": "bath (with brush and blowdry)"
  };
  var placeholderText = "Hi Kelly, I would like ";
  var nServices = services.length;
  placeholderText += "a " + serviceDescriptions[services[0]];
  for (var i = 1; i < nServices - 1; i++) {
      if (i > 0 && nServices > 2) {
          placeholderText += ', ';
      }
      placeholderText += 'a ' + serviceDescriptions[services[i]];
  }
  if (nServices > 1) {
      if (nServices > 2) {
          placeholderText += ",";
      }
      placeholderText += " and a " + serviceDescriptions[services[nServices - 1]];
  }
  if (nServices > 0) {
      placeholderText += " for my " + petTypeDescriptions[type] + ".";
      document.getElementById('message-box').value = placeholderText;
      document.getElementById('totalPrice').innerHTML = "Your initial price estimate is $" + Math.max(50, price) + ". Kindly note that this estimate is not final. Please call (559) 978-5052 for a final quote &mdash; every pet is unique, and actual pricing may vary.";
  }
  else {
      document.getElementById('message-box').value = "";
      document.getElementById('totalPrice').innerHTML = ""
  }
}


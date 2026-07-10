function searchResult() {

  let regNo = document.getElementById("regNo").value.trim();

  fetch("https://script.google.com/macros/s/AKfycbzy7M7ALuaE3h3IHgb_8VEnPJPdAickIn_uPJQ_wpjGdYlEwS7fFEo2KVJoyNlihCltKg/exec?regNo=" + encodeURIComponent(regNo))    .then(response => response.json())
    .then(data => {

      if (data.found) {

        document.getElementById("result").innerHTML =
          "<h2>Allocated Trade</h2>" +
          "<p><b>Registration No:</b> " + data.registrationNo + "</p>" +
          "<p><b>Name:</b> " + data.name + "</p>" +
          "<p><b>Trade:</b> " + data.trade + "</p>";

      } else {

        document.getElementById("result").innerHTML =
          "<h3>No Record Found</h3>";

      }

    });

}

function searchResult() {

  let regNo = document.getElementById("regNo").value.trim();

  fetch("YOUR_WEB_APP_URL?regNo=" + encodeURIComponent(regNo))
    .then(response => response.json())
    .then(data => {

      if (data.found) {

        document.getElementById("result").innerHTML =
          "<h2>Allocated Trade</h2>" +
          "<p><b>Registration No:</b> " + data.registrationNo + "</p>" +
          "<p><b>Trade:</b> " + data.trade + "</p>";

      } else {

        document.getElementById("result").innerHTML =
          "<h3>No Record Found</h3>";

      }

    });

}

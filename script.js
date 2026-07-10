function searchResult() {


  alert("કૃપા કરીને Search પર ક્લિક કર્યા બાદ થોડો સમય રાહ જુઓ.  ⚠️ નોંધ: સદર પરિણામમાં ફેરફાર થઈ શકે છે. તેથી ફાળવેલ આઈ.ટી.આઈ. ખાતે રૂબરૂ જઈ માહિતીની ખાતરી અવશ્ય કરવી. અંતિમ નિર્ણય DET, ગુજરાત દ્વારા જાહેર કરવામાં આવેલી સત્તાવાર ITI Admission પોર્ટલ પર રહેલ માહિતી મુજબ જ માન્ય ગણાશે");
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

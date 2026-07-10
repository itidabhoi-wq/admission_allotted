function searchResult(){

    let regNo = document.getElementById("regNo").value.trim();

    fetch("YOUR_WEB_APP_URL?regNo=" + encodeURIComponent(regNo))

    .then(response => response.json())

    .then(data => {

        if(data.found){

            document.getElementById("result").innerHTML = `
                <h3>Allocated Trade</h3>
                <p>${data.trade}</p>
            `;

        }else{

            document.getElementById("result").innerHTML =
            "<h3>No Record Found</h3>";

        }

    });

}

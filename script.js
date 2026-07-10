function searchResult() {

    let regNo = document.getElementById("regNo").value.trim();

    if (regNo === "123456") {

        document.getElementById("result").innerHTML = `
            <h3>Result Found</h3>
            <p><b>Name:</b> Rahul Patel</p>
            <p><b>Trade:</b> COPA</p>
            <p><b>ITI:</b> Government ITI Dabhoi</p>
        `;

    } else {

        document.getElementById("result").innerHTML =
        "<h3>No Record Found</h3>";

    }

}

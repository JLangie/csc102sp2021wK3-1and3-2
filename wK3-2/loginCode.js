// checkCreds function for login credentials.
function checkCreds() {

    var firstName = document.getElementById("fName").value;
    var lastName = document.getElementById("lName").value;
    var badgeNumb = document.getElementById("badgeID").value;
    var fullName = firstName + " " + lastName
//Parameter for full name input. limited between 1 - 20 characters of text.
    if (fullName.length > 20 || fullName.length == 1) {
        //Displays if fullName.length < 1 or > 20, or badgeNumb < 1 or > 999.
        document.getElementById("loginStatus").innerHTML = "Full name invalid!"
    } else if (badgeNumb > 999 || badgeNumb < 1) {
        document.getElementById("loginStatus").innerHTML = "Invalid Badge Number!"
    }
    //Grants access to page if parameters are satisfied.
    else {
        alert("Acess Granted!! Welcome" + " " + fullName + "!");
        location.replace("index.html");
    }
}
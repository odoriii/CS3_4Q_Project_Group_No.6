function textarea_focus() {
    var x = document.getElementById("txt");
    var f = false;


    if (x.value == "Why support this campaign?" && f == false) {
        x.style.opacity = "1";
        x.style.color = "black";
        x.value = "";


        f = true;
        localStorage.setItem("f", f);
    }
}

function checkContactNum(){
    var conNum = document.getElementById("contactNumber").value;

    if(isNaN(conNum)){
        alert("Please enter a valid contact number"); 
        return false;
    }
}


function textarea_blur() {
    var x = document.getElementById("txt");


    if (x.value.length == 0) {
        x.style.opacity = "1";
        x.value = "Why support this campaign?";


        x.style.borderColor = "red";
        x.style.color = "red";


        document.getElementById("error").innerHTML = "Error! Required Field. ";
        document.getElementById("error").style.color = "red";


        f = localStorage.getItem("f");
        f = false;
        localStorage.setItem("f", f);
    } else {
        x.style.borderColor = "green";
        document.getElementById("error").innerHTML = " ";
    }
}


document.getElementById("signupForm").addEventListener("submit", function (event) {
    event.preventDefault();
   
    const firstName = document.getElementById("fName").value;
    const lastName = document.getElementById("lName").value;
    const sex = document.querySelector('input[name="sex"]:checked').value;
    const email = document.getElementById("email").value;
    const supportReason = document.getElementById("txt").value;


   
    localStorage.setItem("firstName", firstName);
    localStorage.setItem("lastName", lastName);
    localStorage.setItem("sex", sex);
    localStorage.setItem("email", email);
    localStorage.setItem("supportReason", supportReason);




    window.location.href = "p2.html";
});

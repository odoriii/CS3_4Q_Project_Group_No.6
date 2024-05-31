// Function to handle focus event on the textarea
function textarea_focus() {
    var x = document.getElementById("txt");
    var f = false;

// Check if the textarea contains the placeholder text and the flag is false
    if (x.value == "Why support this campaign?" && f == false) {
        x.style.opacity = "1";
        x.style.color = "black";
        x.value = "";

        // Set the flag to true and store it in local storag

        f = true;
        localStorage.setItem("f", f);
    }
}


// Function to handle blur event on the textarea

function textarea_blur() {
    var x = document.getElementById("txt");

 // Check if the textarea is empty
    if (x.value.length == 0) {
        x.style.opacity = "1";
        x.value = "Why support this campaign?";


        x.style.borderColor = "red";
        x.style.color = "red";

   // Display error message
        document.getElementById("error").innerHTML = "Error! Required Field. ";
        document.getElementById("error").style.color = "red";

 // Reset the flag to false and store it in local storage
        f = localStorage.getItem("f");
        f = false;
        localStorage.setItem("f", f);
    } else {
         // If the textarea is not empty, we set the border color to green and clear the error message
        x.style.borderColor = "green";
        document.getElementById("error").innerHTML = " ";
    }
}

// Add an event listener to the form submit event
document.getElementById("signupForm").addEventListener("submit", function (event) {
     // Prevent the form from submitting normally
    event.preventDefault();

    // Get the values from the form fields
    const firstName = document.getElementById("fName").value;
    const lastName = document.getElementById("lName").value;
    const sex = document.querySelector('input[name="sex"]:checked').value;
    const email = document.getElementById("email").value;
    const supportReason = document.getElementById("txt").value;

    // Store the values in local storage
    localStorage.setItem("firstName", firstName);
    localStorage.setItem("lastName", lastName);
    localStorage.setItem("sex", sex);
    localStorage.setItem("email", email);
    localStorage.setItem("supportReason", supportReason);


 // Redirect to the success page
    window.location.href = "p2.html";
});

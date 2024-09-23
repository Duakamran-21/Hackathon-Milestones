//Get Refrences to the form and display area
var resumeForm = document.getElementById('Resume-Form');
var myResumeDisplayElement = document.getElementById('Resume-Display');
//handle form submission
resumeForm.addEventListener('submit', function (event) {
    event.preventDefault(); // prevent page  reload
    //collect input values
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var phoneNumber = document.getElementById('Phone').value;
    var education = document.getElementById('Education').value;
    var experience = document.getElementById('Experience').value;
    var skills = document.getElementById('Skills').value;
    //generate the resume content dynamically
    var resumeHTML = "\n<h2><b> Editable Resume</b></h2>\n<h3>Personal Information</h3>\n<p><b>Name:</b><span contenteditable=\"true\">".concat(name, "</span></p>\n<p><b>Email:</b><span contenteditable=\"true\">").concat(email, "</span></p>\n<p><b>Phone Number:</b><apn contenteditable=\"true\">").concat(phoneNumber, "</span></p>\n\n<h3>Education</h3>\n<p contenteditable=\"true\">").concat(education, "</p>\n\n<h3>Experience</h3>\n<p contenteditable=\"true\">").concat(experience, "</p>\n\n<h3>Skills</h3>\n<p contenteditable=\"true\">").concat(skills, "</p>\n");
    //display the generated resume
    if (myResumeDisplayElement) {
        myResumeDisplayElement.innerHTML = resumeHTML;
    }
    else {
        console.error('The Resume Display Element Is Missing');
    }
});

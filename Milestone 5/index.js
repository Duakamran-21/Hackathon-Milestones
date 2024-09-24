var form = document.getElementById('Resume-Form');
var resumeDisplayElement = document.getElementById('resume-output');
var shareableLinkContainer = document.getElementById('shareable-link-container');
var shareableLinkElement = document.getElementById('shareable-link');
var downloadPDFButton = document.getElementById('download-pdf');
// Handle form submission
form.addEventListener('submit', function (event) {
    event.preventDefault();
    // Collect input values
    var userName = document.getElementById('username').value;
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;
    var education = document.getElementById('education').value;
    var experience = document.getElementById('experience').value;
    var skills = document.getElementById('skills').value;
    var description = document.getElementById('description').value;
    // Save form data in local storage with the username as the key
    var resumeData = {
        name: name,
        email: email,
        phone: phone,
        education: education,
        experience: experience,
        skills: skills,
        description: description,
    };
    localStorage.setItem(userName, JSON.stringify(resumeData));
    // Generate the resume dynamically
    var resumeHTML = "\n    <h2>Personal Information</h2>\n    <p><strong>Name:</strong> ".concat(name, "</p>\n    <p><strong>Email:</strong> ").concat(email, "</p>\n    <p><strong>Contact No:</strong> ").concat(phone, "</p>\n    <p><strong>Education:</strong> ").concat(education, "</p>\n    <p><strong>Experience:</strong> ").concat(experience, "</p>\n    <p><strong>Skills:</strong> ").concat(skills, "</p>\n    <p><strong>Description:</strong> ").concat(description, "</p>\n  ");
    // Display the generated resume
    resumeDisplayElement.innerHTML = resumeHTML;
    // Generate a shareable URL with the username
    var shareableURL = "".concat(window.location.origin, "?userName=").concat(encodeURIComponent(userName));
    // Display the shareable link
    shareableLinkContainer.style.display = 'block';
    shareableLinkElement.href = shareableURL;
    shareableLinkElement.textContent = shareableURL;
});
// Handle PDF download
downloadPDFButton.addEventListener('click', function () {
    window.print();
});
// Prefill the form based on the username URL
window.addEventListener('DOMContentLoaded', function () {
    var urlParams = new URLSearchParams(window.location.search);
    var userName = urlParams.get('userName');
    if (userName) {
        var savedResumeData = localStorage.getItem(userName);
        if (savedResumeData) {
            try {
                var resumeData = JSON.parse(savedResumeData);
                // Autofill form if data is found in local storage
                document.getElementById('username').value = userName;
                document.getElementById('name').value = resumeData.name;
                document.getElementById('email').value = resumeData.email;
                document.getElementById('phone').value = resumeData.phone;
                document.getElementById('education').value = resumeData.education;
                document.getElementById('experience').value = resumeData.experience;
                document.getElementById('skills').value = resumeData.skills;
                document.getElementById('description').value = resumeData.description;
            }
            catch (error) {
                console.error('Error parsing saved resume data:', error);
            }
        }
    }
});

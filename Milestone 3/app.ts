//Get Refrences to the form and display area

const resumeForm = document.getElementById('Resume-Form') as HTMLFormElement;
const myResumeDisplayElement = document.getElementById('Resume-Display') as HTMLDivElement;

//handle form submission
resumeForm.addEventListener('submit',(event:Event) => {
event.preventDefault(); // prevent page  reload

//collect input values
const name = (document.getElementById('name') as HTMLInputElement).value
const email= (document.getElementById('email') as HTMLInputElement).value
const phoneNumber = (document.getElementById('Phone') as HTMLInputElement).value
const education = (document.getElementById('Education') as HTMLTextAreaElement).value
const experience = (document.getElementById('Experience') as HTMLTextAreaElement).value
const skills = (document.getElementById('Skills') as HTMLTextAreaElement).value

//generate the resume content dynamically
const resumeHTML = `
<h2><b>Resume</b></h2>
<h3>Personal Information</h3>
<p><b>Name:</b>${name}</p>
<p><b>Email:</b>${email}</p>
<p><b>Phone Number:</b>${phoneNumber}</p>

<h3>Education</h3>
<p>${education}</p>

<h3>Experience</h3>
<p>${experience}</p>

<h3>Skills</h3>
<p>${skills}</p>
`;
//display the generated resume
if(myResumeDisplayElement) {
    myResumeDisplayElement.innerHTML = resumeHTML;
}else {
    console.error('The Resume Display Element Is Missing')
}

});


 
const form = document.getElementById('Resume-Form') as HTMLFormElement;
const resumeDisplayElement = document.getElementById('resume-output') as HTMLDivElement;
const shareableLinkContainer = document.getElementById('shareable-link-container') as HTMLDivElement;
const shareableLinkElement = document.getElementById('shareable-link') as HTMLAnchorElement;
const downloadPDFButton = document.getElementById('download-pdf') as HTMLButtonElement;

// Handle form submission
form.addEventListener('submit', (event: Event) => {
  event.preventDefault();

  // Collect input values
  const userName = (document.getElementById('username') as HTMLInputElement).value;
  const name = (document.getElementById('name') as HTMLInputElement).value;
  const email = (document.getElementById('email') as HTMLInputElement).value;
  const phone = (document.getElementById('phone') as HTMLInputElement).value;
  const education = (document.getElementById('education') as HTMLInputElement).value;
  const experience = (document.getElementById('experience') as HTMLInputElement).value;
  const skills = (document.getElementById('skills') as HTMLInputElement).value;
  const description = (document.getElementById('description') as HTMLInputElement).value;

  // Save form data in local storage with the username as the key
  const resumeData = {
    name,
    email,
    phone,
    education,
    experience,
    skills,
    description,
  };
  localStorage.setItem(userName, JSON.stringify(resumeData));

  // Generate the resume dynamically
  const resumeHTML = `
    <h2>Personal Information</h2>
    <p><strong>Name:</strong> ${name}</p>
    <p><strong>Email:</strong> ${email}</p>
    <p><strong>Contact No:</strong> ${phone}</p>
    <p><strong>Education:</strong> ${education}</p>
    <p><strong>Experience:</strong> ${experience}</p>
    <p><strong>Skills:</strong> ${skills}</p>
    <p><strong>Description:</strong> ${description}</p>
  `;

  // Display the generated resume
  resumeDisplayElement.innerHTML = resumeHTML;

  // Generate a shareable URL with the username
  const shareableURL = `${window.location.origin}?userName=${encodeURIComponent(userName)}`;

  // Display the shareable link
  shareableLinkContainer.style.display = 'block';
  shareableLinkElement.href = shareableURL;
  shareableLinkElement.textContent = shareableURL;
});

// Handle PDF download
downloadPDFButton.addEventListener('click', () => {
  window.print();
});

// Prefill the form based on the username URL
window.addEventListener('DOMContentLoaded', () => {
  const urlParams = new URLSearchParams(window.location.search);
  const userName = urlParams.get('userName');

  if (userName) {
    const savedResumeData = localStorage.getItem(userName);

    if (savedResumeData) {
      try {
        const resumeData = JSON.parse(savedResumeData);

        // Autofill form if data is found in local storage
        (document.getElementById('username') as HTMLInputElement).value = userName;
        (document.getElementById('name') as HTMLInputElement).value = resumeData.name;
        (document.getElementById('email') as HTMLInputElement).value = resumeData.email;
        (document.getElementById('phone') as HTMLInputElement).value = resumeData.phone;
        (document.getElementById('education') as HTMLInputElement).value = resumeData.education;
        (document.getElementById('experience') as HTMLInputElement).value = resumeData.experience;
        (document.getElementById('skills') as HTMLInputElement).value = resumeData.skills;
        (document.getElementById('description') as HTMLInputElement).value = resumeData.description;
      } catch (error) {
        console.error('Error parsing saved resume data:', error);
      }
    }
  }
});

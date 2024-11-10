function previewResume() {
const name = document.getElementById('name').value;
const jobTitle = document.getElementById('job-title').value;
const contact = document.getElementById('contact').value;
const address = document.getElementById('address').value;
const profile = document.getElementById('profile').value;
const experience = document.getElementById('experience').value;
const education = document.getElementById('education').value;
const skills = document.getElementById('skills').value;
const hobbies = document.getElementById('hobbies').value;
const languages = document.getElementById('languages').value;

// Update resume preview with form values
document.getElementById('resumeName').textContent = name;
document.getElementById('resumeJobTitle').textContent = jobTitle;
document.getElementById('resumeContact').textContent = contact;
document.getElementById('resumeaddress').textContent = address;
document.getElementById('resumeprofile').textContent = profile;
document.getElementById('resumeExperience').textContent = experience;
document.getElementById('resumeEducation').textContent = education;
document.getElementById('resumeSkills').textContent = skills;
document.getElementById('resumehobbies').textContent = hobbies;
document.getElementById('resumelanguages').textContent = languages;

// Show the resume container
document.getElementById('resumeContainer').style.display = 'block';
}

function downloadResume() {
// Triggers the print dialog for saving as PDF
window.print();
}
function previewResume() {
    var name = document.getElementById('name').value;
    var jobTitle = document.getElementById('job-title').value;
    var contact = document.getElementById('contact').value;
    var address = document.getElementById('address').value;
    var profile = document.getElementById('profile').value;
    var experience = document.getElementById('experience').value;
    var education = document.getElementById('education').value;
    var skills = document.getElementById('skills').value;
    var hobbies = document.getElementById('hobbies').value;
    var languages = document.getElementById('languages').value;
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

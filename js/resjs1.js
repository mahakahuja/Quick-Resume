const form = document.querySelector('form');
const resume = document.getElementById('resume');

form.addEventListener('submit', (event) => {
event.preventDefault();

const name = document.getElementById('name').value;
const address = document.getElementById('address').value;
const phone = document.getElementById('phone').value;
const email = document.getElementById('email').value;
const summary = document.getElementById('summary').value;
const experience = document.getElementById('experience').value;
const skills = document.getElementById('skills').value;
const education = document.getElementById('education').value;
const activities = document.getElementById('activities').value;

const resumeContent = `
<h2>${name}</h2>
<p>${address}</p>
<p>${phone}</p>
<p>${email}</p>
<h3>Summary</h3>
<p>${summary}</p>
<h3>Experience</h3>
<p>${experience}</p>
<h3>Skills</h3>
<p>${skills}</p>
<h3>Education</h3>
<p>${education}</p>
<h3>Activities</h3>
<p>${activities}</p>
`;

resume.innerHTML = resumeContent;
});

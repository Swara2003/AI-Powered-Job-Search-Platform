// Welcome message
const user = localStorage.getItem("user");
if (user) {
  document.getElementById("welcomeMessage").textContent = `👋 Welcome, ${user}! Ready to find your next opportunity?`;
} else {
  window.location.href = "login.html";
}

// Logout
document.getElementById("logoutBtn").addEventListener("click", () => {
  localStorage.removeItem("user");
  window.location.href = "login.html";
});

// Job data
const jobs = [
  { title: "Frontend Developer", location: "Remote", experience: "2+ years", role: "developer" },
  { title: "UI Designer", location: "Mumbai", experience: "1+ years", role: "designer" },
  { title: "Data Analyst", location: "Bangalore", experience: "3+ years", role: "analyst" },
  { title: "AI Researcher", location: "Remote", experience: "5+ years", role: "research" },
  { title: "Product Manager", location: "Mumbai", experience: "4+ years", role: "manager" }
];

// Filter logic
document.getElementById("searchInput").addEventListener("input", filterJobs);
document.getElementById("locationFilter").addEventListener("change", filterJobs);

function filterJobs() {
  const search = document.getElementById("searchInput").value.toLowerCase();
  const location = document.getElementById("locationFilter").value;
  const jobList = document.getElementById("job-list");

  const filtered = jobs.filter(job =>
    job.title.toLowerCase().includes(search) &&
    (location === "" || job.location === location)
  );

  jobList.innerHTML = "";
  filtered.forEach(job => {
    const jobCard = document.createElement("div");
    jobCard.innerHTML = `
      <h3>${job.title}</h3>
      <p><strong>Location:</strong> ${job.location}</p>
      <p><strong>Experience:</strong> ${job.experience}</p>
    `;
    jobList.appendChild(jobCard);
  });
}

// Initial load
filterJobs();
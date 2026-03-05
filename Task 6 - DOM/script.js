const jobs = [
  {
    logo: "./Img/Amazon.webp",
    company: "Amazon",
    postedAgo: "5 days ago",
    role: "Senior UI/UX Designer",
    tags: ["Part-Time", "Senior Level"],
    salary: "$120/hr",
    location: "Mumbai, India",
  },
  {
    logo: "./Img/Google.webp",
    company: "Google",
    postedAgo: "30 days ago",
    role: "Graphic Designer",
    tags: ["Part-Time", "Flexible Schedule"],
    salary: "$150–220k",
    location: "Kochi, India",
  },
  {
    logo: "./Img/Dribbble.webp",
    company: "Dribbble",
    postedAgo: "18 days ago",
    role: "Senior Motion Designer",
    tags: ["Contract", "Remote"],
    salary: "$85/hr",
    location: "Chennai, India",
  },
  {
    logo: "./Img/Figma.webp",
    company: "Figma",
    postedAgo: "5 days ago",
    role: "UX Designer",
    tags: ["Full-Time", "In office"],
    salary: "$200–250k",
    location: "Bangalore, India",
  },
  {
    logo: "./Img/Airbnb.webp",
    company: "Airbnb",
    postedAgo: "5 days ago",
    role: "Junior UI/UX Designer",
    tags: ["Contract", "Remote"],
    salary: "$100/hr",
    location: "Delhi, India",
  },
  {
    logo: "./Img/Apple.webp",
    company: "Apple",
    postedAgo: "5 days ago",
    role: "Graphic Designer",
    tags: ["Full-Time", "Flexible Schedule"],
    salary: "$85–120k",
    location: "Kerala, India",
  }
];

var sum = '';

jobs.forEach(function (elem) {
    sum = sum + `<div class="card">
        <img src="${elem.logo}">
        <h5>${elem.company} <span id="postedAgo">${elem.postedAgo}</span></h5>
        <h4>${elem.role}</h4>
        <div class="tags">
            <p>${elem.tags[0]}</p>
            <p>${elem.tags[1]}</p>
        </div>
        <hr color="#edecec">
        <div class="card-footer">
            <h5>${elem.salary} <br><span>${elem.location}</span></h5>
            <button>Apply now</button>
        </div>
    </div>`
});

var body = document.querySelector('body')
body.innerHTML = sum;
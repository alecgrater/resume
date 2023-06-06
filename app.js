const data = {
    name: "Alec Grater-Cafiero",
    email: "AlecGrater@gmail.com",
    phone: "(978) 460-4189",
    address: "1450 15th St, San Francisco, CA 94103",
    linkedin: "https://www.linkedin.com/in/alecgrater/",
    summary: "Enthusiastic and jovial data engineer with a strong track record of conducting system and process improvements.",
    workExperience: [
      {
        position: "Data Engineer",
        company: "Apple",
        timeframe: "January 2020 - Present",
        responsibilities: [
          "Wrote and maintained documentation suite for primary data collection tool across all software engineering teams",
          "Built several internal automation tools, cutting down process time by 75%",
          "Maintained, monitored and troubleshot new collection enablement pipeline across 700M apple devices to coincide with fast-moving software release cycle"
        ]
      },
      {
        position: "Technical Expert",
        company: "Apple",
        timeframe: "November 2018 - January 2020",
        responsibilities: [
          "Troubleshot client Apple devices with a 95% NPS satisfaction rating",
          "Performed repairs on multiple different iPhone components such as display, battery, camera, and taptic engine",
          "Served as a mentor to onboard new employees and facilitate training"
        ]
      },
      {
        position: "Assistant Manager",
        company: "Hollister Co",
        timeframe: "Jan 2017 - Jan 2018",
        responsibilities: [
          "Supervised team of 40+ employees",
          "Tracked a variety of business metrics to drive sales",
          "Interviewed, hired, and trained new staff to deliver outstanding customer service and develop team camaraderie"
        ]
      },
      {
        position: "Content Creator",
        company: "YouTube",
        timeframe: "Apr 2008 - 2014",
        responsibilities: [
          "Managed YouTube Channel: Smartalec8125",
          "Created and monetized instructional 'how-to' videos pertaining to interests such as technology and gaming",
          "Achieved 3 million views and 2700 subscribers"
        ]
      }
    ],
    skills: [
      "Python",
      "SQL",
      "Splunk",
      "Impala",
      "Customer and Client Relations",
    ],
    education: [
      {
        major: "Economics",
        school: "University of Massachusetts Amherst",
        timeframe: "2016",
        additionalInfo: [
          "Minor: Information Technology",
          "Performer and Technical Leader (website design/maintenance), UMass Comedy League",
          "Lieutenant Governor, Student Government"
        ]
      }
    ]
  };
  

// Helper function to populate the heading section
function populateHeading() {
    const nameElement = document.getElementById("name");
    nameElement.textContent = data.name;
  
    const contactInfoElement = document.getElementById("contact-info");
    const contactInfo = [
      data.email,
      data.phone,
      data.address,
      data.linkedin
    ];
  
    contactInfoElement.textContent = contactInfo.join(" | ");
  }
  
  
  
  
  // Helper function to populate the summary section
  function populateSummary() {
    const summaryElement = document.getElementById("summary");
    summaryElement.textContent = data.summary;
  }
  
// Helper function to populate the work experience section
function populateWorkExperience() {
    const workExperienceElement = document.getElementById("work-experience");
    data.workExperience.forEach(experience => {
      const heading = document.createElement("h3");
      heading.textContent = `${experience.position} | ${experience.company} | ${experience.timeframe}`;
      workExperienceElement.appendChild(heading);
  
      const responsibilitiesList = document.createElement("ul");
      experience.responsibilities.forEach(responsibility => {
        const responsibilityItem = document.createElement("li");
        responsibilityItem.textContent = responsibility;
        responsibilitiesList.appendChild(responsibilityItem);
      });
  
      workExperienceElement.appendChild(responsibilitiesList);
    });
  }
  
  
  
  

  

  // Helper function to populate the skills section
function populateSkills() {
    const skillsElement = document.getElementById("skills");
    skillsElement.textContent = data.skills.join(", ");
  }  
  
// Helper function to populate the education section
function populateEducation() {
    const educationElement = document.getElementById("education");
    data.education.forEach(education => {
      const li = document.createElement("li");
  
      const heading = document.createElement("h3");
      heading.textContent = `${education.major} | ${education.school} | ${education.timeframe}`;
      li.appendChild(heading);
  
      const additionalInfoList = document.createElement("ul");
      education.additionalInfo.forEach(info => {
        const infoItem = document.createElement("li");
        infoItem.textContent = info;
        additionalInfoList.appendChild(infoItem);
      });
      li.appendChild(additionalInfoList);
  
      educationElement.appendChild(li);
    });
  }
  

  
  // Populate the resume sections
  function populateResume() {
    populateHeading();
    populateSummary();
    populateWorkExperience();
    populateSkills();
    populateEducation();
  }
  
  // Call the populateResume function
  populateResume();
  
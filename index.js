headingTabClick = event => {
  document.getElementById("aboutMeBlock").style.display = "none";
  document.getElementById("experienceBlock").style.display = "none";
  document.getElementById("projectsBlock").style.display = "none";
  document.getElementById("skillsBlock").style.display = "none";
  const headings = document.getElementsByClassName("headingText");
  const tabClicked = event.children[0];

  for (var i = 0; i < headings.length; i++) {
    headings[i].className = "headingText";
  }

  switch (tabClicked.innerText) {
    case "experience":
      tab = document.getElementById("experienceBlock").style.display = "block";
      tabClicked.className = "headingText activeHeading";
      break;

    case "about me":
      document.getElementById("aboutMeBlock").style.display = "block";
      tabClicked.className = "headingText activeHeading";
      break;

    case "skills":
      document.getElementById("skillsBlock").style.display = "block";
      tabClicked.className = "headingText activeHeading";
      break;

    case "projects":
      document.getElementById("projectsBlock").style.display = "block";
      tabClicked.className = "headingText activeHeading";
      break;

    default:
      document.getElementById("aboutMeBlock").style.display = "block";
      document.getElementById("experienceBlock").style.display = "none";
      document.getElementById("projectsBlock").style.display = "none";
      document.getElementById("skillsBlock").style.display = "none";
      break;
  }
};

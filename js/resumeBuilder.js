var data = "%data%";


var bio = {
  "name": "Tagreed Saeed",
  "role": "Web Designer",
  "contacts": {
    "mobile": "966566617509",
    "email": "Tagreedalshammari@gmail.com",
    "github": "639dev",
    "twitter": "639dev",
    "location": "Riyadh"
  },
  "welcomeMessage": "Hello there!",
  "skills": ["Fast Learner","Software Engineering","Front End Development"],
  "biopic": "images/fry.jpg"
};


var education = {
  "schools": [{
    "name": "Princess Noura University",
    "degree": "BA",
    "location": "Riyadh, Saudi Arabia",
    "majors": ["Computer Sciences"],
    "dates": "2017"
  }],
  "onlineCourses": [{
    "title": "Front End Developer Nano Degree",
    "school": "Udacity",
    "dates": "2017",
    "url": "https://www.udacity.com"
  }]
};


var projects = {
  "projects": [
    {
      "title": "Animal Trading Card",
      "dates": "2017",
      "description": "lerom dummy text of the printing and typesetting industry. "+
        "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, "+
        "when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      "images": ["images/project.png","images/project.png"]
    }
  ]
};


var work = {
  "jobs": [
    {
      "employer": "CJ Company",
      "title": "Software Engineer",
      "location": "Seoul",
      "dates": "2017",
      "description": "lerom dummy text of the printing and typesetting industry."+
        " Lorem Ipsum has been the industry's standard dummy text ever since "+
        "the 1500s, when an unknown printer took a galley of type and scrambled "+
        "it to make a type specimen book"
    }
  ]
};


bio.display = function() {
  var name = HTMLheaderName.replace(data,bio.name);
  var role = HTMLheaderRole.replace(data,bio.role);
  var pic = HTMLbioPic.replace(data,bio.biopic);
  var msg = HTMLwelcomeMsg.replace(data,bio.welcomeMessage);

  $('#header').prepend(role);
  $('#header').prepend(name);

  var formattedMobile = HTMLmobile.replace(data,bio.contacts.mobile);
  var formattedEmail = HTMLemail.replace(data,bio.contacts.email);
  var formattedGithub = HTMLgithub.replace(data,bio.contacts.github);
  var formattedTwitter = HTMLtwitter.replace(data,bio.contacts.twitter);
  var formattedCLocation = HTMLlocation.replace(data,bio.contacts.location);

  $("#topContacts, #footerContacts").append(formattedMobile,formattedEmail,formattedGithub,
    formattedTwitter,formattedCLocation);



  $('#header').append(msg,pic);

  if(bio.skills.length > 0)
  { 
    $("#header").append(HTMLskillsStart);
    for(var i = 0 ; i < bio.skills.length ; i++ ){
      var formatedSkill = HTMLskills.replace(data,bio.skills[i]);
      $("#skills").append(formatedSkill);
    }
  }
};


education.display = function(){
  /* schools */
  var formattedSchoolName = HTMLschoolName.replace(data,education.schools[0].name);
  var formattedSchoolDegree = HTMLschoolDegree.replace(data,education.schools[0].degree);
  var formattedLocation = HTMLschoolLocation.replace(data, education.schools[0].location);
  var formattedMajor = HTMLschoolMajor.replace(data, education.schools[0].majors);
  var formattedDate = HTMLschoolDates.replace(data,education.schools[0].dates);

  $('#education').append(HTMLschoolStart);
  $('.education-entry').append(formattedSchoolName + formattedSchoolDegree ,formattedDate,formattedLocation,formattedMajor);


  /* Online Courses */
  var formattedOnlineCourseTitle = HTMLonlineTitle.replace(data,education.onlineCourses[0].title);
  var formattedOnlineSchool = HTMLonlineSchool.replace(data,education.onlineCourses[0].school);
  var formattedOnlineCourseDate = HTMLonlineDates.replace(data, education.onlineCourses[0].dates);
  var formattedUrl = HTMLonlineURL.replace(data, education.onlineCourses[0].url);

  $('.education-entry').append(HTMLonlineClasses,formattedOnlineCourseTitle +
   formattedOnlineSchool ,formattedOnlineCourseDate,formattedUrl);
};


projects.display = function() {
  for (var project=0 ; project<projects.projects.length ; project++) {
    $("#projects").append(HTMLprojectStart);
    var formattedTitle = HTMLprojectTitle.replace(data,projects.projects[project].title);
    var formattedDates = HTMLprojectDates.replace(data,projects.projects[project].dates);
    var formattedDescription = HTMLprojectDescription.replace(data,projects.projects[project].description);
    $(".project-entry:last").append(formattedTitle,formattedDates,formattedDescription);

    for(var j=0 ; j<projects.projects[project].images.length ; j++)
    {
      var formattedImage = HTMLprojectImage.replace(data, projects.projects[project].images[j]);
      $(".project-entry:last").append(formattedImage);
    }
  }
};


work.display = function(){
  $('#workExperience').append(HTMLworkStart);
    for(var i=0;i<work.jobs.length;i++)
    {
    var employer = HTMLworkEmployer.replace(data,work.jobs[i].employer);
    var title = HTMLworkTitle.replace(data,work.jobs[i].title);
    var location = HTMLworkLocation.replace(data,work.jobs[i].location);
    var date = HTMLworkDates.replace(data,work.jobs[i].dates);
    var description = HTMLworkDescription.replace(data,work.jobs[i].description);
    $('.work-entry').append(employer + title ,date,location,description);
    }
};


bio.display();
education.display();
projects.display();
work.display();


$('#mapDiv').append(googleMap);


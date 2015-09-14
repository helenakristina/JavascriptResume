var bio = {
	"name": "Helena Lucia",
	"role": "Software Developer",
	"contactInfo": {
		"email": "hklucia@gmail.com",
		"cell": "(360)907-0702",
		"github": "helenakristina",
		"location": "Vancouver, Washington"
	},
	"bioPic": "./images/headshot2.jpg",
	"URL": "http://www.helena-lucia.com",
	"websiteName": "helena-lucia.com",
	"welcomeMessage": "Responsive. Accessible. Data-driven.",
	"skills": [
	"Python",
	"Javascript",
	"HTML",
	"Hadoop",
	"Neo4J",
	"C#",
	"SQL Server",
	"T-SQL"

	]
};


var work = {
	"jobs": [
	{
		"employer": "Intel Corporation",
		"title": "Application Developer",
		"location": "Hillsboro, Oregon",
		"datesWorked": "June, 2014 - present",
		"description": "Wrote great code."
	},
	{
		"employer": "ThinkFast CRM",
		"title": "Software Developer",
		"location": "Vancouver, Washington",
		"datesWorked": "August, 2013 - May, 2014",
		"description": "Fixed atrocious code."
	},
	{
		"employer": "Intel Corporation",
		"title": "Software Engineer Intern",
		"location": "Hillsboro, Oregon",
		"datesWorked": "May, 2013 - August, 2013",
		"description": "Made the GPS work."
	},
	{
		"employer": "Intel Corporation",
		"title": "Software Engineer Intern",
		"location": "Chandler, Arizona",
		"datesWorked": "May, 2012 - August, 2012",
		"description": "Made a resume app."
	},
	{
		"employer": "StarFire Development",
		"title": "Software Engineer",
		"location": "Vancouver, Washington",
		"datesWorked": "",
		"description": ""
	},
	{
		"employer": "Google Summer of Code",
		"title": "Software Engineer Intern",
		"location": "Vancouver, Washington",
		"datesWorked": "",
		"description": ""
	},
	{
		"employer": "Washington State University Vancouver",
		"title": "Tutor/Researcher",
		"location": "Vancouver, Washington",
		"datesWorked": "",
		"description": ""
	},
	{
		"employer": "TwinStar Credit Union",
		"title": "Financial Advisor",
		"location": "Vancouver, Washington",
		"datesWorked": "",
		"description": ""
	}
	]
};


var projects = {
	"projects": [
	{
		"title": "Build a Portfolio Site",
		"datesWorked": "June, 2015-July, 2015",
		"description": "Started a placeholder site for all my awesome (future) portfolio items. ",
		"images": ["https://placehold.it/350x150", "https://placehold.it/350x150","https://placehold.it/350x150"]
	},
	{
		"title": "Created a Spaceship",
		"datesWorked": "January, 2020 - February, 2025",
		"description": "Does creating a spaceship need a description?",
		"images": ["https://placehold.it/350x150", "https://placehold.it/350x150","https://placehold.it/350x150"]
	},
	{
		"title": "Landed a woman on Mars.",
		"datesWorked": "January, 2025 - February, 2031",
		"description": "See above.",
		"images": ["https://placehold.it/350x150", "https://placehold.it/350x150","https://placehold.it/350x150"]
	}
	]
};

var education = {
	"schools": [
	{
		"name": "Washington State University Vancouver",
		"major": "Computer Science",
		"degree": "Bachelor of Science",
		"gpa": "3.5",
		"graduationYear": "2014",
		"awards": [
		"Chancellor's Award for Student Achievement",
		"Cum Laude"
		],
		"relevantCourses": [
		"Calculus I-III",
		"Artificial Intelligence",
		"High Performance Computing",
		"Game Design",
		"Computer Security",
		"Systems Programming"
		],
		"location":"Salmon Creek, Washington",
		"datesAttended":"2010-May, 2014"

	}
	],
	"onlineCourses": [
	{
		"title": "Intro to HTML and CSS",
		"school": "Udacity",
		"datesAttended": "June,2015-August,2015",
		"url": "https://www.udacity.com/course/progress#!/c-ud304-nd"
	},
	{
		"title": "Responsive Web Design Fundamentals",
		"school": "Udacity",
		"datesAttended": "June,2015-August,2015",
		"url": "https://www.udacity.com/course/progress#!/c-ud893-nd"
	},
	{
		"title": "Responsive Images",
		"school": "Udacity",
		"datesAttended": "July,2015-current",
		"url": "http://www.google.com"
	},
	{
		"title": "Javascript Basics",
		"school": "Udacity",
		"datesAttended": "July,2015-current",
		"url": "http://www.google.com"
	}
	]
};

bio.display = function(){
	var formattedName = HTMLheaderName.replace("%data%", bio.name);
	var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
	var formattedEmail = HTMLemail.replace("%data%", bio.contactInfo.email);
	var formattedPhone = HTMLmobile.replace("%data%", bio.contactInfo.cell);
	var formattedURL = HTMLwebsite.replace("#", bio.URL).replace("%data%", bio.websiteName);
	var formattedPictureURL = HTMLbioPic.replace("%data%", bio.bioPic);
	var formattedWelcome = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);

	$("#header").prepend(formattedRole);
	$("#header").prepend(formattedName);
	$("#header").prepend(formattedPictureURL);
	$("#topContacts").append(formattedEmail);
	$("#topContacts").append(formattedPhone);
	$("#topContacts").append(formattedURL);
	$("#header").append(formattedWelcome);

	if (bio.skills.length > 0){
		$("#header").append(HTMLskillsStart);
		for ( skill in bio.skills) {
			var formattedSkill = HTMLskills.replace("%data%", bio.skills[skill]);
			$("#skills").append(formattedSkill);
		};
	};

}

work.display = function(){
	if (work.jobs.length > 0){
		for (job in work.jobs){
			$("#workExperience").append(HTMLworkStart);
			var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
			var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
			var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].datesWorked);
			var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
			var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
			var formattedEmployer = formattedEmployer + formattedTitle + formattedDates + formattedLocation
			+ formattedDescription;
			$(".work-entry:last").append(formattedEmployer);
		};
	};
}

projects.display = function(){
	if (projects.projects.length > 0){
		for (project in projects.projects){
			$("#projects").append(HTMLprojectStart);
			var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
			var formattedDates = HTMLworkDates.replace("%data%", projects.projects[project].datesWorked);
			var formattedDescription = HTMLworkDescription.replace("%data%", projects.projects[project].description);
			var formattedProject = formattedTitle + formattedDates + formattedDescription;
			if (projects.projects[project].images.length > 0){
				for (image in projects.projects[project].images){
					var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[project].images[image]);
					formattedProject += formattedImage;
				};
			};
			$(".project-entry:last").append(formattedProject);
		};
	};
};

education.display = function() {
	if (education.schools.length > 0){
		for (school in education.schools){
			$("#education").append(HTMLschoolStart);
			var formattedSchoolName = HTMLschoolName.replace("%data%", education.schools[school].name);
			var formattedSchoolDegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);
			var formattedSchoolMajor = HTMLschoolMajor.replace("%data%", education.schools[school].major);
			var formattedSchoolDates = HTMLschoolDates.replace("%data%", education.schools[school].datesAttended);
			var formattedSchoolLocation = HTMLschoolLocation.replace("%data%", education.schools[school].location);
			var formattedSchool = formattedSchoolName + formattedSchoolDegree + formattedSchoolDates +
			formattedSchoolLocation + formattedSchoolMajor;
			$(".education-entry:last").append(formattedSchool);
		}
	}
	if (education.onlineCourses.length > 0){
		$("#education").append(HTMLonlineClasses);
		$("#education").append(HTMLschoolStart);

		for (course in education.onlineCourses){
			var formattedTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[course].title);
			var formattedSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[course].school);
			var formattedDates = HTMLonlineDates.replace("%data%", education.onlineCourses[course].datesAttended);
			var formattedURL = HTMLonlineURL.replace("%data%", education.onlineCourses[course].title).replace("#", education.onlineCourses[course].url);
			var formattedCourse = formattedTitle + formattedSchool + formattedDates + formattedURL;
			$(".education-entry:last").append(formattedCourse);
		}
	}

}

bio.display();
work.display();
projects.display();
education.display();

function inName(name){
	var newName = "";
	var splitName = name.trim().split(" ");
	for (var i = 0; i < splitName.length; i++){
		if (i != 0) newName += " ";
		if (i === (splitName.length - 1)){
			var upperName = splitName[i].toUpperCase();
			newName += upperName;
		}
		else{
			var thisName = splitName[i].charAt(0).toUpperCase() + splitName[i].slice(1);
			newName += thisName;
		}
	}
	return newName;
}

$("#main").append(internationalizeButton);
$("#mapDiv").append(googleMap);


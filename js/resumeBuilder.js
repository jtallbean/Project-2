$(document).click(function(loc) {
	var x = loc.pageX;
	var y = loc.pageY;
	logClicks(x, y);
});

var bio = {
	"name": "Lord Cthulhu",
	"role": "Doer of subonscious things",
	"contacts": {
		"mobile": "1-800-1337",
		"email": "cthulhu1337@aol.com",
		"github": "cthulhu",
		"twitter": "@cthulhu",
		"location": "North Carolina"
	},
	"welcomeMessage": "Welcome to my resume!",
	"skills": [
		"Web Design",
		"Awesomeness",
		"Sleeping",
		"Eating",
		"Reading"
	],
	"biopic": "http://placehold.it/350x350"
};

bio.display = function() {
	var formattedName = HTMLheaderName.replace("%data%", bio.name);
	var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
	var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
	var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
	var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
	var formattedtwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
	var formattedlocation = HTMLlocation.replace("%data%", bio.contacts.location);
	var formattedBioPic = HTMLbioPic.replace("%data%", bio.biopic);
	var formattedMessage = HTMLWelcomeMsg.replace("%data%", bio.welcomeMessage);

	$("#header").prepend(formattedRole);
	$("#header").prepend(formattedName);
	$("#topContacts").append(formattedMobile);
	$("#topContacts").append(formattedEmail);
	$("#topContacts").append(formattedGithub);
	$("#topContacts").append(formattedtwitter);
	$("#topContacts").append(formattedlocation);
	$("#header").append(formattedBioPic);
	$("#header").append(formattedMessage);
	$("#footerContacts").append(formattedMobile);
	$("#footerContacts").append(formattedEmail);
	$("#footerContacts").append(formattedGithub);
	$("#footerContacts").append(formattedtwitter);
	$("#footerContacts").append(formattedlocation);

	if (bio.skills.length > 0) {
		$("#header").append(HTMLskillsStart);

		var formattedSkill = HTMLskills.replace("%data%", bio.skills[0]);
		$("#skills").append(formattedSkill);
		var formattedSkill = HTMLskills.replace("%data%", bio.skills[1]);
		$("#skills").append(formattedSkill);
		var formattedSkill = HTMLskills.replace("%data%", bio.skills[2]);
		$("#skills").append(formattedSkill);
		var formattedSkill = HTMLskills.replace("%data%", bio.skills[3]);
		$("#skills").append(formattedSkill);
		var formattedSkill = HTMLskills.replace("%data%", bio.skills[4]);
		$("#skills").append(formattedSkill);
	}
};

var work = {
	"jobs": [
		{
			"employer": "Government",
			"title": "Person who acts busy",
			"location": "North Carolina",
			"dates": "2005-Present",
			"description": "Acting busy and pretending to answer the phone"
		},
		{
			"employer": "Employer",
			"title": "Worker",
			"location": "South Carolina",
			"dates": "2000-Present",
			"description": "Doing things"
		}
	]
};

work.display = function() {
	for (job in work.jobs) {
		$("#workExperience").append(HTMLworkStart);

		var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);		
		var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
		var formattedEmployerTitle = formattedEmployer + formattedTitle;
		$(".work-entry:last").append(formattedEmployerTitle);

		var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
		$(".work-entry:last").append(formattedDates);

		var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
		$(".work-entry:last").append(formattedDescription);
	}
};

var projects = {
	"projects": [
		{
			"title": "Resume",
			"dates": "2015",
			"description": "Interactive resume built using javascript and jQuery",
			"images": [
				"http://placehold.it/250x250",
				"http://placehold.it/250x250"
			]
		}
	]
};

projects.display = function() {
	for (project in projects.projects) {
		$("#projects").append(HTMLprojectStart);

		var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
		$(".project-entry:last").append(formattedTitle);

		var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
		$(".project-entry:last").append(formattedDates);

		var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
		$(".project-entry:last").append(formattedDescription);

		if (projects.projects[project].images.length > 0) {
			for (image in projects.projects[project].images) {
				var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[project].images[image]);
				$(".project-entry:last").append(formattedImage);
			}
		}
	}
};

var education = {
	"schools": [
		{
			"name": "Learning Place",
			"location": "North Carolina",
			"degree": "Masters",
			"majors": ["CS"],
			"dates": 2018,
			"url": "www.pchs.com"
		},
		{
			"name": "Knowledge Fountain",
			"location": "North Carolina",
			"degree": "BA",
			"majors": ["CS"],
			"dates": 2014,
			"url": "www.mpms.com"
		}
	],
	"onlineCourses": [
		{
			"title": "Front End Web Developer",
			"school": "Udacity",
			"date": 2015,
			"url": "www.udacity.com"
		}
	]
};

education.display = function() {
	for (school in education.schools) {
		$("#education").append(HTMLschoolStart);

		var formattedName = HTMLschoolName.replace("%data%", education.schools[school].name);
		var formattedDegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);
		var formattedNameDegree = formattedName + formattedDegree;
		$(".education-entry:last").append(formattedNameDegree);

		var formattedLocation = HTMLschoolLocation.replace("%data%", education.schools[school].location);
		$(".education-entry:last").append(formattedLocation);

		var formattedDates = HTMLschoolDates.replace("%data%", education.schools[school].dates);
		$(".education-entry:last").append(formattedDates);

		var formattedMajors = HTMLschoolMajor.replace("%data%", education.schools[school].majors);
		$(".education-entry:last").append(formattedMajors);
	}
	if (education.onlineCourses.length > 0) {
		$(".education-entry:last").append(HTMLonlineClasses);

		for (onlineCourse in education.onlineCourses) {
			var formattedTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[onlineCourse].title);
			var formattedSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[onlineCourse].school);
			var formattedSchoolTitle = formattedTitle + formattedSchool;
			$(".education-entry:last").append(formattedSchoolTitle);

			var formattedDates = HTMLonlineDates.replace("%data%", education.onlineCourses[onlineCourse].date);
			$(".education-entry:last").append(formattedDates);

			var formattedURL = HTMLonlineURL.replace("%data%", education.onlineCourses[onlineCourse].url);
			$(".education-entry:last").append(formattedURL);
		}
	}
};

bio.display();
work.display();
projects.display();
education.display();

$("#mapDiv").append(googleMap);

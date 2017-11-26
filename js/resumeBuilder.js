


var skills = ["Programming languages :", "C++","HTML","JS"];

var bio = { "name" : "Daler Abdullaev",
			"role" : "Programmer",
			"contacts" :{ "phone" : "998(90)745-32-23",
							"email" : "Daler@gmail.com",
							"location" : "Kuddus, Mirabad, Tashkent, Uzbekistan"

						},
			"message" : "Take responsibility for your actions or stop acting altogether",
			"skills" : skills,
			"pic" : "images/Daler.jpg"
		};



var formattedName = HTMLheaderName.replace("%data%", bio.name);
var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.phone);
var formattedAdress = HTMLlocation.replace("%data%", bio.contacts.location);
var formattedMessage = HTMLwelcomeMsg.replace("%data%", bio.message);
var formattedPic = HTMLbioPic.replace("%data%", bio.pic);
$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);
$("#topContacts").append(formattedEmail);
$("#topContacts").append(formattedMobile);
$("#topContacts").append(formattedAdress);
$("#header").append(formattedMessage);
$("#header").prepend(formattedPic);
if(bio.skills.length > 0)
{
	$("#header").append(HTMLskillsStart);
	var formattedSkill = HTMLskills.replace("%data%", bio.skills[0]);
	$("#skills").append(formattedSkill);

	var formattedSkill = HTMLskills.replace("%data%", bio.skills[1]);
	$("#skills").append(formattedSkill);

	var formattedSkill = HTMLskills.replace("%data%", bio.skills[2]);
	$("#skills").append(formattedSkill);

	var formattedSkill = HTMLskills.replace("%data%", bio.skills[3]);
	$("#skills").append(formattedSkill);
}


var education ={ "schools" : [
		{ "name" : "175th school",
			"location" : "Sariko'l, Mirabad, Tashkent",
			"duration" : "2004-2010"
		},
		{
			"name" : "Mirabad Professional Industry collage",
			"location": "Sariko'l str, Mirabad, Tashkent",
			"duration": "2010-2013"
		},
		{
			"name" : "Inha University",
			 "location" : "9, Ziyolilar, Mirzo Ulugbek district, Tashkent",
			 "duration": "2015-2019",
			 "majors" : ["Information and Communication Engineering"],
			 "degree" : "Bachelor"

		}
							],
		"onlineCourses": [
		{
			"title": "JavaScript basics",
			"school": "Udacity",
			"dates" : 2016
		},
		{
			"title": "HTML & CSS intro",
			"school" : "Udacity",
			"dates" : 2016
		}	]

};
var formattedEducationName = HTMLschoolName.replace("%data%", education.schools[2].name);
var formattedEducationLocation = HTMLschoolLocation.replace("%data%", education.schools[2].location);
var formattedEducationDegree = HTMLschoolDegree.replace("%data%", education.schools[2].degree);
var formattedEducationMajor = HTMLschoolMajor.replace("%data%", education.schools[2].majors);
var formattedEducationDuration = HTMLschoolDates.replace("%data%", education.schools[2].duration);
var formattedEducationURL = HTMLonlineURL.replace("%data%",education.schools[2].url);
$("#education").append(HTMLschoolStart);
$(".education-entry:last").append(formattedEducationName);
$(".education-entry:last").append(formattedEducationDuration);
$(".education-entry:last").append(formattedEducationMajor);
$(".education-entry:last").append(formattedEducationDegree);
$(".education-entry:last").append(formattedEducationLocation);



var work = {
	"jobs":[
		{
			"employer" : "Marshall Pools",
			"title": "Plumber",
			"dates": "2010 - currently",
			"location":"Building sites, Uzbekistan",
			"description": "I help my father when I have free time to design swimming pools' cleaning system"
		},
		{
			"employer": "YangiAbad",
			"title" : "Pool boy",
			"dates": "2014-2016",
			"location": "Kuyi talarik str, Tashkent, Uzbekistan",
			"description": "I have been hired to take care of the swimming pool that we had built"
		}
	]
}

function displayWorkInfo()
{

	for(job in work.jobs) {
		$("#workExperience").append(HTMLworkStart);

		var formattedEmployer = HTMLworkEmployer.replace("%data%",work.jobs[job].employer);
		var formattedTitle = HTMLworkTitle.replace("%data%",work.jobs[job].title);
		var formattedWorkDates = HTMLworkDates.replace("%data%",work.jobs[job].dates);
		var formattedDescription = HTMLworkDescription.replace("%data%",work.jobs[job].description);
		var formattedWorkLocation = HTMLworkLocation.replace("%data%",work.jobs[job].location);
		var formattedEmployerTitle = formattedEmployer+formattedTitle;

		$(".work-entry:last").append(formattedEmployerTitle);
		$(".work-entry:last").append(formattedWorkDates);
		$(".work-entry:last").append(formattedWorkLocation);
		$(".work-entry:last").append(formattedDescription);
	}
}


var projects = {
	"myProjects":[
			{"title" : "First Web site",
			 "dates" : "2015",
			 "description" : "The project was given in first semester and our professor wanted us to make our own webSites"
			},
			{
				"title" : "Creative Engineering",
				"dates" : "2016",
				"description": "Our final project for this subject was to design best solar powered car and it had to run 30 meters in 20 seconds, while our car managed to finish race in 11.87 seconds"
			}

		]
}

displayWorkInfo();


$(document).click(function(loc){
	var x= loc.pageX;
	var y = loc.pageY;
	logClicks(x,y);
});

function locationizer(work_obj)
{
	var locationArray = [];
	for( job in work_obj.jobs)
	{
		var newLocation =work_obj.jobs[job].location;
		locationArray.push(newLocation);
	}
	return locationArray;
}


function inName(oldName)
{	var finalName = oldName;
	var newName = oldName.split(" ");
	newName[1] = newName[1].toUpperCase();
	finalName = newName.join(" ");
 	return finalName;

}


$('#main').append(internationalizeButton)

function displayProjectInfo(){
		for(project in projects.myProjects) {
		$("#projects").append(HTMLprojectStart);
			var formattedProjectTitle = HTMLprojectTitle.replace("%data%",projects.myProjects[project].title);
			var formattedProjectDates = HTMLprojectDates.replace("%data%",projects.myProjects[project].dates);
			var formattedProjectDescription = HTMLprojectDescription.replace("%data%",projects.myProjects[project].description);
			$(".project-entry:last").append(formattedProjectTitle);
			$(".project-entry:last").append(formattedProjectDates);
			$(".project-entry:last").append(formattedProjectDescription);
		 }
}

displayProjectInfo();
$('#mapDiv').append(googleMap);



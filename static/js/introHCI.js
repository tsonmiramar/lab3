'use strict';

// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
	initializePage();
})

/*
 * Function that is called when the document is ready.
 */
function initializePage() {
	$("#testjs").click(function(e) {
		$('.jumbotron h1').text("Javascript is connected");
		$('#testjs').text("Clicked");
		$(".jumbotron p").toggleClass("active");
		//When submit button is clicked
	});

	// Add any additional listeners here
	// example: $("#div-id").click(functionToCall);
	$("a.thumbnail").click(projectClick);
	
	$("#submitBtn").click(function(e){
			//Get the chosen project for animation
			var chosenProject = $("#project").val();
			//Get the value of new Width
			var widthVal = $("#width").val();
			//Get new project description
			var newDescription = $("#description").val();
			
			//change width and description for the chosen project
			$(chosenProject).animate({
				width: widthVal
				});
			$(chosenProject + ".project-description p").text(newDescription);
		});
}
function projectClick(e) {
 // Cancel the default action, which prevents the page from reloading
    e.preventDefault();

    // In an event listener, $(this) is the leement that fired the event
    var projectTitle = $(this).find("p").text();
    var jumbotronHeader = $(".jumbotron h1");
    jumbotronHeader.text(projectTitle);
	
	var containingProject = $(this).closest(".project");
	var description = $(containingProject).find(".project-description");
	if(description.length == 0){
		containingProject.append("<div class='project-description'><p>Description of the project.</p></div>");
	}
	else{
		$(description).fadeToggle();
	}
}
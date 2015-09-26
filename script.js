$(function() {

	$.get("http://www.reddit.com/r/aww/.json", function(response) {
		console.log(response.data.children);
		var redditArray = response.data.children;
		redditArray.forEach(function(element){
			// console.log("author: " + element.data.author);
			// console.log("title: " + element.data.title);
			// console.log("thumbnail: " + element.data.thumbnail);
			// console.log("url: " + element.data.url);
			// console.log("permalink: " + element.data.permalink);
			$("body").append("<p>author: " + element.data.author + "</p>");
			$("body").append("<a href='" + element.data.url + "'>" + element.data.title + "</a>");
			$("body").append("<img src= '" + element.data.thumbnail +"'>");
			$("body").append("<hr>");
		});

	});

});
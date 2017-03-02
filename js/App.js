window.onload=function() {

var data = "%data%";
var data2 = "%data2%";
var data3 = "%data3%";
var temp;
var searchArtist = function (query) {
    $.ajax({
        url: 'https://api.spotify.com/v1/search',
        data: {
            q: query,
            type: 'artist'
        },
        success: function(response) {
			var formattedList = response.artists;
			var artistList = formattedList.items;
			$('#results').append(HTMLmainList);
			$('.pagination').html('');
			var nextListURL = formattedList.next;
			$('#next').attr('info', nextListURL);
			artistList.forEach(function(artist) {
				console.log(artist);
				populateList(artist);
			});
        },
		error: function(){
			$('$error').html('<div>Spotify has some maintainance to do!</div>');
		}
    }); 
};
var populateList = function(artist){
	var artistName = HTMLartistName.replace(data, artist.name);
	var artistId = artist.id;
	var formattedImage = artist.images;
	var artistImage = formattedImage.length > 0 ? formattedImage[0].url :  artist.name + "" ;
	var info = artistId + artistImage;
	var artistLink = HTMLartistLink.replace("#", "index2.html?id="+ info + "");
	$('.mainlist-entry:last').append(HTMLartistStart);
	$('.name-entry:last').append(artistName, artistLink);
};



var searchArtistNext = function(value){
	$.ajax({
		url: value,
		success: function(response) {
			$('#next').attr('info', response.artists.next);
			var formattedList = response.artists.items;
			temp = response.artists.next;
			console.log(formattedList);
			formattedList.forEach(function(items) {
				populateListNext(items);
			});
		},
		error: function(){
			$('$error').html('<div>Spotify has some maintainance to do!</div>');
		}
	});
};
var populateListNext = function(artist){
	var artistName = HTMLartistName.replace(data, artist.name);
	var artistId = artist.id;
	var formattedArtistImage = artist.images;
	var artistImage = formattedArtistImage.length > 0 ? formattedArtistImage[0].url :  "NoImage" + artist.name + "" ;
	console.log(artistImage);
	var info = artistId + artistImage;
	var artistLink = HTMLartistLink.replace("#", "index2.html?id="+ info + "");
	$('.mainlist-entry:last').append(HTMLartistStart);
	$('.name-entry:last').append(artistName, artistLink);
};


$(document).on('click', '#next', function(){
	$('.mainlist-entry').html('');//Empty the list to stop multiple append
	var x = $('#next').attr('info');
	searchArtistNext(x);	
}); /* before you click on this all the anchor tag must conatin some id*/ 


document.getElementById('search-form').addEventListener('submit', function (e) {
    e.preventDefault();
    searchArtist(document.getElementById('query').value);
	document.getElementById('results').innerHTML = "";
}, false);
};

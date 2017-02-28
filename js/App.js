window.onload=function(){

var data = "%data%";
var searchArtist = function (query) {
    $.ajax({
        url: 'https://api.spotify.com/v1/search',
        data: {
            q: query,
            type: 'artist'
        },
        success: function (response) {
			var artistList = response.artists.items;
			$('#results').append(HTMLmainList);
			artistList.forEach(function(artist){
				var artistName = HTMLartistName.replace(data, artist.name);
				var artistId = artist.id;
				var artistLink = HTMLartistLink.replace("#", "artistpage/artistpage.html").replace("link", artistId).replace(data, artistId);
				$('.mainlist-entry:last').append(HTMLartistStart);
				$('.name-entry:last').append(artistName, artistLink);
			});
        }
    }); 
};

var searchAlbum = function (id){
	$.ajax({
		type: "GET",
		dataType: 'json',
		cache: false,					
		url:'https://api.spotify.com/v1/artists/' + id + '/albums',
		success: function (response) { //this will return 20 object. Each object further has 20 albums for each artist
			var albumList = response.items;
			albumList.forEach(function(album){
				var albumName = album.name;
				console.log(albumName);
			});
		}
	});
};


document.getElementById('search-form').addEventListener('submit', function (e) {
    e.preventDefault();
    searchArtist(document.getElementById('query').value);
}, false);
}

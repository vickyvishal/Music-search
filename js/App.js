window.onload=function(){

var data = "%data%";
var searchAlbums = function (query) {
    $.ajax({
        url: 'https://api.spotify.com/v1/search',
        data: {
            q: query,
            type: 'artist'
        },
        success: function (response) {
			console.log(response);
			var formattedlist = response.artists.items;
			$('#results').append(HTMLlist);
			formattedlist.forEach(function(music){
				$('.list-entry:last').append(HTMLalbumStart);
				var formattedName = HTMLname.replace(data, music.name);
				$('.album-entry:last').append(formattedName);
			})
        }
    });
};


document.getElementById('search-form').addEventListener('submit', function (e) {
    e.preventDefault();
    searchAlbums(document.getElementById('query').value);
}, false);
}
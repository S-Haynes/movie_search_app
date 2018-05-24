$('document').ready(function(){

var string = "one"
function changeColor(){
	if(string === "one"){
		string = "two";
		$('#two').css('color', 'white')
		$('#three').css('color', 'white')
		$('#four').css('color', 'white')
		$('#five').css('color', 'white')
		$('#six').css('color', 'white')
		$('#seven').css('color', 'white')
		$('#eight').css('color', 'white')
		$('#nine').css('color', 'white')
		return $('#one').css('color', '#4295f4')
	}else if(string === "two"){
		string = "three";
		$('#one').css('color', 'white')
		return $('#two').css('color', '#4295f4')
	}else if(string === "three"){
		string = "four";
		$('#two').css('color', 'white')
		return $('#three').css('color', '#4295f4')
	}else if(string === "four"){
		string = "five";
		$('#three').css('color', 'white')
		return $('#four').css('color', '#4295f4')
	}else if(string === "five"){
		string = "six";
		$('#four').css('color', 'white')
		return $('#five').css('color', '#4295f4')
	}else if(string === "six"){
		string = "seven";
		$('#five').css('color', 'white')
		return $('#six').css('color', '#4295f4')
	}else if(string === "seven"){
		string = "eight";
		$('#six').css('color', 'white')
		return $('#seven').css('color', '#4295f4')
	}else if(string === "eight"){
		string = "nine";
		$('#seven').css('color', 'white')
		return $('#eight').css('color', '#4295f4')
	}else if(string === "nine"){
		string = "ten";
		$('#eight').css('color', 'white')
		return $('#nine').css('color', '#4295f4')
	}else if(string === "ten"){
		string = "one";
		$('#one').css('color', '#4295f4')
		$('#two').css('color', '#4295f4')
		$('#three').css('color', '#4295f4')
		$('#four').css('color', '#4295f4')
		$('#five').css('color', '#4295f4')
		$('#six').css('color', '#4295f4')
		$('#seven').css('color', '#4295f4')
		$('#eight').css('color', '#4295f4')
		return $('#nine').css('color', '#4295f4')
	}

}
setInterval(changeColor, 750)

	$('#search').keypress(function(e){
		if(e.which == 13){

			$('.jumbotron').css('margin-top', '0%');


			let search = $('#search').val();
			let url = "http://www.omdbapi.com/?s=" + search + "&apikey=108b0f56"
			$('#search').val('');

			$.ajax({
				type: "GET",
				dataType: "jsonp",
				url: url,
				// async: false,
				success: function(movie){
					let movies = movie.Search
					let output = "";
					for(var i = 0; i < movies.length && i < 9; i++){
						if(movies[i].Poster === "N/A"){
							output += `
						<div class="col-md-4">
							<div class="thumbnail">
								<div class="text-center">
									<img src="http://www.jcyounger.com/wp-content/uploads/2016/11/imageNotAvailable.jpg">
									<h4>${movies[i].Title}</h4>
									<a class="btn btn-primary" href="http://imdb.com/title/${movies[i].imdbID}">More Info</a>
								</div>
							</div> 	
						</div>
						`;
						} else {
						output += `
						<div class="col-md-4">
							<div class="thumbnail">
								<div class="text-center">
									<img src="${movies[i].Poster}">
									<h4>${movies[i].Title}</h4>
									<a class="btn btn-primary" href="http://imdb.com/title/${movies[i].imdbID}">More Info</a>
								</div>
							</div> 	
						</div>
						`;

						console.log(output);
					}
					}

					$('#movieList').html(output).hide().fadeIn(2000);
				},
				error: function(err){
					console.log(err);
				}
			});

		}
	});
});
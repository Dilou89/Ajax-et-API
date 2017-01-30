$(document).ready(function(){
	console.log('Start');


	$('#sendAjaxBtn').click(function(){
		console.log('click btn');
		$.ajax({
	url:"http://api.openweathermap.org/data/2.5/weather?q=toulouse&appid=d19555f50b317e21efe03e9216cf3878&units=metric&lang=fr",
	dataType: "json",
	success:function(data){
		var temp= data.main.temp;
		var hum=data.main.humidity;
		var desc=data.weather[0].description;
		console.log(desc);
		$('#list').append("<li>temperature: " + temp +"</li>");
		$('#list').append("<li>humidité: " + hum +"</li>");


	}

		//var url = "http://localhost:3000/places";
		//$.ajax(url).done(ajaxDone).fail(ajaxFailed);
	});


}
	)
	// function ajaxDone(data, status){
	// 	console.log('done', data);
	// 	var places = data.places;
	// 	console.log(places);

	// 	for(var i=0; i<places.length; i++){
	// 		var place = places[i];
	// 		var newElement = "<li>" + place.nom +"</li>";
			
	// 		if(place.nom === "IoT Valley"){
	// 			var motDePasse = place.password;
	// 			$('body').append('Mot de passe: ' + motDePasse);
	// 		}

	// 		$('#list').append(places);
	// 	}
	// };

	// function ajaxFailed(){
	// 	console.log('failed');

	// };
});
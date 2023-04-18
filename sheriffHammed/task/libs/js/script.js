//Find Nearby API
$('#findNearby').click(function() {

	$.ajax({
		url: "libs/php/findNearby.php",
		type: 'POST',
		dataType: 'json',
		data: {
			latnearby: $('#latnearby').val(),
			lngnearby: $('#lngnearby').val()
		},
		success: function(result) {

			console.log(JSON.stringify(result));

			const tableHeader =`<tr>
					<th scope="col">Admin Code1</th>
						<th scope="col">Longtitude</th>
						<th scope="col">Distance</th>
						<th scope="col">GeoName Id</th>
						<th scope="col">Toponym Name</th>
						</tr>`;	
			let tableData = '';
			for(let i in result.data){
				tableData += `<tr>
				<td>${result.data[i].adminCode1}</td>
				<td>${result.data[i].lng}</td>
				<td>${result.data[i].distance}</td>
				<td>${result.data[i].geonameId}</td>
				<td>${result.data[i].toponymName}</td>						
				</tr>`;			
				}
			
			$('.tableHeader').html(tableHeader);
			$('.tableData').html(tableData);

		},
		error: function(jqXHR, textStatus, errorThrown) {
			// your error code
		
		}
	}); 

});

//***************************************************/
//Find Nearby Streets API
$('#findNearbyStreets').click(function() {

		$.ajax({
			url: "libs/php/findNearbyStreets.php",
			type: 'POST',
			dataType: 'json',
			data: {
				lat: $('#lat').val(),
				lng: $('#lng').val()
			},
			success: function(result) {

				console.log(JSON.stringify(result));

					const tableHeader =`<tr>
					<th scope="col">Admin Code1</th>
						<th scope="col">PlaceName</th>
						<th scope="col">Distance</th>
						<th scope="col">Postal Code</th>
						<th scope="col">Name</th>
						</tr>`;		

					let tableData = '';
					for(let i in result.data){
						tableData += `<tr>
						<td>${result.data[i].adminCode1}</td>
						<td>${result.data[i].placename}</td>
						<td>${result.data[i].distance}</td>
						<td>${result.data[i].postalcode}</td>
						<td>${result.data[i].name}</td>						
						</tr>`;			
					
						//console.log(tableData);
					//document.querySelector('.tableData').innerHTML = tableData;
					$('.tableHeader').html(tableHeader);
					$('.tableData').html(tableData);
					
					
				}
			
			},
			error: function(jqXHR, textStatus, errorThrown) {
				// your error code
			}
		}); 
	
	});

//***************************************************/
//Find Nearby Postal Codes API
$('#findNearbyPostalCodes').click(function() {

	$.ajax({
		url: "libs/php/findNearbyPostalCodes.php",
		type: 'POST',
		dataType: 'json',
		data: {
			postalcode: $('#postalcode').val(),
			country: $('#country').val(),
			radius: $('#radius').val()
		},
		success: function(result) {

			console.log(JSON.stringify(result));

			const tableHeader =`<tr>
					<th scope="col">Admin Code1</th>
						<th scope="col">Admin Name2</th>
						<th scope="col">Distance</th>
						<th scope="col">Postal Code</th>
						<th scope="col">Country Code</th>
						</tr>`;	
			let tableData = '';
			for(let i in result.data){
				tableData += `<tr>
				<td>${result.data[i].adminCode1}</td>
				<td>${result.data[i].adminName2}</td>
				<td>${result.data[i].distance}</td>
				<td>${result.data[i].postalCode}</td>
				<td>${result.data[i].countryCode}</td>						
				</tr>`;			
				}
			$('.tableHeader').html(tableHeader);
			$('.tableData').html(tableData);
	
		
		},
		error: function(jqXHR, textStatus, errorThrown) {
			// your error code
		}
	}); 

});
$(document).ready(function(){
	
	$('#btnGetFriends').on('click', function(){
		//alert('click');

		$.get(FRIENDS_URL);

	});

});
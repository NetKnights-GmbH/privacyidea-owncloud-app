window.onload=function(){
	/* Use the /verifyChallenges API call to retrieve the response status of push and tiqr tokens */
	setInterval(function() {
		$.ajax({
			url:location.href,
			type:'post',
			success:window.onload=function(result){
				if(result.search("<input type=\"hidden\" id=\"ResponseStatus\" value=\"false\">") === -1){
					location.reload()
				}
			}
		});

		$.ajax({
			url: '/apps/twofactor_privacyidea/testAuthentication',
			type:'post',
			success:window.onload=function(result){
				alert(result);
			}
		})
	}, 1000);
};
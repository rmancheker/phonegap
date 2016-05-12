var path="http://192.168.1.140/phonegap_backend/";

$(document).ready(function(){
	$("#submit-btn").click(function(){
		$.ajax({
			type:"POST",
			data:$("#userform").serialize(),
			url:path+"insert.php",
			success:function(reply){
				$(".error").html('').html(reply);
			}
		})
	})
})
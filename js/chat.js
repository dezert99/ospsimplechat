var sb = new SendBird({
    appId: "3BDD6DF6-9C24-4B64-9C72-E54255CEE8C6"
});
var uChannel;
var loggedIn = false;
var uCount = 0;


sb.connect("20854", function(user, error) {
	if(error){
		console.log(error)
	}
	else{
		sb.updateCurrentUserInfo("Cheryl Gentry", "208549964", function(response, error) {
			loggedIn = true;
		  console.log(response, error);
		});
	}
});

function connectTovPlan(){
	if(uChannel){
		console.log("out")
		sb.OpenChannel.getChannel(uChannel.url, function (channel, error) {
		    if (error) {
		        console.error(error);
		        return;
		    }

		    channel.exit(function(response, error){
		        if (error) {
		            console.error(error);
		            return;
		            
		        }
		        else{
		        	document.getElementById("messages").innerHTML = "";
		        	}
		    });
		});
	}
	if(loggedIn){
		console.log("Connecting to vPlan");
		sb.OpenChannel.getChannel("venuePlan", function (channel, error) {
	    if (error) {
	        console.error(error);
	        return;
	    }

	    channel.enter(function(response, error){
	        if (error) {
	            console.error(error);
	            return;
	        }
	        else{
	        	uChannel = channel;
	        	var messageListQuery = channel.createPreviousMessageListQuery();
				messageListQuery.load(20, true, function(messageList, error){
				    if (error) {
				        console.error(error);
				        return;
				    }
				    sendPrevMess(messageList);
				});
	    	}
	    });
		});
	}
}
function connectTogPlan(){
	if(uChannel){
		console.log("out")
		sb.OpenChannel.getChannel(uChannel.url, function (channel, error) {
		    if (error) {
		        console.error(error);
		        return;
		    }

		    channel.exit(function(response, error){
		        if (error) {
		            console.error(error);
		            return;
		        }
		        else{
		        	document.getElementById("messages").innerHTML = "";
		        }
		    });
		});
	}
	if(loggedIn){
		console.log("Connecting to gPlan");
		sb.OpenChannel.getChannel("guestPlan", function (channel, error) {
		    if (error) {
		        console.error(error);
		        return;
		    }

		    channel.enter(function(response, error){
		        if (error) {
		            console.error(error);
		            return;
		        }
		        else{
		        	uChannel = channel;
		        	var messageListQuery = channel.createPreviousMessageListQuery();
					messageListQuery.load(20, true, function(messageList, error){
					    if (error) {
					        console.error(error);
					        return;
					    }
					    sendPrevMess(messageList);
					});
		    	}
		    });
		});
	}
}
function connectToGen(){
	if(uChannel){
		console.log("out")
		sb.OpenChannel.getChannel(uChannel.url, function (channel, error) {
		    if (error) {
		        console.error(error);
		        return;
		    }

		    channel.exit(function(response, error){
		        if (error) {
		            console.error(error);
		            return;
		        }
		        else{
		        	document.getElementById("messages").innerHTML = "";
		        }
		    });
		});
	}
	if (loggedIn){
		console.log("Connecting to Gen");
		sb.OpenChannel.getChannel("gener", function (channel, error) {
		    if (error) {
		        console.error(error);
		        return;
		    }

		    channel.enter(function(response, error){
		        if (error) {
		            console.error(error);
		            return;
		        }
		        else{
		        	uChannel = channel;
		        	var messageListQuery = channel.createPreviousMessageListQuery();
					messageListQuery.load(20, true, function(messageList, error){
					    if (error) {
					        console.error(error);
					        return;
					    }
					    sendPrevMess(messageList);
					});
		    	}
		    });
		});
	}
}
function send(){
	uChannel.sendUserMessage(document.getElementById("message").value,"", function(message, error){
	    if (error) {
	        console.error(error);
	        return;
	    }
	    else{
	    	var text = document.createElement("p")
	    	text.innerHTML = sb.currentUser.nickname+": "+document.getElementById("message").value
	    	console.log(text)
	    	document.getElementById("messages").appendChild(text);
	    	document.getElementById("message").value = "";
	    }
	    //console.log(message);
	});
}
function sendPrevMess(messages){
	for(var i=messages.length-1;i>=0;i--){
		var text = document.createElement("p")
	    text.innerHTML = messages[i].sender.nickname+": "+messages[i].message;
	   	console.log(text)
	    document.getElementById("messages").appendChild(text);
	}
}
document.addEventListener("keydown", keyDownTextField, false);

function keyDownTextField(e) {
var keyCode = e.keyCode;
  if(keyCode==13) {
  	console.log("send");
  	send();
  }
  if(keyCode==117){
  	//change person
  	changeUser();
  }
}
function changeUser(){
	uCount++;
	if(uCount==1){
		sb.updateCurrentUserInfo("Jake Varghese", "208549964", function(response, error) {
		  console.log("Jake");
		  console.log(response, error);
		});
	}
	if(uCount==2){
		sb.updateCurrentUserInfo("Theodore Gialitis", "208549964", function(response, error) {
			console.log("Teddy");
		  console.log(response, error);
		});
	}
	if(uCount==3){
		sb.updateCurrentUserInfo("Carlos Garcia", "208549964", function(response, error) {
			console.log("Carlos");
			console.log(response, error);
		});	
	}
	if(uCount==4){
		sb.updateCurrentUserInfo("Cheryl Gentry", "208549964", function(response, error) {
		  console.log("Cheryl");
		  console.log(response, error);
		});
		uCount = 0;
	}

}
// function setChannelHandler(){
// 	var ChannelHandler = new sb.ChannelHandler()
// 	ChannelHandler.onMessageReceived = function(channel, message){
// 		console.log(channel, message);
// 	};
// 	console.log(ChannelHandler);

// 	sb.addChannelHandler("10231", ChannelHandler);
// }

// have to have freecodecamp, brunofin, comster404 (get this from streams)
// click on status output and go to the stream directly.
// can see additional details about what the streamer is streaming.(get this from channel)

// JSON request to get freecodecamp channel:
//
// check streams https://wind-bow.gomix.me/twitch-api/streams/freecodecamp?callback=?
// check users https://wind-bow.gomix.me/twitch-api/users/freecodecamp?callback=?
// check channel https://wind-bow.gomix.me/twitch-api/channels/freecodecamp?callback=?

// from users get display_name, bio, logo, profile url (https://www.twitch.tv/summit1g)
// from streams get stream (null is offline), status.
// to see the stream just use plain old url like https://www.twitch.tv/summit1g

$(document).ready(function() {
var profiles = ["ESL_SC2","brunofin", "comster404", "OgamingSC2", "cretetion", "freecodecamp", "storbeck", "habathcx", "RobotCaleb", "noobs2ninjas", "dota2ruhub"];
for (var i = 0; i < profiles.length; i++){
  var usersPromise = $.getJSON('https://wind-bow.gomix.me/twitch-api/users/' + profiles[i] + '?callback=?');
  var streamsPromise = $.getJSON('https://wind-bow.gomix.me/twitch-api/streams/' + profiles[i] + '?callback=?');
  var noProfile = [];
  var online = [];
  var offline =[];

  $.when(usersPromise, streamsPromise).then(function(userData, streamData) {
    if (userData[0].hasOwnProperty("error")) {
      noProfile.push(userData[0]);
      return true;
    }
    else if (streamData[0].stream == null){
      offline.push(streamData[0]);
      return true;
    }
    else {
      online.push(streamData[0]);
    }
  }); // $.when
} // for loop
console.log(noProfile);
console.log(online);
console.log(offline);
// iterate through profiles again
}); // $.(document).ready


// result += '<div class="panel-body row">';
// result += '<div class="col-md-1">';
// result += '<img class="img-circle user-logo" src="' + streamData.logo + '" />';
// result += '</div>';
// result += '<div>';
// result += '<div class="col-md-9 text-container">';
// result += '<h4>' + streamData.display_name + '</h4>';
// result += '<a href="' + profile_home + '" target="_blank" class="btn btn-info str-btn" role="button">Go to Stream</a>';
// result += '</div>';
// result += '</div>';
// result += '</div>';
// result += '</div>';
// $(".users").append(result);

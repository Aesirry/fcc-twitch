// sort continuously with online profiles on top
// have to have freecodecamp profiles, brunofin, comster404 (get this from streams)
// click on status output and go to the stream directly.
// can see additional details about what the streamer is streaming.(get this from channel)

// JSON request to get freecodecamp channel:
//
// check streams https://wind-bow.gomix.me/twitch-api/streams/freecodecamp?callback=?
// check users https://wind-bow.gomix.me/twitch-api/users/freecodecamp?callback=?
// check channel https://wind-bow.gomix.me/twitch-api/channels/freecodecamp?callback=?


$(document).ready(function() {
  var profiles = ["ESL_SC2", "OgamingSC2", "cretetion", "freecodecamp", "storbeck", "habathcx", "RobotCaleb", "noobs2ninjas"];
    for (var i = 0; i < profiles.length; i++) {
      // get stream info
      $.getJSON('https://wind-bow.gomix.me/twitch-api/streams/' + profiles[i] + '?callback=?', function(data) {
        console.log(data);
        if (data.stream != null) {
          $.getJSON('https://wind-bow.gomix.me/twitch-api/channels/' + profiles[i] + '?callback=?', function(data) {
            console.log(data);
            results = '<div class="streamer-box panel">';
            results += '<img src="'+ data.logo + '" alt="' + data.display_name + ' \'s logo" />';
            results += '<a href="#">' +  + '</a>'
            // results += '<a href="' + data.'"></a>'
            //$(".users").append()
          });
        }
        else {
          console.log("this user is offline");
        }
        });
      }
});

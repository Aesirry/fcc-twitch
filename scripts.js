// sort continuously with online profiles on top
// have to have freecodecamp profiles, brunofin, comster404 (get this from streams)
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
  var profiles = ["ESL_SC2", "OgamingSC2", "cretetion", "freecodecamp", "storbeck", "habathcx", "RobotCaleb", "noobs2ninjas", "dota2ruhub"];
    for (var i = 0; i < profiles.length; i++) {
      $.getJSON('https://wind-bow.gomix.me/twitch-api/users/' + profiles[i] + '?callback=?', function(data) {
          var profile_home = 'https://www.twitch.tv/' + data.name;
          var result = '<div class="panel user online">';
          result += '<div class="panel-body row">';
          result += '<div class="col-md-1">';
          result += '<img class="img-circle user-logo" src="' + data.logo + '" />';
          result += '</div>';
          result += '<div>';
          result += '<div class="col-md-9 text-container">';
          result += '<h4>' + data.display_name + '</h4>';
          // result += '<span>' + data.channel.status + '</span><br />'; this comes from the stream request
          result += '<a href="' + profile_home + '" target="_blank" class="btn btn-info str-btn" role="button">Go to Stream</a>';
          result += '</div>';
          result += '</div>';
          result += '</div>';
          result += '</div>';
          $(".users").append(result);
          // $.getJSON('https://wind-bow.gomix.me/twitch-api/streams/' + profiles[i] + '?callback=?', function(data) {
          //   if (data.stream != null){
          //     $('.panel-body').addClass('online');
          //   }
          //   else {
          //     $('.panel-body').removeClass('online').addClass('offline');
          //   }
          // });
        });
      }
}); //document.ready

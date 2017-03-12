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


// $(document).ready(function() {
//   var profiles = ["ESL_SC2", "OgamingSC2", "cretetion", "freecodecamp", "storbeck", "habathcx", "RobotCaleb", "noobs2ninjas", "dota2ruhub"];
//     for (var i = 0; i < profiles.length; i++) {
//       $.getJSON('https://wind-bow.gomix.me/twitch-api/users/' + profiles[i] + '?callback=?', function(data) {
//           var profile_home = 'https://www.twitch.tv/' + data.name;
//           var results = '<div class="panel panel-default">';
//           results = '<div class="panel-body">';
//           results += '<img src="'+ data.logo + '" alt="' + data.display_name + ' \'s logo" class="img-circle user-logo" />';
//           results += '<a href="' + profile_home + '" target="_blank" >See Profile</a>';
//           results += '</div></div>';
//           $(".users").append(results);
//           $.getJSON('https://wind-bow.gomix.me/twitch-api/streams/' + profiles[i] + '?callback=?', function(data) {
//             if (data.stream != null){
//               $('.panel-body').addClass('online');
//             }
//             else {
//               $('.panel-body').removeClass('online').addClass('offline');
//             }
//           });
//         });
//       }
// }); //document.ready

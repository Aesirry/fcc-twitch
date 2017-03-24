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
  var channelsPromise = $.getJSON('https://wind-bow.gomix.me/twitch-api/channels/' + profiles[i] + '?callback=?');
  var noProfile = [];
  var online = [];
  var offline =[];

  $.when(usersPromise, streamsPromise, channelsPromise).then(function(userData, streamData, channelData) {
    if (userData[0].hasOwnProperty("error")) {
      noProfile.push(userData[0]);
      var result = '<div class="panel user profile-not-found">';
      result += '<div class="panel-body row">';
      result += '<div class="col-md-1">';
      result += '<img class="img-circle user-logo" src="undefined" />';
      result += '</div>';
      result += '<div>';
      result += '<div class="col-md-9 text-container">';
      result += '<h4>' + userData[0].message + '</h4>';
      result += '</div>';
      result += '</div>';
      result += '</div>';
      result += '</div>';
      $(".users").append(result);
      return true;
    }
    else if (streamData[0].stream == null){
      offline.push(channelData[0]);
      var result = '<div class="panel user offline">';
      result += '<div class="panel-body row">';
      result += '<div class="col-md-1">';
      result += '<img class="img-circle user-logo" src="' + channelData[0].logo + '" />';
      result += '</div>';
      result += '<div>';
      result += '<div class="col-md-9 text-container">';
      result += '<h4>' + channelData[0].name + '</h4>';
      result += '</div>';
      result += '</div>';
      result += '</div>';
      result += '</div>';
      $(".users").append(result);
      return true;
    }
    else {
      online.push(streamData[0]);
      var result = '<div class="panel user online">';
      result += '<div class="panel-body row">';
      result += '<div class="col-md-1">';
      result += '<img class="img-circle user-logo" src="' + streamData[0].stream.channel.logo + '" />';
      result += '</div>';
      result += '<div>';
      result += '<div class="col-md-9 text-container">';
      result += '<h4>' + streamData[0].stream.channel.name + '</h4>';
      result += '<p>' + streamData[0].stream.channel.status + '</p>';
      result += '<a href="' + streamData[0].stream.channel.url + '" target="_blank" class="btn btn-info str-btn" role="button">Go to Stream</a>';
      result += '</div>';
      result += '</div>';
      result += '</div>';
      result += '</div>';
      $(".users").append(result);
    }
  }); // $.when

} // for loop

$("#all").click(function(event){
  $(".users").empty();
  for (var i = 0; i < online.length; i++){
    var result = '<div class="panel user online">';
    result += '<div class="panel-body row">';
    result += '<div class="col-md-1">';
    result += '<img class="img-circle user-logo" src="' + online[i].stream.channel.logo + '" />';
    result += '</div>';
    result += '<div>';
    result += '<div class="col-md-9 text-container">';
    result += '<h4>' + online[i].stream.channel.name + '</h4>';
    result += '<p>' + online[i].stream.channel.status + '</p>';
    result += '<a href="' + online[i].stream.channel.url + '" target="_blank" class="btn btn-info str-btn" role="button">Go to Stream</a>';
    result += '</div>';
    result += '</div>';
    result += '</div>';
    result += '</div>';
    $(".users").append(result);
  }
  for (var i = 0; i < offline.length; i++){
    var result = '<div class="panel user offline">';
    result += '<div class="panel-body row">';
    result += '<div class="col-md-1">';
    result += '<img class="img-circle user-logo" src="' + offline[i].logo + '" />';
    result += '</div>';
    result += '<div>';
    result += '<div class="col-md-9 text-container">';
    result += '<h4>' + offline[i].name + '</h4>';
    result += '</div>';
    result += '</div>';
    result += '</div>';
    result += '</div>';
    $(".users").append(result);
  }
  for (var i = 0; i < noProfile.length; i++){
    var result = '<div class="panel user profile-not-found">';
    result += '<div class="panel-body row">';
    result += '<div class="col-md-1">';
    result += '<img class="img-circle user-logo" src="undefined" />';
    result += '</div>';
    result += '<div>';
    result += '<div class="col-md-9 text-container">';
    result += '<h4>' + noProfile[i].message + '</h4>';
    result += '</div>';
    result += '</div>';
    result += '</div>';
    result += '</div>';
    $(".users").append(result);
  }
}); // all button
$("#online").click(function(event){
  $(".users").empty();
  for (var i = 0; i < online.length; i++){
    var result = '<div class="panel user online">';
    result += '<div class="panel-body row">';
    result += '<div class="col-md-1">';
    result += '<img class="img-circle user-logo" src="' + online[i].stream.channel.logo + '" />';
    result += '</div>';
    result += '<div>';
    result += '<div class="col-md-9 text-container">';
    result += '<h4>' + online[i].stream.channel.name + '</h4>';
    result += '<p>' + online[i].stream.channel.status + '</p>';
    result += '<a href="' + online[i].stream.channel.url + '" target="_blank" class="btn btn-info str-btn" role="button">Go to Stream</a>';
    result += '</div>';
    result += '</div>';
    result += '</div>';
    result += '</div>';
    $(".users").append(result);
  }
}); // online button
$("#offline").click(function(event){
  $(".users").empty();
  for (var i = 0; i < offline.length; i++){
    var result = '<div class="panel user offline">';
    result += '<div class="panel-body row">';
    result += '<div class="col-md-1">';
    result += '<img class="img-circle user-logo" src="' + offline[i].logo + '" />';
    result += '</div>';
    result += '<div>';
    result += '<div class="col-md-9 text-container">';
    result += '<h4>' + offline[i].name + '</h4>';
    result += '<h4>This User is Offline</h4>';
    result += '</div>';
    result += '</div>';
    result += '</div>';
    result += '</div>';
    $(".users").append(result);
  }
}); // offline button
$("#not-found").click(function(event){
  $(".users").empty();
  for (var i = 0; i < noProfile.length; i++){
    var result = '<div class="panel user profile-not-found">';
    result += '<div class="panel-body row">';
    result += '<div class="col-md-1">';
    result += '<img class="img-circle user-logo" src="undefined" />';
    result += '</div>';
    result += '<div>';
    result += '<div class="col-md-9 text-container">';
    result += '<h4>' + noProfile[i].message + '</h4>';
    result += '</div>';
    result += '</div>';
    result += '</div>';
    result += '</div>';
    $(".users").append(result);
}
}); // offline button
}); // $.(document).ready

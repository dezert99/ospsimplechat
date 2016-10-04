var sb = new SendBird({
    appId: "3BDD6DF6-9C24-4B64-9C72-E54255CEE8C6"
});
var ChannelHandler = new sb.ChannelHandler();

ChannelHandler.onMessageReceived = function (channel, message) {
  console.log('ChannelHandler.onMessageReceived: ', channel, message);
  var text = document.createElement("p")
  text.innerHTML = message.sender.nickname+": "+message.message;
  console.log(text)
  document.getElementById("messages").appendChild(text);
  document.getElementById("message").value = "";
};

ChannelHandler.onMessageDeleted = function (channel, messageId) {
  console.log('ChannelHandler.onMessageDeleted: ', channel, messageId);
};

ChannelHandler.onReadReceiptUpdated = function (channel) {
  console.log('ChannelHandler.onReadReceiptUpdated: ', channel);
};

ChannelHandler.onTypingStatusUpdated = function (channel) {
  console.log('ChannelHandler.onTypingStatusUpdated: ', channel);
};

ChannelHandler.onUserJoined = function (channel, user) {
  console.log('ChannelHandler.onUserJoined: ', channel, user);
};

ChannelHandler.onUserLeft = function (channel, user) {
  console.log('ChannelHandler.onUserLeft: ', channel, user);
};

ChannelHandler.onUserEntered = function (channel, user) {
  console.log('ChannelHandler.onUserEntered: ', channel, user);
};

ChannelHandler.onUserExited = function (channel, user) {
  console.log('ChannelHandler.onUserExited: ', channel, user);
};

ChannelHandler.onUserMuted = function (channel, user) {
  console.log('ChannelHandler.onUserMuted: ', channel, user);
};

ChannelHandler.onUserUnmuted = function (channel, user) {
  console.log('ChannelHandler.onUserUnmuted: ', channel, user);
};

ChannelHandler.onUserBanned = function (channel, user) {
  console.log('ChannelHandler.onUserBanned: ', channel, user);
};

ChannelHandler.onUserUnbanned = function (channel, user) {
  console.log('ChannelHandler.onUserUnbanned: ', channel, user);
};

ChannelHandler.onChannelFrozen = function (channel) {
  console.log('ChannelHandler.onChannelFrozen: ', channel);
};

ChannelHandler.onChannelUnfrozen = function (channel) {
  console.log('ChannelHandler.onChannelUnfrozen: ', channel);
};

ChannelHandler.onChannelChanged = function (channel) {
  console.log('ChannelHandler.onChannelChanged: ', channel);
};

ChannelHandler.onChannelDeleted = function (channel) {
  console.log('ChannelHandler.onChannelDeleted: ', channel);
};

sb.addChannelHandler("208549964", ChannelHandler);

Meteor.publish("cartContents", function(sessionId) {
  return cart.find({sessionId: sessionId});
});

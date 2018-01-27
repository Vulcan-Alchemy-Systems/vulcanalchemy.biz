Template.navCart.onCreated(function() {
  this.autorun(() => {
    var sessionId = Meteor.default_connection._lastSessionId;
    this.subscribe('cartContents', sessionId);
  });
});

// helpers
Template.registerHelper( 'cartContents', () => {
    var sessionId = Meteor.default_connection._lastSessionId;
    var cartContents = cart.find(sessionId: sessionId).fetch();
    return cartContents;
});

Template.registerHelper( 'cartCount', () => {
  return 0;
});

// helpers
Template.navCart.helpers({
  cartTotal: function() {
    var sessionId = Meteor.default_connection._lastSessionId;
    cartContents = cart.find({sessionId: sessionId}).fetch();
    return cartContents.length;
  }
});

// events
Template.navCart.events({
  
  'click .view-cart': function(event) {
    FlowRouter.go('cartView');
  },

  'click .btn-checkout': function(event) {
    FlowRouter.go('cartCheckout');
  },

  // cartRemoveItem
  'click .cart-remove-item': function(event) {

  },
});

import SimpleSchema from 'simpl-schema';

SimpleSchema.extendOptions(['autoform']);

// debug
SimpleSchema.debug = true;

cart = new Meteor.Collection("cart");

// rules
cart.allow({
  insert: function(userId, doc) {
    return true;
  },
  update: function (userId, doc) {
    return true;
  },
  remove: function (userId, doc) {
    return true;
  },
});


cartSchema = new SimpleSchema({
  // sessionId
  sessionId: {
    type: String,
    label: "Session Id",
    autoform: {
      type: "hidden",
    }
  },

  // productId
  productId: {
    type: String,
    label: "Product Id",
    autoform: {
      type: "hidden",
    }
  },

  // productTitle
  productTitle: {
    type: String,
    label: "Product Title",
  },

  // productImage
  productImage: {
    type: String,
    label: "Product Image",
  },

  // productPrice
  productPrice: {
    type: String,
    label: "Product Price",
  },

  // cartQty
  cartQty: {
    type: String,
    label: "Cart Qantity",
  },

  // cartSubTotal
  cartSubTotal: {
    type: String,
    label: "Cart Sub Total",
  },

  // cartCreated
  cartCreated: {
    type: Date,
    label: "Created",
    autoform: {
      type: "hidden",
    }
  },
});

// attach
cart.attachSchema(cartSchema);

// methods
Meteor.methods({
  // cartAddItem
  cartAddItem: function(sessionId, productId, productTitle, productImage, productPrice, cartQty) {
    var cartSubTotal = productPrice * cartQty;
    var cartCreated = new Date();

    // do some validation
    check({sessionId: string});

    // inset row
    return cart.insert({
      sessionId: sessionId,
      productId: productId,
      productTitle: productTitle,
      productImage: productImage,
      productPrice: productPrice,
      cartQty: cartQty,
      cartSubTotal: cartSubTotal,
      cartCreated: cartCreated
    });
  },

  // cartRemoveItem
  cartRemoveItem: function(sessionId, id) {
    cart.remove({sessionId: sessionId, _id: id});
  },

  // cartUpdateQty
  cartUpdateQty: function(sessionId, id, cartQty) {
    // get cart
    var cartItem = cart.findOne({_id:id});
    var cartSubTotal = cartItem.productPrice * cartQty;

    // update
    return cart.update({_id:id}, {$set:{
      cartSubTotal: cartSubTotal,
      cartQty: cartQty
    }});
  },

  // cartEmpty
  cartEmpty: function(sessionId) {
    return cart.remove({sessionId: sessionId});
  }
});

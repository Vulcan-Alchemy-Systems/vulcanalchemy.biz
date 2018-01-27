// languageSelectorEnabled
Template.registerHelper('languageSelectorEnabled', () => {
  if (Meteor.settings.public.features.languageSelector) {
    return true;
  } else {
    return false;
  }
});

// wishlistEnabled
Template.registerHelper('wishlistEnabled', () => {
  if (Meteor.settings.public.features.wishlist) {
    return true;
  } else {
    return false;
  }
});

Template.footer.helpers({
  copyright: function() {
    return Meteor.settings.public.site.copyright;
  },
  copyEndDate: function() {
    var d = new Date();
    return d.getFullYear();
  },
});

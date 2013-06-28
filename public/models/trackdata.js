Redd.Models.TrackData = Backbone.Model.extend({
  url: function() {
    return 'http://www.reddit.com/user/'+ this.get('id') +'.json';
  },
  sync: Redd.JSONP.Sync

});

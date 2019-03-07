//import Event from './components/event'
document.addEventListener('DOMContentLoaded', function() {
  // Get upcomming events and past events
  $.ajax({
    url: "https://api.meetup.com/IbagueJS/events?desc=true&photo-host=public&page=5&sig_id=223811643&status=upcoming%2Cpast&fields=featured_photo&sig=5b4d6197695c7d06cb505bd2e7906af644ef08e0",
    jsonp: "callback",
    dataType: "jsonp",
    data: {
      format: "json"
    },
    success: function (result) {
      console.log(result.data)
      var events = new Vue({
        el: '#events',
        data: { 
          events: result.data
        }
      })
    },
    fail: function (err) {
      console.error('Imposible to retrieve data from Meetup', err.status)
    }
  });
}, false)



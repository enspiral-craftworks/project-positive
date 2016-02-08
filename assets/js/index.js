// FACEBOOK JS
window.fbAsyncInit = function() {
  FB.init({
    appId      : '1761799850709452',
    xfbml      : true,
    version    : 'v2.5'
  })
};

(function(d, s, id){
   var js, fjs = d.getElementsByTagName(s)[0];
   if (d.getElementById(id)) {return;}
   js = d.createElement(s); js.id = id;
   js.src = "//connect.facebook.net/en_US/sdk.js";
   fjs.parentNode.insertBefore(js, fjs);
 } (document, 'script', 'facebook-jssdk'));

// TWITTER JS
!function(d,s,id) {
  var js,fjs=d.getElementsByTagName(s)[0],p=/^http:/.test(d.location)?'http':'https'
  if(!d.getElementById(id)){
    js=d.createElement(s)
    js.id=id
    js.src=p+"://platform.twitter.com/widgets.js"
    fjs.parentNode.insertBefore(js,fjs)
  }
} (document,"script","twitter-wjs");

// INSTAGRAM JS
document.addEventListener("DOMContentLoaded", function(event) {
  var myTags = getMultipleTags(['projectpositivenz', 'chainofpositivity', 'nationalcomplimentsday', '21daysofkindness'])

  for(var i=0, len=myTags.length; i < len; i++) {
      myTags[i].run();
  }

  function getMultipleTags (tags) {
    var feeds = []
    for (var i=0, len=tags.length; i < len; i++) {
      feeds.push(new Instafeed({
        clientId: 'f762a6019eab430f9cb0a0079870fc1e',
        accessToken: '3915.467ede5.598e8557b81d44aeada6265bd757feab',
        get: 'tagged',
        tagName: tags[i],
        target: "instafeed",
        limit: 4,
        template: '<div class="instagram-pic"><a href="{{link}}"><img src="{{image}}"/></a></div>'
      }))
    }
    return feeds
  }
})

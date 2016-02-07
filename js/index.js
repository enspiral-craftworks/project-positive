// FACEBOOK JS
window.fbAsyncInit = function() {
  FB.init({
    appId      : '1761799850709452',
    xfbml      : true,
    version    : 'v2.5'
  });
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
  if(!d.getElementById(id)){js=d.createElement(s)
  js.id=id
  js.src=p+"://platform.twitter.com/widgets.js"
  fjs.parentNode.insertBefore(js,fjs)
  }
} (document,"script","twitter-wjs");


// INSTAGRAM JS
console.log('instagram start')

document.addEventListener("DOMContentLoaded", function(event) {
  var feed = new Instafeed({
      get: 'tagged',
      tagName: 'projectpositivenz',
      clientId: 'f762a6019eab430f9cb0a0079870fc1e',
      accessToken: '2684073593.f762a60.f152cc9ce777469aa55414f25da5c215'
    })
    feed.run()
})

console.log('instagram end')

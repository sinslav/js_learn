  var _gaq = _gaq || [];
  _gaq.push(['_setAccount', 'UA-XXXXX-X']);
  _gaq.push(['_trackPageview']);

  (function() {
    var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
    ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
    var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
  })();


    var loadTime = document.createElement('div');
    loadTime.textContent = 'Вы загрузили эту страницу из DEFER: ' + new Date();
    loadTime.style.color = 'red';
    document.body.appendChild(loadTime);
    window.alert(document.getElementsByTagName('span')[0].innerHTML);
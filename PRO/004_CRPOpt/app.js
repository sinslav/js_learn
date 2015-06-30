var span = document.getElementsByTagName('span')[0];
    span.textContent = 'interactive'; 
    span.style.display = 'inline';  
    var loadTime = document.createElement('div');
    loadTime.textContent = 'Вы загрузили эту страницу: ' + new Date();
    loadTime.style.color = 'blue';
    window.alert('working');
    document.body.appendChild(loadTime);
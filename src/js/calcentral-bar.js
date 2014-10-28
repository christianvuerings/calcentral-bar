// ==UserScript==
// @name           CalCentral Bar
// @version        0.0.1
// @namespace      http://denbuzze.com/
// @description    Add a CalCentral bar to the top of the SIS portal.
// ==/UserScript==

(function(){

  var addLogo = function() {
    var calcentralLogo = '<a href="https://calcentral.berkeley.edu" class="cc-calcentral-logo-container"><svg class="cc-calcentral-logo" xmlns="http://www.w3.org/2000/svg" width="350" height="40" viewBox="1.61 1.403 350 40" enable-background="new 1.61 1.403 350 40"><style>.cc-svg-calcentral-logo-gold { fill: #f1a91e; } .cc-svg-calcentral-logo-white { fill: #fff; }</style><path  class="cc-svg-calcentral-logo-gold" d="M29.65 9.658c-2.7-1.728-5.832-2.7-9.396-2.7-7.344 0-12.744 5.238-12.744 14.418 0 8.91 5.13 14.472 12.853 14.472 3.672 0 7.128-1.295 9.45-3.022l.647 3.4c-2.483 1.62-6.21 2.755-10.15 2.755C10.534 38.98 4 32.177 4 21.485 4 10.738 10.858 3.826 20.31 3.826c4.103 0 7.937 1.242 10.42 2.754l-1.08 3.078zm36.935 28.62h-3.51L59.51 28.61H44.23l-3.564 9.667h-3.51l12.798-33.75h4.05l12.58 33.75zM51.898 7.93l-6.48 17.55h12.906L51.898 7.93zm23.058 30.347V4.527h3.456v30.51h16.686v3.24H74.956z"/><path class="cc-svg-calcentral-logo-white" d="M128.415 12.088c-2.7-1.782-5.616-2.7-8.856-2.7-6.59 0-10.963 4.536-10.963 11.88 0 7.452 4.266 12.15 11.07 12.15 3.456 0 6.75-1.297 9.234-3.024l1.242 6.05c-2.7 1.618-6.912 2.645-10.746 2.645-10.368 0-17.442-6.533-17.442-17.605 0-10.8 7.074-17.767 17.604-17.767 3.942 0 7.992 1.026 10.908 2.646l-2.05 5.724zm12.797 26.19V4.527h23.005v5.562h-16.524v8.48h13.555v5.56h-13.555v8.588h16.524v5.562h-23.005v-.003zm57.403-33.75h6.264v34.076h-7.02l-16.147-24.84V38.28h-6.265V4.53h7.183l15.985 24.57V4.528zm33.965 5.778V38.28h-6.533V10.305h-11.285V4.528h29.105v5.778H232.58zm27.756 27.97h-6.588V4.53h11.826c8.53 0 13.068 4.05 13.068 10.26 0 4.806-2.7 8.153-7.29 9.72l8.854 13.77H272.7l-7.506-12.365-4.86.323v12.04h.002zm4.86-17.333c4.052-.215 6.696-2.05 6.696-5.725 0-3.51-2.646-5.184-7.344-5.184h-4.268V21.05l4.917-.107zm53.245 17.334h-6.644l-2.807-7.99h-13.61l-2.754 7.99h-6.643l12.312-33.75h7.992l12.154 33.75zm-16.2-28.08l-5.13 14.635h10.206l-5.076-14.634zm25.164 28.08V4.527h6.588V32.5h15.23v5.777h-21.818z"/></svg><a>';
    document.getElementById('pthdr2logo').innerHTML = calcentralLogo;
  };

  var addLinks = function() {
    var topLinks = document.querySelectorAll('#pthdr2links a');
    var linksContainer = document.getElementById('pthdr2links');
    linksContainer.innerHTML = '';
    for (var i = 0; i < topLinks.length; i++) {
      console.log(i);
      console.log(topLinks[i]);
      linksContainer.appendChild(topLinks[i]);
    }
  };

  var addTopBar = function() {
    addLogo();
    addLinks();
  };

  addTopBar();

})();

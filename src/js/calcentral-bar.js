(function(){

  var topPeopleSoftContainer = document.getElementById('pthdr2container');
  var topContainer;
  var homeLink = {};

  var createTopContainer = function() {
    topContainer = document.createElement('div');
    topContainer.setAttribute('class', 'cc-calcentral-bar cc-calcentral-clearfix-container');
  };

  var addLogo = function() {
    var calcentralLogo = document.createElement('a');
    calcentralLogo.setAttribute('href', homeLink.href);
    calcentralLogo.setAttribute('title', 'Return Home');
    calcentralLogo.setAttribute('class', 'cc-calcentral-logo');
    calcentralLogo.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="45" height="35" viewBox="227.8 181.7 45 35" enable-background="new 227.8 181.7 45 35"><path fill="#FDB515" d="M228.2 216.7c.1-.3.3-.7.5-.9.4-.5 1.1-1.1 2-1.7 1.4-.9 2.7-1.5 4.3-1.9 2.4-.6 4.9-.7 7.1-.7h.1c2.9 0 9.1.4 13.6.6 2.4.1 4.3.3 4.9.3h1c2.8 0 3.7-.4 4.1-.7.5-.3 1-.6.9-.9-.1-.4-1-.4-1.4-.4-1.4-.2-2.7-.8-3.6-1.4-1-.7-1.7-2-1.7-2l-.7.5c-2.5 1.7-4.5 2.4-6.5 2.4h-.3c-1.1 0-2-.5-2.2-.9l-.4-.7-.7.6c-.9.8-2.1 1-2.6 1.1h-.6c-1.1 0-2.1-.4-2.9-1.1-.1-.1-.5-.6-.6-.7l-.5-.7-.6.5c-.2.2-.9.6-1 .7-1.4.8-3 1.2-4.5 1.2-1.4 0-2.7-.3-3.9-1-2.7-1.5-3.1-4.5-3-6.8.2-3.1 1.3-6.1 3.3-9.1 1.7-2.6 4.2-5 7-7.1 2-1.5 5.2-3.4 8.5-3.9.6-.1 1.2-.2 1.8-.2.7 0 1.2.1 1.6.3 1 .6 1 1.9.9 2.5-.3 2.5-2.6 5.5-5 5.5-.5 0-.9-.2-1.1-.5-.2-.2-.2-.5-.1-.8.2-.8 1-1.1 2.2-1.4.1 0 .2-.1.3-.1 2-.6 2.3-1.8 2.2-2.7-.1-.6-.5-1.3-1.6-1.3-1 0-2.2.6-2.4.7-2.7 1.4-4.5 3.6-6.3 5.9-3.6 4.9-5.4 9.5-5.1 13.9.1 1.9 1.4 4 3.4 4 .7 0 1.3-.2 1.9-.7 1-.7 1.6-1.9 2.1-2.9.1-.3.3-.5.4-.8.8-1.4 1.7-2.6 2.7-3.7 1.2-1.1 2.5-1.9 3.9-2.3.7-.2 1.4-.3 2.2-.3.8 0 1.2.5 1.4.8.1-.3.4-.7.4-.8.1-.1 1.4-.1 1.8 0 .3 0 1.4 0 1.5.1.2.2-.3 1-.7 2.3-.2.6-.5 1.3-.9 2.2-.1.3-.3.7-.4 1-1.1 2.7-1.8 4.5-.6 5.1.2.1.5.2.8.2.8 0 1.7-.6 2.3-1 .1 0 .1-.1.2-.1.7-.5 1.1-.8 1.5-1.1l.2-.2v-.3c-.2-3 .2-6.3 1.1-8.5 1.3-3.2 3.1-6 5.3-8.2 1.1-1.1 3.9-3.2 5.5-3.2 1.3 0 .9 2.3.8 2.8-.3 1.2-1.6 4.8-3.9 8.6-.8 1.3-2.4 3.5-3.5 5.1-.5.7-.9 1.3-1.1 1.5l-.1.2v.2c-.2 1.8.8 3.6 1.8 4.6.9 1 1.9 1.3 2.8 1.6.3.1.7.2 1 .4.3.1.7.3.7.6.1.3-.1.7-.5 1.2-2 2.5-4.5 3.2-6.9 3.7-1.4.3-3.1.4-5.2.4-1.4 0-2.8-.1-4.2-.1-.5 0-1 0-1.5-.1-1.6-.1-3.3-.2-4.9-.2-1.5-.1-3-.2-4.3-.2-1.1 0-2.2-.1-3.1-.1-2.7 0-5 .2-6.9.5-.9.1-1.6.3-2.3.5-.2.1-.4.1-.6.2-.1 0-.2.1-.3.1-.1-.3-.5-.2-.8-.2zm23.7-18.3c-.7 0-2.5.9-3.9 3.6-.3.6-1.4 3.2-.8 4.4.2.4.5.6.9.7h.3c1.2 0 2.1-1.7 3-3.7.1-.2.1-.3.2-.4.2-.5 1.1-2.6 1.3-3.4 0-.5.1-1.2-1-1.2zm18.9-10.6c-.3-.2-1.1.4-1.1.4-1.5 1.2-2.6 2.7-3.6 4.4-2.6 4.5-2.3 8-2.3 8s1.3-1.5 1.6-2c.4-.7 2-2.9 3-4.5 1-1.7 2.1-4.1 2.4-4.9 0-.1.4-1.1 0-1.4z"/></svg>';
    topContainer.appendChild(calcentralLogo);
  };

  var addCalCentralLink = function() {
    var pthdr2home = document.getElementById('pthdr2home');
    homeLink.href = pthdr2home.getAttribute('href');
    var calcentralLink = document.createElement('a');
    calcentralLink.setAttribute('href', 'https://calcentral.berkeley.edu');
    calcentralLink.setAttribute('class', 'cc-calcentral-link');
    calcentralLinkText = document.createTextNode('CalCentral');
    calcentralLink.appendChild(calcentralLinkText);
    pthdr2home.parentNode.replaceChild(calcentralLink, pthdr2home);
  };

  var addLinkEvent = function(element) {
    var id = element.id;
    var psEvent = '';
    if (id === 'pthdr2mcf') {
      psEvent = 'PopupMCFConsole';
    } else if (id === 'pthdr2cti') {
      psEvent = 'PopupCTIConsole';
    } else if (id === 'pthdr2ppm') {
      psEvent = 'PopupPPMConsole';
    }

    if (psEvent) {
      element.addEventListener('click', function(evt) {
        if (window[psEvent]) {
          window[psEvent]();
          evt.preventDefault();
        }
      });
    }
  };

  var addNav = function() {
    var nav = document.createElement('nav');

    var menuButton = document.createElement('button');
    menuButton.setAttribute('class', 'cc-calcentral-menu-toggle');
    menuButton.setAttribute('type', 'button');
    menuButtonText = document.createTextNode('Menu');
    menuButton.appendChild(menuButtonText);

    //  Toggle the class on click to show / hide the menu
    menuButton.onclick = function() {
      this.classList.toggle('cc-calcentral-menu-toggle-active');
    };
    nav.appendChild(menuButton);

    var ul = document.createElement('ul');
    ul.setAttribute('class', 'cc-calcentral-links');
    var topLinks = document.querySelectorAll('#pthdr2links a');
    for (var i = 0; i < topLinks.length; i++) {
      var li = document.createElement('li');
      // addLinkEvent(topLinks[i]);
      li.appendChild(topLinks[i]);
      ul.appendChild(li);
    }
    nav.appendChild(ul);
    topContainer.appendChild(nav);
  };

  var addContainer = function() {
    console.log(topPeopleSoftContainer.parentNode);
    topPeopleSoftContainer.parentNode.replaceChild(topContainer, topPeopleSoftContainer);
  };

  var addTopBar = function() {
    createTopContainer();
    addCalCentralLink();
    addLogo();
    addNav();
    addContainer();
  };

  addTopBar();

})();

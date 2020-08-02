'use strict';


var currentURL;
var currentTitle;

chrome.tabs.query({active: true, lastFocusedWindow: true}, function(tabs) {

  getCurrentTitle(tabs[0].title);
  getCurrentURL(tabs[0].url);
  var popup = document.getElementById('popup');
  popup.value = currentTitle + ": " + currentURL;
  popup.select();

});

function getCurrentTitle(tab){
  currentTitle = tab;
  console.log(currentTitle);
}

function getCurrentURL(tab){
  currentURL = tab;
  console.log(currentURL);
}

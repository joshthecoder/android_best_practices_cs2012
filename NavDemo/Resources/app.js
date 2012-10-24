var firstWin = Ti.UI.createWindow({
  fullscreen: false,  // trick to force a new actiity,
  backgroundColor: 'red',
  layout: 'vertical'
});

var openPopup = Ti.UI.createButton({
  title: 'Open Popup'
});
openPopup.addEventListener('click', function() {
  var popupWin = Ti.UI.createWindow({  // "lightweight"
    width: 200, height: 200,
    backgroundColor: 'blue'
  });
  popupWin.open();
});
firstWin.add(openPopup);

var openSecondWin = Ti.UI.createButton({
  title: 'Open window'
});
openSecondWin.addEventListener('click', function() {
  var secondWin = Ti.UI.createWindow({
    fullscreen: false,         // "heavywieght", new activity
    backgroundColor: 'yellow'
  });
  secondWin.open();
});
firstWin.add(openSecondWin);

firstWin.open();

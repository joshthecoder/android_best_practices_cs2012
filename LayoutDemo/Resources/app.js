var win = Ti.UI.createWindow();

var parentView = Ti.UI.createView({
  backgroundColor: 'blue',
  width: Ti.UI.FILL,
  height: Ti.UI.FILL
});
win.add(parentView);

var padding = 200;

function layoutChild() {
  var childView = Ti.UI.createView({
    backgroundColor: 'red',
    width: parentView.rect.width - padding,
    height: parentView.rect.height - padding
  });

  parentView.add(childView);

  win.removeEventListener('postlayout', layoutChild);
}

win.addEventListener('postlayout', layoutChild);

win.open();

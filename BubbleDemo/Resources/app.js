var win = Ti.UI.createWindow();

// [ window ]
//     |
// [ topView ]
//     |
//     | _ _ [ middleView ]
//                 |
//                 | _ _ _ [ bottomView ]
//
var topView = Ti.UI.createView(),
    middleView = Ti.UI.createView(),
    bottomView = Ti.UI.createView();

win.add(topView);
topView.add(middleView);
middleView.add(bottomView);

// Setup event listeners to trace the event
// as it bubbles up the view tree.
bottomView.addEventListener('ping', function() {
  Ti.API.info('bottom view: ping');
});
middleView.addEventListener('ping', function(e) {
  Ti.API.info('middle view: ping');
  e.cancelBubble = true;
});
topView.addEventListener('ping', function() {
  Ti.API.info('top view: ping');
});
win.addEventListener('ping', function() {
  Ti.API.info('window: ping');
});

// Fire off an event at the bottom view.
// It should "bubble" up the view tree.
bottomView.fireEvent('ping', {bubbles: true});

win.open();

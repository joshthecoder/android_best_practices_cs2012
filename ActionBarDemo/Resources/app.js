var tabGroup = Titanium.UI.createTabGroup();

function createTab(color) {
  var win = Ti.UI.createWindow({
    backgroundColor: color
  });

  var tab = Ti.UI.createTab({
    title: color,
    window: win
  });

  tabGroup.addTab(tab);
}

['blue', 'red', 'green'].forEach(createTab);

tabGroup.open();

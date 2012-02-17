//Ti.include style
//Ti.include("modules/mini-browser/mini-browser.method.js");

//for commonJS style
//var MiniBrowser = require('modules/mini-browser/mini-browser.method').MiniBrowser;

//module style
var MiniBrowser = require('ti.minibrowser').MiniBrowser;

var windowBase = Ti.UI.createWindow({
	backgroundColor:"#FFF"
});

var buttonOpenMobileBrowser = Ti.UI.createButton({
	left:50,
	right:50,
	height:50,
	title:"Open MiniBrowser"
});
windowBase.add(buttonOpenMobileBrowser);

buttonOpenMobileBrowser.addEventListener("click", function() {

	var browser = new MiniBrowser({
		url:"http://www.treinamentos.mobi",
		barColor:"#000",
		modal:true
	});
	
	browser.openBrowser();
	
});

windowBase.open();
var eventPage = new (function() {
	function init() {
        chrome.browserAction.onClicked.addListener(function(tab){

            chrome.tabs.executeScript(tab.id, {
                code:[
                  "var cn = document.body.className;",
                  "if(/breezy-blind-toggled/.test(cn)){",
                      "document.body.className = cn.replace(/\s*breezy-blind-toggled/g, '');",
                  "}else{",
                      "document.body.className += ' breezy-blind-toggled';",
                  "}"
                ].join('\n')
            });

        });
	}

	init();
})();

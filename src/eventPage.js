var eventPage = new (function() {
	function init() {
        chrome.browserAction.onClicked.addListener(function(tab){

            chrome.tabs.executeScript(tab.id, {
                code:[
                  "var cn = document.body.className;",
                  "if(/workable-blind-toggled/.test(cn)){",
                      "document.body.className = cn.replace(/\s*workable-blind-toggled/g, '');",
                  "}else{",
                      "document.body.className += ' workable-blind-toggled';",
                  "}"
                ].join('\n')
            });

        });
	}

	init();
})();

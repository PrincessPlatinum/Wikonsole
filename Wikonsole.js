(function ($) {
    var wc = {
        init: function () {
            $('.WikiaArticle').html('<div id="console-wrapper"><div id="console-output"><span class="output-line">> Welcome to Wikonsole!</span></div><input type="text" id="console-input" placeholder="Type Commands Here"/></div>');
            mw.util.addCSS('#console-wrapper{font-family: "Lucida Console", Monaco, monospace;border: 5px solid green;background: black;width: 500px;text-align: center;}#console-output{font-family: "Lucida Console", Monaco, monospace;color: green;background: black;width:480px;height: 400px;text-align: left;padding: 4px 4px 4px 4px;overflow: auto;}#console-input{border-radius: 0em;-webkit-border-radius: 0em;-moz-border-radius: 0em;background: #000;color: green;font-family: "Lucida Console", Monaco, monospace;font-size: 12pt;width: 480px;}');
        }
    };

    if (mw.config.get('wgPageName') == 'Special:Console') {
        wc.init();
    }
}(jQuery));

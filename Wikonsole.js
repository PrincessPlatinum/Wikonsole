(function ($) {
    var wc = {
        init: function () {
            $('.WikiaArticle').html('<textarea type="text" id="console" wrap="soft">> </textarea>');
            mw.util.addCSS('#console {border-radius: 0em;-moz-border-radius: 0em;-webkit-border-radius: 0em;border: 4px solid green;background: #000;color: green;font-family: "Lucida Console", Monaco, monospace;font-size: 12pt;font-weight: 700;margin-left: 5%;margin-right: 5%;width: 90%;height: 400px;}');
        }
    };

    //is the right page?
    if (mw.config.get('wgPageName') == 'Special:Console') {
        wc.init();
    }
}(jQuery));

(function($) {
    function moveCaretToEnd(el) {
        if (typeof el.selectionStart == 'number') {
            el.selectionStart = el.selectionEnd = el.value.length;
        } else if (typeof el.createTextRange != 'undefined') {
            el.focus();
            var range = el.createTextRange();
            range.collapse(false);
            range.select();
        }
    }

    var textarea = document.getElementById('console');

    textarea.onfocus = function() {
        moveCaretToEnd(textarea);
        window.setTimeout(function() {
            moveCaretToEnd(textarea);
        }, 1);
    };

    $('textarea#console').keypress(function(event) {
        var keycode = (event.keyCode ? event.keyCode : event.which);
        if(keycode == '13') {
            processInput();
        }
    });
}(jQuery));

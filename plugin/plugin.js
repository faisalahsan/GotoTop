(function($) {

    jQuery.fn.highlight = function(pat) {
        function innerHighlight(node, pat) {
            var skip = 0;
            if (node.nodeType == 3) {
                var pos = node.data.toUpperCase().indexOf(pat);
                if (pos >= 0) {
                    var spannode = document.createElement('span');
                    spannode.className = 'highlight';
                    var middlebit = node.splitText(pos);
                    var endbit = middlebit.splitText(pat.length);
                    var middleclone = middlebit.cloneNode(true);
                    spannode.appendChild(middleclone);
                    middlebit.parentNode.replaceChild(spannode, middlebit);
                    skip = 1;
                }
            } else if (node.nodeType == 1 && node.childNodes && !/(script|style)/i.test(node.tagName)) {
                for (var i = 0; i < node.childNodes.length; ++i) {
                    i += innerHighlight(node.childNodes[i], pat);
                }
            }
            return skip;
        }
        return this.each(function() {
            innerHighlight(this, pat.toUpperCase());
        });
    };

    jQuery.fn.removeHighlight = function() {
        function newNormalize(node) {
            for (var i = 0, children = node.childNodes, nodeCount = children.length; i < nodeCount; i++) {
                var child = children[i];
                if (child.nodeType == 1) {
                    newNormalize(child);
                    continue;
                }
                if (child.nodeType != 3) {
                    continue;
                }
                var next = child.nextSibling;
                if (next == null || next.nodeType != 3) {
                    continue;
                }
                var combined_text = child.nodeValue + next.nodeValue;
                new_node = node.ownerDocument.createTextNode(combined_text);
                node.insertBefore(new_node, child);
                node.removeChild(child);
                node.removeChild(next);
                i--;
                nodeCount--;
            }
        }

        return this.find("span.highlight").each(function() {
            var thisParent = this.parentNode;
            thisParent.replaceChild(this.firstChild, this);
            newNormalize(thisParent);
        }).end();
    };

    $.fn.goToUp = function(options) {

        /* define paramerters */
        var settings = $.extend({
            up_arrow_btn_background: "rgba(140, 80, 147, 0.7)",
            search_row_background: "rgba(140, 80, 147, 0.7)",
            up_arrow_btn_padding: "5px 5px 5px 5px",
            search_row_padding: "8px 8px 8px 8px",
            lastScrollTop: 0,
            bottom: '50px',
            right: '50px',
        }, options);


        $('head').append('<link rel="stylesheet" type="text/css" href="plugin/go-top.css" />');
        $('body').append("<div id='wrapper'><div id='searchtop-btn'><form accept='#'><fieldset><div class='row'><input type='button' value='' id='goto-top-search-btn'><input type='search' placeholder='Search' id='goto-top-search-field'></div></fieldset></form><a href='javascript:void(0);' id='go-top'></a></div></div>");

        /* setting css properties */
        $('#searchtop-btn').css({
            "right": settings.right
        });
        $('#searchtop-btn').css({
            "bottom": settings.bottom
        });
        $('#searchtop-btn .row').css({
            "background": settings.search_row_background
        });
        $('#go-top').css({
            "background": settings.up_arrow_btn_background
        });

        $('#searchtop-btn .row').css({
            "padding": settings.search_row_padding
        });
        $('#go-top').css({
            "padding": settings.up_arrow_btn_padding
        });


        /* handle scroll action */
        $(window).scroll(function() {
            if ($(this).scrollTop()) {
                $('#wrapper').show();
                $("#searchtop-btn").stop(true, true).fadeIn();
            } else {
                $('#searchtop-btn').stop(true, true).fadeOut();
                $('body').removeHighlight();
                $('#goto-top-search-field').val('');
            }
        });

        /* handle click action for goto-top button */
        $('#go-top').on('click', function() {
            console.log('clicked');

            $('body').animate({
                scrollTop: 0
            }, "slow");
        });

        $('#goto-top-search-field').bind('keyup change', function(ev) {
            // pull in the new value
            var searchTerm = $(this).val();

            // remove any old highlighted terms
            $('body').removeHighlight();

            // disable highlighting if empty
            if (searchTerm) {
                // highlight the new term
                $('body').highlight(searchTerm);
            }
        });

    };

}(jQuery));

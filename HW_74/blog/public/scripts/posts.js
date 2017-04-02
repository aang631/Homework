(function () {
    'use strict';

    const addCommentGUI = $(`<div>
                                <textarea id="commentContent"></textarea>
                                <button id="addComment">add</button>
                                <button id="cancelComment">cancel</button>
                           </div>`),
        commentContent = addCommentGUI.find('#commentContent');

    $(document).on('click', '.showComments', e => {
        const theTarget = $(e.target),
            theId = theTarget.closest('.post').attr('id'),
            closestElement = $('#' + theId + ' .comments');
        if (theTarget.html() === "Show Comments") {
            $.post('/showComments', {
                id: theId
            }, data => {
                closestElement.show().append(data);
                theTarget.text("Hide Comments");
            });
        } else {
            closestElement.text("").hide();
            theTarget.text("Show Comments");
        }
    });


    $(document).on('click', '.addComment', e => {
        const theTarget = $(e.target);
        theTarget.after(addCommentGUI);
        addCommentGUI.show();
        theTarget.hide();
    });

    function hideAddCommentGUI() {
        addCommentGUI.hide();
        $('#commentContent').val('');
        $('.addComment').show();
    }

    $(document).on('click', '#addComment', e => {
        $.post('/addComment', {
            id: $(e.target).closest('.post').attr('id'),
            content: $('#commentContent').val()
        });
        hideAddCommentGUI();
    });

    $(document).on('click', '#cancelComment', e => {
        hideAddCommentGUI();
    });

    io().on('comment', data => {
        /*
        <div>{{content}}</div>
        <div class="attribution">Posted by {{author}} at {{date}}</div>
        */
        const selectedBlog = (($('#' + data.post).find('.comments')));
        if (selectedBlog.is(":visible")){
            selectedBlog.append(data.comment);
        }
    });


}());
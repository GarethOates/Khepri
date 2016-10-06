<voter-component>
    <div class="voter">

        <i class="glyphicon glyphicon-menu-up {highlighted: myVote == 1}"
        onclick="{upVote}"></i>

        <span class="vote-count">{ voteCount }</span>

        <i class="glyphicon glyphicon-menu-down {highlighted: myVote == -1}"
        onclick="{downVote}"></i>
    </div>

    <script>
    let tag = this;

    tag.voteCount  = tag.opts.voteCount;
    tag.myVote     = tag.opts.myVote;
    tag.observable = tag.opts.observable;

    let originalCount = tag.opts.voteCount;

    tag.upVote = () => {
        if (tag.myVote === 1) { return; }
        tag.myVote++;
        raiseVote();
    };

    tag.downVote = () => {
        if (tag.myVote === -1) { return; }
        tag.myVote--;
        raiseVote();
    };

    function raiseVote() {
        tag.observable.trigger('vote', {
            voteCount: originalCount + tag.myVote,
            myVote: tag.myVote
        });
    }

    </script>
</voter-component>

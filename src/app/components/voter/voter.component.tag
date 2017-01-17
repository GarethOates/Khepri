<voter-component>
    <div class="voter">

        <i class="glyphicon glyphicon-menu-up {highlighted: myVote == 1}"
        onclick="{upVote}"></i>

        <span class="vote-count">{ voteCount }</span>

        <i class="glyphicon glyphicon-menu-down {highlighted: myVote == -1}"
        onclick="{downVote}"></i>
    </div>

    <script>

    let originalCount = this.opts.voteCount;

    this.voteCount = this.opts.voteCount;
    this.myVote    = this.opts.myVote;

    this.upVote = () => {
        if (this.myVote === 1) { return; }

        this.myVote++;
        this.raiseVote();
    };

    this.downVote = () => {
        if (this.myVote === -1) { return; }

        this.myVote--;
        this.raiseVote();
    };

    this.raiseVote = () => {
        this.trigger('vote', {
            voteCount: originalCount + this.myVote,
            myVote: this.myVote
        });
    };

    </script>
</voter-component>

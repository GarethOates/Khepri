<voter-component>
    <div class="voter">

        <i class="glyphicon glyphicon-menu-up {highlighted: myVote == 1}"
        onclick="{upVote}"></i>

        <span class="vote-count">{ voteCount + myVote }</span>

        <i class="glyphicon glyphicon-menu-down {highlighted: myVote == -1}"
        onclick="{downVote}"></i>
    </div>

    <script>
    this.voteCount = this.opts.voteCount;
    this.myVote    = this.opts.myVote;

    this.upVote = () => {
        if (this.myVote === 1) { return; }
        this.myVote++;
    };

    this.downVote = () => {
        if (this.myVote === -1) { return; }
        this.myVote--;
    };

    </script>
</voter-component>

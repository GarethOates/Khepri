<like-component>
    <i class="glyphicon glyphicon-heart {liked: isLiked}"
    onclick={clicked}>
    </i> <span>{noOfLikes}</span>

    <script>
    this.observable = this.opts.observable;
    this.noOfLikes = this.opts.noOfLikes;
    this.isLiked = this.opts.isLiked;

    this.clicked = function() {
        this.isLiked = !this.isLiked;
        this.noOfLikes += this.isLiked ? 1 : -1;

        this.observable.trigger(
            'like',
            {
                noOfLikes: this.noOfLikes,
                isLiked: this.isLiked
            }
        );
    }

    </script>

</like-component>

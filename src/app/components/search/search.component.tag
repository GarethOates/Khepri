<search-component>

    <label for="username">Search:</label>
    <input id="username" type="text" placeholder="Github Username"></input>
    <button onclick="{submit}">Search</button>

    <script>
        this.username = document.getElementById('username').value;
        this.observable = this.opts.observable;

        this.submit = function() {
            this.observable.trigger('search', this.username);
        }

    </script>

</search-component>

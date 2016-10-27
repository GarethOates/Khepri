<todo-component>

    <ol>
        <li each={ todo in todos } >{ todo }</li>
    </ol>

    <script>
        this.todos = this.opts.todos;
        this.observable = this.opts.observable;

        this.on('update', function() {
            if (this.observable) {
                this.observable.trigger('updated', 'Component Updated!');
            }
        });

    </script>


</todo-component>

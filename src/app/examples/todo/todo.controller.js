import riot from 'riot';
import store from '../../redux/root';
import { todoComponent } from '../../components/todo/todo.component';
import { updateItems } from '../../redux/modules/todo';


class todoController {

    constructor() {
        this.obs = riot.observable();

        this.mountTag();
        this.listen();
    }

    mountTag() {
        this.todo = riot.mount('todo-component', store.getState().todos)[0];

        if (this.todo) {
            this.todo.update({ observable: this.obs });
            this.updateComponent();
        }
    }

    listen() {
        this.obs.on('updated', () => {
            console.warn('Tag Updated');
        });

        store.subscribe(() => {
            this.todo.update(store.getState().todos);
        });
    }

    updateComponent() {
        setInterval(function() {
            store.dispatch(updateItems(store.getState().todos));
        }, 1000);
    }
}

module.exports = todoController;

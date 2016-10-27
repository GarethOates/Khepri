import riot from 'riot';
import store from '../../redux/root';
import { todoComponent } from '../../components/todo/todo.component';
import { updateItems } from '../../redux/modules/todo';


class todoController {

    constructor() {
        this.obs = riot.observable();

        this.mountTag();
        this.listen();
        this.updateComponent();
    }

    mountTag() {
        this.todo = riot.mount('todo-component', store.getState().items)[0];

        if (this.todo) {
            this.todo.update({ observable: this.obs });
        }
    }

    listen() {
        this.obs.on('updated', () => {
            console.warn('Tag Updated');
        });
    }

    updateComponent() = {
        setInterval(function() {
            store.dispatch(updateItems(store.getState().items));
        }, 1000);
    }
}

module.exports = todoController;

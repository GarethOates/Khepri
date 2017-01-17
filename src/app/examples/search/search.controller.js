import riot from 'riot';
import store from '../../redux/root';
import { searchComponent } from '../../components/search/search.component';
import { fetchUser } from '../../redux/modules/github';

class searchController {

    constructor() {
        this.mountTag();
        this.listen();
    }

    mountTag() {
        this.search = riot.mount('search-component', store.getState().user)[0];
    }

    listen() {
        this.search.on('search', (username) => {
            store.dispatch(fetchUser(username));
        });

        store.subscribe(() => {
            this.search.update(store.getState().user);
        });
    }
}

module.exports = searchController;

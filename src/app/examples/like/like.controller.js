import riot from 'riot';
import store from '../../redux/root';
import likecomponent from '../../components/like/like.component';
import { like } from '../../redux/modules/like';

class likeController {

    constructor() {
        this.mountTag();
        this.listen();
    }

    mountTag() {
        this.like = riot.mount('like-component', store.getState().like)[0];
    }

    listen() {
        this.like.on('like', (payload) => {
            store.dispatch(like(payload));
        });

        store.subscribe(() => {
            this.like.update(store.getState().like);
        });
    }
}

module.exports = likeController;

import riot from 'riot';
import store from '../../redux/root';
import likecomponent from '../../components/like/like.component';
import { like } from '../../redux/modules/like';

class likeController {

    constructor() {

        this.obs = riot.observable();

        this.mountTag();
        this.listen();
    }

    mountTag() {

        this.like = riot.mount('like-component', store.getState().like)[0];

        if (this.like)
            this.like.update({ observable: this.obs });
    }

    listen() {

        this.obs.on('like', (payload) => {
            store.dispatch(like(payload));
        });

        store.subscribe(() => {
            this.like.update(store.getState().like);
        });
    }
}

module.exports = likeController;

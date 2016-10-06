import riot from 'riot';

import app from './app';
import votercomponent from './components/voter/voter.component';
import likecomponent from './components/like/like.component';
import { fetchUser } from './redux/modules/github';
import { updateVote } from './redux/modules/voter';
import { like } from './redux/modules/like';
import store from './redux/root';

export class mainApp {

    constructor() {

        this.obs = riot.observable();

        this.mountTags();
        this.listen();
    };

    mountTags() {

        this.myApp = riot.mount('app')[0];
        this.voter = riot.mount('voter-component', store.getState().vote)[0];
        this.like = riot.mount('like-component', store.getState().like)[0];

        this.voter.update({ observable: this.obs });
        this.like.update({ observable: this.obs });
    };

    listen() {

        this.obs.on('vote', (payload) => {
            store.dispatch(updateVote(payload));
        });

        this.obs.on('like', (payload) => {
            store.dispatch(like(payload));
        });

        store.subscribe(() => {
            console.log(store.getState());
        });
    };
}

let start = new mainApp();

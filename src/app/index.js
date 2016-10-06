import riot from 'riot';

import app from './app';
import votercomponent from './components/voter/voter.component';
import likecomponent from './components/like/like.component';
import { fetchUser } from './redux/modules/github';
import store from './redux/root';

export class mainApp {

    constructor() {

        this.obs = riot.observable();

        this.mountTags();
        this.listen();
    };

    mountTags() {

        this.myApp = riot.mount('app')[0];

        this.voter = riot.mount('voter-component',
            { voteCount: 34, myVote: 0, observable: this.obs })[0];

        this.like = riot.mount('like-component',
            { noOfLikes: 10, isLiked: false, observable: this.obs })[0];
    };

    listen() {

        this.obs.on('vote', (payload) => {
            console.log(payload);
        });

        this.obs.on('like', (payload) => {
            console.log(payload);
        });
    };
}

let start = new mainApp();

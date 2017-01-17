import riot from 'riot';
import store from '../../redux/root';
import votercomponent from '../../components/voter/voter.component';
import { updateVote } from '../../redux/modules/voter';

class voterController {

    constructor() {
        this.mountTag();
        this.listen();
    };

    mountTag() {
        this.voter = riot.mount('voter-component', store.getState().vote)[0];
    };

    listen() {
        this.voter.on('vote', (payload) => {
            store.dispatch(updateVote(payload));
        });

        store.subscribe(() => {
            this.voter.update(store.getState().vote);
        });
    };
}

module.exports = voterController;

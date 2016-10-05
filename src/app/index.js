const riot = require('riot');
require('./app');
require('./components/voter.component');
require('./components/voter.component.css');

riot.mount('app');

let defaultState = {
    'voteCount': 0,
    'myVote': 0
},
    voter = riot.mount('voter-component', defaultState)[0];

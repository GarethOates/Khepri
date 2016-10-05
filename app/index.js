require('./app');
require('./voter.component');
require('./voter.component.css');

riot.mount('app');

let defaultState = {
    'voteCount': 20,
    'myVote': 0
},
    voter = riot.mount('voter-component', defaultState)[0];

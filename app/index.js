require('./app.tag');
require('./voter.component.tag');
require('style!css!./voter.component.css');

riot.mount('app');

let defaultState = {
    'voteCount': 20,
    'myVote': 0
},
    voter = riot.mount('voter-component', defaultState)[0];

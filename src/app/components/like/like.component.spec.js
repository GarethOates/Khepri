describe('like.component', function () {
    'use strict';

    const element = document.createElement('like-component');
    let tag,
        defaultState = {
            'noOfLikes': 15,
            'isLiked': false
        };

    before(function () {
        document.body.appendChild(element);
        tag = riot.mount('like-component', defaultState)[0];
    });

    after(function () {
        document.body.removeChild(element);
    });

    it('mounts a like-component tag', function () {
         expect(tag).to.exist;
         expect(tag.isMounted).to.be.true;
     });
});

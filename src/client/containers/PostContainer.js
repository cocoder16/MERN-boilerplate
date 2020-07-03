import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Post } from '~c/components';
import * as postActions from '~c/store/post';

class PostContainer extends Component {
    render () { 
        return (
            <Post/>
        );
    }
}

// example code

// const mapStateToProps = (state) => ({
//     id: state.post.id
// })

// const mapDispatchToProps = (dispatch) => ({
//     changePost: (payload) => dispatch(postActions.changePost(payload))
// })

// export default connect(mapStateToProps, mapDispatchToProps)(PostContainer);

export default PostContainer;
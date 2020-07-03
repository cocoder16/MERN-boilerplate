import React from 'react';
import PostContainer from '~c/containers/PostContainer';
import { Route } from 'react-router-dom';

const Home = () => {
    return (
        <Route component={PostContainer}/>
    );
};

export default Home;
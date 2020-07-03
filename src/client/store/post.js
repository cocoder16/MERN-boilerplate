// example code

//action type
const CHANGE_POST = 'post/CHANGE_POST';

//function creating action
export const changePost = (id) => ({
    type: CHANGE_POST,
    payload: id
});

//module's initial state
const initialState = {
    id: ''
}

//reducer
export default function reducer (state=initialState, action) {
    switch (action.type) {
        case CHANGE_POST :
            return { ...state, id: action.payload };
        default :
            return state;
    }
}

// example of function creating action using redux-thunk
// import * as servicePosts from '~c/services/posts';

// export const changePost = () => async (dispatch, getState) => {
//     const id = await servicePosts.getPosts();
//     dispatch({
//         type: CHANGE_POST,
//         payload: id
//     })
// }

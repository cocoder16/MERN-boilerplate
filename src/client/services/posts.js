import axios from 'axios';

export const createPost = (formData) => {
    axios({
        method: 'post',
        url: '/post',
        data: formData,
        headers: { 'content-type': 'multipart/form-data' }
    }).then(res => {
        console.log(res.data);
    }).catch(err => {
        console.log(err);
    });
}

export const getPost = () => {
    axios({
        method: 'get',
        url: '/post'
    }).then(res => {
        console.log(res.data);
    }).catch(err => {
        console.log(err);
    });
}

export const updatePost = (formData) => {
    axios({
        method: 'put',
        url: '/post',
        data: formData,
        headers: { 
            'content-type': 'multipart/form-data'
        }
    }).then(res => {
        console.log(res.data);
    }).catch(err => {
        console.log(err);
    });
}

export const deletePost = () => {
    axios({
        method: 'delete',
        url: '/post'
    }).then(res => {
        console.log(res.data);
    }).catch(err => {
        console.log(err);
    });
}

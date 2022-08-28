export const success_post = 'success_post';
export const fail_post = 'fail_post';
export const loading_post = 'loading_post';


export const postSuccess = () => ({
    type: success_post
});
export const postFail = (errorMessage) => ({
    type: fail_post,
    errorMessage
});
export const postLoading = (note) => ({
    type: loading_post,
    note
});
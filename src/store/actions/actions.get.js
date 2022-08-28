export const success_get = 'success_get';
export const fail_get = 'fail_get';
export const loading_get = 'loading_get';


export const getSuccess = (notes) => {
    return{
    type: success_get,
    notes
}};
export const getFail = (errorMessage) => ({
    type: fail_get,
    errorMessage
});
export const getLoading = () => ({
    type: loading_get
});
const validate = values => {
    const errors = {};

    if (!values.username) {
        errors.username = 'لطفا نام کاربری را وارد کنید.';
    }

    if (!values.password) {
        errors.password = 'لطفا پسورد را وارد کنید.';
    }

    return errors;
};
export default validate;
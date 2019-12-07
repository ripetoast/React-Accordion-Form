const re = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

export default (email) => {
    const validEmail = re.test(email);
    if (!validEmail){
        return "Invalid email";
    }
    return null;
};
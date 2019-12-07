const re = /^(?:(?:00)?44|0)7(?:[45789]\d{2}|624)\d{6}$/;

export default (mobile) => {
    const validMobile = re.test(mobile);
    if (!validMobile){
        return "Invalid UK Mobile No.";
    }
    return null;
};
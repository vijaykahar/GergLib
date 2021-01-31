export const isValidEmail = (email: string) => {
    const reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (reg.test(email) === true) {
        return true;
    }
    return false;
};

export const isValidPasswordRegx = (password: any) => {
    const reg = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$])[A-Za-z\d!@#$]{8,}$/;
    if (reg.test(password) === true) {
        return true;
    }
    return false;
};


export const isBlank = (text: string) => {
    if (text.trim() === '') {
        return true;
    }
    return false;
};


export const isValidPassword = (password: string, length: number) => {
    if (password.length >= length) {
        return true;
    }
    return false;
};

export const isValidComparedPassword = (password: string, confirmPassword: string) => {
    if (password == confirmPassword) {
        return true;
    }
    return false;
};
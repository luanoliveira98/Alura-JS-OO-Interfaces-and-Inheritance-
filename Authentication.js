export class Authentication {
    static login(user, password) {
        if (!Authentication.isAuthenticated(user)) return false;
        return user.authenticate(password);
    }

    static isAuthenticated(user) {
        return "authenticate" in user && user.authenticate instanceof Function;
    }
}
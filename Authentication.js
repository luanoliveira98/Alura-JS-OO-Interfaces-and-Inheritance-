export class Authentication {
    static login(user, password) {
        return user.authenticate(password);
    }
}
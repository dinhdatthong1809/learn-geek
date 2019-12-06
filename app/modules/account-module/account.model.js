export default class Account {
    username;
    password;
    fullName;
    email;
    gender;
    phoneNumber;
    photo;

    constructor(username, password, fullName, email, gender, phoneNumber, photo) {
        this.username = username;
        this.password = password;
        this.fullName = fullName;
        this.email = email;
        this.gender = gender;
        this.phoneNumber = phoneNumber;
        this.photo = photo;
    }
}
export class Student {

    id;
    fullName;
    birthday;
    gender;
    photo;
    mark;
    email;
    motorNumber;
    facebook;

    constructor (id, fullName, birthday, gender, photo, mark, email, motorNumber, facebook) {
        this.id = id;
        this.fullName = fullName;
        this.birthday = birthday;
        this.gender = gender;
        this.photo = photo;
        this.mark = mark;
        this.email = email;
        this.motorNumber = motorNumber;
        this.facebook = facebook;
    }
}
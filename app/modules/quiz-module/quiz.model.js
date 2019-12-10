export class Quiz {
    id;
    name;
    logo;
    numberOfLearners;

    constructor (id, name, logo, numberOfLearners) {
        this.id = id;
        this.name = name;
        this.logo = logo;
        this.numberOfLearners = numberOfLearners;
    }
}
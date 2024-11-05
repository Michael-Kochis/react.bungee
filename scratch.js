class Worm {
    constructor() {
        this.isWorm = true;
    }
}

class Buttworm extends Worm {
    constructor() {
        super();
        this.isButtWorm = true;
    }
}
let newWorm = new Worm();

if (newWorm.isButtWorm) {
    console.log('Buttworm');
} else {
    console.log('Not Buttworm');
}
console.log('End of line');
const multiply = (a, b) => {
    return a*b;
}
console.log(multiply(2, 3));

const student = {
    name: 'Aishwarya',
    age: 24,
    greet() {
        console.log('Hi, I am ' + this.name);
    }
};
student.greet();
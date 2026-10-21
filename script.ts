function greeter(person: string) {
    return "Hello, " + person;
}

let userName = "Daniel Hansen";
let greeting = document.querySelector('.greeting');

if (greeting) {
    greeting.textContent = greeter(userName);
}

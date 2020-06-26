// (base: https://www.typescriptlang.org/play/)
class Greeter {
  public greeting: string;

  constructor(message: string) {
    this.greeting = message;
  }

  public greet(): string {
    return `Hello, ${this.greeting}`;
  }
}

const greeter = new Greeter('world');

const button = document.getElementById('myButton');

if (button) {
  button.onclick = () => {
    alert(greeter.greet());
  };
}

function logger<T extends new (...args: any[]) => any>(
  target: T,
  ctx: ClassDecoratorContext
) {
  console.log("logger decorator");

  console.log(target);
  console.log(ctx);

  return class extends target {
    constructor(...args: any[]) {
      super(...args);
      console.log("class constructor");
      console.log(this);
    }
  };
}

function autobind(target: Function, ctx: ClassMethodDecoratorContext) {
  console.log(target);
  console.log(ctx);
}

@logger
class Person {
  name = "Max";

  @autobind
  greet() {
    console.log("Hi, I am " + this.name);
  }
}

const max = new Person();
const julie = new Person();
// max.greet();
// console.log(max);

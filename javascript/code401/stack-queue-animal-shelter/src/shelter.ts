interface Animal {
  name: string;
  type: "cat" | "dog";
}

export class Shelter {
  arr: Animal[] = [];
  enqueue(name: string, type: "cat" | "dog"): void {
    const newAnimal: Animal = { name, type };
    this.arr.push(newAnimal);
  }

  dequeue(type?: "cat" | "dog"): string {
    if (this.arr.length) {
      for (let i = 0; i < this.arr.length; i++) {
        // If the type is given, return the next animal of a type.
        if (this.arr[i].type === type) {
          return this.arr.splice(i, 1)[0].name;
        }
      }
      // If no type is given (type === undefined), return the next animal.
      if (type === undefined) {
        return this.arr?.shift().name;
      }
    }
  }
}

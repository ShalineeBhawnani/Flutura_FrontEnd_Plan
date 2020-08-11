function Person(first, last, age, gender) {

    // property and method definitions
 
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.gender = gender;
  }

  let person1 = new Person('shalu', 'shalu', 24, 'gender', ['male', 'female']);
  console.log(person1)

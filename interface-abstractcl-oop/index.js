// абстракт класс может содержать как какие-то параметры,св-ва так и методы которые не релизованы (реализ в классах-наследниках)
// инкапсуляция (общее) - класс-капсула, объединяющая св-ва,параметры,методы
class AbstractClass {    
    constructor(name, eat) {
        this.name = name;
        this.eat = eat;
    }

    talk() {}
}
//наследование extends
class Dog extends AbstractClass {
    talk() {
        console.log("dog")
    }
}

//добавление новых параметров - наследуем через super необходимое от родит класса и  в констукторор добавим свои
//без super будет ошибка
// eat underfined , тк не описан
class Cat extends AbstractClass {
    constructor(name, age) {
        super(name)
        this.name =name
        this.age = age;
    }
    talk() {
        console.log("cat")
    }
}

const dog = new Dog("Jack", "dog food");
const cat = new Cat("Kitty", 3);

const animalArray = [dog, cat]
dog._age = 10
console.log(dog,cat)

//поллиморфизм
function animalTalk(animals) {
    animals.forEach(animal => animal.talk() )
}

animalTalk(animalArray)



// инкапсуляция - сокрытие
// приватные поля недоступны вне класса
class Balance {     
    #balance 
  
    constructor() {
        this.#balance = 50000;
    }  
}  

let balanceObj = new Balance();

// balance 50000
  console.log(balanceObj)
// выдаст ошибку
  console.log(balanceObj.#balance = 0)



// такж для управления приватн св-вами можно создавать гетеры сетеры
class Example {
     _width;

    constructor (w) {
        this._width = w;
    }

    get width() {
        return this._width;
    }
    set width(val) {
        val < 1 ? this._width = 1 : this._width = val;
    }
}

const obj = new Example(5);

// w : 1
obj.width = 0;
console.log(obj)



class Person{

    constructor(name, age, activities, city, wife, children, job ) {
        this.name = name
        this.age = age 
        this.city = city
        this.wife = wife
        this.children = children
        this.job = job
        this.activities = activities
    }

//method to get name and inherit it to the horse
    getName(){
     const name = this.name
     return name
    }
}    

class Horse extends Person  {
    constructor(name, age, activities, color ) {
        super(name, age, activities)
       
        this.color = color
    }
} 




const abdulkareem = new Person("Abdulkareem", 35, ['eating dates', 'smoking water pipe'], "Riyadh", 1, 3, "construction worker", )
const adel = new Horse("adel", 15, ['eats grass', `helps transport materials for ${person.this.name}`], "brown" ) 

console.log(abdulkareem)
console.log(adel)
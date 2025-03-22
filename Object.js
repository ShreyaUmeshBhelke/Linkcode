const person ={
    name:'Shreya',
    age :23,
    fun:function()
    {
        console.log(`Hello,my name is ${this.name}`);
    }
};
console.log(person.name);
person.fun();




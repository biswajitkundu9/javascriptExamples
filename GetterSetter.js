class Person{

    age=25;
    location="";

    set locationName(location){
        this.location=location;
    }

    get locationName(){
        return this.location;
    }
}

let person=new Person();
person.locationName="Bengaluru"
console.log(person.locationName);
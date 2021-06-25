class person
{
    constructor(name,age,email,contactNum,address)
    {
        this.name=name;
        this.age=age;
        this.email=email;
        this.contactNum=contactNum;
        this.address=address;
    }

    displayPerson()
    {
        console.log("Name : "+this.name)
        console.log("Age : "+this.age)
        console.log("Email : "+this.email)
        console.log("COntact Mumber : "+this.contactNum)
        console.log("Address : "+this.address)
    
    }
    
}
let newUser = new person("Akash","23","xyz@gmail.com","70940XXXXX","Coonoor");
newUser.displayPerson();
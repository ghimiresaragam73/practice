class fruits {
    //class is basic building block for angular application
    //class is group of fields(properties),constructor,methods
    private color: string = 'yellow';
    public origin: string = 'Nepal';
    //default access modifiers is public
    // access modifiers -> are used for data hiding mechanism in class
    //class data are cruicial so that access modifiers should be implemented
    //private -> private scope are used or can be used within same class startinf from { to }
    //public -> public properties are access or can be access from its objects(instance), ...
    //protected ->protected properties are accessible or can be accessed in child(derived) class /*  */
    constructor(color) {
        this.color = color; //this is class object every property and methods added in the class are available under this
    }
    getColor(){
        return this.color;
    }
    setColor(newColor){
        this.color = newColor;
    }
    abcd(){
        return this.getColor();
    }
}

let apple = new fruits('Apple');

class vegitables extends fruits{
    //extend keyword is used for inhertance
    //class specified after extends keyword is base class(parent class)
    //parent -> fruits
    //child -> vegitables
    constructor(){
        super() //super keyword is used to call parent class constructor
    }
    home(){
        this.getColor
    }
}

class Test {
    name:string;
    address:string;
    phone:number;
    gender:string;
}
function sendMail(options:Test){

}
sendMail({})
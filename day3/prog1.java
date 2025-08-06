//METHOD OVERRIDING
class sample{//super class
    public void display(){
        System.out.println("I am from the super class");
    }
}

class sample1 extends sample{//sub class
    @Override
    public void display(){
        System.out.println("I am from derived class");
    }
}

class prog1{
    public static void main(String[] args) {
        sample reference;//superclass object
        sample s1=new sample();//object of super class
        sample1 s2=new sample1();//object of derived class
        //reference=s1;//use when super class needs to be overridden over sub class
        reference=s2;//assigning sub class with super class's object
        reference.display();//function call
    }
}
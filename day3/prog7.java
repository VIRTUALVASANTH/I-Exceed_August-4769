class a1{
    int x=20;
    static int y=30;

    public void display(){
        System.out.println("x= "+x);
        System.out.println("y= "+y);
    }

    static void display1(){
        a1 obj=new a1();//non-static variable x cannot be referenced from a static context - so create a object
        System.out.println("x= "+obj.x);//creating an instance to call instance variable from a static method
        System.out.println("y= "+y);
    }
}

public class prog7 {
    public static void main(String[] args) {
        a1 obj1=new a1();
        obj1.display();
        a1.display1();
    }
}
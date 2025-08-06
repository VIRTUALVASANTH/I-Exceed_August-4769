class student4 {
    student4()
    {
        this(20,10);//executes first
        System.out.println("inside the constructor");
        this.display();//using 'this' keyword to call another function within the class
    }

    student4(int x,int y){
        System.out.println("Difference is "+(x-y));
    }
    public void display()
    {
        System.out.println("Inside display method");
    }
}
 
class pro4
 {
    public static void main(String asd[])
    {
        student4 obj=new student4();
    }
 }

class student4 {
    student4()
    {
        System.out.println("inside the constructor");
        this.display();
    }
    public void display()
    {
        System.out.println("Inside display method");
    }
}
 
class pro3
 {
    public static void main(String asd[])
    {
        student4 obj=new student4();
    }
 }

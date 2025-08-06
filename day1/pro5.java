class student6 {
    String name;
 
    student6(String name)
    {
        this.name=name; //name must be assigned in order to displayStudent without this it will be null
        this.displayStudent();
    }
 
    public void displayStudent()
        {
            System.out.println(name);
        }
}
 
class pro5
 {
     public static void main(String asd[])
        {
            student6 obj=new student6("WELCOME");//assigning the value in the main function
        }
 }
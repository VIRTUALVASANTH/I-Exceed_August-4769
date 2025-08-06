interface school
{
     public void display();
     default void display1()
	{
	   System.out.println("Displayed from the School");
	}
}

interface college
{
    default void display1()
	{
	 System.out.println("Displayed from the college");
	}
}
  
interface hostel{
    default void display1(){
        System.out.println("Displayed from the hostel");
    }
}

class student implements school,college,hostel
{
    @Override
    public void display()
	{
	  System.out.println("Overridden Display Method");
	}
    @Override
    public void display1()
	{
	   System.out.println("inside default");
	   school.super.display1();//used to call the super class method
	   college.super.display1();//used to call the sub class method
       hostel.super.display1();
	}
}
 
class prog4
{
    public static void main(String asd[])
	{
	   student obj=new student();
	   obj.display1();
	} 
}
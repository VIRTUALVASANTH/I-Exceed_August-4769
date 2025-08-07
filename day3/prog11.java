abstract class student
{
   abstract public void displayStudent(String name,int age,String city);
}
 
class prog11
{
    public static void main(String asd[])
	{
	  student d= new student(){//using object of abstract class 
		public void displayStudent(String name,int age,String city)
			{
				System.out.println("Name"+name);
	 			System.out.println("Age"+age);
	  			System.out.println("City"+city);
			}	
		};
	  d.displayStudent("Romeo",40,"Andhra");//abstract class object calls the function
	}
}
class studen
{
    String name;

    int age;
    
    String nam;
    
    int ag;

    String dept;

    static String college="SJR COLLEGE";//assigning a static variable to make it static throughout the code
 
 studen(){
     this("Hariis",25);//assigning values to other constructor using 'this' keyword 
     System.out.println("Assigned");
 }
 
 	studen(String nam,int ag){
	    System.out.println("Hi "+nam+" of age "+ag);
	}
	
    studen(String name,int age,String dept)

	{

	   this.name=name;

	   this.age=age;

	   this.dept=dept;

	}
 
    public void displayStudent()

	{

	   System.out.println("Name="+name);

	   System.out.println("Age="+age);

	   System.out.println("Department="+dept);
	   
       System.out.println("College= "+college);//printing static variable 
	}
 
}
class pro7

{

    public static void main(String ads[])

	{

	   studen obj1=new studen("Santa",21,"CSE");

	   studen obj2=new studen("Saravanan",23,"ECE");
	   
	   obj1.displayStudent();

	   obj2.displayStudent();
	   
	   studen obj3=new studen();

	} 

}

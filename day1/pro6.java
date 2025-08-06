class stud 

{

    String name,dept,college;

    int age;
 
     stud(String name,int age,String dept)

	{

	  this.name=name;

	  this.age=age;

	  this.dept=dept;

	}
 
    stud(String name,int age,String dept,String college)

	{

		this(name,age,dept);

		this.college=college;

	        System.out.println(college);

	 	this.displayStudent();

	}
 
	public void displayStudent()

	{

	   System.out.println("Hi" +name +"you are" +age+"belongs to"+dept+"from"+college);

	}
 
  }
 
class pro6

{

    public static void main(String asd[])

	{

	   stud obj=new stud("x",32,"CSE","GCT");

	}

  }

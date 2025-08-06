class car
{
    String  nameofCompany;
    boolean isAvailable;
    car(String nameofCompany,boolean isAvailable)
	{
	   this.nameofCompany=nameofCompany;
	   this.isAvailable=isAvailable;
	}
    public void getCarDetails()//superclass method
	{
	  System.out.println("Company"+nameofCompany);
	  System.out.println("Availability"+isAvailable);
	}
   }

class Scorpio extends car  // derived class
     {
	 String carName,modelName,color;
	 Scorpio(String carName,String modelName,String color)
	  {
	     super("Mahindra",true);//usage of super class to assign values of the super class from sub class
	     this.carName=carName;
	     this.modelName=modelName;
	     this.color=color;
	   }
	  public void displayCarModel()//derived class method
		{
	       System.out.println("Name of the car"+carName);
		   System.out.println("Model"+modelName);
		   System.out.println("Color"+color);
		}
      }	

    class demo1
     {
       public static void main(String ads[])
	{
	   Scorpio c1=new Scorpio("Lambo","THEE","WHITE");
	   c1.getCarDetails();//calling super class method using sub class's object c1
	   c1.displayCarModel();				
	}
     }
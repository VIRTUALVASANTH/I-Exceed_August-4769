//CONSTRUCTOR OVERLOADING
class sample{    //To understand the different types of constructors
    sample(){   
        System.out.println("Default");
    }
    
    sample(int x,int y){
        System.out.println("Parameterized");
        System.out.println("Sum is "+(x+y));
    }
    
    sample(String str1, String str2){
        System.out.println("String");
        System.out.println((str1+" "+str2));
    }
}

public class pro1
{
	public static void main(String[] args) {
		sample obj1=new sample(10,29);//Creation of object for parametrized constructors
		sample obj2=new sample();//Creation of object for Default constructor
		sample obj3=new sample("heellooo","sir");//Object for string(Concatenation) 
	}
}

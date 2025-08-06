import java.io.DataInputStream;//new java package to import DataInputStream
 
class sample
  {
     DataInputStream din=new DataInputStream(System.in);//creation of object for using DataInputStream
 
     sample()
	{	
	  try{//use try catch block to handle exception and proceed to the code
	       int str1=Integer.parseInt(din.readLine());//convert to int using parseInt and read using readLine()
	       int str2=Integer.parseInt(din.readLine());
	       System.out.println(str1+str2);
 
	}catch(Exception  d){}
	}
}

class io1
{
    public static void main(String asd[])
	{
	    new sample();//Empty object creation to call constructor
	}
}
import java.io.FileInputStream;
import java.io.FileOutputStream;
 
class fileop2

{

   public static void main(String asd[]) throws Exception

	{

	   FileOutputStream fout=new FileOutputStream("sample1.txt");

           String str="this is the content which is going to embed into sample1";

	   byte bystr[]=str.getBytes();

	   fout.write(bystr);

	   fout.close();
 
	   FileInputStream fin=new FileInputStream("sample1.txt");

           int i=0;

	   fin.skip(10);

	   while((i=fin.read())!=-1)

		System.out.print((char)i);
 
	   


	}

}
 
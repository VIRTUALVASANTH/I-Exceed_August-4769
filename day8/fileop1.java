import java.io.File;
import java.io.FileReader;
class fileop1
  {
    public static void main(String asd[]) throws Exception
	{
           int i=0;
	   File f=new File(asd[0]);
	   FileReader fo=new FileReader(f);
	   while((i=fo.read())!=-1)
		{
	   	   System.out.print((char)i);
		}
	}
}
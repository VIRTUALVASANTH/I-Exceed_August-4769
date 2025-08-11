import java.io.File;
class Fileop
{
    public static void main(String asd[]) throws Exception
	{
	  File f=new File("C:\\Users\\vasanth.g\\Desktop\\I-Exceed-August\\I-Exceed_August\\day6");
	  f.createNewFile();
	  System.out.println(f.isAbsolute());
	  System.out.println(f.getAbsolutePath());
	  boolean ex=f.exists();
	  System.out.println(ex);
	  if(ex)
		{
		   System.out.println("can Read?"+f.canRead());
		   System.out.println("can Write ?"+f.canWrite());
		}
	  f.delete();
	  System.out.println("is file is available?\t"+f.exists());
	}
}
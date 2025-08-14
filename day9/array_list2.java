import java.util.ArrayList;
public class array_list2 
{
  public static void main(String[] args)
  {
    ArrayList<String> listOfNames = new ArrayList<String>();
    listOfNames.add("JAVA");
    listOfNames.add("JS");
    listOfNames.add("PYTHON");
    listOfNames.add("KOTLIN");
    System.out.println("Before remove method list: "+listOfNames);
    boolean isRemovedSucessfully = listOfNames.remove("KOTLIN");
    System.out.println("Is element is removes successfully = "+isRemovedSucessfully);
        //  This element doesn't exists
    isRemovedSucessfully = listOfNames.remove("JS"); 
    listOfNames.removeAll(listOfNames);
    System.out.println("After remove method list: "+listOfNames);
    System.out.println("Is element is removes successfully = "+isRemovedSucessfully);
    System.out.println("After remove method list: "+listOfNames);
   }
}
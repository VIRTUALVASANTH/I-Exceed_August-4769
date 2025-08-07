import java.lang.reflect.Constructor;
import java.lang.reflect.Method;
class sampledemo{
  private String str="welcome";
  private int x;
  private int y;
  private int z;
  private String str1,str2;

  private sampledemo(String str1, String str2) {//private constructor
        String str3=str1+str2+str1;
        System.out.println("String "+str3);
    }

  private void displayPvt()//private method without arguements
  {
    System.out.println("Accessing this method outside of the class");
  }

  private void add(int x,int y){//private method with args
    System.out.println(z=x+y);
  }
}

class privaccess
 {
      public static void main(String[] args) throws Exception {//handle exception
        //   sampledemo obj=new sampledemo();
        //   obj.displayPvt();  TYPICAL METHOD TO CALL FUNCTION. X

          Class c1=Class.forName("sampledemo");//assigning the private class to c
          Constructor m3=c1.getDeclaredConstructor(String.class,String.class);//loading of the declared constructor
          m3.setAccessible(true);//reflected object should suppress checks for Java language access control
          Object o1=m3.newInstance("Hello","Bro");

          Method m1= c1.getDeclaredMethod("displayPvt");//storing declared method1 in m2
          m1.setAccessible(true);
          m1.invoke(o1);

          Method m2=c1.getDeclaredMethod("add",int.class,int.class);//storing declared method2 in m1
          m2.setAccessible(true);
          m2.invoke(o1, 2,3);

        }
 }
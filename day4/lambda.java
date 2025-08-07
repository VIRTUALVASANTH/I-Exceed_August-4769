@FunctionalInterface
interface one{
   public void show(); 
}

public class lambda {//without using implements 
    public static void main(String[] args) {
        one obj=new one(){//This anonymous inner class creation can be turned into a lambda expression.
            @Override
            public void show(){
                System.out.println("Lambda expression");
            }
        };
        obj.show();
        }
    }
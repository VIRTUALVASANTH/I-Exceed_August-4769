class thread4 extends Thread{
    Thread t5=new Thread(this);
    public void run(){
        for (int i = 0; i < 10; i++) {
            try{
            System.out.println(i);
            t5.sleep(100);;

        }catch(InterruptedException d){}
        }
    }
    }

public class Threading5 {
    public static void main(String[] args)throws InterruptedException
     { 
         thread4 obj1=new thread4();
	     thread4 obj2=new thread4();
	     thread4 obj3=new thread4();
	     obj1.start();
         obj1.join();

	     obj2.start();
	     obj2.join();

	     obj3.start();
    }
}
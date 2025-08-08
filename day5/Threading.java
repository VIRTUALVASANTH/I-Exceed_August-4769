class thread1 extends Thread{
    /*thread1(){
        new Thread(this).start();
    }*/

    public void run(){
        System.out.println("Inside run method");
    }
}

public class Threading {
    public static void main(String[] args) {
        thread1 t1=new thread1();
        thread1 t2=new thread1();
        t1.start();
        t2.start();
    }
}

class thread2 extends Thread{
    Thread t=new Thread(this);

    thread2(){
        System.out.println(t.getName());
    }

    public void display(){
        t.setName("Hello Thread-1");
        System.out.println(t.getName());
    }

    static void display1(){
        Thread t1=new Thread();
        System.out.println(t1.getName());
        t1.setName("Hello Thread-2");
        System.out.println(t1.getName());
    }
}
public class Threading1 {
    public static void main(String[] args) {
    thread2 t4=new thread2();
    t4.start();
    thread2 t2=new thread2();
    Thread t = new Thread(() -> thread2.display1());//using lambda expression operator
    t.start();
    t2.display();
}
}
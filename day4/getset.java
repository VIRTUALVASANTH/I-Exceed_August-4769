class admin{
    private String username;//private variables
    private int pin;
    private String password;

    admin(String username,int pin,String password){
        this.username=username;
        this.pin=pin;
        this.password=password;
    }

    public String getusername(){//getter method
        return username;
    }

    public int getpin(){
        return pin;
    }

    public String getpassword(){
        return password;
    }

    public void setusername(String username){//setter methods
        this.username=username;
    }

    public void setpin(int pin){
        this.pin=pin;
    }

    public void setpassword(String password){
        this.password=password;
    }    

}
public class getset {
    public static void main(String[] args) {
        admin a1=new admin("Ganesh", 1234, "pass");
        System.out.println(a1.getusername());
        System.out.println(a1.getpassword());
        a1.setpassword("HELLO");
        System.out.println(a1.getpassword());
        System.out.println(a1.getusername());
    }
}
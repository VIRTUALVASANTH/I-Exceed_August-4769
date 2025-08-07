class credentials{
    private final password pass;//variable of class password
    String Account_name;
    int Account_id;

    credentials(String Account_name,int Account_id){
        pass=new password("987654");
        this.Account_name=Account_name;
        this.Account_id=Account_id;
    }

    public void displayDetails(){
        System.out.println("Account Name "+Account_name);
        System.out.println("Account ID "+Account_id);
        pass.displaypass();//calling function using variable from class password
    }
}

class password{
    String pass;
    password(String pass){
        this.pass=pass;
    }

    public void displaypass(){
        System.out.println("Password "+pass);
    }
}
public class decompose {
    public static void main(String[] args) {
        credentials c1=new credentials("VIKRAM", 619);
        c1.displayDetails();//function call
    }    
}
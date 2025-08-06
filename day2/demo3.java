class hospital{
    String P_name;
    int P_id;
    int ward_no;
    Fees fee;

    hospital(String P_name,int P_id,int ward_no,Fees fee) {
        this.P_name=P_name;
        this.P_id=P_id;
        this.ward_no=ward_no;
        this.fee=fee;
    }

    public void displayP_details(){
        System.out.println("The patient is "+P_name+" of id "+P_id+" present in ward "+ward_no+ " and the charges he needs to pay is "+fee);
        fee.displayFeeDetails();
    }
}

public class demo3 {
    public static void main(String[] args) {
        Fees f1=new Fees(5000, 45000);
        hospital h1=new hospital("Harris",789,8,f1);
        h1.displayP_details();
    }
}

class Fees{
    int bed_fee;
    int other_fee;

    Fees(int bed_fee,int other_fee)
    {
        this.bed_fee=bed_fee;
        this.other_fee=other_fee;
    }
    public void displayFeeDetails(){
        System.out.println("The bed charges are "+bed_fee);
        System.out.println("Other charges are "+other_fee);
    }
}

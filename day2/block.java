class block
 {
 // to understand the prference givn to the block
 //Preference """static block>instance block>constructor block>main block"""
    { 
        System.out.println("Instance block is called");
        display();
    }
    static{ //static block
        System.out.println("inside static block");
    }
 
    block() // constructor
    {
        System.out.println("Inside constructor");
    }
 
    public void display(){
        for (int i = 0; i <= 10; i++) {
            if(i%2==0) //to print all even numbers from 0 to 10
            System.out.println(i);
        }}
     public static void main(String[] args) {
        new block();
        System.out.println("Inside main mathod");
     }
 }
 
//Inheritance (To show the entity relationship)
class Address
 {
    int plotno,pin;
    String st,city;
 
      Address(String st,String city,int plotno,int pin)
        {
            this.plotno=plotno;//aasinging from demoStudent
            this.pin=pin;
            this.st=st;
            this.city=city;
        }
     public void displayAddress()//values of these are assigned in the demoStudent.java
     {
        System.out.println("Plot"+plotno);
        System.out.println("Street"+st);
        System.out.println("City"+city);
        System.out.println("Pincode"+pin);
     }
}
interface Stuudent{
    
}

public class prog10 {
    public static void main(String[] args) {
        new Stuudent(){//using interface name to creata an anonyomous function
            public void displayStuudent(String name, int age, String city){
                System.out.println("Name "+name);
                System.out.println("Age "+age);
                System.out.println("City "+city);
            }
        }.displayStuudent("Rolex",50,"Chennai");//function call
    }
}
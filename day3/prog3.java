interface nurse{
    static void yell(){//usage of static method(yell) within the interface(nurse)
        System.out.println("Be quiet");
    }
    public void display();//abstract method
}

interface doctor{
    static void treat(){//usage of static method(treat) within the interface(doctor)
        System.out.println("Wait for the treatment");
    }
}

class clinic implements nurse{
    clinic(){
        System.out.println("Welcome to clinic");
    }
    @Override
    public void display(){
        System.out.println("Clinic Name: Gopal Clinic");
    }
}
class prog5{
    public static void main(String[] args) {
        clinic c1=new clinic();
        c1.display();
        nurse.yell();//interface_name.static_method
        doctor.treat();
    }
}
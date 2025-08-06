class Company {
    String nameofcom;
    String city;

    Company() {
        
    }

    Company(String nameofcom, String city) {
        this.nameofcom = nameofcom;
        this.city = city;
    }
}

class HR extends Company {
    HR(String nameofcom, String city) {
        super(nameofcom, city);
        System.out.println("Name of company: " + nameofcom);
    }
}

class Finance extends Company {
    Finance(String nameofcom, String city) {
        super(nameofcom, city);
        System.out.println("Name of city: " + city);
    }
}

public class pro1{
    public static void main(String[] args) {
        Company obj = new Company("CompanyABC", "BANGALORE");
        HR obj1 = new HR("CompanyABC", "BANGALORE");
        Finance obj2 = new Finance("CompanyABC", "BANGALORE");
    }
}

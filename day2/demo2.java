class school{//super class
    String school_name;
    String city;

    school(String school_name, String city){
        this.school_name=school_name;
        this.city=city;
    }

    public void displaySchoolDetails(){
        System.out.println("Name of the school is "+school_name);
        System.out.println("Name of the city is "+city);
    }
}

class grade10 extends school{ //extended class from super class school
    int room_no;
    int Class_strength;

    grade10(int room_no,int Class_strength){
        super("SJR","Bangalore");
        this.room_no=room_no;
        this.Class_strength=Class_strength;
    }

    public void display_classDetails(){
        System.out.println("ROOM NO: "+room_no);
        System.out.println("Class_strength: "+Class_strength);
    }
}


public class demo2 {
    public static void main(String[] args) {
        grade10 obj=new grade10(10, 30);
        obj.display_classDetails();//usage of sub-class's object to call the super class
        obj.displaySchoolDetails();
    }
}

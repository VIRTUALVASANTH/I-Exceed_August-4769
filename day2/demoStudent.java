class Student
 {
    String name,dept;
    int roll;
    Address adr;
 
    Student(int roll,String name,String dept,Address adr)
    {
        this.roll=roll;
        this.name=name;
        this.dept=dept;
        this.adr=adr;
    }
 
    public void displayStudent()
        {
            System.out.println("Name of the student "+name);
            System.out.println("Roll "+roll);
            System.out.println("Department "+dept);
            adr.displayAddress();
        }
 
 }
 
 class demoStudent
  {
      public static void main(String[] args) {
          Address a1=new Address("Rajajinagar","Bangalore",2,4324);
          Student s1=new Student(64,"Pramod","eee",a1);
          s1.displayStudent();
 
      }
  }
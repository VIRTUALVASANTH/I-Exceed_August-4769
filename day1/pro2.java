class student
 {
      String name,dept;
      int age,roll;
 
      student(String name,int age,String dept,int roll)
      {
       this.name=name;//usage of this keyword to refer to current instance class variables
       this.dept=dept;
       this.age=age;
       this.roll=roll;
 
      }
 
      public void displayStudent()
      {
        System.out.println("Name= "+name);
        System.out.println("Age= "+age);
        System.out.println("Department= "+dept);
        System.out.println("Roll No= "+roll);
      }
 }
 
 class pro2
  {
      public static void main(String[] args) {
          student obj=new student("Dilli",31,"EEE",64);
          obj.displayStudent();
      }
  }
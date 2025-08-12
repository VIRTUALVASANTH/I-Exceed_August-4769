 //Use of OCP(Create different classes for different specific purposes)
 abstract class PaymentMethod
  {
     abstract public double paymentProcess(double amount);
  }

class creditcard extends PaymentMethod
 {
     @Override
     public double paymentProcess(double amount)
     {
        return amount*=.10;
     }
 }

class debitcard extends PaymentMethod
 {
     @Override
     public double paymentProcess(double amount)
     {
        return amount*=.12;
     }
 }

 class UPI extends PaymentMethod//can be extended by another new payment method
 {
     @Override
     public double paymentProcess(double amount)
       {
          return amount*=.15;
       }
 }

class paymentprocess//closed for modification and open for extension
 {
     public double processType(PaymentMethod method,double amount)
       {
            return method.paymentProcess(amount);  
       }
  }

class Bank
 {
   public static void main(String asd[])
     {
        PaymentMethod cc=new creditcard();
        PaymentMethod dc=new debitcard();
        PaymentMethod upi=new UPI();//object for upi payment method
        paymentprocess po=new paymentprocess();
        System.out.println(po.processType(upi,10000));//prints the value according to the chosen payment method
        System.out.println(po.processType(cc,10000));
        System.out.println(po.processType(dc,10000));

     }
 }
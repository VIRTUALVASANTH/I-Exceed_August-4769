import java.io.FileWriter;
class BankAccount{
        String AccountNumber,AccountHolder;
        double balance;

    public BankAccount(String AccountNumber,String AccountHolder,double balance) {
        this.AccountNumber=AccountNumber;
        this.AccountHolder=AccountHolder;
        this.balance=balance;
    }

    public void deposit(double  amount){
        balance+=amount;
        System.out.println("Balance After deposit"+balance);
     }
     
    public void withDraw(double amount) {
       if(balance>amount)
       {
        balance-=amount;
        System.out.println("Amount "+amount+ " Withdrawn successfully");
       }
       else{
        System.out.println("In sufficient Balance");
       }
    }

    public String getAccountNumber(){
       return AccountNumber;
    }
    public String getAccountHolder(){
        return AccountHolder;
    }

    public double getBalance(){
        return balance;
    }
 }
    
class AccountPrinter
  {
    public void printAccountDetails(BankAccount account)
     {
        System.out.println("Your Bank Account Number is "+account.getAccountNumber());
        System.out.println("Your Bank Account Holder Name is "+account.getAccountHolder());
        System.out.println("Your Bank Balance is "+account.getBalance());
     }
  }


class AccountPersistence
   {
    public void savetoFile(BankAccount account)
    {
        String filename=account.AccountNumber+"_account.txt";
        try{
                FileWriter writer = new FileWriter(filename);
                writer.write(account.getAccountNumber());
                writer.write(account.getAccountHolder());
                writer.write("Balance is" +account.getBalance());
                writer.close();
            }catch(Exception d){}
        
    }
   }

   class BankApp{
        public static void main(String asd[])
        {
           BankAccount obj= new BankAccount("43248","sathish",120000);
           AccountPersistence obj1=new AccountPersistence();
           AccountPrinter obj2=new AccountPrinter();
           obj.deposit(10000);
           obj.withDraw(60000);
           obj2.printAccountDetails(obj);
           obj1.savetoFile(obj);
        }
   }
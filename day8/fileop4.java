import java.io.*;
import java.util.Scanner;

public class fileop4 {
    public static void main(String[] args) throws Exception {
        Scanner scanner = new Scanner(System.in);

        System.out.print("Enter the filename (with .txt extension): ");
        String fileName = scanner.nextLine();

        System.out.print("Enter the content to write into the file: ");
        String content = scanner.nextLine();

        FileOutputStream fout = new FileOutputStream(fileName);
        byte[] bystr = content.getBytes();
        fout.write(bystr);
        fout.close();

        System.out.println("\nFile written successfully. Reading content...");
        BufferedInputStream bin = new BufferedInputStream(new FileInputStream(fileName));
        int i;
        while ((i = bin.read()) != -1) {
            System.out.print((char) i);
        }
        bin.close();

        scanner.close();
    }
}

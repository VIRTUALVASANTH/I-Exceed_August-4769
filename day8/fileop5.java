import java.io.*;

public class fileop5 {
    public static void main(String[] args) throws Exception {

        String fileName = args[0];
        String content = args[1];

        FileOutputStream fout = new FileOutputStream(fileName);
        fout.write(content.getBytes());
        fout.close();

        System.out.println("\nFile written successfully. Reading content");

        BufferedInputStream bin = new BufferedInputStream(new FileInputStream(fileName));
        int i;
        while ((i = bin.read()) != -1) {
            System.out.print((char) i);
        }
        bin.close();
    }
}
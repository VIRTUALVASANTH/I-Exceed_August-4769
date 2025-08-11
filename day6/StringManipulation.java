public class StringManipulation {
    public static void main(String[] args) {
        String str = "  Hello Java World  ";
        String str2 = "hello java world";

        // 1. length()
        System.out.println("1. Length: " + str.length());

        // 2. charAt()
        System.out.println("2. Character at index 6: " + str.charAt(6));

        // 3. substring()
        System.out.println("3. Substring from index 2: " + str.substring(2));
        System.out.println("   Substring from 2 to 7: " + str.substring(2, 7));

        // 4. toUpperCase() and toLowerCase()
        System.out.println("4. Upper case: " + str.toUpperCase());
        System.out.println("   Lower case: " + str.toLowerCase());

        // 5. equals() and equalsIgnoreCase()
        System.out.println("5. Equals: " + str.equals(str2));
        System.out.println("   Equals Ignore Case: " + str.equalsIgnoreCase(str2));

        // 6. compareTo() and compareToIgnoreCase()
        System.out.println("6. CompareTo: " + str.compareTo(str2));
        System.out.println("   CompareTo Ignore Case: " + str.compareToIgnoreCase(str2));

        // 7. contains()
        System.out.println("7. Contains 'Java': " + str.contains("Java"));

        // 8. indexOf() and lastIndexOf()
        System.out.println("8. Index of 'a': " + str.indexOf('a'));
        System.out.println("   Last Index of 'a': " + str.lastIndexOf('a'));

        // 9. replace()
        System.out.println("9. Replace 'Java' with 'Python': " + str.replace("Java", "Python"));
        System.out.println("   Replace 'a' with '*': " + str.replace('a', '*'));

        // 10. startsWith() and endsWith()
        System.out.println("10. Starts with '  He': " + str.startsWith("  He"));
        System.out.println("    Ends with 'ld  ': " + str.endsWith("ld  "));

        // 11. trim()
        System.out.println("11. Trimmed string: '" + str.trim() + "'");

        // 12. isEmpty() and isBlank()
        String emptyStr = "";
        String blankStr = "   ";
        System.out.println("12. Is empty: " + emptyStr.isEmpty());
        System.out.println("    Is blank: " + blankStr.isBlank()); // Java 11+

        // 13. split()
        String csv = "apple,banana,orange";
        String[] fruits = csv.split(",");
        System.out.println("13. Split string:");
        for (String fruit : fruits) {
            System.out.println("   " + fruit);
        }

        // 14. join()
        String date = String.join("-", "2025", "08", "11");
        System.out.println("14. Joined string: " + date);

        // 15. toCharArray()
        System.out.println("15. Characters in 'Hi!':");
        for (char c : "Hi!".toCharArray()) {
            System.out.println("   " + c);
        }

        // 16. valueOf()
        int num = 100;
        String strNum = String.valueOf(num);
        System.out.println("16. Value of int 100: " + strNum);

        // 17. repeat()
        String laugh = "ha";
        System.out.println("17. Repeat 'ha' 3 times: " + laugh.repeat(3)); // Java 11+

        // 18. matches()
        String patternStr = "abc123";
        System.out.println("18. Matches regex [a-z]+\\d+: " + patternStr.matches("[a-z]+\\d+"));

        // 19. Using StringBuilder (bonus)
        StringBuilder sb = new StringBuilder("Hello");
        sb.append(" World!");
        System.out.println("19. StringBuilder append: " + sb.toString());
    }
}
public class StringBuff {
    public static void main(String[] args) {
        // Create a StringBuffer object
        StringBuffer sb = new StringBuffer("Hello");

        // 1. length()
        System.out.println("1. Length: " + sb.length());

        // 2. charAt()
        System.out.println("2. Character at index 1: " + sb.charAt(1));

        // 3. substring()
        System.out.println("3. Substring from index 2: " + sb.substring(2));
        System.out.println("   Substring from 1 to 4: " + sb.substring(1, 4));

        // 4. append()
        sb.append(" World");
        System.out.println("4. After append: " + sb.toString());

        // 5. insert()
        sb.insert(6, "Java ");
        System.out.println("5. After insert: " + sb.toString());

        // 6. replace()
        sb.replace(6, 10, "Beautiful ");
        System.out.println("6. After replace: " + sb.toString());

        // 7. delete()
        sb.delete(6, 16);
        System.out.println("7. After delete: " + sb.toString());

        // 8. reverse()
        sb.reverse();
        System.out.println("8. After reverse: " + sb.toString());

        // 9. setCharAt()
        sb.setCharAt(0, 'h');
        System.out.println("9. After setCharAt(0, 'h'): " + sb.toString());

        // 10. capacity()
        System.out.println("10. Capacity: " + sb.capacity());

        // 11. ensureCapacity()
        sb.ensureCapacity(50);
        System.out.println("11. Capacity after ensureCapacity(50): " + sb.capacity());

        // 12. toString()
        String finalStr = sb.toString();
        System.out.println("12. Converted to String: " + finalStr);
    }
}
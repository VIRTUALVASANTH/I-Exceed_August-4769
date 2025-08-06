## 🔹 Day 1: Primitives & `main()`

- **8-bit capacity**  
  –2⁷ … 2⁷ – 1

- **Type sizes & ranges**  
  - `byte` (1 B): –128 … 127  
  - `short` (2 B): –32 768 … 32 767  
  - `int` (4 B): –2³¹ … 2³¹ – 1  
  - `long` (8 B)

- **Hexadecimal notation**  
  Digits `0–9` and letters `A–F` → values 0 … 15

- **Floating-point**  
  - `float` (4 B, IEEE 754)  
  - `double` (8 B, IEEE 754)

- **Other primitives**  
  - `char` (2 B, Unicode)  
  - `boolean` (1 bit)

- **Program entry point**  
  ```java
  public static void main(String[] args)
  static ⇒ no object instantiation required

*******************************************************************************

## 🔹 Day 2: Variables, Constructors & `this`

- **Variable categories**  
  - **Instance** → one copy per object  
  - **Static** → one copy per class (shared)  
  - **Local** → inside methods/blocks; must initialize before use  

- **Constructors**  
  - Name matches the class, no return type  
  - Overloaded by parameter list (default, parameterized, copy)  

- **`this` keyword**  
  - Qualifies instance fields vs. parameters  
  - Chains constructors via `this(...)`  

- **Static vs. Instance context**  
  - **Static** members load once at class-load; accessed via `ClassName.member`  
  - **Instance** members require `new ClassName()`  

********************************************************************************

## 🔹 Day 3: Init Blocks, Inheritance, Interfaces & Anonymous Methods

- **Initialization blocks**  
  - **Static** → runs once when the class loads  
  - **Instance** → runs before each constructor call  
  - **Execution order**: static blocks → instance blocks → constructor  

- **Inheritance**  
  - Use `extends` for subclassing  
  - `abstract` classes cannot be instantiated directly  

- **Interfaces (Java 8+)**  
  - Support **default** and **static** methods  
  - Resolve diamond-problem via `InterfaceName.super.method()`  

- **Anonymous classes & lambdas**  
  - One-off, unnamed implementations (e.g., callbacks/listeners)  
  - Can be used in abstract classes , interfaces, or as method arguments

- **Polymorphism**  
  - Runtime dispatch selects the actual object’s method implementation  

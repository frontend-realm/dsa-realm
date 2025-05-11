//1. Time Complexity: Rate at which the time required to run a code , changes with respect to the input size 
    // i)O(1) -> constant time:
    function calculate(n) {
        return 2;
    } 
    calculate(100)

    // ii)O(n) linear time: as input increase , time to complete the code also increase
    {

        let n = 100;
    
        for(let i=0;i<n;i++) {
            // console.log('linear time') //to avoid to many consoles log 
        }
    }

    //iii)O(n^2)Quadratic time: nested loops
    {
        let n = 10
        for(let i=0;i<n;i++) {
            for(let j=0;j<n;j++) {
                // console.log(`i=${i}, j=${j}`); // to avoid to many console log
            }
        }
    }

    //O(1)>O(logn)>O(n)>O(n^2) -> complexity analysis from good to worst this is the order
    // some key rules to calculate complexity:
    // compute always worst case
    // avoid constants and co-efficients like (3n+4) resultant will be O(n)
    // best case, worst case, average case
    // loop 1 and loop 2 in same function or code it will be added O(n+m)
    // always take the steps and count it to find complexity of each code you write

//2.Space Complexity: Memory Space 
    //Auxilary space + Input Space
    //c = a+b , here a,b are input space, and c are auxiliarry space space or extra variable is used to solve the problem 
    // no. of space is used c,a,b = 3 O(3) that means O(1)

    {
        let n = 10
        for(let i=0;i<n;i++) {
            for(let j=0;j<n;j++) {
                // console.log(`i=${i}, j=${j}`); // to avoid to many console log
            }
        }
        //space complexity will be O(1)
    }

    {
        let a = 5
        let b = 6
        let c;
        c=a+b
        console.log(c)
    }
    /**
     * 🔍 Space Complexity Analysis of the given code:
     * 
     * Total Variables Used:
     * - a, b = Input space (2 variables)
     * - c     = Auxiliary space (1 variable)
     * 
     * So, total memory used = 3 variables → O(3)
     * 
     * ❗ Big-O Notation Rule:
     * - Big-O ignores constants (like 3, 100, etc.)
     * - Therefore, O(3) becomes O(1)
     * 
     * ✅ Final Space Complexity: O(1) (Constant Space)
     * - Because the memory used does NOT grow with input size
     * 
     * 🧠 Summary:
     * Input Space     → a, b       = O(1)
     * Auxiliary Space → c          = O(1)
     * Total           → a + b + c  = O(1)
    */

//Imp Doc Must read:
    /**
     * 📘 Big-O Notation – Core Rules & Concepts
     *
     * Big-O describes how time or space grows with input size (n).
     * It helps analyze the efficiency of algorithms.
     *
     * 🔹 1. Ignore Constants
     *    - O(1), O(2), O(1000) → All are O(1)
     *    - We care about **growth**, not exact operations.
     *
     * 🔹 2. Drop Non-Dominant Terms
     *    - O(n² + n + 10) → O(n²)
     *    - Keep only the term that grows fastest.
     *
     * 🔹 3. Focus on Worst-Case by Default
     *    - Unless specified, Big-O means worst-case scenario.
     *    - e.g., Searching in array: O(n) (if not found)
     *
     * 🔹 4. Input Size Matters
     *    - Complexity depends on how input size affects operations.
     *    - e.g., Loop over n elements → O(n)
     *
     * 🔹 5. Nested Loops Multiply
     *    - Outer and inner loop → O(n) * O(n) = O(n²)
     *    - Example: for (i) { for (j) {} } → O(n²)
     *
     * 🔹 6. Function Calls in Series Add Up
     *    - O(n) + O(n) = O(n)
     *    - But O(n) + O(n²) → O(n²) (drop non-dominant)
     *
     * 🔹 7. Recursive Patterns Often Use:
     *    - O(log n) → divide problem in half (e.g., binary search)
     *    - O(n log n) → divide & conquer + combine (e.g., merge sort)
     *
     * ✅ Common Complexities:
     *    - O(1): Constant → best
     *    - O(log n): Logarithmic → very efficient
     *    - O(n): Linear → acceptable
     *    - O(n²): Quadratic → bad for large n
     *    - O(2ⁿ), O(n!): Exponential/Factorial → avoid for big inputs
    */


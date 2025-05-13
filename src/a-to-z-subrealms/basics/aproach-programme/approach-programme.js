/**
 * HOW TO APPROACH ANY CODING QUESTION — IN JAVASCRIPT
 * ----------------------------------------------------
 * This example demonstrates a step-by-step approach using the "Two Sum" problem.
 * 
 * Problem Statement:
 *   Given an array of integers `nums` and an integer `target`,
 *   return indices of the two numbers such that they add up to target.
 * 
 * Example:
 *   Input: nums = [2, 7, 11, 15], target = 9
 *   Output: [0, 1] // because nums[0] + nums[1] = 2 + 7 = 9
 *
 * Constraints:
 *   - Exactly one solution exists.
 *   - You may not use the same element twice.
 *
 * Steps to Solve:
 * 1. Understand the problem
 * 2. Work through a small example
 * 3. Choose the right strategy (brute force or optimized)
 * 4. Write pseudocode
 * 5. Implement with comments
 * 6. Test with multiple cases
 * 7. Analyze complexity
 */

// ✅ Step 5: Final implementation
function twoSum(nums, target) {
    // Create a map to store each number and its index
    const map = new Map();
  
    // Loop through each number in the array
    for (let i = 0; i < nums.length; i++) {
      const currentNum = nums[i];
      const complement = target - currentNum;
  
      // Check if complement exists in the map
      if (map.has(complement)) {
        // If yes, return the indices
        return [map.get(complement), i];
      }
  
      // Otherwise, store current number with its index
      map.set(currentNum, i);
    }
  
    // If no solution found (problem guarantees a solution exists)
    return [];
  }
  
  // ✅ Step 6: Test with different cases
  function runTests() {
    const testCases = [
      { nums: [2, 7, 11, 15], target: 9, expected: [0, 1] },
      { nums: [3, 2, 4], target: 6, expected: [1, 2] },
      { nums: [3, 3], target: 6, expected: [0, 1] },
    ];
  
    testCases.forEach(({ nums, target, expected }, index) => {
      const result = twoSum(nums, target);
      console.log(`Test Case ${index + 1}:`, result, "| Expected:", expected);
    });
  }
  
  // ✅ Step 7: Run tests
  runTests();
  
  /**
   * Time Complexity: O(n)
   * - We traverse the array once while doing constant time map lookups.
   *
   * Space Complexity: O(n)
   * - We store up to n elements in the hash map.
   *
   * This template can be reused for other problems by following the same approach:
   * - Understand → Dry run → Strategy → Pseudocode → Implement → Test → Analyze
   */
  

/**************************************
  🔁 FOR LOOP DOCUMENTATION TEMPLATE
**************************************/

/* 
  📍 Step 1: Analyze the Question
  -------------------------------
  Ask: What do we need to do?
  Example: Print numbers from 1 to 3

  ✍️ Rough Input: none
  ✅ Expected Output: 1 2 3
*/


/* 
  📍 Step 2: Build Rough Logic
  ----------------------------
  We need:
  - a starting point ➝ let i = 1
  - a condition to continue ➝ i <= 3
  - an increment ➝ i++

  So our logic becomes:
  for (let i = 1; i <= 3; i++) {
    print i
  }
*/


/*
  📍 Step 3: Dry Run / Debug the Logic
  ------------------------------------
  Let's debug with actual iterations:

  🔄 Iteration 1:
    i = 1; check i <= 3 ➝ ✅ true
    print 1
    i++ ➝ i = 2

  🔄 Iteration 2:
    i = 2; check i <= 3 ➝ ✅ true
    print 2
    i++ ➝ i = 3

  🔄 Iteration 3:
    i = 3; check i <= 3 ➝ ✅ true
    print 3
    i++ ➝ i = 4

  🔄 Iteration 4:
    i = 4; check i <= 3 ➝ ❌ false
    loop stops
*/


/*
  📘 Final Enhanced Code
  -----------------------
*/

  for (let i = 1; i <= 3; i++) {
    console.log(i); // Prints: 1, 2, 3
  }


/*
  📈 Enhancements / Learnings:
  ----------------------------
  ✅ Use when:
  - You know how many times to run the loop
  ✅ You can control:
  - Initialization
  - Condition
  - Increment/Decrement
  ✅ Replace `i++` with `i += 2` for skipping values
  ✅ Can be used to loop through arrays, strings, ranges
*/
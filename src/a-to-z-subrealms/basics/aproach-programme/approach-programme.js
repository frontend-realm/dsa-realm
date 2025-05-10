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
  
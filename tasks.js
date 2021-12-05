const EASY = '_6_NyFbd86i43OMNZ52Yq2';
const MEDIUM = '_1Mj0CB8_TmR3neCmwqJhr3';
const HARD = '_25HURG2GnrzRO3g-VEENwF';
const VERY_HARD = '_3dJLM1oQ3tA8Hc9RjEw1KA';

const complexity = {
  Easy: EASY,
  Medium: MEDIUM,
  Hard: HARD,
  'Very Hard': VERY_HARD,
};

const root = document.querySelector('.QuestionsPage-questionsList');

const categories = Array.from(root.children)
  .filter(elem => !elem.matches('.QuestionsPage-categoryCol.QuestionsPage-categoryCol--empty'));

categories.forEach(c => {
  const title = c.querySelector('.QuestionPage-categoryTitle');
  const tasks = Array.from(c.querySelector('.QuestionPage-questionsColumnContainer').children)
    .filter(elem => !elem.matches('.QuestionPage-questionPlaceholder'));
  
  console.log(title.innerText);
  
  tasks.forEach(t => {
    const [level] = Object.entries(complexity)
      .find(([k, v]) => t.querySelector(`.${v}`));
    console.log(`${t.innerText} - ${level}`);
  });
});

/*
 
 Arrays - 0/24
 Two Number Sum - Easy
 Validate Subsequence - Easy
 Sorted Squared Array - Easy
 Tournament Winner - Easy
 Non-Constructible Change - Easy
 Three Number Sum - Medium
 Smallest Difference - Medium
 Move Element To End - Medium
 Monotonic Array - Medium
 Spiral Traverse - Medium
 Longest Peak - Medium
 Array Of Products - Medium
 First Duplicate Value - Medium
 Merge Overlapping Intervals - Medium
 Four Number Sum - Hard
 Subarray Sort - Hard
 Largest Range - Hard
 Min Rewards - Hard
 Zigzag Traverse - Hard
 Apartment Hunting - Very Hard
 Calendar Matching - Very Hard
 Waterfall Streams - Very Hard
 Minimum Area Rectangle - Very Hard
 Line Through Points - Very Hard
 
 Binary Search Trees - 0/10
 Find Closest Value In BST - Easy
 BST Construction - Medium
 Validate BST - Medium
 BST Traversal - Medium
 Min Height BST - Medium
 Find Kth Largest Value In BST - Medium
 Reconstruct BST - Medium
 Same BSTs - Hard
 Validate Three Nodes - Hard
 Right Smaller Than - Very Hard
 
 Binary Trees - 0/13
 Branch Sums - Easy
 Node Depths - Easy
 Invert Binary Tree - Medium
 Binary Tree Diameter - Medium
 Find Successor - Medium
 Height Balanced Binary Tree - Medium
 Max Path Sum In Binary Tree - Hard
 Find Nodes Distance K - Hard
 Iterative In-order Traversal - Very Hard
 Flatten Binary Tree - Very Hard
 Right Sibling Tree - Very Hard
 All Kinds Of Node Depths - Very Hard
 Compare Leaf Traversal - Very Hard
 
 Dynamic Programming - 0/19
 Max Subset Sum No Adjacent - Medium
 Number Of Ways To Make Change - Medium
 Min Number Of Coins For Change - Medium
 Levenshtein Distance - Medium
 Number Of Ways To Traverse Graph - Medium
 Max Sum Increasing Subsequence - Hard
 Longest Common Subsequence - Hard
 Min Number Of Jumps - Hard
 Water Area - Hard
 Knapsack Problem - Hard
 Disk Stacking - Hard
 Numbers In Pi - Hard
 Maximum Sum Submatrix - Hard
 Maximize Expression - Hard
 Max Profit With K Transactions - Very Hard
 Palindrome Partitioning Min Cuts - Very Hard
 Longest Increasing Subsequence - Very Hard
 Longest String Chain - Very Hard
 Square of Zeroes - Very Hard
 
 Famous Algorithms - 0/5
 Kadane's Algorithm - Medium
 Dijkstra's Algorithm - Hard
 Topological Sort - Hard
 Knuth—Morris—Pratt Algorithm - Very Hard
 A* Algorithm - Very Hard
 
 Graphs - 0/13
 Depth-first Search - Easy
 Single Cycle Check - Medium
 Breadth-first Search - Medium
 River Sizes - Medium
 Youngest Common Ancestor - Medium
 Remove Islands - Medium
 Cycle In Graph - Medium
 Minimum Passes Of Matrix - Medium
 Boggle Board - Hard
 Rectangle Mania - Very Hard
 Detect Arbitrage - Very Hard
 Two-Edge-Connected Graph - Very Hard
 Airport Connections - Very Hard
 
 Greedy Algorithms - 0/5
 Minimum Waiting Time - Easy
 Class Photos - Easy
 Tandem Bicycle - Easy
 Task Assignment - Medium
 Valid Starting City - Medium
 
 Heaps - 0/5
 Min Heap Construction - Medium
 Continuous Median - Hard
 Sort K-Sorted Array - Hard
 Laptop Rentals - Hard
 Merge Sorted Arrays - Very Hard
 
 Linked Lists - 0/13
 Remove Duplicates From Linked List - Easy
 Linked List Construction - Medium
 Remove Kth Node From End - Medium
 Sum of Linked Lists - Medium
 Find Loop - Hard
 Reverse Linked List - Hard
 Merge Linked Lists - Hard
 Shift Linked List - Hard
 LRU Cache - Very Hard
 Rearrange Linked List - Very Hard
 Linked List Palindrome - Very Hard
 Zip Linked List - Very Hard
 Node Swap - Very Hard
 
 Recursion - 0/13
 Nth Fibonacci - Easy
 Product Sum - Easy
 Permutations - Medium
 Powerset - Medium
 Phone Number Mnemonics - Medium
 Staircase Traversal - Medium
 Lowest Common Manager - Hard
 Interweaving Strings - Hard
 Solve Sudoku - Hard
 Generate Div Tags - Hard
 Ambiguous Measurements - Hard
 Number Of Binary Tree Topologies - Very Hard
 Non-Attacking Queens - Very Hard
 
 Searching - 0/7
 Binary Search - Easy
 Find Three Largest Numbers - Easy
 Search In Sorted Matrix - Medium
 Shifted Binary Search - Hard
 Search For Range - Hard
 Quickselect - Hard
 Index Equals Value - Hard
 
 Sorting - 0/9
 Bubble Sort - Easy
 Insertion Sort - Easy
 Selection Sort - Easy
 Three Number Sort - Medium
 Quick Sort - Hard
 Heap Sort - Hard
 Radix Sort - Hard
 Merge Sort - Very Hard
 Count Inversions - Very Hard
 
 Stacks - 0/7
 Min Max Stack Construction - Medium
 Balanced Brackets - Medium
 Sunset Views - Medium
 Sort Stack - Medium
 Next Greater Element - Medium
 Shorten Path - Hard
 Largest Rectangle Under Skyline - Hard
 
 Strings - 0/15
 Palindrome Check - Easy
 Caesar Cipher Encryptor - Easy
 Run-Length Encoding - Easy
 Generate Document - Easy
 First Non-Repeating Character - Easy
 Longest Palindromic Substring - Medium
 Group Anagrams - Medium
 Valid IP Addresses - Medium
 Reverse Words In String - Medium
 Minimum Characters For Words - Medium
 Longest Substring Without Duplication - Hard
 Underscorify Substring - Hard
 Pattern Matcher - Hard
 Smallest Substring Containing - Very Hard
 Longest Balanced Substring - Very Hard
 
 Tries - 0/2
 Suffix Trie Construction - Medium
 Multi String Search - Hard
 
 */
/*
 // coins = [4,5,1,2]
 // amount = 7
 
 function coinChange(coins, amount) {
 const dp = []
 dp[0] = 0
 
 for (let a = 1; a < amount; a++) {
 for (let c of coins) {
 // it means that we possible found solution for dp
 if (a - c >= 0) dp[a] = min(dp[a], 1 + dp[a - c])
 
 // coin = 4
 // a = 7
 }
 }
 
 return dp[amount] !== amount ? dp[amount] : -1;
 }
 
 T - O(amount * coins.length)
 S - O(amount)
 
 https://www.youtube.com/watch?v=H9bfqozjoqs
 */
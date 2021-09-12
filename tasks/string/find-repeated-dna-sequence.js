/*
Technique: Sliding Window

The DNA sequence is composed of a series of
nucleotides abbreviated as 'A', 'C', 'G', and 'T'.

For example, "ACGAATTCCG" is a DNA sequence.
When studying DNA, it is useful to identify repeated
sequences within the DNA.

Given a string s that represents a DNA sequence,
return all the 10-letter-long sequences (substrings)
that occur more than once in a DNA molecule.
You may return the answer in any order.

Input: s = "AAAAACCCCCAAAAACCCCCCAAAAAGGGTTT"
Output: ["AAAAACCCCC","CCCCCAAAAA"]

Input: s = "AAAAAAAAAAAAA"
Output: ["AAAAAAAAAA"]


A  C  A  C  A , 2
|  |
   |  |
      |  |
         |  |
        

T - O(n)
S - O(1)
*/
function findRepeatedDnaSequences(string, length) {
  const sequences = new Set();
  const repeatedSequences = new Set();
  
  let left = 0;
  let right = 0;
  
  while (right < string.length) {
    if (right - left === length - 1) {
      const sequence = string.slice(left, right + 1)
      if (sequences.has(sequence)) {
        repeatedSequences.add(sequence, sequence);
      } else {
        sequences.add(sequence, sequence)
      }
      left++;
    }
    right++;
  }
  
  const repeatedSequencesArr = Array.from(repeatedSequences);
  console.log(repeatedSequencesArr);
  return repeatedSequencesArr;
}

findRepeatedDnaSequences('ACACA', 2); // [AC,CA]


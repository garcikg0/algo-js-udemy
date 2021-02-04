// Write a function called findLongesteSubstring, which accepts a string and returns the length of the longest substring with all distinct characters. 

function findLongesteSubstring(str){
    let longest = 0;
    let seen = {};
    let start = 0;

    for (let i = 0; i < str.length; i++){
        let char = str[i];
        if(seen[char]) {
            start = Math.max(start, seen[char]);
        }
        // index - beginning of substring + 1 (to include current in count)
        longest = Math.max(longest, i - start + 1);
        // store the index of the next char so as to not double count 
        seen[char] = i + 1
    }
    console.log(longest)
    return longest;
};

findLongesteSubstring('') // 0
findLongesteSubstring('rithmschool') // 7
findLongesteSubstring('thisisawesome') // 6
findLongesteSubstring('thecatinthehat') // 7
findLongesteSubstring('bbbbbb') // 1
findLongesteSubstring('longestsubstring') // 8
findLongesteSubstring('thisishowwedoit') // 6


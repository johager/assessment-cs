
function test(func, inp, exp) {
    // test the function func with inputs inp and expected result exp
    const res = func(inp)
    let passed = false
    if (res === exp) {
        passed = 'true '
    }
    console.log("passed:", passed, `func: ${func.name}  inp: ${inp}  res: ${res}  exp: ${exp}`)
}

/*
test(func, inp, exp) reports success as a string so the VSCode terminal will tint it like the other output. Passed 'false' is set as a boolean so that the VSCode terminal will tint it yellow so it stands out.
*/

//
// === addToZero ===
//

function addToZero(nums) {
    // see if any numbers in the nums array sum to zero
    // if (nums.length < 2) {
    //     return false
    // }
    for (let i=0; i<nums.length-1; i++) {
        for (let j=i+1; j<nums.length; j++) {
            if (nums[i] + nums[j] === 0) {
                return true
            }
        }
    }

    return false
}

/*
addToZero(nums) has:

time complexity O(n^2) due to the nested loops over essentially the whole array of numbers

space complexity O(1) because nums is a pointer to an external array, and only i and j need to be created in the function
*/

test(addToZero, [], false)
test(addToZero, [1], false)
test(addToZero, [1, 2, 3], false)
test(addToZero, [1, 2, 3, -2], true)

//
// === hasUniqueChars ===
//

function hasUniqueChars(str) {
    // determine of str is made of only unique characters
    const uniqueChars = new Set(str.slice())
    return str.length === uniqueChars.size
}

/*
hasUniqueChars(str) has:

time complexity of O(n) due to creating the uniqueChars Set

space complexity of O(n) because the uniqueChars set must be created
*/

// test(hasUniqueChars, 'Monday', true)
// test(hasUniqueChars, 'Moonday', false)

//
// === isPangram ===
//

function isPangram(str) {
    // determine if str is a pangram
    const alpha = str.replace(/[^a-z0-9]/gi, '').toLowerCase()
    const chars = new Set(alpha)
    return chars.size === 26
}

/*
isPangram(str) has:

time complexity of O(n) because it must "loop over" each item of alpha when making the chars set

space complexity of O(1) because chars can be no larger than 26
*/

// test(isPangram, 'The quick brown fox jumps over the lazy dog!', true)
// test(isPangram, 'I like cats, but not mice', false)

//
// === findLongestWord ===
//

function findLongestWord(strs) {
    // return length of the longest str in the array strs
    let maxLength = 0
    for (let str of strs) {
        maxLength = Math.max(maxLength, str.length)
    }
    return maxLength
}

/*
findLongestWord(strs) has:

time complexity of O(n) because it must loop over each string in the strs array

space complexity of O(n) because str is created for each iteration of strs (see below), and str can be arbitrarily large
*/

// test(findLongestWord, ["hi", "hello"], 5)

function testArrayOfStrings(strs) {
    let maxLength = 0
    for (let str of strs) {
        str = '123'
    }
}

let strs = ['abc','xyz']
console.log("pre strs:", strs)
testArrayOfStrings(strs)
console.log("    post:", strs)

/*
testArrayOfStrings(strs) changes the value of str on each iteration, yet strs before and after the function is the same,
so str in the for-of loop is not just a pointer to the i-th index of str.

This is also true for an array of numbers (below). However, a for-item-of-items loop for an array of numbers would have spatial complexity of O(1) because a number can't have an arbitrarily-large storage.
*/

function testArrayOfNumbers(nums) {
    let maxLength = 0
    for (let num of nums) {
        num = 9
    }
}

let nums = [1,2,3]
console.log("pre nums:", nums)
testArrayOfNumbers(nums)
console.log("    post:", nums)

//
// === findLongestWord version 2===
//

function findLongestWord2(strs) {
    // return length of the longest str in the array strs
    let maxLength = 0
    for (let i in strs) {
        maxLength = Math.max(maxLength, strs[i].length)
    }
    return maxLength
}

/*
findLongestWord2(strs) has:

time complexity of O(n) because it must loop over each string in the strs array

space complexity of O(1) because only i and laxLength have to be created
*/

// test(findLongestWord2, ["hi", "hello"], 5)

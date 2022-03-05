const perf = require('execution-time')()

function addToZero(nums) {
    // see if any numbers in the nums array sum to zero
    if (nums.length < 2) {
        return false
    }
    for (let i=0; i<nums.length-1; i++) {
        for (let j=i+1; j<nums.length; j++) {
            if (nums[i] + nums[j] === 0) {
                return true
            }
        }
    }

    return false
}

function getSizedArray(size){
    let array = []
    for (let i=0; i<size; i++){
        array.push(i)
    }
    return array
}

function timeAddToZero() {
    const sizes = [10,100,1000,10000,100000,1000000]

    for (let size of sizes) {
        const arr = getSizedArray(size)
        perf.start()
        addToZero(arr)
        const time = perf.stop()
        console.log(size, time.time)
    }
}

timeAddToZero()
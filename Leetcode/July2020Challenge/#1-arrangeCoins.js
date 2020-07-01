//In order to have stairs, it has to start at 1 to be viable
//the next stairs must hit the previous stairs length + 1 to make it a new set of stairs
//start i = 0 and have a counter that will hold the total amount of building blocks
//you can stop looping when the total is greater than n

//[0,1,3,6,10,15,21]
const arrangeCoins = (n) => {
    if (n === 0) return 0
    let stairs = 1;
    let totalCoins = 0;

    while (totalCoins < n) {
        totalCoins += (stairs + 1)
        if (totalCoins >= n) break
        stairs++
    }

    return stairs
};
//Time Complexity - O(n)
//Space Complexity - O(1)

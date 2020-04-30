const romanToInt = (s) => {
    let total = 0
    //dict to store the basic conversion
    const dict = {
        'I':1,
        'V':5,
        'X':10,
        'L':50,
        'C':100,
        'D':500,
        'M':1000
    }

    //loop through the string
 for(let i = s.length-1; i >= 0; i--){
     const num = dict[s[i]]
     if(!dict[s[i+1]]) {
         total += num
         continue
     }
    //If the number on my left is bigger than or equal the current num I add. Otherwise I substract
     if(num >= dict[s[i+1]]) total+=num
     else total-=num
     }

    // return total
    return total

//     curr    5  1  100  10   1000   100    1000
//     prev    u  5  1    100  10     1000   100
//     total   5  4  104  94   1094   994    1994
};

romanToInt("IV"); // ==> 4
romanToInt("MCMXCIV"); // ==> 1994

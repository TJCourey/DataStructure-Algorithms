// https://leetcode.com/problems/roman-to-integer/
// Create a function that takes a string as a parameter
// validate the string to only accept I V X L C D M
// Find value of roman numerals in string
// return value as integer
// if roman numereral not entered return "error"

function romanToInt(string){
    let numerals = []
    let solution
    const error = "Error"

    string.toUpperCase
    numerals.from(string)

    for (let i = 0; i < numerals.length; i++) {
        const element = array[i];
        switch (element) {
            case I:
                solution+=1
                break;
        
            case V:
                solution+=5
                break;
        
            case X:
                solution+=10
                break;
        
            case L:
                solution+=50
                break;
        
            case C:
                solution+=100
                break;
        
            case D:
                solution+=500
                break;
               
            case M:
                solution+=1000
                break;
               
            default:
                break;
        }
    }
}
module.exports = romanToInt;

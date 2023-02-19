// function reverse(st){
//     var stringArray = st.split("") //O(n)
//     // console.log(stringArray)
//     newArray = [] //O(1)
//     currenItemIndex = stringArray.length - 1 //O(1)
//     for(index = 0; index < stringArray.length; index++){
//         newArray[index] = stringArray[currenItemIndex];
//         currenItemIndex--
//     } //O(n)

//     return newArray.toString()
// }


function solution(st){

    if(!st || st.lenght < 2 || typeof st != 'string'){
        return "Invalid string"
    }
    var reversed = [];
    const totalItems = st.lenght - 1;

    for( i = totalItems; i >= 0; i--){
        reversed.push(st[i]);
    }
    return reversed.join('');
}

function solutionTwo(str) {
    return str.split('').reverse().join('');
}

const solutionThree = str => str.reverse().join('')

const solutionFour = str => [...str].reverse().join('')

var str = 'who are you'
console.log(solutionFour('who are you'))
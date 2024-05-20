
const number_num = document.getElementById("number");
const error_num = document.getElementById("error");
const convertBtn = document.getElementById("convert-button");
const output_num = document.getElementById("output")


function intToRoman(num) {
  const symbolsList = [
      ["I", 1],
      ["IV", 4],
      ["V", 5],
      ["IX", 9],
      ["X", 10],
      ["XL", 40],
      ["L", 50],
      ["XC", 90],
      ["C", 100],
      ["CD", 400],
      ["D", 500],
      ["CM", 900],
      ["M", 1000],
      ['V\u0305', 5000],
      ['X\u0305', 10000],
      ['L\u0305', 50000],
      ['C\u0305', 100000],
      ['D\u0305', 500000],
      ['M\u0305', 1000000],
  ];

  let i = symbolsList.length - 1;
  let roman = "";
  while (num > 0) {
      const currentDivider = symbolsList[i][1];
      const currentSymbol = symbolsList[i][0];
      
      const result = Math.floor(num / currentDivider);
      if (result > 0) {
          let temp = "";
          for (let j = 0; j < result; j++) {
              temp += currentSymbol;
          }
          roman += temp;
          num %= currentDivider;
      }
      i -= 1;
  }
  return roman;
}

function resetInterpretation(){
    output_num.textContent = 'Output display';
}
function conversion (){
    const inputNumber = number_num.value;
    if (inputNumber == ""){
        error_num.textContent = "Input a number";
        resetInterpretation();
        return
}
    if (inputNumber <= 0 || inputNumber >= 4000000){
        error_num.textContent = "number must be between 0 and 4000000";
        resetInterpretation();
        return;
    }
    else{
        error_num.textContent = "";
    const roman = intToRoman(inputNumber);
    output_num.innerHTML = "The number"+" " + inputNumber +" is " + roman+ " "+ "in roman numeral."
    }}
    convertBtn.addEventListener("click", function(){
        console.log("clicked");
        conversion();
    });

    console.log("HH");


// https://www.calculateme.com/roman-numerals/to-roman/

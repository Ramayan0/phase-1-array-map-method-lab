const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];
let letterToCapital = [];

const titleCased = () => {
  tutorials.map(function titleCased(stringWord){
    
    let newArr = [];
    
    function stringToArray(string){
      newArr = string.split(" ");
    }; 
    stringToArray(stringWord);

    const capitalized = newArr.map( function(string)
    {
      return string.charAt(0).toUpperCase() + string.slice(1);
    })
    const finalString = capitalized.join(" ");
    letterToCapital.push(finalString);
    console.log(finalString)

  });
  return letterToCapital;
}
  // return tutorials.map((word) => {
  //     const letter = word.split(" ");
  //     const letterToCapital = letter.map(
  //       (letters) => letters.charAt(0).toUpperCase() + letters.slice(1)
  //       );
        
  //       const result = letterToCapital.join(" ");
  //       return result;
  //     });
    

const musiciansArray = ["John Lennon", "Paul McCartney", "George Harrison", "Ringo Starr"];
const instrumentsArray = ["Guitar", "Bass Guitar", "Lead Guitar", "Drums"];
function theBeatlesPlay(musiciansArray, instrumentArray){
  var stringArray = [];
  var loopLength = musiciansArray.length;
  for(let i=0;i<loopLength;i++){
    stringArray.push(`${musiciansArray[i]} plays ${instrumentsArray[i]}`);
  }
  return stringArray;
}

const facts = [
  "He was the last Beatle to learn to drive",
  "He was never a vegetarian",
  "He was a choir boy and boy scout",
  "He hated the sound of his own voice"
];

function johnLennonFacts(facts){
  var stringArray = [];
  var i = 0;
  while(i<4){
    stringArray.push(`${facts[i]}!!!`);
    i++;
  }
  return stringArray;
}

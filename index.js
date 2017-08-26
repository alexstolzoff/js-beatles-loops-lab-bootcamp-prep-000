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

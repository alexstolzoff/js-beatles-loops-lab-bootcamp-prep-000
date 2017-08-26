function theBeatlesPlay(musiciansArray, instrumentArray){
  const musiciansArray = ["John Lennon", "Paul McCartney", "George Harrison", "Ringo Starr"];
  const instrumentsArray = ["Guitar", "Bass Guitar", "Lead Guitar", "Drums"];
  var stringArray = [];
  for(let i=0;i<musiciansArray.length();i++){
    stringArray.push(`${musiciansArray[i]} plays ${instrumentsArray[i]}`);
  }
  return stringArray;
}

//Loop works with Arrays, executing the function with different values in the Arrays

function theBeatlesPlay(musicians, instruments){
  var theyPlay = new Array()
  for (let i=0; i<4; i++){
    theyPlay.push(`${musicians[i]} plays ${instruments[i]}`)
  }
  return theyPlay;
}

function johnLennonFacts(facts){
  var johnLennonShouts = new Array();
  while (facts.length > 0 ){ //as long as the array length is bigger than 0 johnLennonFacts.length
    johnLennonShouts.push(`${facts}!!!`)
  }
  return johnLennonShouts;
}

function iLoveTheBeatles(){

}

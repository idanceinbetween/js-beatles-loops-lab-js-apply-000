//Loop works with Arrays, executing the function with different values in the Arrays

function theBeatlesPlay(musicians, instruments){
  var theyPlay = new Array()
  for (let i=0; i<4; i++){
    theyPlay.push(`${musicians[i]} plays ${instruments[i]}`)
  }
  return theyPlay;
}

function johnLennonFacts(){
  var johnLennonShouts = new Array()
  while (){ //while the array index place is not empty,
    johnLennonShouts.push(``)
  }
  return johnLennonShouts;
}

function iLoveTheBeatles(){

}

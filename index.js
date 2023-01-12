
var readlineSync=require("readline-sync");
var score=0;
console.log("NAMASTE");
console.log("GENERAL INSTRUCTIONS")
console.log("1. THERE ARE 10 QUESTIONS")
console.log("2. FOR EACH CORRECT ANS YOU WILL BE PROVIDED +1 MARKS")
console.log("3. FOR EACH WRONG ANS YOU WILL BE PROVIDED -1 MARKS")
console.log("4. TYPE ONLY IN UPPER CASE")
console.log("-------------")

function play(question,answer){
  console.log(" ")
  var questionAsked=readlineSync.question(question) 
  // console.log(questionAsked)
  if(questionAsked===answer){
    console.log(" ")
    console.log("you are right")
    score++;
    console.log("your score is "+ score)
    console.log("---------------------")
  }else{
    console.log("you are wrong")
    score--
    console.log("your score is "+ score)
    console.log("---------------------")
  }
}

var one ={
  question:
`Which is the first planned city of India? 
 a.  Jaipur
 b.  Ajmer
 c.  Amritsar
 d.  Chandigarh 
 `,
  answer:"A"
}

var two={
   question:`Which city is located on the Deccan Plateau at an elevation of 3000ft? 
 a.  Chennai
 b.  Jaipur
 c.  Bengaluru
 d.  Vadodara 
 `,
  answer: "C"
}

var three={
  question: `Which city in India has the oldest prison in the country? 
 a.  Bengaluru
 b.  Chennai
 c.  Agra
 d.  Mumbai 
 `,
  answer: "B"
}

var four={
  question:`Which of city is home to the only Bahai temple in Asia? 
 a.  Delhi
 b.  Mumbai
 c.  Kolkata
 d.  Agra 
 `,
  answer: "A"
}

var five={
  question:`Which city is known to be the original home to the Koh- I- Noor? 
  a.  Delhi
  b.  Hyderabad
  c.  Bengaluru 
  d.  Chennai 
  `,
  answer:"B"
}

var six={
  question:`Which city in Uttar Pradesh was also known as the 'Manchester of the east'? 
 a.  Lucknow
 b.  Kanpur
 c.  Bareilly
 d.  Gorakhpur 
 `,
  answer:"B"
}

var seven={
  question:`The logo of State Bank Of India is inspired from Kankaria Lake in Which city?  
 a.  Kolkata
 b.  Allahabad
 c.  Ahemdabad
 d.  Surat 
 `,
  answer:"C"
}

var eight={
  question:`Which Indian city has the highest clock tower in India? 
  a.  Kanpur
  b.  Lucknow
  c.  Chandigarh
  d.  Prayagraj 
  `,
  answer:"B"
}

var nine={
  question:`Which of these cities is the 3rd cleanest cities of the country and has the maximum number of flyovers in India?
  a.  Chandigarh
  b.  Indore
  c.  Ahemdabad
  d.  Surat 
  `,
  answer:"D"
}

var ten={
  question:`Which city in Maharashtra is an amalgamation of seven Islands? 
  a.  Nagpur
  b.  Mumbai
  c.  Chennai
  d.  Kolkata 
  `,
  answer:"B"
}

var array=[one,two,three,four,five,six,seven,eight,nine,ten]
for(var i=0;i<array.length;i++){
  console.log("QUESTION "+(i+1))
  play(array[i].question,array[i].answer)
}


var result={
  name:"SIDDHARTH",
  score:10
}


console.log("YOUR FINAL SCORE IS "+ score)
console.log("-----------------")
if(score>=result.score){
  console.log("CONGRATS YOU HAVE BEATEN THE HIGH SCORE PLZ SHARE THE SCREENSHOT")
}else{
  console.log("SORRY YOU DIDN'T BEAT THE HIGH SCORE, TRY HARDER NEXT TIME")
   console.log("---------------")
  console.log(" ")
  console.log(" ")
  console.log("HIGHEST SCORE")
  var scoreArray=[result]
  for(var i=0;i<scoreArray.length;i++){
     console.log(scoreArray[i].name)
     console.log(scoreArray[i].score)
}

}






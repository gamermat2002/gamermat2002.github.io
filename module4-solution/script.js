var names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];

for(var i=0;i<names.length;i++){
    if(names[i].charAt(0)=='J' || names[i].charAt(0)=='j'){
        console.log(byeSpeaker.speak()+names[i]);
    }
    else{
        console.log(helloSpeaker.speak()+names[i]);
    }
}
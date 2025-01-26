let btn=document.getElementById("btn")
let text=document.getElementsByClassName("text")

function speak(word) {
    let text_s =new SpeechSynthesisUtterance(word);
    text_s.rate=1;
    text_s.pitch=1;
    text_s.volume=1;
    text_s.lang="hi-GB"
    window.speechSynthesis.speak(text_s)

    
}
function wishme() {
    let day = new  Date()
    let hours=day.getHours()
    if (hours>=0 && hours<12) {
        speak("good morning naveen sir")
    }
    else if (hours>=12 && hours<4) {
        speak("good afternoon naveen sir")
    }
    else {
        speak("good  evening naveen sir")
    }
    
}

window.addEventListener("load",()=>{
    wishme()
})

let speech=window.SpeechRecognition || window.webkitSpeechRecognition;
let speech_reco=new speech()
speech_reco.onresult=(event)=>{
let currenti=event.resultIndex
let transcript=event.results[currenti][0].transcript
btn.innerText=transcript
command(transcript)
}

btn.addEventListener("click",()=>{
    speech_reco.start()
})
function command(msg) {
    if (msg.includes("hello")||msg.includes("hey")) {
        speak("hello sir what can i help you")
    }
   else if(msg.toLowerCase().includes("dora who are you")){
    speak("i am dora, a virtual assistant, created by naveen sir")
   }
   else if (msg.toLowerCase().includes("dora open youtube")) {
    speak("opening youtube",window.open("https://www.youtube.com/"))
    window.open("https://www.youtube.com/")
   }

}
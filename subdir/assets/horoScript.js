//for horoscope api response and call
var sign;//defult to break sign, and test in get links
var horoscope;
var luckyNum;
var color;

//for text to speech api
var tts = 'http://api.voicerss.org/?';
var ttskey = 'c724add3cb6d43a09e00a1115e5babff';
var ttslang = '&hl=en-us&src=';

var textArea = document.getElementById("horoscope");



window.onload = function(){
    getLinks();
}

window.onunload = function() {
    setLinks();
}



function getHoroscope(sign){
    $.ajax({
        type:'POST',
        url:'https://aztro.sameerkumar.website?sign='+ sign +'&day=today',
        success:function(data){
            textArea.innerHTML = ' ';
            horoscope = data.description;
            color = data.color;
            luckyNum = data.lucky_number;
            setLinks();
            showHoroscope(horoscope, luckyNum, color);
            speakHoroscope(horoscope);
        }
    });
    $(this).parent().hide();

}

function showHoroscope(horoscope, luckyNum, color){
    textArea.innerHTML = "<p>"+ "Your horoscope is, "+"<br>"+horoscope +"<br>"+ "Your lucky Number for today is "+ luckyNum + "<br>"+"Your color for today is "+ color+"</p>";

}

function speakHoroscope(horoscope){
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.onreadystatechange = function() { 
        if (xmlHttp.readyState == 4 && xmlHttp.status == 200)
            callback(xmlHttp.responseText);
    }
    xmlHttp.open("GET", theUrl, true); // true for asynchronous 
    xmlHttp.send(null);
}

// Local storage for horoscope
function setLinks() {
    let savedSign = sign;
    localStorage.setItem("lastSearch", savedSign);
}

function getLinks() {
    let savedSign = localStorage.getItem("lastSearch");
    console.log(savedSign);
    if(savedSign != "test"){
        getHoroscope(savedSign);
    }
}
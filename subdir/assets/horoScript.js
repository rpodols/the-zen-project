//for horoscope api response and call
var sign;//defult to break sign, and test in get links
var horoscope;
var luckyNum;
var color;


var textArea = document.getElementById("horoscope");



window.onload = function(){
    getLinks();
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
            localStorage.setItem("sign",sign);
            showHoroscope(horoscope, luckyNum, color);
        }
    });
    $(this).parent().hide();

}

function showHoroscope(horoscope, luckyNum, color){
    textArea.innerHTML = "<p>"+ "Your horoscope is, "+"<br>"+"<span STYLE='font-weight:bold'>"+horoscope+"</span>" +"<br>"+ "Your lucky Number for today is <span STYLE='font-weight:bold'>"+ luckyNum + "</span> <br>"+"Your color for today is <span STYLE='font-weight:bold'>"+ color+"</span></p>";

}

function getLinks() {
    let savedSign = localStorage.getItem("sign");
    console.log(savedSign);
    getHoroscope(savedSign);
}
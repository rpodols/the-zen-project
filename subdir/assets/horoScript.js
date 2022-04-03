var sign = "cancer";//defult sign
var horoscope;
var luckyNum;
var color;

var textArea = document.getElementById("horoscope");


// Local storage for horoscope
function setLinks() {
    var savedSign = document.getElementsByClassName("dropdown-content").innerHTML;
    localStorage.setItem("savedLinkHTML", savedSign);
}

function getLinks() {
    var savedSign = localStorage.getItem("savedLinkHTML");
    if(savedSign) document.getElementsByClassName("dropdown-content").innerHTML = savedSign;
}

window.onload = function() {
    getLinks();
}

window.onunload = function() {
    setLinks();
}

/*$.ajax({
    type:'POST',
    url:'https://aztro.sameerkumar.website?sign='+ sign +'&day=today',
    success:function(data){
    console.log(data);
    }
});*/

function getHoroscope(sign){
    $.ajax({
        type:'POST',
        url:'https://aztro.sameerkumar.website?sign='+ sign +'&day=today',
        success:function(data){
            textArea.innerHTML = ' ';
            horoscope = data.description;
            color = data.color;
            luckyNum = data.lucky_number;
            showHoroscope(horoscope, luckyNum, color);
        }
    });
    $(this).parent().hide();

}

function showHoroscope(horoscope, luckyNum, color){
    textArea.innerHTML = "<p>"+ "Your horoscope is, "+"<br>"+horoscope +"<br>"+ "Your lucky Number for today is "+ luckyNum + "<br>"+"Your color for today is "+ color+"</p>";

}
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

// quote javascript start

//variables to grab the time/date
var DateTime = luxon.DateTime;
var localTime = DateTime.local();
var currentDay = localTime.c.day;
var strCurrentDay = currentDay.toString();
var currentMonth = localTime.c.month;
var strCurrentMonth = currentMonth.toString()
var currentQuoteIndex = strCurrentMonth + strCurrentDay;

//quote api/variables
var zenQuotesUrl = "https://type.fit/api/quotes";

var getZenQuotes = function() {
    fetch(zenQuotesUrl).then(function(response) {
        if (response.ok) {
            response.json().then(function(data){
                //console.log(data);
                var quoteText = (data[currentQuoteIndex].text);
                var quoteAuthor = (data[currentQuoteIndex].author);
                var quoteTextEl = $("<p>").text(quoteText);
                var quoteAuthorEl = $("<p>").text("- " + quoteAuthor); 
                //$(quoteTextEl).append(quoteAuthorEl);
                $("#current-quote-info").append(quoteTextEl);
                $("#current-quote-info").append(quoteAuthorEl);
            })
        }else{console.log("Error")}
    })
};

getZenQuotes();


/*var mailChimpApiKey = "15983a1116a19961b677deabe1852fd6";

$.ajax({
    type:'POST',
    url:'https://aztro.sameerkumar.website?sign=aries&day=today',
    success:function(data){
    console.log(data);
    }
     });*/



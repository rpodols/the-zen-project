


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


/*var mailChimpApiKey = "15983a1116a19961b677deabe1852fd6";
var zenQuotesUrl = "https://type.fit/api/quotes";



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
}*/

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
                console.log(data);
                var quoteText = (data[currentQuoteIndex].text);
                var quoteAuthor = (data[currentQuoteIndex].author);
                var quoteTextEl = $("<p>").text(quoteText);
                var quoteAuthorEl = $("<p>").text("- " + quoteAuthor); 
                $("#current-quote-info").append(quoteTextEl);
                $("#current-quote-info").append(quoteAuthorEl);
            })
        }else{console.log("Error")}
    })
};

getZenQuotes();

//generate user submitted quote
var submitQuote = function() {
    var quoteRemove = document.getElementById("user-sub-quote");
    if (quoteRemove != null) {
        document.getElementById("user-sub-quote").remove();
    };
    var savedQuotes = jQuery.parseJSON(localStorage.getItem("quote")) ?? [{name: "Trey Anastasio", quote: "And if we got the chance, to see the rough draft - I bet the early plans would make us laugh. And it never seems to help when we try to intervene, some things are better left unseen."}];

    var number = Math.floor(Math.random() * savedQuotes.length);

    var selectedNewAuthor = savedQuotes[number].name;
    var selectedNewQuote = savedQuotes[number].quote;

    var selectedQuoteEl = $("<p>").text(selectedNewQuote);
    var selectedAuthorEl = $("<p>").text("- " + selectedNewAuthor);
    var submitteddivEl = $("<div>").addClass("quote-container").attr("id", "user-sub-quote");
    $("#submitted-quote").append(submitteddivEl);
    $("#user-sub-quote").append(selectedQuoteEl);
    $("#user-sub-quote").append(selectedAuthorEl);
}

//saving user submitted quote
$("#user-submit").click(function(event) {
    event.preventDefault();
    if ($("#user-quote").val() == "") {
        var errorMsg = "Please enter a quote.";
        $("#error").text(errorMsg);
        
    } else if ($("#user-quote-by").val() == "") {
        var errorMsg = "Please enter your name.";
        $("#error").text(errorMsg);
    } else {
        $("#error").text("");
        $("#user-quote").empty();
        $("#user-quote-by").empty();
        var savedQuotes = jQuery.parseJSON(localStorage.getItem("quote")) ?? [];
        var userSubQuoteText = $("#user-quote").val();
        var userSubQuoteBy = $("#user-quote-by").val();

        var savedQuoteObj = {
            name: userSubQuoteBy,
            quote: userSubQuoteText
        };

        savedQuotes.push(savedQuoteObj);

        localStorage.setItem("quote", JSON.stringify(savedQuotes));
        document.getElementById('user-quote').value='';
        document.getElementById('user-quote-by').value='';
    }
});

$("#submit-quote-button").on("click", submitQuote);


/*var mailChimpApiKey = "15983a1116a19961b677deabe1852fd6";

$.ajax({
    type:'POST',
    url:'https://aztro.sameerkumar.website?sign=aries&day=today',
    success:function(data){
    console.log(data);
    }
     });*/



var mailChimpApiKey = "15983a1116a19961b677deabe1852fd6";
var zenQuotesUrl = "https://type.fit/api/quotes";


var getZenQuotes = function() {
    fetch(zenQuotesUrl).then(function(response) {
        if (response.ok) {
            response.json().then(function(data){
                console.log(data);
                //var quote = (data[0].q);
                //var quoteText = $("<p>").text(quote);
                //$("#quote").append(quoteText);
            })
        }else{console.log("nope")}
    })
};

getZenQuotes();

$.ajax({
    type:'POST',
    url:'https://aztro.sameerkumar.website?sign=aries&day=today',
    success:function(data){
    console.log(data);
    }
     });



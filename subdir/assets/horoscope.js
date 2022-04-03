var sign = 'cancer';

$.ajax({
    type:'POST',
    url:'https://aztro.sameerkumar.website?sign='+ sign +'&day=today',
    success:function(data){
    console.log(data);
    }
});
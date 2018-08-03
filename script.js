
function convert(){

    var tags = document.getElementsByTagName("p");


    for(i = 0; i < tags.length ; i++){
        upperPar = upperCase(tags[i].innerHTML);
        tags[i].innerHTML = upperPar;
    }
};


function upperCase(par){

    var words = par.split(" ");
    var newPar = ""; 

    words.forEach(function(word){
        newPar += word.charAt(0).toUpperCase() + word.substr(1)+" ";
    });

    return newPar;

}
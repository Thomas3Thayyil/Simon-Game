function box(sound_play, boxn){

    this.boxcolor = boxn.css("background-color");

    this.blink = function(){
        sound_play.play();

        boxn.css("opacity", 0.5);
        setTimeout(function(){
            boxn.css("opacity", 1);
        }, 333);
    }
    
}

var b1 = new box(new Audio("./sounds/1.mp3"), $(".b1"));
var b2 = new box(new Audio("./sounds/2.mp3"), $(".b2"));
var b3 = new box(new Audio("./sounds/3.mp3"), $(".b3"));
var b4 = new box(new Audio("./sounds/4.mp3"), $(".b4"));

var boxes=[b1, b2, b3, b4];

//SEQUENCE MAKING SECITON
//SEQUENCE MAKING SECITON
//SEQUENCE MAKING SECITON

var i=0;
var counter=1;
var timeoutn=1000;
var numlist=[];
var check = [];
var ttcheck = 1;
var tt = 1;
var counter1=-1;

var flag=0;

$(document).on("keypress", sequence1);

function sequence1(){
    sequence();
}

function fillcheck(boxcolor_, k){
    var ticktock = ((tt*tt)+tt)/2;

    if(ticktock==ttcheck){
        check.push(boxcolor_);
        tt++;
    }

    ttcheck++;
}
    

function sequence(){
    $("#_2").text("PLAYING SEQUENCE");
    counter1=0;
    $(".cell").off("click", function1);
    checklist=[];
    if(counter>1){
    $("#_1").text("LEVEL "+(counter-1));
    $(document).off("keypress", sequence1);  
    }
    i++;
    if(i<counter){

        var randn=Math.ceil(4*(Math.random()));
        numlist.push(randn);
        var number = numlist[i-1]; 

        switch(number){
            case 1:
                b1.blink();
                fillcheck(b1.boxcolor, i);
                break;
            case 2:
                b2.blink();
                fillcheck(b2.boxcolor, i);
                break;
            case 3:
                b3.blink();
                fillcheck(b3.boxcolor, i);
                break;
            case 4:
                b4.blink();
                fillcheck(b4.boxcolor, i);
                break;  
        }   
        //$("#_2").text(i);
        setTimeout(sequence, timeoutn);
        
    }
    
    else{
        i=0;
        if(flag===0){
            flag=1;
            counter++;
            sequence();
        }
        else{
        counter++;
        timeoutn-=5;
        $(".cell").on("click", function1);
        $("#_2").text("MAKE YOUR MOVE");
        }
    }
    

}

//SEQUENCE MAKING SECITON
//SEQUENCE MAKING SECITON
//SEQUENCE MAKING SECITON





//SEQUENCE CHECKING SECTION
//SEQUENCE CHECKING SECTION
//SEQUENCE CHECKING SECTION

var checklist = [];
var j;
//$(".cell").on("click", function1);

function function1(){
    counter1++;
    boxes.forEach(element => {
        if(element.boxcolor==$(this).css("background-color")){
            element.blink();

            checklist.push($(this).css("background-color"));
            if(check[counter1-1]!==checklist[counter1-1]){
                $("#_2").text("GAME OVER. Hit any button to continue.");
                var a = new Audio("./sounds/wrong.mp3");
                setTimeout(a.play(), 3000);
                i=0;
                counter=1;
                timeoutn=1000;
                numlist=[];
                check = [];
                ttcheck = 1;
                tt = 1;
                counter1=-1;
                flag=0;
                $(document).on("keypress", sequence1);
            }
            
        }
    });
    if (check.join(",") === checklist.join(",")) {
        setTimeout(sequence, 2000);
    }
    
    
}


//SEQUENCE CHECKING SECTION
//SEQUENCE CHECKING SECTION
//SEQUENCE CHECKING SECTION
// todo ShowVideo Funciton 

 function showVideo(unitId) {
    const videoText_u509 = document.getElementById(`video-text_u${unitId}`);
    console.log(videoText_u509);
    const unit_div=document.getElementById('unit-div');
    const videoIframeContainer_u509 = document.getElementById(`video-iframe-container_u${unitId}`);

    videoText_u509.addEventListener("click", function () {
        if (videoIframeContainer_u509.style.display === "none") {
            videoIframeContainer_u509.style.display = "block";
            unit_div.classList.add("unit-div-2");
            videoIframeContainer_u509.classList.remove("hoverback");
        } else {
            unit_div.classList.remove("unit-div-2");
            videoIframeContainer_u509.classList.add("hoverback");
            setTimeout(function () {
                videoIframeContainer_u509.style.display = "none";
            }, 1000)
        }
    });
};


// todo Function for loop the unit

 function loopUnit(unit_count,Topics_count){
    console.log(typeof(unit_count),typeof(Topics_count));
    for(let i =1;i <= Topics_count ; i++){
        i <=9 ? showVideo(unit_count + '0' + i): showVideo(unit_count  + '' + i);
    }
};

//   ?    Unit Loop Function Call 
 loopUnit(1,17);
 loopUnit(2,7);
 loopUnit(3,14);
 loopUnit(4,10);
 loopUnit(5,16);



//  var string = " Introduction to programming paradigms - Applications of C Language - Structure of C program - Data Types - Constants - Enumeration Constants - Keywords - Precedence and Associativity - Expressions - Input/Output statements - Assignment statements - Decision making statements - Switch statement - Looping statements - Preprocessor directives - Compilation process";

//  var newString = string.split(" - ");

//  console.log(newString);


//  let unit_1 = document.querySelector('.blue');
//  console.log(unit_1);

//  for( let j = 0 ; j < newString.length ; j++ ){

     
//  }

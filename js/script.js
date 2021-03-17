/*function imgEnterOne() {
    var img = document.getElementById("img-1");
      if(img.className === "") {
          img.className += "light-1";
      } else {
          img.className = "";
      }   
}

function imgLeaveOne() {
    var img = document.getElementById("img-1");
        if(img.className === "light-1") {
            img.className = "";
        }
}

*/

//Responsive menu

function btnJs() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}

function onLight() {
    //audio
    let audio = document.getElementById("myAudio");
    audio.play();
   
    let OnActiveBtn = document.getElementById("div1Btn"); 
    var offActiveBtn = document.getElementById("div2Btn");

      if( offActiveBtn.className === "activeBtn") {
           OnActiveBtn.className = "disableBtn"; 

    }else if (OnActiveBtn === "DivOn") {
        OnActiveBtn.className = "activeBtn";
    }




    var header = document.getElementById("header");
    var img1 = document.getElementById("img-1");
    var img2 = document.getElementById("img-2");
    var img3 = document.getElementById("img-3");
    
      if(img1.className || img2.className || img3.className === "light-1" || "light-2" || "light-3" || header.className === "headerClass") {

        setTimeout(() => {
            header.className = "j-header"}, 200);

         setTimeout(() => { 
             img1.className = "light1Animation"}, 200);

          setTimeout(() => {
              img2.className = "light2Animation"}, 600);

          setTimeout(() => {
              img3.className = "light-3Animation"}, 1000);         
          
      }  

}

function OffLight() {
    let audio = document.getElementById("myAudio");
    audio.play();
    var headerOff = document.getElementById("header");
    var img1Off = document.getElementById("img-1");
    var img2Off = document.getElementById("img-2");
    var img3Off = document.getElementById("img-3");
    if(img1Off.className || img2Off.className || img3Off.className === "light1Animation" || "light2Animation" || "light-3Animation" || headerOff.className === "j-header") {

        setTimeout(() => {
            headerOff.className = "headerClassOff"}, 200);

         setTimeout(() => { 
             img1Off.className = "light-1"}, 1000);

          setTimeout(() => {
              img2Off.className = "light-2"}, 600);

          setTimeout(() => {
              img3Off.className = "light-3"}, 200);         
          
      }  

}

    







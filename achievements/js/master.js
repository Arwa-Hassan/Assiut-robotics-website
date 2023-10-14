let imges = Array.from(document.querySelectorAll(".imges-container3 .imges3 .img11 img"));
let divimges = Array.from(document.querySelectorAll(".imges-container3 .imges3 .img11"));
let rov = document.querySelector(".bb");
console.log(imges[1]);

window.onload = function () {
    setTimeout(trans11, 1000);
    setTimeout(trans12, 1000);  
    setTimeout(trans13, 1000);
    setTimeout(trans14, 1000);  
    setTimeout(trans15, 1000); 
        
    setTimeout(trans21, 4000);
    setTimeout(trans22, 4000);  
    setTimeout(trans23, 4000);
    setTimeout(trans24, 4000);  
    setTimeout(trans25, 4000);   
    
    setTimeout(trans31, 7000);
    setTimeout(trans32, 7000);  
    setTimeout(trans33, 7000);
    setTimeout(trans34, 7000);  
    setTimeout(trans35, 7000);
    
    setTimeout(trans41, 10000);
    setTimeout(trans42, 10000);  
    setTimeout(trans43, 10000);
    setTimeout(trans44, 10000);  
    setTimeout(trans45, 10000);
    
    setTimeout(trans51, 13000);
    setTimeout(trans52, 13000);  
    setTimeout(trans53, 13000);
    setTimeout(trans54, 13000);  
    setTimeout(trans55, 13000); 
}


// let count = 0;

 setInterval(transition, 15000);

function transition() {
    count++;
    setTimeout(trans11, 1000);
    setTimeout(trans12, 1000);  
    setTimeout(trans13, 1000);
    setTimeout(trans14, 1000);  
    setTimeout(trans15, 1000); 
        
    setTimeout(trans21, 4000);
    setTimeout(trans22, 4000);  
    setTimeout(trans23, 4000);
    setTimeout(trans24, 4000);  
    setTimeout(trans25, 4000);   
    
    setTimeout(trans31, 7000);
    setTimeout(trans32, 7000);  
    setTimeout(trans33, 7000);
    setTimeout(trans34, 7000);  
    setTimeout(trans35, 7000);
    
    setTimeout(trans41, 10000);
    setTimeout(trans42, 10000);  
    setTimeout(trans43, 10000);
    setTimeout(trans44, 10000);  
    setTimeout(trans45, 10000);
    
    setTimeout(trans51, 13000);
    setTimeout(trans52, 13000);  
    setTimeout(trans53, 13000);
    setTimeout(trans54, 13000);  
    setTimeout(trans55, 13000); 
}
// rov.onclick = function () {

//     clearInterval(x);
//     count++;
//     if (count == 1) { 
//     setTimeout(trans11, 1000);
//     setTimeout(trans12, 1000);  
//     setTimeout(trans13, 1000);
//     setTimeout(trans14, 1000);  
//     setTimeout(trans15, 1000); 
        
//     } else if (count == 2) {
//     setTimeout(trans21, 1000);
//     setTimeout(trans22, 1000);  
//     setTimeout(trans23, 1000);
//     setTimeout(trans24, 1000);  
//     setTimeout(trans25, 1000);     
//     } else if (count == 3) {
//     setTimeout(trans31, 1000);
//     setTimeout(trans32, 1000);  
//     setTimeout(trans33, 1000);
//     setTimeout(trans34, 1000);  
//     setTimeout(trans35, 1000);     
//     }else if (count == 4) {
//     setTimeout(trans41, 1000);
//     setTimeout(trans42, 1000);  
//     setTimeout(trans43, 1000);
//     setTimeout(trans44, 1000);  
//     setTimeout(trans45, 1000);     
//     }else if (count == 5) {
//     setTimeout(trans51, 1000);
//     setTimeout(trans52, 1000);  
//     setTimeout(trans53, 1000);
//     setTimeout(trans54, 1000);  
//     setTimeout(trans55, 1000); 
//         count = 0;
//     }
    
// }



function trans15() {
    imges[0].style.cssText = "left:-50%;transition:1s linear;width:220px;height:220px"
    divimges[0].style.zIndex = "1";  
}
function trans14() {
    imges[1].style.cssText = "left:150%;transition:1s linear;width:220px;height:220px"
    divimges[1].style.zIndex = "2";  
}
function trans13() {
    imges[2].style.cssText = "left:0%;transition:1s linear;width:240px;height:240px"
    divimges[2].style.zIndex = "3";  
}
function trans12() {
    imges[3].style.cssText = "left:50%;transition:1s linear;width:260px;height:260px"
    divimges[3].style.zIndex = "5";    
}
function trans11() {
    imges[4].style.cssText = "left:100%;transition:1s linear;width:240px;height:240px"
    divimges[4].style.zIndex = "3";  
}





function trans21() {
    imges[4].style.cssText = "left:150%;transition:1s linear;width:220px;height:220px"
    divimges[4].style.zIndex = "2";  
}
function trans22() {
    imges[3].style.cssText = "left:100%;transition:1s linear;width:240px;height:240px";
    divimges[3].style.zIndex = "3";  
}
function trans23() {
    imges[2].style.cssText = "left:50%;transition:1s linear;width:260px;height:260px";
    divimges[2].style.zIndex = "5"; 
}
function trans24() {
    imges[1].style.cssText = "left:-50%;transition:1s linear;width:220px;height:220px";
    divimges[1].style.zIndex = "1";  
}
function trans25() {
    imges[0].style.cssText = "left:0%;transition:1s linear;width:240px;height:240px";
    divimges[0].style.zIndex = "3"; 

}


function trans31() {
    imges[4].style.cssText = "left:-50%;transition:1s linear;width:220px;height:220px";
    divimges[4].style.zIndex = "1";  
}
function trans32() {
    imges[3].style.cssText = "left:150%;transition:1s linear;width:220px;height:220px";
    divimges[3].style.zIndex = "2";  
}
function trans33() {
    imges[2].style.cssText = "left:100%;transition:1s linear;width:240px;height:240px";
    divimges[2].style.zIndex = "3"; 
}
function trans34() {
    imges[1].style.cssText = "left:0%;transition:1s linear;width:240px;height:240px";
    divimges[1].style.zIndex = "3";
}
function trans35() {
    imges[0].style.cssText = "left:50%;transition:1s linear;width:260px;height:260px";
    divimges[0].style.zIndex = "5"; 

}




function trans41() {
    imges[4].style.cssText = "left:0%;transition:1s linear;width:240px;height:240px";
    divimges[4].style.zIndex = "3";
}
function trans42() {
    imges[3].style.cssText = "left:-50%;transition:1s linear;width:220px;height:220px";
    divimges[3].style.zIndex = "1";  
}
function trans43() {
    imges[2].style.cssText = "left:150%;transition:1s linear;width:220px;height:220px";
    divimges[2].style.zIndex = "2"; 
}
function trans44() {
    imges[1].style.cssText = "left:50%;transition:1s linear;width:260px;height:260px"
      divimges[1].style.zIndex = "5"; 
}
function trans45() {
    imges[0].style.cssText = "left:100%;transition:1s linear;width:240px;height:240px";
     divimges[0].style.zIndex = "3"; 
}




function trans51() {
    imges[4].style.cssText = "left:50%;transition:1s linear;width:260px;height:260px"
    divimges[4].style.zIndex = "5";
}
function trans52() {
    imges[3].style.cssText = "left:0%;transition:1s linear;width:240px;height:240px"
    divimges[3].style.zIndex = "3";
}
function trans53() {
    imges[2].style.cssText = "left:-50%;transition:1s linear;width:220px;height:220px";
    divimges[2].style.zIndex = "1"; 
}
function trans54() {
    imges[1].style.cssText = "left:100%;transition:1s linear;width:240px;height:240px";
    divimges[1].style.zIndex = "3";  
}
function trans55() {
    imges[0].style.cssText = "left:150%;transition:1s linear;width:220px;height:220px";
    divimges[0].style.zIndex = "2"; 
}
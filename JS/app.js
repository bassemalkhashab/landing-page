window.addEventListener('DOMContentLoaded',(event)=>{
    const NAV=document.querySelector("nav");
    let UL=document.createElement("ul");
    NAV.appendChild(UL);
   //let listArrayFunction=["aboutUs()","features()","blog()","contact()"];
   let listArrayName=["About us","Features","Blog","Contact"];
    for (let i=0;i<4;i++){
        let LI =document.createElement("li");
        UL.appendChild(LI);
        let BUTTON=document.createElement("button");
        LI.appendChild(BUTTON);
        BUTTON.textContent=listArrayName[i];
        /* att=document.createAttribute("onclick");
         att.value=listArrayFunction[i];
         BUTTON.setAttributeNode(att);
        */
        
    }
/*````````````````````````````````````````````````````````````````````````````````````````````````````````````````*/

const scr=document.documentElement;
const topButton=document.querySelector("#backToTop");
const AboutUs= document.querySelector("h1");
const Features= document.querySelector("main");
const Blog= document.querySelector(".blogger");
const Contact= document.querySelector(".getInTouch");
const contactUsButton=document.querySelector("#contactUs-button");
const contactUs=document.querySelector(".contact-us");
const menuIcon=document.querySelector("#menu-icon");
const mobileMenu=document.querySelector(".mobileMenu");
const body=document.querySelector("body");
const list=document.querySelector("nav ul");
const listButton=document.querySelectorAll("nav ul li button");
const svg=document.querySelector("header svg");
const svgPath=document.querySelectorAll("header svg path");
const headerDarkInitial="M0 0H1921.45C1921.45 0 3004.94 228.77 1921.45 328.669C837.967 428.569 775.252 78.4211 0 273.725V0Z";
const headerDarkFinal="M0 0H3198.18C3198.18 0 5002.4 149.5 3197.98 150C1393.57 150.5 1302.51 150 0 150V0Z";
const headerLightInitial= "M0 0H1920V322C977.75 200.027 387.023 185.421 0 341.5V0Z";
const headerLightFinal= "M0 0H4000V150C2038.89 150.5 866.667 150 0 150V0Z";
const nav=document.querySelector("nav");
var num1=0,num2=0;
var headerToggle=false;
var trigger=false;
let menuOpen=false;
var listOpen=false;
var myTimeOut,myTimeOut2;
var contactUsHeight;

const scroll = requestAnimationFrame ||function(callBack){  //to refresh the page 60 times per second int he loop function
    setTimeout(callBack,1000/60);
}
function loop(){
    
    
    headerHighlight();
   
    if (scr.scrollTop==0){
        topButton.style.cssText="width:0px;height:0px;";
        if(window.innerWidth>900 && headerToggle==true){
            headerToggle=false;
            headerDown();
        }
        
        }
    else {
        topButton.style.cssText="width:60px;height:60px;";
        if(window.innerWidth>900 && headerToggle==false){
            headerToggle=true;
            headerUp();
        }
        
        }   
        
        if(window.innerWidth>900){
            list.style.display="flex";
            
        }else{
            
         if(!listOpen){
            setTimeout(()=>{list.style.display="none";},100);
         }
         else{
            setTimeout(()=>{list.style.display="flex";},100);
            
         }

          nav.style.height="6em";
        }
       if (!listOpen){ hideNav(); }
    scroll(loop);
    }
    loop();

topButton.addEventListener('click',backToTop);
contactUsButton.addEventListener('click',contactUsForm);
contactUsButton.addEventListener('mouseover',Hover);
contactUsButton.addEventListener('mouseout',UnHover);
contactUs.style.display="none";
function Hover(){
    contactUsButton.style.color="var(--color4)";
    contactUsButton.children[0].style.color="var(--color4)";
}
function UnHover(){
    contactUsButton.style.color="var(--MainColor)";
    contactUsButton.children[0].style.color="var(--MainColor)";
}

 function hideNav(){   //completely hide the navigation bar
    if (scr.scrollTop!==0){

        num2=num1;
        num1=scr.scrollTop;
        
        if (num1==num2 && trigger){
         myTimeOut=   setTimeout(()=>{
                nav.style.transform=" translateY(-100px)";
                nav.style.height=" 7.5vw";
               // if(window.innerWidth>900){list.style.cssText=" transform: translateY(-30px);";}
               // menuIcon.style.cssText="transform:translateY(-30px)";
                svgPath[1].style.cssText="transform:translateY(-150px);transition:all 0.5s;";
                svgPath[0].style.cssText="transform:translateY(-150px);transition:all 0.5s;";
            },3000); 
             trigger=false;
        }
        else if (num1!==num2 && !trigger){
                 nav.style.transform=" translateY(0px)";
                 nav.style.height=" 7.5vw";
                 //if(window.innerWidth>900){list.style.cssText=" transform: translateY(5px);";}
                // menuIcon.style.cssText="transform:translateY(5px)";
                 svgPath[1].style.cssText="transform:translateY(0px);transition:all 0.5s;";
                 svgPath[0].style.cssText="transform:translateY(0px);transition:all 0.5s;";
                 clearTimeout(myTimeOut);
                 trigger=true;
        }

    }
    else {
                 nav.style.transform="translateY(0px)";
                // nav.style.height=" 200px";
                 svgPath[1].style.cssText="transform:translateY(0px);transition:unset;";
                 svgPath[0].style.cssText="transform:translateY(0px);transition:unset;";
                 clearTimeout(myTimeOut);
    }
}

function backToTop(){      //when pressing the arrow button it brings the page to the top
    window.scrollTo(0,0);
    if(window.innerWidth<900){
       if(listOpen) {mobilemenu();}
    }
}
listButton[0].addEventListener('click',function(){aboutUs(); });
listButton[1].addEventListener('click',function(){features(); });
listButton[2].addEventListener('click',function(){blog(); });
listButton[3].addEventListener('click',function(){contact(); });

function aboutUs(){
    AboutUs.scrollIntoView({block:"center"});
    if(window.innerWidth<900){
        mobilemenu();
    }
}
function features(){
    Features.children[3].scrollIntoView({block:"center"});
    if(window.innerWidth<900){
        mobilemenu();
    }
}
function blog(){
    Blog.scrollIntoView({block:"center"});
    if(window.innerWidth<900){
        mobilemenu();
    }
}
function contact(){
    Contact.scrollIntoView({block:"center"});
    if(window.innerWidth<900){
        mobilemenu();
    }
}
function contactUsForm(){            //when pressing the contact us button it opens the form at the bottom of the page
    
    if(!menuOpen){               
        contactUs.style.display="flex";
        contactUs.style.cssText="height:auto;padding:20px;";
       // contactUsHeight = contactUs.offsetHeight;
        contactUsButton.children[0].style.cssText="transform:rotate(-90deg);";
        setTimeout(()=>{ contactUs.scrollIntoView(true);},500);
        menuOpen=true;
    }
    else{
        Contact.scrollIntoView(false);
        setTimeout(()=>{
            contactUs.style.cssText="height:0px;padding:0px;display:none;"; 
        },500);
        contactUsButton.children[0].style.cssText="transform:rotate(90deg);"; 
        menuOpen=false;
    }

}
menuIcon.addEventListener('click',mobilemenu);
function mobilemenu(){                      //open the nav in a seperate menu in mobile version
    
    if(!listOpen){
        mobileMenu.style.cssText="width: 300%;height: 300%;"
        setTimeout(()=>{list.style.cssText="display:flex;";},300);
        body.style.cssText="overflow:hidden;background-color: #eeeeee;";
        clearTimeout(myTimeOut);
        listOpen=true;
    }
    else{
        mobileMenu.style.cssText="width: 0%;height: 0%;"
        setTimeout(()=>{list.style.cssText="display:none;";},100);
        body.style.cssText="overflow:scroll;background-color: #eeeeee;";
        listOpen=false;
    }

}
  
function headerUp(){                //Shrinking the nav bar when start scrolling
    
         headerAnimation(headerDarkFinal,headerLightFinal);
         //list.style.cssText=" transform: translateY(5px);";
         nav.style.height="7.5vw";
         myTimeOut2= setTimeout(()=>{
             svg.setAttribute("viewBox","0 0 1920 150");
         },2000);
        
    }
function headerDown(){                  //Expanding the nav bar at the top of the page
   
        headerAnimation(headerDarkInitial,headerLightInitial);
        //list.style.cssText=" transform: translateY(50px);";
        nav.style.height="200px";
        clearTimeout(myTimeOut2);
        svg.setAttribute("viewBox","0 0 1920 347");
    }     

function headerAnimation(Dark,Light){           //animation of the navigatioin bar
 const  timeline= anime.timeline({
        duration:1500
        ,easing:"easeOutExpo"
    });
    timeline.add({
        targets:".headerDark",
        d:[
            {value:Dark}
        ]
    })
    timeline.add({
        targets:".headerLight",
        delay:-1500, //to make the second layer svg (Light green) to animate with the first layer(Dark green)
        d:[
            {value:Light}
        ]
    })
    
}

function headerHighlight(){     //Mark which section we are standing now
     if(isInViewport(AboutUs)){
        listButton[0].style.cssText="background-color:#EEEEEE;color:var(--MainColor);";
        listButton[1].style.cssText="background-color:var(--MainColor);color:#EEEEEE;";
        listButton[2].style.cssText="background-color:var(--MainColor);color:#EEEEEE;";
        listButton[3].style.cssText="background-color:var(--MainColor);color:#EEEEEE;";
        
    }
    else if(isInViewport(Features.children[3])){
        listButton[1].style.cssText="background-color:#EEEEEE;color:var(--MainColor);";
        listButton[0].style.cssText="background-color:var(--MainColor);color:#EEEEEE;";
        listButton[2].style.cssText="background-color:var(--MainColor);color:#EEEEEE;";
        listButton[3].style.cssText="background-color:var(--MainColor);color:#EEEEEE;";
        
    }
    else if(isInViewport(Blog)){
        listButton[2].style.cssText="background-color:#EEEEEE;color:var(--MainColor);";
        listButton[0].style.cssText="background-color:var(--MainColor);color:#EEEEEE;";
        listButton[1].style.cssText="background-color:var(--MainColor);color:#EEEEEE;";
        listButton[3].style.cssText="background-color:var(--MainColor);color:#EEEEEE;";
        
    }
    else if(isInViewport(Contact)){
        listButton[3].style.cssText="background-color:#EEEEEE;color:var(--MainColor);";
        listButton[0].style.cssText="background-color:var(--MainColor);color:#EEEEEE;";
        listButton[2].style.cssText="background-color:var(--MainColor);color:#EEEEEE;";
        listButton[1].style.cssText="background-color:var(--MainColor);color:#EEEEEE;";
        
    }
  
}

function isInViewport(elem) {       //Chech the Div is inside the viewport of the screen
   
    var bounding = elem.getBoundingClientRect();
    return (
        bounding.top >= (window.innerHeight || document.documentElement.clientHeight)*-0.4 &&
        bounding.bottom <= (window.innerHeight || document.documentElement.clientHeight)*1.6   
    );
};

/*```````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````*/

});
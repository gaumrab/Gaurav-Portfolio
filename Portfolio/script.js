gsap.registerPlugin(ScrollTrigger);

function page1(){
    var t1 = gsap.timeline();
    t1.from(".box2 h1",{
        opacity:0,
        x: "50%",
        duration:0.7,
        ease: "back.out(1.7)",
    });
    
    t1.from("#nav h1",{
        opacity: 0,
        x: "-50%",
        duration:0.8,
        ease: "back.out(1.7)",
    });
    
    
    t1.from("#nav p",{
        opacity: 0,
        y: "-50%",
        duration:0.5,
        ease: "back.out(1.7)",
    });
    t1.from(".box1 img",{
        opacity: 0,
        x: "-150%",
        duration:1.9,
        ease: "back.out(1.7)",
        rotate: "90",
    });
    t1.from(".box2 i",{
        opacity: 0,
        x: "50%",
        duration:1.9,
        ease: "back.out(1.7)",
        rotate: "360"
    });
}
function page2(){

    let para = document.querySelector(".page2 h1").textContent.split('');
    let cont= '';
    para.forEach((e)=>{
        if(e!=' '){
            cont += `<span>${e}</span>`;
        }else{
            cont += ' '
        }
    })
    document.querySelector(".page2 h1").innerHTML = cont;
    
    
    gsap.from(".page2",{
       y: "25%",
       x:"25%",
       duration: 1,
       opacity: 0,
       scrollTrigger: {
        trigger: ".page2",
        scroller: "body",
        scrub: 3,
        end :"top 50%"
     }
    });
    
    
    gsap.to(".page2 h1 span",{
        color: "#d7d7fce7",
        duration: 0.1,
        stagger: 0.1,
        scrollTrigger: ".page2"
    });
    }
function page3(){
    gsap.from("#edu",{
        x:"80%",
        duration:1,
        opacity:0,
        scrollTrigger:{
            trigger: "#edu",
            scroller: "body",
            start: "top 50%",
            end: "top 45%",
            scrub:5,
        },
    
    });
    
    gsap.from(".page3 .line",{
        y: "-150vh",
        duration: 0.5,
        scrollTrigger:{
            trigger: ".page3",
            scroller: "body",
            start: "top 50%",
            end: "start -100%",
            scrub: 1,
        },
        
    });
    
    gsap.from(".details .line1",{
       x: "200%",
       duration:0.2,
       delay: 7,
       scrollTrigger: {
           trigger: ".details",
           scroll : "body",
           scrub: 1,
           end: "top 50%",
       }
    });
    
    gsap.from(".details .line2",{
        x: "-100%",
        duration:0.2,
        scrollTrigger: {
            trigger: ".details",
            scroll : "body",
            scrub: 1,
            start: "top 3%",
            end:"top 0%",
            // markers: true
        }
     });
}
function page4(){
    gsap.to(".page4 h1",{
        fontSize: "26vw",
        color:"#d7d7fc",
        opacity: 1,
        marginLeft:"5%",
        rotate:"360deg",
        scrollTrigger:{
         trigger:".page4",
         scroller: "body",
         scrub:5,
         start:"top 50%",
         end:"top 0%",
        }
     });
}
function page5(){
    gsap.from(".page5 #c1",{
        y: "-30%",
        duration:2,
        opacity:0,
        scrollTrigger:{
            trigger: ".page5",
            scroller: "body",
            start: "top 50%",
            end: "top 0%",
            scrub:1
        },
    });
    gsap.from(".page5 #c2",{
        y: "70%",
        duration:2,
        opacity:0,
        scrollTrigger:{
            trigger: ".page5",
            scroller: "body",
            start: "top 50%",
            end: "top 0%",
            scrub:1
        },
    });
}

page1();
page2();
page3();
page4();
page5();



let mybutton = document.getElementById(".btt h1");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}


























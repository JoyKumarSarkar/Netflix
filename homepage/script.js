// 1st Intro of Netflix Logo

let load = document.querySelector(".loading");

setTimeout(() =>{
    load.classList.add('hide-load');
},2000)



// Functionalities of the website

function alertFunction()
{
    let alertMessage = `                       
Hey! Welcome to Netflicks : A Netflix Clone 

This feature is not available.
                        
Observable Functionalities :
1. Responsiveness
2. Hidden Menu Bar in a 1000px screen
3. Working Left and Right Sliders.`
    alert(alertMessage)
}

let navbar = document.getElementById("navbar")

const toggle = () => {
    if (navbar.style.display == "none")
    {
        navbar.style.display = "block"
        navbar.style.textAlign = "left"
    }
    else{
        navbar.style.display = "none"
    }
}



// Carousel

function carousel ()
{
    let carouselSlider = document.querySelector(".carousel-slider")
    let list = document.querySelector(".carousel-list")
    let item = document.querySelector(".carousel-items")
    let list2

    const speed = 1

    const width = list.offsetWidth

    let x=0
    let x2 = width

    function clone ()
    {
        list2 = list.cloneNode(true)
        carouselSlider.appendChild(list2)
        list2.style.left = `${width}px`
    }

    function moveFast()
    {
        x -= speed
        if (width >= Math.abs(x))
        {
            list.style.left = `${x}px`
        }
        else
        {
            x = width
        }
    }

    function moveSecond()
    {
        x2 -= speed
        if (list.offsetWidth >= Math.abs(x2))
        {
            list2.style.left = `${x2}px`
        }
        else
        {
            x2 = width
        }
    }

    function hover()
    {
        clearInterval(a)
        clearInterval(b)
    }

    function unhover()
    {
        a = setInterval(moveFast, 10)
        b = setInterval(moveSecond, 10)
    }

    clone()

    let a = setInterval(moveFast, 10)
    let b = setInterval(moveSecond, 10)

    carouselSlider.addEventListener("mouseenter", hover)
    carouselSlider.addEventListener("mouseenter", unhover)
}

carousel()



let span = document.getElementsByClassName('slide1');
let poster = document.getElementsByClassName('trendingNow')
let poster_page = Math.ceil(poster.length/4);

let l = 0;
let movePer = 23.5;
let maxMove = 235;
    
let mob_view = window.matchMedia("(max-width: 768px)");
if (mob_view.matches)
{
    movePer = 50.36;
    maxMove = 504;
}
    

let right_mover = () => {
	l = l + movePer;
	if (poster == 1)
        l = 0;

	for (const i of poster)
	{
		if (l > maxMove)
            l = l - movePer;
		i.style.left = '-' + l + '%';
	}
}

let left_mover = () => {
	l = l - movePer;
	if (l<=0)
        l = 0;

	for(const i of poster)
    {
		if (poster_page>1)
			i.style.left = '-' + l + '%';
	}
}
span[1].onclick = ()=> {right_mover();}
span[0].onclick = ()=> {left_mover();}



let span2 = document.getElementsByClassName('slide2');
let poster2 = document.getElementsByClassName('hollywoodMovies')
let poster_page2 = Math.ceil(poster2.length/4);

let l2 = 0;
let movePer2 = 23.5;
let maxMove2 = 235;
// mobile_view	
let mob_view2 = window.matchMedia("(max-width: 768px)");
if (mob_view2.matches)
 {
     movePer2 = 50.36;
     maxMove2 = 504;
 }

let right_mover2 = () => {
    l2 = l2 + movePer2;
    if (poster2 == 1)
        l2 = 0; 
    for (const i of poster2)
    {
        if (l2 > maxMove2)
            l2 = l2 - movePer2;
        i.style.left = '-' + l2 + '%';
    }
}

let left_mover2 = () => {
    l2 = l2 - movePer2;
    if (l2<=0)
        l2 = 0;
    for(const i of poster2)
    {
        if (poster_page2>1)
            i.style.left = '-' + l2 + '%';
    }
}
span2[1].onclick = ()=> {right_mover2();}
span2[0].onclick = ()=> {left_mover2();}


let span3 = document.getElementsByClassName('slide3');
let poster3 = document.getElementsByClassName('top10Movies')
let poster_page3 = Math.ceil(poster3.length/4);

let l3 = 0;
let movePer3 = 9;
let maxMove3 = 90;
// mobile_view	
let mob_view3 = window.matchMedia("(max-width: 768px)");
if (mob_view3.matches)
 {
     movePer3 = 50.36;
     maxMove3 = 504;
 }

let right_mover3 = ()=> {
    l3 = l3 + movePer3;
    if (poster3 == 1)
        l3 = 0;
    for (const i of poster3)
    {
        if (l3 > maxMove3)
            l3 = l3 - movePer3;
        i.style.left = '-' + l3 + '%';
    }
}

let left_mover3 = ()=> {
    l3 = l3 - movePer3;
    if (l3<=0)
        l3 = 0;
    for(const i of poster3)
    {
        if (poster_page3>1)
            i.style.left = '-' + l3 + '%';
    }
}

span3[1].onclick = ()=> {right_mover3();}
span3[0].onclick = ()=> {left_mover3();}



let span4 = document.getElementsByClassName('slide4');
let poster4 = document.getElementsByClassName('continueWatchingForKuntal')
let poster_page4 = Math.ceil(poster4.length/4);

let l4 = 0;
let movePer4 = 7;
let maxMove4 = 70;
// mobile_view	
let mob_view4 = window.matchMedia("(max-width: 768px)");
if (mob_view4.matches)
{
 	movePer4 = 50.36;
 	maxMove4 = 504;
}
let right_mover4 = ()=> {
	l4 = l4 + movePer4;
	if (poster4 == 1)
        l4 = 0;
	for(const i of poster4)
	{
		if (l4 > maxMove4)
            l4 = l4 - movePer4;
		i.style.left = '-' + l4 + '%';
	}
}

let left_mover4 = ()=> {
	l4 = l4 - movePer4;
	if (l4<=0)
        l4 = 0;
	for(const i of poster4)
    {
		if (poster_page4>1)
			i.style.left = '-' + l4 + '%';
	}
}

span4[1].onclick = ()=> {right_mover4();}
span4[0].onclick = ()=> {left_mover4();}


let span5 = document.getElementsByClassName('slide5');
let poster5 = document.getElementsByClassName('bollywoodMovies')
let poster_page5 = Math.ceil(poster5.length/4);
    
let l5 = 0;
let movePer5 = 23.5;
let maxMove5 = 235;
    
    // mobile_view	
let mob_view5 = window.matchMedia("(max-width: 768px)");
if (mob_view5.matches)
{
     movePer5 = 50.36;
     maxMove5 = 504;
}
    
let right_mover5 = ()=> {
    l5 = l5 + movePer5;
    if (poster5 == 1)
        l5 = 0;
    for(const i of poster5)
    {
        if (l5 > maxMove5)
            l5 = l5 - movePer5;
        i.style.left = '-' + l5 + '%';
    }
}
let left_mover5 = ()=> {
    l5 = l5 - movePer5;
    if (l5<=0)
        l5 = 0;
    for(const i of poster5)
    {
        if (poster_page5>1)
            i.style.left = '-' + l5 + '%';
    }
}
span5[1].onclick = ()=> {right_mover5();}
span5[0].onclick = ()=> {left_mover5();}


let span6 = document.getElementsByClassName('slide6');
let poster6 = document.getElementsByClassName('dubbedInTamil')
let poster_page6 = Math.ceil(poster6.length/4);

let l6 = 0;
let movePer6 = 23.5;
let maxMove6 = 235;

// mobile_view	
let mob_view6 = window.matchMedia("(max-width: 768px)");
if (mob_view6.matches)
{
     movePer6 = 50.36;
     maxMove6 = 504;
}

let right_mover6 = ()=> {
    l6 = l6 + movePer6;
    if (poster6 == 1)
        l6 = 0;
    for(const i of poster6)
    {
        if (l6 > maxMove6)
            l6 = l6 - movePer6;
        i.style.left = '-' + l6 + '%';
    }

}
let left_mover6 = ()=> {
    l6 = l6 - movePer6;
    if (l6<=0)
        l6 = 0;
    for(const i of poster6)
    {
        if (poster_page6>1)
            i.style.left = '-' + l6 + '%';
    }
}
span6[1].onclick = ()=> {right_mover6();}
span6[0].onclick = ()=> {left_mover6();}


let span7 = document.getElementsByClassName('slide7');
let poster7 = document.getElementsByClassName('becauseYouWatchedJersey')
let poster_page7 = Math.ceil(poster7.length/4);

let l7 = 0;
let movePer7 = 23.5;
let maxMove7 = 235;

// mobile_view	
let mob_view7 = window.matchMedia("(max-width: 768px)");
if (mob_view7.matches)
{
     movePer7 = 50.36;
     maxMove7 = 504;
}

let right_mover7 = ()=> {
    l7 = l7 + movePer7;
    if (poster7 == 1)
        l7 = 0;
    for(const i of poster7)
    {
        if (l7 > maxMove7)
            l7 = l7 - movePer7;
        i.style.left = '-' + l7 + '%';
    }

}
let left_mover7 = ()=> {
    l7 = l7 - movePer7;
    if (l7<=0)
        l7 = 0;
    for(const i of poster7)
    {
        if (poster_page7>1)
            i.style.left = '-' + l7 + '%';
    }
}

span7[1].onclick = ()=> {right_mover7();}
span7[0].onclick = ()=> {left_mover7();}


let span8 = document.getElementsByClassName('slide8');
let poster8 = document.getElementsByClassName('onlyOnNetflicks')
let poster_page8 = Math.ceil(poster8.length/4);

let l8 = 0;
let movePer8 = 23.5;
let maxMove8 = 235;

// mobile_view	
let mob_view8 = window.matchMedia("(max-width: 768px)");
if (mob_view8.matches)
{
     movePer8 = 50.36;
     maxMove8 = 504;
}

let right_mover8 = ()=> {
    l8 = l8 + movePer8;
    if (poster8 == 1)
        l8 = 0;
    for(const i of poster8)
    {
        if (l8 > maxMove8)
            l8 = l8 - movePer8;
        i.style.left = '-' + l8 + '%';
    }
}
let left_mover8 = ()=> {
    l8 = l8 - movePer8;
    if (l8<=0)
        l8 = 0;
    for(const i of poster8)
    {
        if (poster_page8>1)
            i.style.left = '-' + l8 + '%';
    }
}

span8[1].onclick = ()=> {right_mover8();}
span8[0].onclick = ()=> {left_mover8();}

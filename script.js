


// loop for opening sidebar
let a=document.getElementsByClassName("ham")
for (let index = 0; index < a.length; index++) {
    const element = a[index];
        element.addEventListener("click",()=>{
        let c=document.getElementsByClassName("navbar")
        for (let index = 0; index < c.length; index++) {
            const element = c[index];
            element.style.display="none"   
        }
        let d=document.getElementsByClassName("audiobtns")
        for (let index = 0; index < d.length; index++) {
            const element = d[index];
            element.style.display="none"
            
        }
        let b=document.getElementsByClassName("hamburger")
            for (let index = 0; index < b.length; index++) {
                const element2 = b[index];
                element2.style.display="flex"
                element2.style.justifyContent = "space-between";
            }
    })
}



// funcytion for closing


function closing(sign,displaynone,displaysome){
    let d=document.getElementsByClassName(sign)
    for (let index = 0; index < d.length; index++) {
    const element = d[index];
    element.addEventListener("click",()=>{
        let b=document.getElementsByClassName(displaynone)
        for (let index = 0; index < b.length; index++) {
            const element2 = b[index];
            element2.style.display="none"
            let c = document.getElementsByClassName(displaysome)
            for (let index = 0; index < c.length; index++) {
                const element3 = c[index];
                element3.style.display="flex"  
            }  
            
        }
        let d=document.getElementsByClassName("audiobtns")
        for (let index = 0; index < d.length; index++) {
            const element = d[index];
            element.style.display="flex"
        }
    })
}
}

closing("cross","hamburger","navbar")
closing("cross2","searchbar","navbar")




// for searching
let e=document.getElementsByClassName("search")
for (let index = 0; index < e.length; index++) {
    const element = e[index];
    element.addEventListener("click",(event)=>{
         // Check if the clicked element is the hamburger icon or one of its children
        //  if (event.target.closest('.ham')) {
        //     // If hamburger icon was clicked, don't open search
        //     return;
        // }
        let d=document.getElementsByClassName("audiobtns")
        for (let index = 0; index < d.length; index++) {
            const element = d[index];
            element.style.display="none"
        }
        let b=document.getElementsByClassName("navbar")
        for (let index = 0; index < b.length; index++) {
            const element2 = b[index];
            element2.style.display="none"
            let c =document.getElementsByClassName("searchbar")
            for (let index = 0; index < c.length; index++) {
                const element3 = c[index];
                element3.style.display="flex"  
                element3.style.flexDirection="column"
                element3.style.alignItems = "center";
            }  
        }
    })
}



// closing premium option 
let g=document.getElementsByClassName("cross3")
for (let index = 0; index < g.length; index++) {
    const element = g[index];
    element.addEventListener("click",()=>{
        let c=document.getElementsByClassName("premium")
        for (let index = 0; index < c.length; index++) {
            const element = c[index];
            element.style.display="none"
            
        }
    })
    
}



// selecting language
let h=document.getElementsByClassName("language")
for (let index = 0; index < h.length; index++) {
    const element = h[index];
    element.addEventListener("click",()=>{
        let c=document.getElementsByClassName("select-language")
        for (let index = 0; index < c.length; index++) {
            const element = c[index];
            element.style.display="flex";
            element.style.backgroundColor="rgb(41, 41, 41)";
            element.style.zIndex=100;
            element.style.marginTop="-640px";
            element.style.marginLeft="20px";
            element.style.position="absolute";
            let d=document.getElementsByClassName("body")
            for (let index = 0; index < d.length; index++) {
                const element = d[index];
                element.style.zIndex="0"
                
            }
            
        }
    }) 
}

// closing language tab
let i=document.getElementsByClassName("cross4")
for (let index = 0; index < h.length; index++) {
    const element = i[index];
    element.addEventListener("click",()=>{
        let c=document.getElementsByClassName("select-language")
        for (let index = 0; index < c.length; index++) {
            const element = c[index];
            element.style.display="none";
            
            
        }
    }) 
}


// fixing margin after cutting the premium window 

let j=document.getElementsByClassName("cross3")
for (let index = 0; index < j.length; index++) {
    const element = j[index];
    element.addEventListener("click",()=>{
        let a=document.getElementsByTagName("main")
        for (let index = 0; index < a.length; index++) {
            const element = a[index];
            element.style.marginTop="50px";
            
        }
    })
    
}



// for playing and pausing 



let pl=document.body.querySelector(".play")
let pa=document.body.querySelector(".pause")
let audio=document.getElementById("audioplayer")
pl.addEventListener("click",()=>{
    pl.style.display="none"
    pa.style.display="block"
    audio.play()
})




pa.addEventListener("click",()=>{
    pa.style.display="none"
    pl.style.display="block"
    audio.pause()
})


// for playing songs 



function playsongs(){
    let audio=document.getElementById("audioplayer")
    let p= document.body.querySelectorAll("img[data-audio]")
    for (let index = 0; index < p.length; index++) {
        const element = p[index];
        element.addEventListener("click",()=>{
            let songdata=element.getAttribute("data-audio")
            audio.src=songdata;
            audio.play()
            pl.style.display="none"
            pa.style.display="block"
            let songname=element.getAttribute("data-songname")
            let sname=document.querySelector(".sname")
            sname.innerHTML=songname

        })  
    }
}
playsongs("trendingsongs")
playsongs("artists")
playsongs("albums")
playsongs("radios")
playsongs("featuredcharts")
playsongs("indias")





// for pausing
pa.addEventListener("click",()=>{
    pa.style.display="none"
    pl.style.display="block"
    audio.pause()
})




let container=[
    {src:"songs/arijitsingh.mp3",name:"Arijit Singh"},{src:"songs/arijitsinghradio.mp3",name:"Arijit Singh Radio"},{src:"songs/ashiqui2.mp3",name:"Aashiqui 2"},{src:"songs/nasha.mp4",name:"Nasha (From &quot;Raid 2&quot)"},{src:"songs/palpal.mp3",name:"Pal Pal"},{src:"songs/popicon.mp3",name:"Icon-Pop"},{src:"songs/pritam.mp3",name:"Pritam"},{src:"songs/shreyaghosalradio.mp3",name:"Shreya Ghosal Radio"},{src:"songs/topglobal.mp3",name:"Top-Global"},{src:"songs/topindia.mp3",name:"Top-India"},{src:"songs/yejawani.mp3",name:"Ye Jawaani Hai Deewaani"}]
let forwrd=document.querySelector(".forward")
let containerindex=0
forwrd.addEventListener("click",()=>{
    if (containerindex>=container.length) {
            containerindex=0
    } 
        audio.src=container[containerindex].src
        sname.textContent=container[containerindex].name
        containerindex++
        audio.play()
        pl.style.display="none"
        pa.style.display="block"

})
let sname=document.querySelector(".sname")

let backwrd=document.querySelector(".backward")
backwrd.addEventListener("click",()=>{
    containerindex--
    if(containerindex<0){
        containerindex=container.length-1
    } 
        
        audio.src=container[containerindex].src
        sname.textContent=container[containerindex].name
        audio.play()
        pl.style.display="none"
        pa.style.display="block"
    
})



let seek=document.querySelector("#seekbar")
seek.addEventListener("input",()=>{
    audio.currentTime=seek.value
})
audio.addEventListener("timeupdate", () => {
    seek.value = audio.currentTime;
})





let quotes =[
  '"Live life to the fullest, and focus on the positive."',
  
  "Love yourself. It is important to stay positive because beauty comes from the inside out",
 " Love yourself. It is important to stay positive because beauty comes from the inside out",
  "Adopting the right attitude can convert a negative stress into a positive one.",
  
 "Once you replace negative thoughts with positive ones, you'll start having positive results." ,
  "Keep your face to the sunshine and you cannot see a shadow.",
  
  "I believe if you keep your faith, you keep your trust, you keep the right attitude, if you're grateful, you'll see God open up new doors.",
  
  "I believe if you keep your faith, you keep your trust, you keep the right attitude, if you're grateful, you'll see God open up new doors.",
  "When you think positive, good things happen.",
  
  "A positive attitude can really make dreams come true - it did for me."
]

let span =document.querySelector("h2")


let bottonQuote = document.querySelector('.btn-quote')


bottonQuote.addEventListener('click',()=>{
  
  span.innerText=quotes[parseInt(Math.random()*10)]
  span.style.transitionDuration ="2s" 
 
  random_bg_color()
  
})



function random_bg_color() {
    var x = Math.floor(Math.random() * 256);
    var y = Math.floor(Math.random() * 256);
    var z = Math.floor(Math.random() * 256);
    var bgColor = "rgb(" + x + "," + y + "," + z + ")";
  
   let a= document.body.style.background = bgColor;
  document.body.style.transitionDuration ="2s" 
   
  span.style.color = bgColor
  bottonQuote.style.color=bgColor
  bottonQuote.style.border=bgColor
  bottonQuote.style.border=bgColor
 

  
    }
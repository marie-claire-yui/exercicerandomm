function getRandomInt() {
    return Math.floor(Math.random() * 256);
  }


  function myFunction() {
 //   document.getElementById("demo").innerHTML = "Hello World";
    const bgcolor = document.getElementsByTagName("body");
 //   console.log(bgcolor);
    bgcolor[0].style.background = `rgb(${getRandomInt()},${getRandomInt()},${getRandomInt()})`;
  }

  
//mybody[0].style.backgroundColor = 'rgb('+ getRandomInt() + ', '+ getRandomInt() + ', ' + getRandomInt()+ ')'; 



// const body = document.getElementsByTagName('body');
// const btn = document.getElementsById('btn');

// function getRandomInt() {
//   return Math.floor(Math.random() * 256);
// }

// function getBodyBg(){
//   body[0].style.background = 'rgb('+getRandomInt()+','+getRandomInt()+','+getRandomInt()+')';
// }

// btn.addEventListener('click',getBodyBg);

const img = document.querySelector('#img'); //sélection de l'image par son ID
console.log(img); 
//img.src = "https://picsum.photos/200/301";
//img.src ="img/javascript.png";
img.setAttribute('src','img/javascript.png');


const div = document.getElementsByClassName("test");
//console.log(div);
for (let index=0; index < div.length; index++){
 console.log(div[index].getAttribute('id'));
}


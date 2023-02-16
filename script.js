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
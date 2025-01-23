let play = document.getElementById('play');



let display = (e) => {
    let c = generate();
    let a = opt.find((x) => c == x.id);
    console.log(a);
    let { id, name, path } = a;
    if (e === "rock" && name=="Scissor" ) {
        play.innerHTML = `
                   
        <div class="result">
                <h1>You Win!<h1>
        
         </div>

        <div class="options">
        <div class="Rock">
            <h2>Your Choice</h2>
            <img src="./images/rock1.png" width="300" height="200">
            <h2>Rock</h2>
        </div>
        <div class="${name}">
          <h2>Computer's Choice</h2>
            <img src="${path}" width="300" height="200">
            <h2>${name}</h2>
        </div>
        </div>
                <a href="main.html">
        <div class="play-again">

        <h2>PLAY AGAIN!</h2>
        
        </div>
 </a>
    `;
    }

       else if (e === "rock" && name=="Paper") {
        play.innerHTML = `
        <div class="result">
                <h1>You Lose!<h1>
         </div>
        <div class="options">
        <div class="Rock">
          <h2>Your Choice</h2>
            <img src="./images/rock1.png" width="300" height="200">
            <h2>Rock</h2>
        </div>
        <div class="${name}">
        <h2>Computer's Choice</h2>
            <img src="${path}" width="300" height="200">
            <h2>${name}</h2>
        </div>
        </div>
        <a href="main.html">
            <div class="play-again">
              <h2>PLAY AGAIN!</h2>
            </div>
        </a>
    `;
    }
            else if (e === "rock" && name=="Rock") {
        play.innerHTML = `
        <div class="result">
                <h1>Tie!<h1>
         </div>
        <div class="options">
        <div class="Rock">
          <h2>Your Choice</h2>
            <img src="./images/rock1.png" width="300" height="200">
            <h2>Rock</h2>
        </div>
        <div class="${name}">
        <h2>Computer's Choice</h2>
            <img src="${path}" width="300" height="200">
            <h2>${name}</h2>
        </div>
        </div>
        <a href="main.html">
            <div class="play-again">
              <h2>PLAY AGAIN!</h2>
            </div>
        </a>

    `;
    }
    else if (e === "paper" && name=="Rock") {
        play.innerHTML = `
         <div class="result">
           <h1>You Win!<h1>
         </div>
          <div class="options">
        <div class="Paper" >
          <h2>Your Choice</h2>
            <img src="./images/paper1.png" width="300" height="200">
            <h2>Paper</h2>
        </div>
        <div class="${name}">
        <h2>Computer's Choice</h2>
            <img src="${path}" width="300" height="200">
            <h2>${name}</h2>
        </div>

         </div>
           <a href="main.html">
            <div class="play-again">
              <h2>PLAY AGAIN!</h2>
            </div>
        </a>
      
        `;
    }
        else if (e === "paper" && name=="Scissor") {
        play.innerHTML = `
         <div class="result">
           <h1>You Lose!<h1>
         </div>
          <div class="options">
        <div class="Paper" >
          <h2>Your Choice</h2>
            <img src="./images/paper1.png" width="300" height="200">
            <h2>Paper</h2>
        </div>
        <div class="${name}">
        <h2>Computer's Choice</h2>
            <img src="${path}" width="300" height="200">
            <h2>${name}</h2>
        </div>

         </div>
          <a href="main.html">
            <div class="play-again">
              <h2>PLAY AGAIN!</h2>
            </div>
        </a>
      
        `;
    }
        
        else if (e === "paper" && name=="Paper") {
        play.innerHTML = `
         <div class="result">
           <h1>Tie!<h1>
         </div>
          <div class="options">
        <div class="Paper" >
          <h2>Your Choice</h2>
            <img src="./images/paper1.png" width="300" height="200">
            <h2>Paper</h2>
        </div>
        <div class="${name}">
        <h2>Computer's Choice</h2>
            <img src="${path}" width="300" height="200">
            <h2>${name}</h2>
        </div>

         </div>
        <a href="main.html">
            <div class="play-again">
              <h2>PLAY AGAIN!</h2>
            </div>
        </a>
      
        `;
    }

    else if(e==="scissor" && name=="Paper"){
        play.innerHTML = `
            <div class="result">
           <h1>You Win!<h1>
         </div>
              <div class="options">
        <div class="Scissor">
        <h2>Your Choice</h2>
            <img src="./images/scissor1.png" width="300" height="200">
            <h2>Scissor</h2>
        </div>
        <div class="${name}">
        <h2>Computer's Choice</h2>
            <img src="${path}" width="300" height="200">
            <h2>${name}</h2>
        </div>
         </div>
          <a href="main.html">
            <div class="play-again">
              <h2>PLAY AGAIN!</h2>
            </div>
        </a>
        `
    }
        else if(e==="scissor" && name=="Rock"){
        play.innerHTML = `
            <div class="result">
           <h1>You Lose!<h1>
         </div>
              <div class="options">
        <div class="Scissor">
        <h2>Your Choice</h2>
            <img src="./images/scissor1.png" width="300" height="200">
            <h2>Scissor</h2>
        </div>
        <div class="${name}">
        <h2>Computer's Choice</h2>
            <img src="${path}" width="300" height="200">
            <h2>${name}</h2>
        </div>
         </div>
        <a href="main.html">
            <div class="play-again">
              <h2>PLAY AGAIN!</h2>
            </div>
        </a>
        `
    }
       else if(e==="scissor" && name=="Scissor"){
        play.innerHTML = `
            <div class="result">
           <h1>Tie !<h1>
         </div>
              <div class="options">
        <div class="Scissor">
        <h2>Your Choice</h2>
            <img src="./images/scissor1.png" width="300" height="200">
            <h2>Scissor</h2>
        </div>
        <div class="${name}">
        <h2>Computer's Choice</h2>
            <img src="${path}" width="300" height="200">
            <h2>${name}</h2>
        </div>
         </div>
   <a href="main.html">
            <div class="play-again">
              <h2>PLAY AGAIN!</h2>
            </div>
        </a>
        `
    }
}


let generate = () => {
    let g = Math.floor(Math.random() * (3) + 1);
    // console.log(g);
    return g;
}

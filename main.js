let play = document.getElementById('play');
let  isdark = false;


let highscore = JSON.parse(localStorage.getItem("data"))||0;

let displayScore = () => {
  let score = document.getElementById('Score');
  score.innerHTML = `
  <div class="Score"><h3>Score:${highscore}</h3></div>
  `
}

displayScore();


let display = (e) => {
    let c = generate();
    let a = opt.find((x) => c == x.id);
    console.log(a);
    let { id, name, path } = a;
  if (e === "rock" && name == "Scissor") {
    highscore += 1;
    localStorage.setItem("data", JSON.stringify(highscore))
    // if (isdark) {
    //      let scissor = document.getElementById('Scissor');
    // let rock = document.getElementById('Rock');
    //   let paper = document.getElementById('Paper');
    //      scissor.classList.toggle('dark-theme-boxes');
    // rock.classList.toggle('dark-theme-boxes');
    // paper.classList.toggle('dark-theme-boxes');
    //   }
        play.innerHTML = `
                   <div class="Score"><h3>Score:${highscore}</h3></div>
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
                <a href="index.html">
        <div class="play-again">

        <h2>PLAY AGAIN!</h2>
        
        </div>
 </a>
    `;
    }

  else if (e === "rock" && name == "Paper") {
    play.innerHTML = `
                <div class="Score"><h3>Score:${highscore}</h3></div>
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
        <a href="index.html">
            <div class="play-again">
              <h2>PLAY AGAIN!</h2>
            </div>
        </a>
    `;
    }
            else if (e === "rock" && name=="Rock") {
    play.innerHTML = `
                <div class="Score"><h3> Score:${highscore}</h3></div>
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
        <a href="index.html">
            <div class="play-again">
              <h2>PLAY AGAIN!</h2>
            </div>
        </a>

    `;
    }
  else if (e === "paper" && name == "Rock") {
            highscore += 1;
    localStorage.setItem("data", JSON.stringify(highscore))
    play.innerHTML = `
                <div class="Score"><h3>Score: ${highscore}</h3></div>
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
           <a href="index.html">
            <div class="play-again">
              <h2>PLAY AGAIN!</h2>
            </div>
        </a>
      
        `;
    }
        else if (e === "paper" && name=="Scissor") {
    play.innerHTML = `
                <div class="Score"><h3> Score: ${highscore}</h3></div>
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
          <a href="index.html">
            <div class="play-again">
              <h2>PLAY AGAIN!</h2>
            </div>
        </a>
      
        `;
    }
        
        else if (e === "paper" && name=="Paper") {
    play.innerHTML = `
                <div class="Score"><h3>Score: ${highscore}</h3></div>
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
        <a href="index.html">
            <div class="play-again">
              <h2>PLAY AGAIN!</h2>
            </div>
        </a>
      
        `;
    }

  else if (e === "scissor" && name == "Paper") {
          highscore += 1;
    localStorage.setItem("data", JSON.stringify(highscore))
    play.innerHTML = `
                <div class="Score"><h3>Score: ${highscore}</h3></div>
            <div class="result">
           <h1>You Win!<h1>
         </div>
              <div class="options">
        <div class="Scissor" id="Scissor">
        <h2>Your Choice</h2>
            <img src="./images/scissor1.png" width="300" height="200">
            <h2>Scissor</h2>
        </div>
        <div class="${name}" id="${name}">
        <h2>Computer's Choice</h2>
            <img src="${path}" width="300" height="200">
            <h2>${name}</h2>
        </div>
         </div>
          <a href="index.html">
            <div class="play-again">
              <h2>PLAY AGAIN!</h2>
            </div>
        </a>
        `
    }
        else if(e==="scissor" && name=="Rock"){
    play.innerHTML = `
                <div class="Score"><h3>Score: ${highscore}</h3></div>
            <div class="result">
           <h1>You Lose!<h1>
         </div>
              <div class="options">
        <div class="Scissor" id="Scissor">
        <h2>Your Choice</h2>
            <img src="./images/scissor1.png" width="300" height="200">
            <h2>Scissor</h2>
        </div>
        <div class="${name}" id="${name}">
        <h2>Computer's Choice</h2>
            <img src="${path}" width="300" height="200">
            <h2>${name}</h2>
        </div>
         </div>
        <a href="index.html">
            <div class="play-again">
              <h2>PLAY AGAIN!</h2>
            </div>
        </a>
        `
    }
       else if(e==="scissor" && name=="Scissor"){
    play.innerHTML = `
                <div class="Score"><h3>Score: ${highscore}</h3></div>
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
   <a href="index.html">
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

let dark = () => {
  if (isdark == false){
    isdark = true;
  }
  else if (isdark == true) {
    isdark = false;
  }

    document.body.classList.toggle('dark-theme');


}
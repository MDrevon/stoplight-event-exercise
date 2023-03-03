  // YOUR CODE HERE
  var stopBtn = document.getElementById("stopButton");
  
  var slowBtn = document.getElementById("slowButton");
  
  var goBtn = document.getElementById("goButton");
  
  var buttonName = document.getElementsByClassName(".button");

  stopBtn.addEventListener("click", function(){
    let stopLight = document.getElementById("stopLight");
    stopLight.classList.toggle("stop");
    if(stopLight.classList.contains("stop"))
    {
      buttonClickOn(this.textContent);
    }
    else
    {
      buttonClickOff(this.textContent);
    }    
  })

  slowBtn.addEventListener("click", function(){
    let slowLight = document.getElementById("slowLight");
    slowLight.classList.toggle("slow");
    if(slowLight.classList.contains("slow"))
    {
      buttonClickOn(this.textContent);
    }
    else
    {
      buttonClickOff(this.textContent);
    }    
  })

  goBtn.addEventListener("click", function(){
    let goLight = document.getElementById("goLight");
    goLight.classList.toggle("go");
    if(goLight.classList.contains("go"))
    {
      buttonClickOn(this.textContent);
    }
    else
    {
      buttonClickOff(this.textContent);
    }    
  })

  let buttons = document.querySelectorAll('.button');

  buttons.forEach(button => {
    button.addEventListener("mouseleave", (event) => {
      //console.log(event.target.textContent);
      console.log("Left " + event.target.textContent + " button" );
    })    
  });

  buttons.forEach(button => {
    button.addEventListener("mouseenter", (event) => {
      //console.log(event.target.textContent);
      console.log("Entered " + event.target.textContent + " button" );
    })    
  });

  function buttonClickOn(buttonName)
  {
    console.log(`${buttonName} bulb on`);
  }

  function buttonClickOff(buttonName)
  {
    console.log(`${buttonName} bulb off`);
  }

  //function buttonLog(buttonName){
  //  console.log('Enter ${buttonName} button');
  //}

  //stopBtn.addEventListener("mouseenter", () => {buttonLog('stop')});

/*

  stopBtn.addEventListener("mouseenter", function(){
    console.log("Entered " + this.textContent + " button");
  })

  stopBtn.addEventListener("mouseleave", function(){
    console.log("Left " + this.textContent + " button");
  })

  slowBtn.addEventListener("mouseenter", function(){
    console.log("Entered " + this.textContent + " button");
  })

  slowBtn.addEventListener("mouseleave", function(){
    console.log("Left " + this.textContent + " button");
  })

  goBtn.addEventListener("mouseenter", function(){
    console.log("Entered " + this.textContent + " button");
  })

  goBtn.addEventListener("mouseleave", function(){
    console.log("Left " + this.textContent + " button");
  })

  //console.log(buttons[0]);

*/



var personInfo = {
  firstName: "Mohammad",
  lastName: "Kabir",
  age: 17,
  haveBirthday: function() {
    this.age = this.age + 1;
    return this.age;
  }
};

function welcomeFunction()
//This funtion will run when the page is opened
{
  var text = "";
  var i = 3;
  while (i > 0) 
  {
    text += i + " ";
    i--;
  }
  alert(text);
  var myVariable= "<hello there>"
  alert(myVariable)
  var nametoOutput= 'My name is '+ personInfo.firstName +' '+ personInfo.lastName;
  document.getElementById('myName').innerHTML= nametoOutput;
  var nametoOutput= 'I like to go by Kabir.';
  document.getElementById('myOtherName').innerHTML= nametoOutput;
  var w = 'I have been living on this earth for seventeen (';
  var x = 1;
  var y = 7;
  var z = ') years.'; 
  var age = (w + x + y + z);
  document.getElementById('my_description').innerHTML= age;
}

function clickParagraph(whatwasClicked)
//This function will show a hidden message when ever the word in the "whatwasClicked" is clicked.
{
  if(whatwasClicked =="TV shows")
  {
    alert("Those aren't the only ones!");
  }
  else if(whatwasClicked =="Explore")
  {
    alert("I really want to explore the world.");
  }
  else
  {
    alert(whatwasClicked);
  }
}
var coinFlipHistory = [];
function coinFlip()

{
  var randomNumber = Math.random();
  if(randomNumber < 0.5)
  {
    coinFlipHistory.push('H');
    //alert('heads');
  }
  else
  {
    coinFlipHistory.push('T');
    //alert('tails');
  }
  document.getElementById('coin_flip_history').innerHTML = coinFlipHistory;
  setCoinFlipMessage();
}

function cheatTheCoinFlip()
{
  coinFlipHistory.fill('try again!');
  document.getElementById('coin_flip_history').innerHTML = coinFlipHistory;
  setCoinFlipMessage();
}

function addMore()
{
  coinFlipHistory.splice (3,0, "H", "T")
  document.getElementById('coin_flip_history').innerHTML = coinFlipHistory;
  setCoinFlipMessage();
}

function setCoinFlipMessage()
{
  var allHeads = 1;
  var allTails = 1;

  for(i=0; i<coinFlipHistory.length; i++)
  {
    if(coinFlipHistory[i]=="T")
    {
      allHeads = 0;
    }

    if(coinFlipHistory[i] == 'H')
    {
      allTails = 0;
    }

    if(coinFlipHistory[i] == 'try again!')
    {
      allTails = 0;
      allHeads = 0;
    }
  } 
  if(allHeads == 1)
  {
    document.getElementById('coin_flip_message').innerHTML = 'All Heads';
  }
  else if(allTails == 1)
  {
    document.getElementById('coin_flip_message').innerHTML = 'All Tails';
  }
  else
  {
    document.getElementById('coin_flip_message').innerHTML = 'A Mixture';
  }

}

function myStuff()
{
 document.getElementById('buttonClicked').innerHTML= 'this portion was self-taught lol but i am still confused about things';
}

function chooseShow()
//This function will choose between options of shows and show which one is correct.
{
  var tvShow = document.getElementsByName('shows');
  for (i=0; i<tvShow.length; i++) 
  {
    if (tvShow[0].checked) 
    {
      document.getElementById("showResult").innerHTML = "I haven't finished it but it seems fun.";
    }
    else if (tvShow[1].checked) 
    {
      document.getElementById("showResult").innerHTML = "Close, but I also haven't fully finished season 5.";
    }
    else if (tvShow[2].checked) 
    {
      document.getElementById("showResult").innerHTML = "Good job!";
    }
     else 
    {
      document.getElementById("showResult").innerHTML = "Hey! Not nice. Cmon try atleast.";
    }
  }
}


function chooseOption()
{
 
  if(document.getElementById('choice1').checked == true)
  {
    alert("Interesting!")
  }
  
  else if(document.getElementById('choice2').checked == true)
  {
    alert("Also Interesting! (i would choose this too. good choice)")
  }
  else
  {
    alert("Hey! You are doing that again. Not nice. Cmon just try.")
  }
}

function urInfo()
{
  var jFirst = document.getElementById("fName").value;
  var jLast = document.getElementById("lName").value;
  var email = document.getElementById("email").value;
  var birthday = document.getElementById("birthday").value;
  alert("Hey " + jFirst + " " + jLast + " " + "who was born on " + birthday + " and whose email is " + email);  
}

function choose1()
{
  var selectElement = document.getElementById('entmt');
  var x = selectElement.selectedIndex;
  alert('It is great that you enjoy '+ selectElement.options[x].text);
}

function number() 
{
  var b = document.getElementById("numBer").value;
  var c = parseFloat(b);
  document.getElementById("answer").innerHTML = "Your favorite number is " + c;
}
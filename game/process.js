const choice=document.querySelectorAll(".Choice");

//com choice
const genCom=()=>{
    const boot=parseInt(Math.random() * 3);
    const array=["rock","paper","scissors"];
     return array[boot];
} 
let h1=document.querySelector("h1");
const showwinner=(win,comchoice,userchoice)=>{
    if(win){
        h1.innerText="you win!. your  "+userchoice+" beats "+comchoice;
        h1.style.backgroundColor="green";
        h1.style.color="white";

    }
    else{
       h1.innerText="you lost.. "+comchoice+" beats your "+userchoice;
       h1.style.backgroundColor="red";
       h1.style.color="white";
    }
}

let comchoice=0;

const palyGame=(userchoice)=> {
    
        const comchoice=genCom();
        if(userchoice==comchoice){

            h1.innerText="drow";
            h1.style.backgroundColor="white";
            h1.style.color="black";
        }
        else{
            let win=true;
            switch (userchoice) {
                case "rock":
                   win= comchoice=="paper"? false : true;
                    break;
                case "paper":
                    win= comchoice=="scissors"? false : true;
                    break;
                case "scissors":
                    win= comchoice=="rock"? false : true;
                    break;
                
                
            }
            showwinner(win,comchoice,userchoice);

    }
}
//user choice


choice.forEach((choice) => {
    
    choice.addEventListener("click", () => {
    const userchoice=choice.getAttribute("id");
        palyGame(userchoice);

    
    });
    
});

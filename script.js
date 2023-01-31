let wordList = [
    {
    word: "python",
    hint: "programming language"
    },
    {
    word: "guitar",
    hint: "a musical instrument"
    },
    {
    word: "aim",
    hint: "a purpose or intention"
    },
    {
    word: "venus",
    hint: "planet of our solar system"
    },
    {
    word: "gold",
    hint: "a yellow precious metal"
    },
    {
    word: "ebay",
    hint: "online shopping site"
    },
    {
    word: "golang",
    hint: "programming language"
    },
    {
    word: "coding",
    hint: "related to programming"
    },
    {word: "matrix",
    hint: "science fiction movie"
    },
    {
    word: "bugs",
    hint: "related to programming"
    },
    {
    word: "avatar",
    hint: "epic science fiction film"
    },
    {
    word: "gif",
    hint: "a file format for image"
    },
    {
    word: "mental",
    hint: "related to the mind"
    },
    {
    word: "map",
    hint: "diagram represent of an area"
    },
    {
    word: "island",
    hint: "land surrounded by water"
    },
    {
    word: "hockey",
    hint: "a famous outdoor game"
    },
    {
    word: "chess",
    hint: "related to a indoor game"
    },
    {
    word: "viber",
    hint: "a social media app"
    },
    {word: "github",
    hint: "code hosting platform"
    },
    {
    word: "png",
    hint: "a image file format"
    },
    {
    word: "silver",
    hint: "precious greyish-white metal"
    },
    {
    word: "mobile",
    hint: "an electronic device"
    },
    {
    word: "gpu",
    hint: "computer component"
    },
    {
    word: "java",
    hint: "programming language"
    },
    {
    word: "google",
    hint: "famous search engine"
    },
    {
    word: "venice",
    hint: "famous city of waters"
    },
    {
    word: "excel",
    hint: "microsoft product for windows"
    },
    {
    word: "mysql",
    hint: "a relational database system"
    },
    {word: "nepal",
    hint: "developing country name"
    },
    {
    word: "flute",
    hint: "a musical instrument"
    },
    {
    word: "crypto",
    hint: "related to cryptocurrency"
    },
    {
    word: "tesla",
    hint: "unit of magnetic flux density"
    },
    {
    word: "mars",
    hint: "planet of our solar system"
    },
    {
    word: "proxy",
    hint: "related to server application"
    },
    {
    word: "email",
    hint: "related to exchanging message"
    },
    {
    word: "html",
    hint: "markup language for the web"
    },
    {
    word: "air",
    hint: "related to a gas"
    },
    {
    word: "idea",
    hint: "a thought or suggestion"
    },
    {word: "server",
    hint: "related to computer or system"
    },
    {
    word: "svg",
    hint: "a vector image format"
    },
    {
    word: "jpeg",
    hint: "a image file format"
    },
    {
    word: "search",
    hint: "act to find something"
    },
    {
    word: "key",
    hint: "small piece of metal"
    },
    {
    word: "egypt",
    hint: "a country name"
    },
    {
    word: "joker",
    hint: "psychological thriller film"
    },
    {
    word: "dubai",
    hint: "developed country name"
    },
    {
    word: "photo",
    hint: "representation of person or scene"
    },
    {
    word: "nile",
    hint: "largest river in the world"
    },
    {word: "rain",
    hint: "related to a water"
    },
]

// let remainingGuesses = 8;
let randomIndex = Math.floor(Math.random() * wordList.length);
let randomWord = wordList[randomIndex];
console.log(randomWord.word); 
console.log(randomWord.hint);
function resetscreen(){
    

    location.reload();

}
window.onload = function () {

    document.getElementById("hint").innerHTML = randomWord.hint;
    
    // let remainingChances = totalChances;
    let numOfGuesses = 8;
    let z=0;
    let ip1;
    let ip2;
    let ip3;
    let ip4,ip5,ip6,correct=0,ans="Correct =";
    // document.getElementById("guess").innerHTML = remainingGuesses;
    const inputFields = [
        ip1=document.getElementById("ip1").value,
        ip2=document.getElementById("ip2").value,
        ip3=document.getElementById("ip3").value,
        ip4=document.getElementById("ip4").value,
        ip5=document.getElementById("ip5").value
      ];
      
      for (let i = 1; i <= 6; i++) {
        const textbox = document.getElementById(`ip${i}`);
        textbox.addEventListener("input", function() {
          if (/[a-zA-Z]/.test(textbox.value)) {
            runFunction(textbox.value);

            console.log("textbox that send data "+textbox.value);
          }
        });
      }

      function runFunction(textboxId) {


        
        console.log(`Text box with id ${textboxId} is filled with an alphabet`);
        // if (randomWord.word == textboxId) {
        //   alert("You win");
        // }
          console.log("REAL == "+ randomWord.word[z] + " textboxId == "+ textboxId );
          
          if(randomWord.word[z] == textboxId){
            ans = ans.concat(textboxId+",");
            document.getElementById("result").innerHTML = ans;
            z++;
          console.log("Correct fn");
          correct++;

            
          }
          else{
            document.getElementById("result").innerHTML = "Wrong";
            console.log("Wrong fn");
            console.log(numOfGuesses);
            numOfGuesses--;
            document.getElementById("guess").innerHTML = numOfGuesses;
            if (numOfGuesses == 0) {
                alert("You lose");
                location.reload();
              }
          }
          
          console.log("z="+z);

          if(correct == randomWord.word.length )
            {
                alert("You win");
                location.reload();
            }
            console.log("====================");
      }
     

    
      

};
  


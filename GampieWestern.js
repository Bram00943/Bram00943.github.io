
        let amountClicked = 0;
        let slideNum = "1/5";
        function onClick(){
            amountClicked += 1; 
            if(amountClicked ==1){
                document.getElementById("text").innerHTML = "We were in a group with 3 artists and 1 developer," +
            " and I was the only dev so I had to figure everything out myself. Which was quite hard but it worked"+
            " out pretty well in my opinion.";
            document.getElementById("slide").innerHTML = "1/4";
            }
            
            if(amountClicked == 2){
                document.getElementById("text").innerHTML = "There where a lot of obstacles and I admit I" +
                " had to ask a lot of questions. Mostly because I was very new to solo developing a whole" +
                " game on my own.";
                document.getElementById("slide").innerHTML = "2/4";
            }
            if(amountClicked == 3){
                document.getElementById("text").innerHTML = "The hardest thing to make was the 6 shooter" +
                " which was essentially when you got the power up you got use it whenever the ball hit your" +
                " character and then there would spawn 4-5 'fake' bullets to discract the opponent.";
                document.getElementById("slide").innerHTML = "3/4";
            }
            if(amountClicked == 4){
                document.getElementById("text").innerHTML = "But in the end I am very happy with the end result" +
                " which I created within a pretty short time, where I had to learn a lot of new things and understand"+
                ". This was one of the first games I made which I'm actually VERY proud of. Given that I solo developed"+
                " the whole game";
                document.getElementById("slide").innerHTML = "4/4";
            }
            if(amountClicked == 5){
                amountClicked = 0;
            }
        }
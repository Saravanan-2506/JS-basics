            
            var rand = Math.random();
            var randomNumber = Math.floor(rand*10)+1;
            var para = document.getElementById("qualify");
            var score = document.getElementById("score");
            var totalScore = 10;
            function guess(){
                var guessedNumber = Number(document.getElementById("num").value);
                if (guessedNumber===randomNumber) {
                    para.textContent = "You are right";
                    alert("Yip Yip Hurray !! You won...");
                }
                else{
                    totalScore=totalScore-1;
                    score.textContent="Score:"+ totalScore;
                    para.textContent = "You are wrong";

                }

            }
            
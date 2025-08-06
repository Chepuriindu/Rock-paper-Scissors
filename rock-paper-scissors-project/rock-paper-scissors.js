const score= JSON.parse(localStorage.getItem
    ('score')) || {
        wins:0,
        losses:0,
        ties:0
    };
    updatescore();
    console.log(score);
    function play(playerMove){
        const computermove=func1();
        let result='';

        if(playerMove==='rock'){
            if(computermove==='rock'){
                result='Tie'; 
            }
            else if(computermove==='paper'){
                result='You lose';
            }
            else if(computermove==='Scissors'){
                result='You win';
            }
        }
        
        else if(playerMove==='paper'){
            if(computermove==='rock'){
                result='You Win'; 
            }
            else if(computermove==='paper'){
                result='Tie';
            }
            else if(computermove==='Scissors'){
                result='You lose';
            }
        }

        else if(playerMove==='Scissors'){
            if(computermove==='rock'){
                result='You lose'; 
            }
            else if(computermove==='paper'){
                result='You Win';
            }
            else if(computermove==='Scissors'){
                result='Tie';
            }
        }
        if(result==='You Win'){
            score.wins+=1;
        } else if(result==='You lose'){
            score.losses+=1;
        } else if(result==='Tie'){
            score.ties+=1;
        }
        localStorage.setItem('score',JSON.stringify(score));
        document.querySelector('.js-result').innerHTML=result;
        document.querySelector('.js-result1').
        innerHTML=` You 
        <img src="/project/images/${playerMove}.png" class="moves">
        <img src="/project/images/${computermove}.png" class="moves">
        Computer`;
        updatescore();
    }
    function updatescore(){
        document.querySelector('.score').innerHTML=`wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`;
    }
    function func1(){
        const randomnum=Math.random();
        let computermove='';
        if(randomnum>=0 && randomnum<1/3){
            computermove='rock';
        }
        else if(randomnum>=1/3 && randomnum<2/3){
            computermove='paper';
        }
        else if(randomnum>=2/3 && randomnum<1){
            computermove='Scissors';
        }
        return  computermove;
    }
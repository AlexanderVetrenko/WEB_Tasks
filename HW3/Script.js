let name = prompt("Как вас зовут?", "Имя");
let coin = parseInt(prompt("Введите начальное количество монет"));
let m = parseInt(prompt("Введите предельное количество забираемых монет за один ход"))
player_vs_comp(coin,m);

function getRandomInt(min,max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

function check_coin(k,m){
	if (k > 0 && k <= m) { 
        return k;
    }
    else{
        while(k <= 0 || k > m){
            k = parseInt(prompt('Укажите правильное количество монет!'));
        }
        return k
    }
}

function Podsk(nmb, maxx){
	if(nmb%(maxx+1) == 0){
	 return ""
	}
	else{
		return nmb%(maxx+1);
	}
}

function player_vs_comp(cn,mx){
    if (getRandomInt(1,3) == 2){ 
        alert(`Игру начинает ${name}`);
        f = 1;
    }
    else{
        alert('Игру начинает компьютер');
        f = 2;
    }
    
    while(cn>mx){
        if (f==1){            
            n = parseInt(prompt(`Ход ${name}, подсказка: ${Podsk(cn,mx)}`));
            n = check_coin(n,m);
            cn-=n;
            alert(`Монет осталось: ${cn}`);
            f=2;
        }
        else{
            if ((cn%(mx+1)) == 0){
            	n = 1;
            } 
            else{
             n = cn%(mx+1);
         	}
            alert(`Ход компьютера: ${n}`);
            cn-=n;
            alert(`Монет осталось: ${cn}`);
            f=1;
        }
    }

    if (f == 1){
     alert(`Победил ${name}!`);
    }
    else{
    alert("Победил компьютер!");
	}
}




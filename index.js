function func(){
    setInterval(valuerun, 50);
    setInterval(valuerun1,50);
    setInterval(valuerun2,50);

    let counter = 0;
    function valuerun(){
       
        if(counter<140){
            counter++;
            let store = document.getElementById('run');
            store.innerHTML = counter;
        }else{
            clearInterval()
        }
    }
    
    let counter1 = 0;
    function valuerun1(){

        if(counter1<40){
            counter1++;
            let store = document.getElementById('run1');
            store.innerHTML=counter1;
        }else{
            clearInterval()
        }
    }

    let counter2 = 0;
    function valuerun2(){
        if(counter2<100){
        counter2++;
        let store = document.getElementById('run2');
        store.innerHTML = counter2;
        }else{
            clearInterval()
        }
    }

    setTimeout(open,2000);
    function open(){
        document.getElementById('website').style.display="block";
        document.getElementById('starting-_animation').style.display="none";
    }
}
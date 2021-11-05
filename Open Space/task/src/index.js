window.onload = function () {
    const input = document.querySelectorAll('input');
    let password = document.getElementById('password');
    const rocket = document.getElementById('rocket');
    document.getElementById('ok').addEventListener('click', function () {
            if (password.value === '') {
                input[0].disabled = true;
                input[1].disabled = true;
                for (let i = 2; i < input.length; i++) {
                    input[i].disabled = false;
                }
            }
        });
  /*  for (let i = 0; i < input.length; i++) {
        input[i].onchange = function () {
            test();
        }
    }
        function test() {
            input[13].disabled = !((input[2].checked && input[3].checked && input[4].checked && input[5].checked && input[6].checked && input[7].checked) && (input[8].value === '100' && input[9].value === '100' && input[10].value === '100' && input[11].value === '100' && input[12].value === '100'));
        }
    let stopTest = setInterval(test, 100); */
    let cornerRocket = 30;
    function corner () {
        for (let i = 8; i <= 12; i++) {
            cornerRocket += input[i].valueAsNumber;
        }
        rocket.style.transform = 'rotate(' + cornerRocket / 100 + 'deg)';
    }
    let stopCorner = setInterval(corner, 100);
    function start () {
        for (let i = 2; i <= 7; i ++) {
            if (input[i].checked) {
                speedRocket /= 2;
            }
        }
    }
    let speedRocket = 1000;
    document.getElementById('launch').addEventListener('click', function (){
       /* clearInterval(stopTest);*/
        start();
        change();
        stopFly = setInterval(fly, speedRocket);
        clearInterval(stopCorner);
    });
    let x = 15;
    let y = 34;
    let changeX = 0.5;
    let changeY = 1.25;
    function change () {
        for (let i = 8; i <= 12; i++) {
            changeX += input[i].valueAsNumber / 100;
            changeY += input[i].valueAsNumber / 100;
        }
    }
    function fly () {
        console.log(changeX);
        console.log(changeY);
        if (x < 100 || y < 120) {
            rocket.style.left = x + '%';
            x += changeX;
            rocket.style.bottom = y + '%';
            y += changeY;
            if (x > 90 || y > 110){
                clearInterval(stopFly);
                let reboot = confirm('The rocket flew away =) Reload the page?');
                if (reboot) {
                    location.reload();
                }
            }
        }
    }
}
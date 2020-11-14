//console.log('ddd');
const mouse = document.querySelector('.mouse-wrap');
const line = document.querySelector('.line');
const name1 = document.querySelector('.name1');
const name2 = document.querySelector('.name2');
const intro = document.querySelector('.intro');
const image = document.querySelector('.image');
const works = document.querySelector('#works');
const port = document.querySelector('.port');
const port_b = document.querySelector('.port_b');
const x1 = document.querySelector('.x1');
const x2 = document.querySelector('.x2');
const x3 = document.querySelector('.x3');
const x4 = document.querySelector('.x4');
const y1_1 = document.querySelector('.y1_1');
const y1_2 = document.querySelector('.y1_2');
const y1_3 = document.querySelector('.y1_3');
const y2_1 = document.querySelector('.y2_1');
const y2_2 = document.querySelector('.y2_2');
const y2_3 = document.querySelector('.y2_3');
const y3_1 = document.querySelector('.y3_1');
const y3_2 = document.querySelector('.y3_2');
const y3_3 = document.querySelector('.y3_3');
const bpm = document.querySelector('li.bpm95');
const bpm_b = document.querySelector('li.bpm95_b');
//const passion = document.querySelector('.passion')


window.addEventListener('scroll', () => {
    //console.log("vv");
    const scrollable = document.documentElement.scrollHeight - window.innerHeight;
    const scrolled = window.scrollY;
    console.log(scrollable);

    window.onbeforeunload = function(){
        window.scrollTo(0, 0);
    }
    // 마우스 애니메이션
    /*if(scrolled === 500){
        mouse.style.display = 'none';
    }else{
        if(scrolled < 500){
            mouse.style.display = 'block';
        }
    };*/
    //라인
    
   if(scrollable <= 1900){
    for(var i = 0; i <= scrollable; i++){
        line.style.height = (i * 1.2) + 'px';
        line.style.transition = '0.3s';
        line.style.transform = 'translate(0, 5px)';
    }
   }; 

   //프로필
   if (scrollable == 600){
       name1.style.opacity = '1';
       name1.style.transform = 'translateX(0px)';
       name1.style.transition = '0.3s ease-in-out';
   }else if(scrollable < 600){
        name1.style.opacity = '0';
        name1.style.transform = 'translateX(-50px)';
   }else if(scrollable > 900){
        name1.style.opacity = '0';
        name1.style.transform = 'translateX(-50px)';
   }
   
   //프로필2
   if (scrollable == 700){
    name2.style.opacity = '1';
    name2.style.transform = 'translateX(0px)';
    name2.style.transition = '0.3s ease-in-out';
    }else if(scrollable < 700){
        name2.style.opacity = '0';
        name2.style.transform = 'translateX(-50px)';
    }else if(scrollable > 1000){
        name2.style.opacity = '0';
        name2.style.transform = 'translateX(-50px)';
    }

    //소개
    if (scrollable == 800){
        intro.style.opacity = '1';
        intro.style.transform = 'translateX(0px)';
        intro.style.transition = '0.3s ease-in-out';
    }else if(scrollable < 800){
        intro.style.opacity = '0';
        intro.style.transform = 'translateX(-50px)';
    }else if(scrollable > 1100){
        intro.style.opacity = '0';
        intro.style.transform = 'translateX(-50px)';
    }

    //이미지
    if (scrolled == 800){
        image.style.opacity = '1';
        image.style.transform = 'translateX(0px)';
        image.style.transition = '0.3s ease-in-out';
    }else if(scrolled < 800){
        image.style.opacity = '0';
        image.style.transform = 'translateX(-50px)';
    }else if(scrolled > 1100){
        image.style.opacity = '0';
        image.style.transform = 'translateX(-50px)';
    }

    //가로선_1
    if (scrolled >= 1300){
        x1.style.width = '100%';
        x1.style.transform = 'translate(-50%, -50%)';
        x1.style.transition = '0.3s';
        x1.style.border = '1px solid gray';
        x1.style.opacity = '1';
    }else if(scrolled < 1300){
        x1.style.width = '0%';
        x1.style.transform = 'translate(-50%, -50%)';
        x1.style.transition = '0.3s';
        x1.style.opacity = '0';
    }else if(scrolled >= 1900){
        x1.style.width = '0%';
        x1.style.transform = 'translate(-50%, -50%)';
        x1.style.transition = '0.3s';
        x1.style.opacity = '0';
    }
    //세로선
    if (scrolled >= 1400){
        y1_1.style.height = 320 +'px';
        y1_1.style.transition = '0.3s';
        y1_1.style.border = '1px solid gray';
        y1_1.style.opacity = '1';
    }else if(scrolled < 1400){
        y1_1.style.height = '0';
        y1_1.style.transition = '0.3s';
        y1_1.style.opacity = '0';
    }else if(scrolled >= 1900){
        y1_1.style.height = '0';
        y1_1.style.transition = '0.3s';
        y1_1.style.opacity = '0';
    }

    if (scrolled >= 1400){
        y1_2.style.height = 320 +'px';
        y1_2.style.transition = '0.3s';
        y1_2.style.border = '1px solid gray';
        y1_2.style.opacity = '1';
    }else if(scrolled < 1400){
        y1_2.style.height = '0';
        y1_2.style.transition = '0.3s';
        y1_2.style.opacity = '0';
    }else if(scrolled >= 1900){
        y1_2.style.height = '0';
        y1_2.style.transition = '0.3s';
        y1_2.style.opacity = '0';
    }

    if (scrolled >= 1400){
        y1_3.style.height = 320 +'px';
        y1_3.style.transition = '0.3s';
        y1_3.style.border = '1px solid gray';
        y1_3.style.opacity = '1';
    }else if(scrolled < 1400){
        y1_3.style.height = '0';
        y1_3.style.transition = '0.3s';
        y1_3.style.opacity = '0';
    }else if(scrolled >= 1900){
        y1_3.style.height = '0';
        y1_3.style.transition = '0.3s';
        y1_3.style.opacity = '0';
    }
    //가로선_2
    if (scrolled >= 1500){
        x2.style.width = '100%';
        x2.style.transform = 'translate(-50%, -50%)';
        x2.style.transition = '0.3s';
        x2.style.border = '1px solid gray';
        x2.style.opacity = '1';
    }else if(scrolled < 1500){
        x2.style.width = '0%';
        x2.style.transform = 'translate(-50%, -50%)';
        x2.style.transition = '0.3s';
        x2.style.opacity = '0';
    }else if(scrolled >= 1900){
        x2.style.width = '0%';
        x2.style.transform = 'translate(-50%, -50%)';
        x2.style.transition = '0.3s';
        x2.style.opacity = '0';
    }
    //세로선_2
    if (scrolled >= 1600){
        y2_1.style.height = 220 +'px';
        y2_1.style.transition = '0.3s';
        y2_1.style.border = '1px solid gray';
        y2_1.style.opacity = '1';
    }else if(scrolled < 1600){
        y2_1.style.height = '0';
        y2_1.style.transition = '0.3s';
        y2_1.style.opacity = '0';
    }else if(scrolled >= 1900){
        y2_1.style.height = '0';
        y2_1.style.transition = '0.3s';
        y2_1.style.opacity = '0';
    }

    if (scrolled >= 1600){
        y2_2.style.height = 220 +'px';
        y2_2.style.transition = '0.3s';
        y2_2.style.border = '1px solid gray';
        y2_2.style.opacity = '1';
    }else if(scrolled < 1600){
        y2_2.style.height = '0';
        y2_2.style.transition = '0.3s';
        y2_2.style.opacity = '0';
    }else if(scrolled >= 1900){
        y2_2.style.height = '0';
        y2_2.style.transition = '0.3s';
        y2_2.style.opacity = '0';
    }

    if (scrolled >= 1600){
        y2_3.style.height = 220 +'px';
        y2_3.style.transition = '0.3s';
        y2_3.style.border = '1px solid gray';
        y2_3.style.opacity = '1';
    }else if(scrolled < 1600){
        y2_3.style.height = '0';
        y2_3.style.transition = '0.3s';
        y2_3.style.opacity = '0';
    }else if(scrolled >= 1900){
        y2_3.style.height = '0';
        y2_3.style.transition = '0.3s';
        y2_3.style.opacity = '0';
    }

    //가로선_3
    if (scrolled >= 1700){
        x3.style.width = '100%';
        x3.style.transform = 'translate(-50%, -50%)';
        x3.style.transition = '0.3s';
        x3.style.border = '1px solid gray';
        x3.style.opacity = '1';
    }else if(scrolled < 1700){
        x3.style.width = '0%';
        x3.style.transform = 'translate(-50%, -50%)';
        x3.style.transition = '0.3s';
        x3.style.opacity = '0';
    }else if(scrolled >= 1900){
        x3.style.width = '0%';
        x3.style.transform = 'translate(-50%, -50%)';
        x3.style.transition = '0.3s';
        x3.style.opacity = '0';
    }
    //세로선_3
    if (scrolled >= 1800){
        y3_1.style.height = 230 +'px';
        y3_1.style.transition = '0.3s';
        y3_1.style.border = '1px solid gray';
        y3_1.style.opacity = '1';
    }else if(scrolled < 1800){
        y3_1.style.height = '0';
        y3_1.style.transition = '0.3s';
        y3_1.style.opacity = '0';
    }else if(scrolled >= 1900){
        y3_1.style.height = '0';
        y3_1.style.transition = '0.3s';
        y3_1.style.opacity = '0';
    }

    if (scrolled >= 1800){
        y3_2.style.height = 230 +'px';
        y3_3.style.transition = '0.3s';
        y3_2.style.border = '1px solid gray';
        y3_2.style.opacity = '1';
    }else if(scrolled < 1800){
        y3_2.style.height = '0';
        y3_2.style.transition = '0.3s';
        y3_2.style.opacity = '0';
    }else if(scrolled >= 1900){
        y3_2.style.height = '0';
        y3_2.style.transition = '0.3s';
        y3_2.style.opacity = '0';
    }

    if (scrolled >= 1800){
        y3_3.style.height = 230 +'px';
        y3_3.style.transition = '0.3s';
        y3_3.style.border = '1px solid gray';
        y3_3.style.opacity = '1';
    }else if(scrolled < 1800){
        y3_3.style.height = '0';
        y3_3.style.transition = '0.3s';
        y3_3.style.opacity = '0';
    }else if(scrolled >= 1900){
        y3_3.style.height = '0';
        y3_3.style.transition = '0.3s';
        y3_3.style.opacity = '0';
    }
    //가로선_4
    if (scrolled >= 1900){
        x4.style.width = '100%';
        x4.style.transform = 'translate(-50%, -50%)';
        x4.style.transition = '0.3s';
        x4.style.border = '1px solid gray';
        x4.style.opacity = '1';
    }else if(scrolled < 1900){
        x4.style.width = '0%';
        x4.style.transform = 'translate(-50%, -50%)';
        x4.style.transition = '0.3s';
        x4.style.opacity = '0';
    }else if(scrolled >= 1900){
        x4.style.width = '0%';
        x4.style.transform = 'translate(-50%, -50%)';
        x4.style.transition = '0.3s';
        x4.style.opacity = '0';
    }
    //자료
    if(scrolled >= 1900){
        port.style.display = 'inline-block';
        //port_b.style.display = 'inline-block';
        transition= '0.3s';
    }else{
        port.style.display = 'none';
        //port_b.style.display = 'none';
        transition= '0.3s';
    }



});

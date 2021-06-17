


// window.onload = ()=>{
//     // canvas準備
//     const board = document.getElementById("maincanvas");  //getElementById()等でも可。オブジェクトが取れれば良い。
//     const ctx = board.getContext("2d");
  
//     // 画像読み込み
//     const chara = new Image();
//     chara.src = "FF14.jpg";  // 画像のURLを指定
//     chara.onload = () => {
//       ctx.drawImage(chara, 100, 100);
//     };
//   };


// document.write('<img id ="FF14" src="FF14.jpg" alt="画像の解説文">')

// document.getElementById("FF14").style.display="block";



// document.addEventListener("DOMContentLoaded", function(){
//     let up = document.getElementById("up");
//     let left = document.getElementById("left");
//     let right = document.getElementById("right");
//     let down = document.getElementById("down");

//     up.addEventListener('click', up_result);
//     left.addEventListener('click', left_result);
//     right.addEventListener('click', right_result);
//     down.addEventListener('click', down_result);

//     function up_result(){
//         console.log('↑')
//         document.getElementById("pic").src = "FF14-2.jpg"
//     }
//     function left_result(){
//         console.log('←')
//         document.getElementById("pic").src = "FF14.jpg"
//     }
//     function right_result(){
//         console.log('→')
//     }
//     function down_result(){
//         console.log('↓')
//     }

// }, false);

let quiz = [[0,0,0,0,0,0,0,0]];
let quiz_index = 0;
let answer = [1,1,1,1,1,1,1,1];
let correct = 0;
let random = 0;
let random_index = 0;

// 暗闇の雲を配置する
function create_quiz(){
    random_index = 0;
    quiz = [[0,0,0,0,0,0,0,0]];

    for(i = 0; i < 8; i++){
      
    random = Math.random();
        
        if(random_index < 3 && random < 0.5){
            quiz[i] = 1;
            random_index++;
        }
        else{
            quiz[i] = 0;
        }
    }
   return random_index;
}

let check_index = 0;
function check_and_create_quiz(){
    for(i = 0; i < 10; i++){

    check_index = create_quiz();
    if(check_index == 3){
        break;
    }

    }
    console.log(quiz);
}
check_and_create_quiz();


// 答えを導く
function cal(){
    for(i=0; i<8; i++){
        if(quiz[i] == 1){
            switch(i){
                case 0: answer[7] = 0; answer[0] = 0; answer[1] = 0; answer[2] = 0; break;
                case 1: answer[3] = 0; answer[0] = 0; answer[1] = 0; answer[2] = 0; break;
                case 2: answer[3] = 0; answer[4] = 0; answer[1] = 0; answer[2] = 0; break;
                case 3: answer[7] = 0; answer[0] = 0; answer[1] = 0; answer[6] = 0; break;
                case 4: answer[2] = 0; answer[3] = 0; answer[4] = 0; answer[5] = 0; break;
                case 5: answer[5] = 0; answer[6] = 0; answer[7] = 0; answer[0] = 0; break;
                case 6: answer[4] = 0; answer[5] = 0; answer[6] = 0; answer[7] = 0; break;
                case 7: answer[3] = 0; answer[4] = 0; answer[5] = 0; answer[6] = 0; break;
            }
        }
    }
}

cal();

let buttonName = document.getElementsByName("button")
let correct_se = new Audio('Quiz-Correct_Answer02-1.mp3');

for(i = 0; i < 8; i++){
    buttonName[i].textContent = i + 1;
    buttonName[i].addEventListener('click',function(e) {
        if(answer[e.target.textContent - 1] == 1){
            document.getElementById("pic").src = "丸.jpg";
            correct_se.play();
            correct++
            quiz_index++
        }
        else{
            document.getElementById("pic").src = "バツ.jpg";
            quiz_index++
        }
    }, false);
}

//解なし
let not_index = 0;

document.getElementById('not').addEventListener('click',function(e){

    for(i = 0; i < 8 ; i++){
        if(answer[i] == 1){
            not_index = 1;
            break;
        }
    }

    if(not_index == 1){
        document.getElementById("pic").src = "バツ.jpg";
        quiz_index++
    }
    else{
        document.getElementById("pic").src = "丸.jpg";
        correct_se.play();
        correct++
        quiz_index++
    }

});

document.getElementById('next').addEventListener('click',function(e){
    if(quiz_index < 10){
        check_and_create_quiz();
        document.getElementById("pic").src = "field.jpg";
        set_field();
        answer = [1,1,1,1,1,1,1,1];
        cal();
        console.log(answer);
        document.getElementById("quiz_index").textContent = quiz_index;
        document.getElementById("correct").textContent = correct;
        document.getElementById( "hidden_correct" ).value = String(correct);  
    }
    else{
        document.getElementById("quiz_index").textContent = quiz_index;
        document.getElementById("correct").textContent = correct;
        document.getElementById("pic").src = "end.png";
    }
      
});


console.log(quiz);
// 暗黒の雲の表示・非表示
function set_field(){
    for(i=0; i < 8; i++){
    if(quiz[i] == 0){
        document.getElementsByName("暗闇の雲")[i].setAttribute('src','none.jpg');
    }
    else if(quiz[i] == 1){
        document.getElementsByName("暗闇の雲")[i].setAttribute('src','right.jpg');
    }
    }
}
set_field();

let start_now = 0;
let stop_now = 0;
let difference = 0
let difference_
//ストップウォッチ
document.getElementById("start").addEventListener('click',function(e){
    start_now = Date.now();
    console.log(start_now);
});

document.getElementById("stop").addEventListener('click',function(e){
    stop_now = Date.now();
    console.log(stop_now);
    difference = stop_now - start_now;
    difference = (difference/1000).toPrecision(2);
    document.getElementById("time_display").textContent= `${difference}秒`;
});



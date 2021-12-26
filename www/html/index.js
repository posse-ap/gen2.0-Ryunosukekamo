"use strict";

let contents = document.getElementById('contents'); //contentsのidを取得

//写真を２次元配列を用い格納
let img1 = '<img src="https://d1khcm40x1j0f.cloudfront.net/quiz/34d20397a2a506fe2c1ee636dc011a07.png" alt="たかなわ">';
let img2 = '<img src="https://d1khcm40x1j0f.cloudfront.net/quiz/512b8146e7661821c45dbb8fefedf731.png" alt="かめいど">';
let img3 = '<img src="https://d1khcm40x1j0f.cloudfront.net/quiz/ad4f8badd896f1a9b527c530ebf8ac7f.png" alt="こうじまち">';
let img4 = '<img src="https://d1khcm40x1j0f.cloudfront.net/quiz/ee645c9f43be1ab3992d121ee9e780fb.png" alt="おなりもん">';
let img5 = '<img src="https://d1khcm40x1j0f.cloudfront.net/quiz/6a235aaa10f0bd3ca57871f76907797b.png" alt="とどろき">;';
let img6 = '<img src="https://d1khcm40x1j0f.cloudfront.net/quiz/0b6789cf496fb75191edf1e3a6e05039.png" alt="しゃくじい">';
let img7 = '<img src="https://d1khcm40x1j0f.cloudfront.net/quiz/23e698eec548ff20a4f7969ca8823c53.png" alt="ぞうしき">';
let img8 = '<img src="https://d1khcm40x1j0f.cloudfront.net/quiz/50a753d151d35f8602d2c3e2790ea6e4.png" alt="おかちまち">';
let img9 = '<img src="https://d1khcm40x1j0f.cloudfront.net/words/8cad76c39c43e2b651041c6d812ea26e.png" alt="ししぼね">';
let img10 = '<img src="https://d1khcm40x1j0f.cloudfront.net/words/34508ddb0789ee73471b9f17977e7c9c.png" alt="こぐれ">';
let images = [img1, img2, img3, img4, img5, img6, img7, img8, img9, img10];

//選択肢を２次元配列を用い格納
let QuestionNames01 = ["たかなわ", "たかわ", "こうわ"];//問題１
let QuestionNames02 = ["かめいど", "かめと", "かめど"];//問題２
let QuestionNames03 = ["こうじまち", "かゆまち", "おかとまち"];//問題３
let QuestionNames04 = ["おなりもん", "おかどもん", "ごせいもん"];//問題４
let QuestionNames05 = ["とろどき", "たたら", "たたりき"];//問題５
let QuestionNames06 = ["しゃくじい", "せきこうい", "いじい"];//問題６
let QuestionNames07 = ["ぞうしき", "ざっしょく", "ざっしき"];//問題７
let QuestionNames08 = ["おかちまち", "みとちょう", "ごしろちょう"];//問題８
let QuestionNames09 = ["ししぼね", "しこね", "ろっこつ"];//問題９
let QuestionNames10 = ["こぐれ", "こしゃく", "こばく"];//問題１０
let QuestionNames = [QuestionNames01, QuestionNames02, QuestionNames03, QuestionNames04, QuestionNames05, QuestionNames06, QuestionNames07, QuestionNames08, QuestionNames09, QuestionNames10];


//ループとシャッフル

let main = '';//mainにhtmlにある最初の問題の箇所を代入する
for (let i = 0; i < QuestionNames.length; i++) {
    
//シャッフル
    
    //シャッフルをするために、Choicesを用いた２次元配列を作成
    let Choice1 = '<li id = "button1' + [i] + '" class="button_style1" onclick="Correct(' + [i] + ',0)">' + [QuestionNames[i][0]] + '</li>';
    let Choice2 = '<li id = "button2' + [i] + '"class="button_style2" onclick="Wrong(' + [i] + ',1)">' + [QuestionNames[i][1]] + '</li>';
    let Choice3 = '<li id = "button3' + [i] + '"class="buttton_style3" onclick="Wrong2(' + [i] + ',2)">' + [QuestionNames[i][2]] + '</li>';
    let Choices = [Choice1, Choice2, Choice3];
    

    //シャッフル関数、Fisher-Yates Shuffleを使用
    function shuffle(Choices) {
        for (let i = Choices.length - 1; i > 0; i--) {

            const j = Math.floor(Math.random() * (i + 1));
            [Choices[j], Choices[i]] = [Choices[i], Choices[j]];
        }
        return Choices;

    };
    
    //シャッフル関数の呼びだし(Choiceの具体的な内容は、２次元配列の中にあるもの)
    shuffle(Choices); 

    main += '<div class="parent">'
        + '<h2 class="name">' + [i + 1] + '.この地名はなんて読む?</h2>'//変数iを使い、問題番号の作成
        + images[i]//２次元配列から写真を呼び出し
        + '<ul id = "worksFigure">'
        + Choices[0] //２次元配列からli要素(button1等を含む)を呼び出し
        + Choices[1] //２次元配列からli要素(button2等を含む)を呼び出し
        + Choices[2] //２次元配列からli要素(button3等を含む)を呼び出し
        + '<div id= "result1' + [i] + '" class="result1">'
        + '<span class="correct">正解！</span>'
        + '<p>'
        + '<span class="display">正解は 「' + [QuestionNames[i][0]] + '」です！</span>'//２次元配列を呼び出し、正解した時の表示を表示する。
        + '</p>'
        + '</div>'
        + '<div id="result2' + [i] + '" class="result2">'
        + '<span class="wrong">不正解！</span>'
        + '<p>'
        + '<span class="display2">正解は「 ' + [QuestionNames[i][0]] + '」です！ </span>'//２次元配列を呼び出し、不正解の時の表示を表示する。
        + '</p>'
        + '</div>'
        + '</ul>'
        + '</div>'

    contents.innerHTML = main

};

//正解の処理
function Correct(a, b) {
    let button1 = document.getElementById("button1" + a + "");
    let button2 = document.getElementById("button2" + a + "");
    let button3 = document.getElementById("button3" + a + "");
    let result1 = document.getElementById("result1" + a + "");


    if (b === 0) {
        button1.style.backgroundColor = "#287DFF";//「たかなわ」をクリックすると、「たかなわ」の背景色が青に変化する
        result1.style.display = "block"; //「たかなわ」をクリックすると、result1が表示される
        button1.style.color = "#FFFFFF";//「たかなわ」をクリックすると、「たかなわ」の文字の色が白に変化する
        button2.style.pointerEvents = "none";//「たかなわ」をクリックすると、「こうわ」が押せなくなる
        button3.style.pointerEvents = "none";//「たかなわ」をクリックすると、「たかわ」が押せなくなる

    }

};

//不正解の処理
function Wrong(a, b) {
    let button1 = document.getElementById("button1" + a + "");
    let button2 = document.getElementById("button2" + a + "");
    let button3 = document.getElementById("button3" + a + "");
    let result2 = document.getElementById("result2" + a + "");

    if (b === 1) {
        button2.style.backgroundColor = "#FF5128";//「こうわ」をクリックすると、「こうわ」の背景色が赤に変化する
        result2.style.display = "block";//「こうわ」をクリックすると、result2が表示される
        button1.style.color = "#FFFFFF";//「こうわ」をクリックすると、「たかなわ」の文字の色が白に変化する
        button2.style.color = "#FFFFFF";//「こうわ」をクリックすると、「こうわ」の文字の色が白に変化する
        button1.style.backgroundColor = "#287DFF";//「こうわ」をクリックすると、「たかなわ」の背景色が青に変化する
        button1.style.pointerEvents = "none";//「こうわ」をクリックすると、「たかなわ」が押せなくなる
        button3.style.pointerEvents = "none";//「こうわ」をクリックすると、「たかわ」が押せなくなる
    }


};

//不正解の処理２
function Wrong2(a, b) {
    let button1 = document.getElementById("button1" + a + "");
    let button2 = document.getElementById("button2" + a + "");
    let button3 = document.getElementById("button3" + a + "");
    let result2 = document.getElementById("result2" + a + "");


    if (b === 2) {
        button3.style.backgroundColor = "#FF5128";//「たかわ」をクリックすると、「たかわ」の背景色が赤に変化する
        result2.style.display = "block";//「たかわ」をクリックすると、result2が表示される
        button1.style.color = "#FFFFFF";//「たかわ」をクリックすると、「たかなわ」の文字の色が白に変化する
        button3.style.color = "#FFFFFF";//「たかわ」をクリックすると、「たかわ」の文字の色が白に変化する
        button1.style.backgroundColor = "#287DFF";//「たかわ」をクリックすると、「たかなわ」の背景色が青に変化する
        button1.style.pointerEvents = "none";//「たかわ」をクリックすると、「たかなわ」が押せなくなる
        button2.style.pointerEvents = "none";//「たかわ」をクリックすると、「こうわ」が押せなくなる

    }

};



//解説と質問

// "use strict";

// //ループ

// let contents = document.getElementById('contents'); //contentsのidを取得

// //jsでは、img srcは''を使っているため、文字列でしかない。しかし、結局はHTMLに戻すから、それでOK.
// //ちなみに、なぜ、''を使って文字列にしているのかというと、img srcが使えないから。前述したが、この無理やり文字列に変えるという手法ができるのも、最終的にはHTMLに戻すから。＊HTMLではimg srcが普通にできる。

// let img1 = '<img src="https://d1khcm40x1j0f.cloudfront.net/quiz/34d20397a2a506fe2c1ee636dc011a07.png" alt="たかなわ">';
// let img2 = '<img src="https://d1khcm40x1j0f.cloudfront.net/quiz/512b8146e7661821c45dbb8fefedf731.png" alt="かめいど">';
// let img3 = '<img src="https://d1khcm40x1j0f.cloudfront.net/quiz/ad4f8badd896f1a9b527c530ebf8ac7f.png" alt="こうじまち">';
// let img4 = '<img src="https://d1khcm40x1j0f.cloudfront.net/quiz/ee645c9f43be1ab3992d121ee9e780fb.png" alt="おなりもん">';
// let img5 = '<img src="https://d1khcm40x1j0f.cloudfront.net/quiz/6a235aaa10f0bd3ca57871f76907797b.png" alt="とどろき">;';
// let img6 = '<img src="https://d1khcm40x1j0f.cloudfront.net/quiz/0b6789cf496fb75191edf1e3a6e05039.png" alt="しゃくじい">';
// let img7 = '<img src="https://d1khcm40x1j0f.cloudfront.net/quiz/23e698eec548ff20a4f7969ca8823c53.png" alt="ぞうしき">';
// let img8 = '<img src="https://d1khcm40x1j0f.cloudfront.net/quiz/50a753d151d35f8602d2c3e2790ea6e4.png" alt="おかちまち">';
// let img9 = '<img src="https://d1khcm40x1j0f.cloudfront.net/words/8cad76c39c43e2b651041c6d812ea26e.png" alt="ししぼね">';
// let img10 = '<img src="https://d1khcm40x1j0f.cloudfront.net/words/34508ddb0789ee73471b9f17977e7c9c.png" alt="こぐれ">';
// let images = [img1, img2, img3, img4, img5, img6, img7, img8, img9, img10];


// // let QuestionNames1 = ["たかなわ", "かめいど", "こうじまち", "おなりもん", "とどろき", "しゃくじい", "ぞうしき", "おかちまち", "ししぼね", "こぐれ"];//正解

// // let QuestionNames2 = ["たかわ", "かめと", "かゆまち", "おかどもん", "たたら", "せきこうい", "ざっしょく", "みとちょう", "しこね", "こしゃく"];//不正解

// // let QuestionNames3 = ["こうわ", "かめど", "おかとまち", "ごせいもん", "たたりき", "いじい", "ざっしき", "ごしろちょう", "ろっこつ", "こばく"];//不正解

// //２次元配列で選択肢をまとめた。
// // let QuestionNames = [
// //     ["たかなわ","たかわ","こうわ"],
// //     ["かめいど","かめと","かめど"],
// //     ["こうじまち","かゆまち","おかとまち"],
// //     ["おなりもん","おかどもん","ごせいもん"], 
// //     ["とろどき","たたら","たたりき"],
// //     ["しゃくじい","せきこうい","いじい"],
// //     ["ぞうしき","ざっしょく","ざっしき"],
// //     ["おかちまち","みとちょう","ごしろちょう"],
// //     ["ししぼね","しこね","ろっこつ"],
// //     ["こぐれ","こしゃく","こばく"],

// // ];

// //2次元配列もう一つのやり方。こっちで本番はやった。
// let QuestionNames01 = ["たかなわ", "たかわ", "こうわ"];
// let QuestionNames02 = ["かめいど", "かめと", "かめど"];
// let QuestionNames03 = ["こうじまち", "かゆまち", "おかとまち"];
// let QuestionNames04 = ["おなりもん", "おかどもん", "ごせいもん"];
// let QuestionNames05 = ["とろどき", "たたら", "たたりき"];
// let QuestionNames06 = ["しゃくじい", "せきこうい", "いじい"];
// let QuestionNames07 = ["ぞうしき", "ざっしょく", "ざっしき"];
// let QuestionNames08 = ["おかちまち", "みとちょう", "ごしろちょう"];
// let QuestionNames09 = ["ししぼね", "しこね", "ろっこつ"];
// let QuestionNames10 = ["こぐれ", "こしゃく", "こばく"];
// let QuestionNames = [QuestionNames01, QuestionNames02, QuestionNames03, QuestionNames04, QuestionNames05, QuestionNames06, QuestionNames07, QuestionNames08, QuestionNames09, QuestionNames10];


// // function shuffle(QuestionNames01) {
// //     for (let i = QuestionNames01.length - 1; i > 0; i--) {

// //         const j = Math.floor(Math.random() * (i + 1));
// //         [QuestionNames01[j], QuestionNames01[i]] = [QuestionNames01[i], QuestionNames01[j]];
// //     }
// //     return QuestionNames01;

// // };

// // shuffle(QuestionNames01);


// let main = '';//mainに１０問全て共通の部分だけを代入する
// for (let i = 0; i < QuestionNames.length; i++) {
//         main += '<div class="parent">'
//         + '<h2 class="name">' + [i + 1] + '.この地名はなんて読む?</h2>'//<h2></h2>は分けてはならない。『[i+1] +'.この地名はなんて読む?』はh2タグの中になければならないから。
//         + images[i]  // 1. ちなみに、image[0]とすると、高輪という写真だけ（一番目）が表示される。今回は、この技術を応用した。
//         + '<ul>'
//         //メモ
//         //2.  JSでは、代入先は文字列でないため、そのまま（''）などをつけなくて書ける。
//         //3.  しかし、代入先が今回のように文字列の中に書かなければならない際は、文字列と区別するために  +[代入先]+  とする。
//         // 1.2.3の知識を使うと下記のようになり、問題ごとに、違う選択肢を表示させることができる。
//         + '<li id = "button1' + [i] + '" class="button_style1" onclick="Correct(' + [i] + ',0)">' + [QuestionNames[i][0]] + '</li>'//id=buttonというのは、js上でidを取得してクリックできるシステムのこと。一方、このonclick = Correct()というのは、HTMLでかくことができる。idを使わずにjsでクリックできる処理をかける。
//         + '<li id = "button2' + [i] + '"class="button_style2" onclick="Wrong(' + [i] + ',1)">' + [QuestionNames[i][1]] + '</li>'//
//         + '<li id = "button3' + [i] + '"class="buttton_style3" onclick="Wrong2(' + [i] + ',2)">' + [QuestionNames[i][2]] + '</li>'//
//         + '<div id= "result1' + [i] + '" class="result1">'
//         + '<span class="correct">正解！</span>'
//         + '<p>'
//         + '<span class="display">正解は '+ [QuestionNames[i][0]] +'です！</span>'
//         + '</p>'
//         + '</div>'
//         + '<div id="result2' + [i] + '" class="result2">'
//         + '<span class="wrong">不正解！</span>'
//         + '<p>'
//         + '<span class="display2">正解は '+ [QuestionNames[i][0]] +'です！ </span>'
//         + '</p>'
//         + '</div>'
//         + '</ul>'
//         + '</div>'

   


//     contents.innerHTML = main


// };



// //function Choices（関数名は何でもいい） (a,b){};
// //今回は、function Correctでないと、機能しない。その理由は、下にあるコメントアウトを読むと分かる。function Correct {document.getElementById("button1").style.backgroundColor....}




// //下にも書いてあるが、onclick="Correct(' + [i] + ',1) が  「呼び出し」である。
// //(1) onclick="Correct(' + [i] + ',0)" の i が function Correct (a ,b)のaに渡され、a が i になった。
// // もしbが0であったら、正解の処理をする


// // ここで質問。
// // a が iになって、勝手にidが変化するようになったのにも関わらず、 li id = "button1' + [i] +   をする必要があるのか。ちなみに、これをしないと機能しない。


// //正解の処理のループ 「" button1 「"+ a +"」 "」
// function Correct(a, b) {
//     let button1 = document.getElementById("button1" + a + "");
//     let button2 = document.getElementById("button2" + a + "");
//     let button3 = document.getElementById("button3" + a + "");
//     let result1 = document.getElementById("result1" + a + "");


//     if (b === 0) {
//         button1.style.backgroundColor = "#287DFF";//「たかなわ」をクリックすると、「たかなわ」の背景色が青に変化する
//         result1.style.display = "block"; //「たかなわ」をクリックすると、result1が表示される
//         button1.style.color = "#FFFFFF";//「たかなわ」をクリックすると、「たかなわ」の文字の色が白に変化する
//         button2.style.pointerEvents = "none";//「たかなわ」をクリックすると、「こうわ」が押せなくなる
//         button3.style.pointerEvents = "none";//「たかなわ」をクリックすると、「たかわ」が押せなくなる

//     }

// };

// //不正解の処理のループ
// function Wrong(a, b) {
//     let button1 = document.getElementById("button1" + a + "");
//     let button2 = document.getElementById("button2" + a + "");
//     let button3 = document.getElementById("button3" + a + "");
//     let result2 = document.getElementById("result2" + a + "");

//     if (b === 1) {
//         button2.style.backgroundColor = "#FF5128";//「こうわ」をクリックすると、「こうわ」の背景色が赤に変化する
//         result2.style.display = "block";//「こうわ」をクリックすると、result2が表示される
//         button1.style.color = "#FFFFFF";//「こうわ」をクリックすると、「たかなわ」の文字の色が白に変化する
//         button2.style.color = "#FFFFFF";//「こうわ」をクリックすると、「こうわ」の文字の色が白に変化する
//         button1.style.backgroundColor = "#287DFF";//「こうわ」をクリックすると、「たかなわ」の背景色が青に変化する
//         button1.style.pointerEvents = "none";//「こうわ」をクリックすると、「たかなわ」が押せなくなる
//         button3.style.pointerEvents = "none";//「こうわ」をクリックすると、「たかわ」が押せなくなる
//     }

   
// };

// //不正解の処理のループ２
// function Wrong2(a, b) {
//     let button1 = document.getElementById("button1" + a + "");
//     let button2 = document.getElementById("button2" + a + "");
//     let button3 = document.getElementById("button3" + a + "");
//     let result2 = document.getElementById("result2" + a + "");

    
//     if (b === 2) {
//         button3.style.backgroundColor = "#FF5128";//「たかわ」をクリックすると、「たかわ」の背景色が赤に変化する
//         result2.style.display = "block";//「たかわ」をクリックすると、result2が表示される
//         button1.style.color = "#FFFFFF";//「たかわ」をクリックすると、「たかなわ」の文字の色が白に変化する
//         button3.style.color = "#FFFFFF";//「たかわ」をクリックすると、「たかわ」の文字の色が白に変化する
//         button1.style.backgroundColor = "#287DFF";//「たかわ」をクリックすると、「たかなわ」の背景色が青に変化する
//         button1.style.pointerEvents = "none";//「たかわ」をクリックすると、「たかなわ」が押せなくなる
//         button2.style.pointerEvents = "none";//「たかわ」をクリックすると、「こうわ」が押せなくなる

//     }

// };





//選択肢のシャッフル




    // 下にあるように function Correctでもボタンの処理を実装できる。ふつうは、関数名は何でもいいはずである。以上のことから、[ onclick="Correct()" ]が、特殊な現象を起こしている原因であると推測できる。
    //また、[ onclick="Correct()" ] が 「呼び出し」であることに間違いない。


    // let button1 = document.getElementById("button1");
    // let button2 = document.getElementById("button2");
    // let button3 = document.getElementById("button3");
    // let result1 = document.getElementById("result1");
    // let result2 = document.getElementById("result2");

    // function Correct() {
    //  document.getElementById("button1").style.backgroundColor = "#287DFF";//「たかなわ」をクリックすると、「たかなわ」の背景色が青に変化する
    //  result1.style.display ="block"; //「たかなわ」をクリックすると、result1が表示される     button1.style.color = "#FFFFFF";//「たかなわ」をクリックすると、「たかなわ」の文字の色が白に変化する
    //  button2.style.pointerEvents= "none";//「たかなわ」をクリックすると、「こうわ」が押せなくなる
    //  button3.style.pointerEvents= "none";//「たかなわ」をクリックすると、「たかわ」が押せなくなる
    //             }   

    // function Wrong() {
    //         document.getElementById("button2").style.backgroundColor = "#FF5128";//「こうわ」をクリックすると、「こうわ」の背景色が赤に変化する
    //         result2.style.display ="block";//「こうわ」をクリックすると、result2が表示される
    //         button1.style.color = "#FFFFFF";//「こうわ」をクリックすると、「たかなわ」の文字の色が白に変化する
    //         button2.style.color = "#FFFFFF";//「こうわ」をクリックすると、「こうわ」の文字の色が白に変化する
    //         button1.style.backgroundColor = "#287DFF";//「こうわ」をクリックすると、「たかなわ」の背景色が青に変化する
    //         button1.style.pointerEvents= "none";//「こうわ」をクリックすると、「たかなわ」が押せなくなる
    //         button3.style.pointerEvents= "none";//「こうわ」をクリックすると、「たかわ」が押せなくなる
    //            }







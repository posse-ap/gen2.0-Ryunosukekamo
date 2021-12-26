"use strict";

let contents = document.getElementById('contents'); //contentsのidを取得

//Arrayオブジェクトを使用
let QuestionNames = new Array();

QuestionNames.push(["たかなわ", "こうわ", "たかわ"]);//1
QuestionNames.push(["かめいど", "かめと", "かめど"]);//2
QuestionNames.push(["こうじまち", "かゆまち", "おかとまち"]);//3
QuestionNames.push(["おなりもん", "おかどもん", "ごせいもん"]);//4
QuestionNames.push(["とろどき", "たたら", "たたりき"]);//5
QuestionNames.push(["しゃくじい", "せきこうい", "いじい"]);//6
QuestionNames.push(["ぞうしき", "ざっしょく", "ざっしき"]);//7
QuestionNames.push(["おかちまち", "みとちょう", "ごしろちょう"]);//8
QuestionNames.push(["ししぼね", "しこね", "ろっこつ"]);//9
QuestionNames.push(["こぐれ", "こしゃく", "こばく"]);//10


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

            var j = Math.floor(Math.random() * (i + 1));
            var tmp = Choices[i];
            Choices[i] = Choices[j];
            Choices[j] = tmp;
        }
        return Choices;

    };

    //シャッフル関数の呼びだし(Choiceの具体的な内容は、２次元配列の中にあるもの)
    shuffle(Choices);

    main += '<div class="parent">'
        + '<h2 class="name">' + [i + 1] + '.この地名はなんて読む?</h2>'//変数iを使い、問題番号の作成
        + '<img src="./Images for quizy/' + [i + 1] + '.png" alt="images">'
        + '<ul id = "worksFigure">'
        + Choices[0] //Arrayオブジェクトの配列からliを呼び出し
        + Choices[1] //Arrayオブジェクトの配列からliを呼び出し
        + Choices[2] //Arrayオブジェクトの配列からliを呼び出し
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
function Correct(i, numbers) {
    let button1 = document.getElementById("button1" + i + "");
    let button2 = document.getElementById("button2" + i + "");
    let button3 = document.getElementById("button3" + i + "");
    let result1 = document.getElementById("result1" + i + "");


    if (numbers === 0) {
        button1.style.backgroundColor = "#287DFF";//「たかなわ」をクリックすると、「たかなわ」の背景色が青に変化する
        result1.style.display = "block"; //「たかなわ」をクリックすると、result1が表示される
        button1.style.color = "#FFFFFF";//「たかなわ」をクリックすると、「たかなわ」の文字の色が白に変化する
        button2.style.pointerEvents = "none";//「たかなわ」をクリックすると、「こうわ」が押せなくなる
        button3.style.pointerEvents = "none";//「たかなわ」をクリックすると、「たかわ」が押せなくなる

    }

};

//不正解の処理
function Wrong(i, numbers) {
    let button1 = document.getElementById("button1" + i + "");
    let button2 = document.getElementById("button2" + i + "");
    let button3 = document.getElementById("button3" + i + "");
    let result2 = document.getElementById("result2" + i + "");

    if (numbers === 1) {
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
function Wrong2(i, numbers) {
    let button1 = document.getElementById("button1" + i + "");
    let button2 = document.getElementById("button2" + i + "");
    let button3 = document.getElementById("button3" + i + "");
    let result2 = document.getElementById("result2" + i + "");


    if (numbers === 2) {
        button3.style.backgroundColor = "#FF5128";//「たかわ」をクリックすると、「たかわ」の背景色が赤に変化する
        result2.style.display = "block";//「たかわ」をクリックすると、result2が表示される
        button1.style.color = "#FFFFFF";//「たかわ」をクリックすると、「たかなわ」の文字の色が白に変化する
        button3.style.color = "#FFFFFF";//「たかわ」をクリックすると、「たかわ」の文字の色が白に変化する
        button1.style.backgroundColor = "#287DFF";//「たかわ」をクリックすると、「たかなわ」の背景色が青に変化する
        button1.style.pointerEvents = "none";//「たかわ」をクリックすると、「たかなわ」が押せなくなる
        button2.style.pointerEvents = "none";//「たかわ」をクリックすると、「こうわ」が押せなくなる

    }

};
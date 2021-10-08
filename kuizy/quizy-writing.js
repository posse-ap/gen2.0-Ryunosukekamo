"use strict";


question_list = new Array();

question_list.push(["たかなわ", "こうわ", "たかわ"]);//1
question_list.push(["たかなわ", "こうわ", "たかわ"]);//2
question_list.push(["たかなわ", "こうわ", "たかわ"]);//3
question_list.push(["たかなわ", "こうわ", "たかわ"]);//4
question_list.push(["たかなわ", "こうわ", "たかわ"]);//5
question_list.push(["たかなわ", "こうわ", "たかわ"]);//6
question_list.push(["たかなわ", "こうわ", "たかわ"]);//7
question_list.push(["たかなわ", "こうわ", "たかわ"]);//8
question_list.push(["たかなわ", "こうわ", "たかわ"]);//9
question_list.push(["たかなわ", "こうわ", "たかわ"]);//10

question_list.forEach(function (value, index) {

    answer = value[0];

    for (i = question.length - 1; i >= 0; i--) {

        let r = Math.floor(Math.random() * (i + 1));

        [question[i], question[r]] = [question[r], question[i]];

    }

    substituting_question(index + 1, value, answer);

});

//どう、１０回ルールさせてるの？画像とか。forもforeachも使ってない。
function substituting_question(number, value, answer) {

    let contents = '<div>'
        + '<h1>' + [index + 1] + '.この地名はなんて読む?</h1>'
        + '<img src=/images for quizy/' + [number] + '.png>'
        + '<ul>';
        
        //やれば分かるが、valueは、question.listにある全ての要素。１０個の問題全ての選択肢。この全ての選択肢の中から選ぶ。そのために、引数を使って、question.listの要素の要素をとる。
        //each_questionだけで、全ての選択肢が「出力される」＝インデックスを使って呼び出さなくても、
        value.forEach(function(each_question,index){

            contents += '<li id = "choice" class = "choice">'+[each_question]+'</li>'

        })


        + '</ul>'
        + '<li id = "result">'
        + '<span>""<span><br>'
        + '<span>"正解はです！"</span>'

        + '</li>'


        + '</div>';

    document.getElementById('main').insertAdjacentHTML('beforeend', contents);

}

let choice = document.getElementById('choice');

choice.onclick = function myfunc(){

    document.getElementById('result').style.display = "block";
    
    //classはidと違ってなんども使用できるから、getelement(s)ｓついてるのかも。
    //どうやってelseで同じli（１個しかないliタグ）に違う色をつける。
    if(answer){
    document.getElementsByClassName('choice').style.backgroundColor = "#blue";
    document.getElementsByClassName('choice').style.color = "#white";

} else{
    document.getElementsByClassName('choice').style.backgroundColor = "#red";
    document.getElementsByClassName('choice').style.color = "#white";
}
   


}


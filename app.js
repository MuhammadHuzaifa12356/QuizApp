var a= document.getElementById("quiz");
var b= document.getElementById("st");

function display(){
    a.className +=" dis";
    b.className +=" ss";
}
// var student1={
//     name:'Huzaifa',
//     FatherName: 'Azmatullah',
//     RollNo:1 ,
//     class: 'BSCS 4A',
//     age: 20
// }
// var a={
//     id: 1,
//     name: 'abc',
//     hobbies:["cricket","football","Reading"],
//     address:{
//         street: "ABC",
//         City: "KARACHI",
//         Country: "PK"
//     },
//     calculateAge: function(){
//         var dob=new Date();
//         var std= new Date("01-01-1999");
//         var diff=dob.getTime()-std.getTime();
//         return diff/(1000*60*60*24*365);
//     },
// };
// console.log(a.calculateAge());

var question1={
    ques:"who was the first President of the Constitution Assembly of Pakistan?",
    corect:"QUAID-E-AZAM",
    opt:["QUADI-E-AZAM" ,"ALLAMA_IQBAL","LIAQUAT_ALI_KHAN","SARDAR_ABDUR_RAB"]
}
var question2={
    ques:"What official name was given to Pakistan in 1956 constitution?",
    corect:"Islamic Republic of Pakistan",
    opt:["Republic of Pakistan" ,"Islamic Republic of Pakistan","United States of Pakistan","Islamic Pakistan"]
}
var question3={
    ques:"who was the first President of the Constitution Assembly of Pakistan?",
    corect:"9",
    opt:["9" ,"7","5","4"]
}
var question4={
    ques:"Who was the Prime Minister of Pakistan during enforcement of first constitution?",
    corect:"Choudhry Mohammad Ali",
    opt:["Choudhry Mohammad Ali" ,"Ibrahim Ismail Chundrigar","Khwaja Nazim Uddin","Mohammad Ali Bogra"]
}
var question5={
    ques:"What is the other name of Mohammad Ali Bogra Formula?",
    corect:"QUAID-E-AZAM",
    opt:["Pakistan Report" ,"New Law of Pakistan","Third Report","Third Report"]
}
var question6={
    ques:"Hazrat Usman khilafat period was _______?",
    corect:"12 Years",
    opt:["2 Years" ,"11 Years","12 Years","10 Years"]
}
var question7={
    ques:"Most of Hafiz Quran were martyred in which battle?",
    corect:"Yamama",
    opt:["Uhud" ,"Yamama","	Khyber","Badr"]
}
var question8={
    ques:"Who was the eldest daughter of Hazrat Muhammad (SAW)?",
    corect:"Hazrat bibi Zainab (R.A)",
    opt:["	Hazrat bibi Zainab (R.A)" ,"Hazrat bibi Ruqayyah (R.A)","Hazrat bibi Umm Kulthum (R.A)","Hazrat bibi Fatima (R.A)"]
}
var question9={
    ques:"Serial no of Surah Yasin w.r.t Surahs in Quran is __________?",
    corect:"36th",
    opt:["32th" ,"36th","38th","34th"]
}
var question10={
    ques:"Namaz-e-Khasoof is offered at the time of __________ ?",
    corect:"Lunar eclipse",
    opt:["Solar eclipse" ,"heavy rain"," earthquake","Lunar eclipse"]
}
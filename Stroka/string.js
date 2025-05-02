



const myName = "Виталий";
const programmingLanguage = "JavaScript";
const courseCreatorName = "Владилен Минин"; 
const reasonText = "JavaScript — поможет мне делать то что я люблю и зарабатывать на этом";
const numberOfMonth = 1;

let myInfoText = `«Всем привет! Меня зовут ${myName}.
 Сейчас я изучаю язык программирования ${programmingLanguage} 
 на курсе ${programmingLanguage} у ${courseCreatorName}.
 Я хочу стать веб-разработчиком,\n потому что ${reasonText}.
 До этого я изучал ${programmingLanguage} ${numberOfMonth} месяц. 
 Я уверен что пройду данный курс до конца!»`; 

 console.log(myInfoText);


 let userName = prompt('Как вас зовут?');
 userName = userName.trim().toLowerCase();
 
 let userAge = prompt('Сколько вам лет?');
 userAge = Number(userAge.trim().toLowerCase());

 alert(`Вас зовут ${userName}`);

 alert(userAge);

// const newUserName = name => {
//     fetch('https://randomuser.me/api/?results=5')
//     .then(res  => res.json())
//     .then(data => newData(data))
// }
// newUserName();


// const newData = data =>{
//     const buddies = data.results;
//     const buddiesDiv = document.getElementById('buddies')
//    for(const buddy of buddies){
//        const div = document.createElement('p')
//        div.innerText = `Name:${buddy.name.title} ${buddy.name.first} ${buddy.name.last}`
//        buddiesDiv.appendChild(div)
//    }
//     // console.log(data.results)

// }

// const data={ 
//     result: [ {
//         userName: {title:'Mr.',name:"sakib khan"} 
//     } ] 
// }

// console.log(data.result[0].userName.name)
// const p=[1,2,3];
// const q=p.map(  n=> Math.pow(n, 3));
// // console.log(q)
// const path = "images/cat.jpg";

// const div= document.createElement('div');

// div.innerHTML = `<img src="${path}" alt = "">`;

const bondCode=` I am Fake James bond . My new code is: 00${7+1+2}`
console.log(bondCode)

`<div onclick="loadDetail(' ${name} ')"> Biriyani </div> `
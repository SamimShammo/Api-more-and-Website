const getCountries = () => {
    fetch('https://restcountries.eu/rest/v2/all')
    .then(res => res.json())
    .then(data => myNewData(data))
}
getCountries();
const myNewData= (data) =>{
    const countries = data;
    const containerCountries = document.getElementById('countries')
    countries.forEach(countri => {
        const div = document.createElement('div')
        div.innerHTML =  `<h3> ${countri.name}</h3> <h4> ${countri.capital}</h4> <p>${countri.timezones}</p> <button onclick="clickme('${countri.name}')">New</button> <div id="getData">
        <h4>....</h4>
    </div>`;
        div.classList.add('country');
        containerCountries.appendChild(div)

// {/* <img src="${countri.flag}" alt="" class="img">  */}
        

// console.log(countri) 



        // const h1 = document.createElement('h4')
        // h1.innerText = `${countri.name}`
        // div.appendChild(h1)
        // const h2 = document.createElement('h5')
        // h2.innerText = `${countri.capital}`
        // div.appendChild(h2)
        // const h4 = document.createElement('h5')
        // h4.innerText = `${countri.timezones}`
        // div.appendChild(h4)
       
        
    });
}
const clickme = (name)=>{
    const url = `https://restcountries.eu/rest/v2/name/${name}`;
    fetch(url)
    .then(res => res.json())
    .then(data => newData(data[0]))
 }
 
 const newData = (countri)=>{

     const countrydiv = document.getElementById('getData')
     
        countrydiv.innerHTML= `<h4>${countri.name}</h4><p>${countri.timezones}</p> <img src="${countri.flag}" alt="" class="img" > `
        countrydiv.style.textAlign='center'
        
     
 }
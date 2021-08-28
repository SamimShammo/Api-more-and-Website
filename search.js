const seacrhFodd = () =>{
   const food = document.getElementById('foodInput');
   const foodInput = food.value;
   console.log(foodInput)
   const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${foodInput}`;
//    console.log(url)
   fetch(url)
  .then(res => res.json())
  .then(data => myNewData(data))

const myNewData = (data) =>{

   
   
}

   food.value ='';

}

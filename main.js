let table=document.getElementById('tab');
let axios= window.axios
let arr = [10,2,3,6,5,3,2,8,7,9,5,6,4,1]

// task 2

// const response =  await axios.get('https://dummyjson.com/recipes');

// async function delayfetch (response){
// for (const elem of response.data.recipes.slice(0,10)) {
    
//     tab.innerHTML+=`<tr> 
//     <td>${elem.id}</td>
//     <td>${elem.name}</td>
//     <td><img src="${elem.image}" width="150" height=""150></td>
//     </tr>`
//     await new Promise(affich => setTimeout(affich,1000));
// }
// }

// delayfetch(response)

// task 1

// console.log("first")
// async function delayed(arr){
// for (const elem of arr) {
//     console.log(elem);
//     await  new Promise(affich => setTimeout(affich,1000)) 
    
// }
// }

// console.log("hello here")


// task 3 

async function premiereFunction() {
    await new Promise(disp => setTimeout(disp, 1000));
    console.log('First');
  }
  
  async function deuxFunction() {
    await new Promise(disp => setTimeout(disp, 1000));
    console.log('Second');
  }
  
  async function troisFunction() {
    await new Promise(disp => setTimeout(disp, 1000));
    console.log('Third');
  }
  
  async function CallallFunctions() {
    await premiereFunction();
    await deuxFunction();
    await troisFunction();
  }

  CallallFunctions();
  


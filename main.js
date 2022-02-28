const todos = axios.get('https://jsonplaceholder.typicode.com/todos/200')
  .then((resp) => resp.data)
  .then((data) => data)
  .catch((err) => {
    console.log('YOU DIDN\'T SUCCEED!');
  })

const myList = document.querySelector('#myList');
myList.textContent = todos;

console.log({todos});





// We’re messing around with axios to call data.
//We’re trying to save data to a variable somehow that will then output it to the dom.
//We only want the LAST 10 items in the list.
//Stretch goals during this time: Throw items into a list with multiple fields output, make two API calls, give only the todos that are done.



















//const todos = axios.get('https://jsonplaceholder.typeicode.com/todos');
// .then((resp) => {
        //console.log('resp.data', resp.data);
//        return resp.data
//    })
//    .catch((err) => {
 //       console.log('error');
//  })
//  .then((data) => {
//        console.log({'data:', data});
 //   })
 //   console.log({todos})



    //.then((resp)) => resp.data) is same as .then((resp) => {
    //console.log('resp.data', resp.data);
    //return resp.data })
const data = [{
 name: "Jay",
 profession: "Software Engineer",
},
{
 name: "John",
 profession: "Data Scientist",
},
{
 name: "Jane",
 profession: "Product Manager",
},
]




function getData() {
 setTimeout(() => {
   let output = "";
   data.forEach((item) => {
     output += `<li>${item.name} - ${item.profession}</li>`;
   });
   document.body.innerHTML = output;




 }, 1000);


}


function createData(newData) {
 return new Promise((resolve, reject) => {
   console.log("newData ",newData );


   if (newData.name === "" || newData.profession === "") {
    
     reject("Name and profession cannot be empty");


   } else {
     data.push(newData);
     console.log("Data added");
     resolve("Data added successfully");
   }


 });




}




// Example usage of Promises
createData({ name: "Jay", profession: "Designer" }).then(() => {
 getData();
}).catch((err) => {
 console.error(err);
}
);




//Example usage of async/await
// async function createNew() {
//   try {
//     await createData({ name: "Alice", profession: "Engineer" });
//     getData();
//   } catch (err) {
//     console.error(err);
//   }
// }


//createNew();


//Example usage of callback()


// function createData(newData, callback) {
//   setTimeout(() => {


//       data.push(newData);
//       console.log("Data added");
//       callback();
//     }
//   }, 1000);
// }


// createData({ name: "Bob", profession: "Designer" }, getData);


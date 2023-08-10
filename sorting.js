let arrayy = [ ]
    function addToArray(){
    let inputNumber = document.querySelector("#num").value;
    //  let out = document.querySelector("#para");
      let output = inputNumber;
      arrayy.push(output)
      document.querySelector("#para").innerHTML = arrayy
      document.querySelector("#num").value = "";          
    }
function setOrder(){
  let selectInput = document.querySelector("#order")
   let selectedOrder = order.options[order.selectedIndex].innerHTML
//   console.log(selectedOrder)

if ( selectedOrder === "Ascending" )
        arrayy.sort((a, b) => a - b);      
       else{
        // arrayy.sort((a, b) => b - a);
        arrayy.sort((a, b) => a - b).reverse();      
         

        }
        updateSortedOutput()

}

function updateSortedOutput() {
            var sortedOutputPara = document.getElementById("para");
            sortedOutputPara.textContent = "Sorted order: " + arrayy.join(", ");
        }
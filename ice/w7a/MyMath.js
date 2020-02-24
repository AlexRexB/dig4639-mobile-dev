function AddList (arr) {
  let result = undefined;
  if(Array.isArray(arr) && arr.lenth > 0){
    result = 0;
    for(var i = 0; i < arr.length; i++){
      if(typeof arr[i] != "number"){
        result=undefined;
        break;
      }
      result = result + arr[i];
    }
  }
  return result;
}


function DivideBy (a, b) {


}

function ContainsString () {

}

function ReSortedNumbers () {

}

function Adder () {

}

export { AddList };
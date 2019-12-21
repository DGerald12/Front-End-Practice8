let newRequest = new XMLHttpRequest();
newRequest.onreadystatechange = function() {
  if (this.readyState == 4 && this.status == 200) {
    let myObj = JSON.parse(this.responseText);
    document.getElementById("figure").innerHTML = myObj.name;
  }
};
newRequest.open("GET", "einstein.json", true);
newRequest.send();

function BioFig(){
  const xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function(){
    if(this.readyState == 4 && this.status == 200) {
      document.getElementById("figure").innerHTML = this.myObj;
    }
  };
  xhttp.open("GET", "einstein.json", true);
  xhttp.send();
}

function FamousFunction(xhttp) {
  document.getElementById("figure").innerHTML = this.myObj;
}

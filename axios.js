  var axiosbtn = document.querySelector("#axios");
  axiosbtn.addEventListener("click",function(){
    axios.get(url)
    .then(function(res){
      display.innerText = res.data[0];
    })
    .catch(function(){
      alert("Error!!");
    })
  })

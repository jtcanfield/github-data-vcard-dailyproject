.fetch("https://api.github.com/users/jtcanfield")
console.log("Hello");
  .then(
    function(response){
      if (response.status !== 200){
        console.log("ERROR CODE: " + response.status)
        return
      }
      response.json().then(function(data){
        console.log(data);
      })
    }
  )

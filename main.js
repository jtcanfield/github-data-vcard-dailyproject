fetch("https://api.github.com/users/jtcanfield")
  .then(
    function(response){
      if (response.status !== 200){
        console.log("ERROR CODE: " + response.status)
        return
      }
      response.json().then(function(data){
        let holder = `
        <h1>${data.name}</h1>
        <div id="mainBody">
        <h2>The Basics</h2>
        </div>
        `
        console.log(holder);
      })
    }
  )

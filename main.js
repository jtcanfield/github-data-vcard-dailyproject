var htmlBody = document.querySelector("body");
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
        <p>Name: ${data.name}</p>
        <p>GitHub URL: ${data.html_url}</p>
        <p>Email: N/A</p>
        <p>Company: ${data.company}</p>
        </div>
        `
        htmlBody.innerHTML = holder;
        console.log(holder);
      })
    }
  )

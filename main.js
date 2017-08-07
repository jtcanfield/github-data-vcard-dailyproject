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
          <div id="bodyLeft">
            <h2>The Basics</h2>
            <p>Name: ${data.name}</p>
            <p>GitHub URL: ${data.html_url}</p>
            <p>Email: ${data.email}</p>
            <p>Company: ${data.company}</p>
            <p>Website: ${data.blog}</p>
          </div>
          <div id="bodyCenter">
            <h2>The Story</h2>
            <p>${data.bio}</p>
          </div>
          <div id="bodyRight">
            <img src="${data.avatar_url}"></img>
          </div>
        </div>
        `
        htmlBody.innerHTML = holder;
      })
    }
  )

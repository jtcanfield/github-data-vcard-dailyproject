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
            <p>GitHub URL: <a href="${data.html_url}">@jtcanfield</a></p>
            <p>Email: ${data.email}</p>
            <p>Company: ${data.company}</p>
            <p>Website: <a href="${data.blog}">jtcanfield.github.io</a></p>
          </div>
          <div id="bodyCenter">
            <h2>The Story</h2>
            <p>${data.bio}<img src="${data.avatar_url}"></p>
          </div>
        </div>
        `
        htmlBody.innerHTML = holder;
      })
    }
  )

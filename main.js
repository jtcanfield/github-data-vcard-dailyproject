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
            <p><span>Name:</span> ${data.name}</p>
            <p><span>GitHub URL:</span> <a href="${data.html_url}">@jtcanfield</a></p>
            <p><span>Email:</span> ${data.email}</p>
            <p><span>Company:</span> ${data.company}</p>
            <p><span>Website:</span> <a href="${data.blog}">jtcanfield.github.io</a></p>
          </div>
          <div id="bodyCenter">
            <h2>The Story</h2>
            <p><img src="${data.avatar_url}">${data.bio}</p>
          </div>
        </div>
        `
        htmlBody.innerHTML = holder;
      })
    }
  )

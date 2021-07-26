const signInButton = document.querySelector("#lol")
signInButton.addEventListener("click", () => {
    console.log("clicked!")
    const message = document.querySelector("#lol")
    const del = document.querySelector(".hidden")
    message.innerHTML = "Would you like to sign in using your Google Account?"
    del.classList.remove("hidden")
    const yes = document.querySelector('#yes')
    const no = document.querySelector('#no')
    yes.addEventListener("click", () => {
        const provider = new firebase.auth.GoogleAuthProvider()
    
    firebase.auth().signInWithPopup(provider).then(result => {
        const user = result.user

        console.log("login success", user)
        window.location = "writeNote.html"
    })
    .catcg(error => {
        console.log("login failed", error)
    })

    })
    
    /*
    
    const provider = new firebase.auth.GoogleAuthProvider()
    
    firebase.auth().signInWithPopup(provider).then(result => {
        const user = result.user

        console.log("login success", user)
        window.location = "writeNote.html"
    })
    .catcg(error => {
        console.log("login failed", error)
    })*/

})



const firebaseConfig = {
    apiKey: "AIzaSyCNPjaYhfIH80tP42HrYJm_njzVWRAQaPo",
    authDomain: "projetvirtuel-9ad88.firebaseapp.com",
    databaseURL: "https://projetvirtuel-9ad88-default-rtdb.firebaseio.com",
    projectId: "projetvirtuel-9ad88",
    storageBucket: "projetvirtuel-9ad88.appspot.com",
    messagingSenderId: "472799145221",
    appId: "1:472799145221:web:26b17af60a902f473b1b6c",
    measurementId: "G-34ZV5ER57Y"
}
// const db = firebaseApp.firestore();
// const auth = firebaseApp.auth();
firebase.initializeApp(firebaseConfig);

// Get a reference to the database service


var database = firebase.database();




const preObject = document.getElementById('object');
const redLed = firebase.database().ref('ledOption/RedLedOn');

let bg = document.getElementById("bg"), but =  document.getElementById("but"),
redLedToggle = redLed.child("ledOn")




let embliColor = () => 
{
    redLedToggle.get().then((snapshot) => {
        const data = snapshot.val();
        if (data){
            
            bg.classList.replace("bg-ligth", "bg-dark")
            but.classList.replace("btn-dark", "btn-light")
            
        }else{
            
            
            bg.classList.replace("bg-dark", "bg-ligth")
            but.classList.replace("btn-light", "btn-dark")
        }
        
    })
    // redLedToggle.on('value', snap => 
    // {    let bg = document.getElementById("bg"), but =  document.getElementById("but")
    //     console.log(snap.val());	
    //     preObject.innerText = JSON.stringify(snap.val(), null, 3);
    
    // }, 
    // function(error) 
    // {
    //     // The fetch failed.
    //     console.error(error);
    // })    
}




function turnOnLed() {
    redLedToggle.get().then((snapshot) => {
        const data = snapshot.val();
        if (data) {
            const updates = {};
            var postData = {
                ledOn: false
            }
            updates["ledOption/RedLedOn"] = postData;
            firebase.database().ref().update(updates);
            console.log(`data: ${data} and type ${typeof data}`);
            
            
            // redLed.set({
            //     ledOn: false
            // })
        }else {
            var postData = {
                ledOn: true
            }
            const updates = {};
            updates["ledOption/RedLedOn/ledOn"] = true;
            firebase.database().ref().update(updates);
            console.log(`data: ${data} and type ${typeof data}`);
            
            // redLed.set({
            //     ledOn: true
            // })
        }
        
    });
    
    
    
}


let afterClick = () => {
    
    
    turnOnLed()
    embliColor()
}









// document.querySelector("body").addEventListener("load", () => embliColor())
// but.addEventListener("click", () => afterClick())


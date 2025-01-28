// MILESTONE 2 Utilizzando Postman, testiamo una chiamata a questo endpoint:
// https://lanciweb.github.io/demo/api/pictures/


// 1 STEP PRENDIAMO ELEMENTO OUTPUT NEL DOM
const containerAll = document.querySelector(".container-all")



// 2 STEP SETTO ENDPOINT
const endpoint = "https://lanciweb.github.io/demo/api/pictures/"


// 3 STEP RICHIEDO UNA CHIAMATA DI TIPO .GET ATTRAVERSO LA LIBRERIA AXIOS ALL API DI BOOLEAN DOVE A SUA VOLTA RICEVERO UNA RISPOSTA DAL SERVER
axios.get(endpoint)
    .then (response => {
        // ESEGUO TUTTO IL CODICE SE VA A BUON FINE OK, ALTRIMENTI CATCH
        
        // RICAVO I DATA DALL ENDPOINT
        const data = response.data
        console.log(data)

        // PER RICAVARE GLI OGGETTI ALL INTERNO DELL ARRAY POSSO USARE O UN CICLO FOR OPPURE UN FOREACH
        data.forEach(object => {
            
            // ORA ATTRAVERSO OBJECT RICAVIAMO URL-DATE-TITLE
            containerAll.innerHTML +=`
            <div class="card">
                
                <div class="punto">
                    <img src="./img/pin.svg" alt="">
                </div>
                
                <img src="${object.url}" alt="${object.title}" class="img">
                
                <div class="container-text">
                    <p>${object.date}</p>
                    <h4>${object.title.toUpperCase()}</h4>
                </div>
                
            </div>`
        
        });


        
        
        
        
        
        // BONUS MILESTONE 1-2-3

        // DICHIARO UNA VARIABILE DOVE MI PRENDE LA NODELIST DI IMMAGINI DANDOGLI UNA CLASSE IMG --- RICAVANDOLA DAL DOM
        const cardAll = document.querySelectorAll(".img")
        console.log(cardAll)

        // DICHIARO UNA VARIABILE DOVE ALL INTERNO ANDRANNO GLI ELEMENTI DI OUTPUT -------RICAVANDOLA DAL DOM
        const all = document.querySelector(".all")
        


        // CICLO LA NODELIST DI IMMAGINI COSI AD OGNI IMMAGINE DELLA NODELIST HA UN EVENT LISTENER CHE AL CLICK COMPARE
        cardAll.forEach(object => {
            
            // POI DO L EVENTO AL CLICK DELL OBJECT 
            object.addEventListener("click", function (){
                console.log(object)
                // POI GLI DICO DI PRENDERE L ELEMENTO DI OUTPUT E DI RIMUOVERGLI LA CLASSE CHE HA IL DISPLAY NONE
                all.classList.remove("none")
            
                // POI SEMPRE NELL OUTPUT GLI DICO DI SCRIVERE LA PARTE IN HTML MA IN MODO DINAMICO COSI CHE IMG CORRISPONDE ALL SRC DI OGNI IMG ALL INTERNO DELLA NODELIST 
                all.innerHTML =`
                <div class="containerImg">
                    <button id="bottone">CHIUDI</button>
                    
                    <div class="image">
                        <img src="${object.src}" alt=""> 
                    </div>  
                </div>
                `
                
                // DICHIARO LA VARIABILE DEL BUTTON ----- RICAVANDOLA DAL DOM
                const button = document.getElementById("bottone")

                // INFINE DO UN ADDEVENTLISTENER AL BUTTON DICENDOGLI CHE AL CLICK AGGIUNGE LA CLASSE NONE CHE AL SUO INTERNO STA IN DISPLAY NONE
                button.addEventListener("click", function (){
                    all.classList.add("none")
                });

            })

            
        });

        
    })

    .catch(error => {
            
        //CODICE DA ESEGUIRE IN CASO DA ERRORE
        console.error(error)
    })
    
    
    
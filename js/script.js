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
        // console.log(data)

        // PER RICAVARE GLI OGGETTI ALL INTERNO DELL ARRAY POSSO USARE O UN CICLO FOR OPPURE UN FOREACH
        data.forEach(object => {
            // ORA ATTRAVERSO OBJECT RICAVIAMO URL-DATE-TITLE
            containerAll.innerHTML +=`
            <div class="card">
                <img src="${object.url}" alt="${object.title}">
                <div class="container-text">
                    <p>${object.date}</p>
                    <h4>${object.title.toUpperCase()}</h4>
                </div>
            </div>`
        });
    })

    .catch(error => {
            
        //CODICE DA ESEGUIRE IN CASO DA ERRORE
        console.error(error)
    })
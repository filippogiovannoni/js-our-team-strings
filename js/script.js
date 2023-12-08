/* Utilizzando i dati forniti, creare un array di stringhe con i nomi dei membri del team */

// Creo l'array di stringhe contente i nomi dei membri del team
const memberList = ['Wayne Barnett', 'Angela Caroll', 'Walter Gordon', 'Angela Lopez', 'Scott Estrada', 'Barbara Ramos']

/* Stampare le informazioni su DOM come card. */


//Col ciclo for stampo in pagina le card con i nomi dell'array
for (let i = 0; i < memberList.length; i++) {
    
    // Creo un elemento nella DOM e lo salvo in una variabile
    const cardElement = document.createElement('div')
    //All'elemento aggiungo le classi alla card
    cardElement.classList.add('card', 'px-3', 'py-5', 'm-3', 'bg-primary')
    
    //Seleziono il container nella DOM e lo salvo in una variabile
    const containerElement = document.querySelector('.container')
    
    //Inserisco all'interno del container le card
    containerElement.append(cardElement)
    
    // Ad ogni iterazione viene inserito nome e cognome di ogni membro dell'array all'interno delle card
    const memberName = memberList[i];
    cardElement.innerText = memberName

    
}



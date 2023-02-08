# VeganEats

VeganEats è un'app pensata per ricercare esclusivamente
ricette vegane tramite una search bar inserendo
l'ingrediente o il patto desiderato.

Inizialmente all'avvio dell'applicazione verrà
effettuata una ricerca di 12 ricette da cui poter
prendere ispirazione.

Una volta effettuata la ricerca verranno visualizzate
le ricette e cliccando su di esse verranno poi mostrati i 
dettagli come il tempo di preparazione gli ingredienti e 
altre info utili alla creazione del piatto.

## Come è stata sviluppata l'applicazione? 
L'applicazione è stata sviluppata utilizzando il framework 
Angular e Node.js.

## Librerie esterne utilizzate :
Non ci sono state librerie terze utilizzate, ma è stata 
utilizzata l'api del sito "https://spoonacular.com/food-api/docs" 
per ricavarne i dati.
L'api offre un servizio gratuito con dei limiti di richieste fattibili
in un giorno e un piano a pagamento; dunque se in caso di test dell'app
avrete problemi con l'api fate attenzione al codice di errore e relativo
stato del server.

## Funzionalità Applicazione: 
Come già descritto al primo punto l'applicazione ha le suddette
funzionalità con le seguenti caratteristiche:

### Componenti: 
  - Dashboard,
  - Header,
  - recipes,
  - recipes-details,
  - Footer

  #### Dashboard 
    Ospita il componente header il footer e <app-recipes></app-recipes>.

  #### Header
    Ha lo scopo di visualizzare l'intestazione dell'app.
  #### Recipes

    Ospita la search bar e le ricette di default e quelle ricercate dall'
    utente che si switchano fra loro dinamicamente
  #### recipes-details
    Ospita il dettaglio della ricetta selezionata.

<!-- to do -->
### Servizi : 
  - All-vegan-recipes.service,
  - Recipes-ingridients-by-id,
  - user-query-research

  #### All-vegan-recipes.service
    Questo servizio si occupa di creare e restituire l'url di ricerca di tutte le ricette vegane
    presenti nell'api e renderlo disponibile dove serve

 
 #### Recipes-ingridients-by-id
    Questo servizio si occupa di creare e restituire l'url di ricerca in base 
    al'id della ricetta selezioanta dall'utente per ricercarne i dettagli.

 #### user-query-research
  Questo servizio si occupa di creare e restituire l'url di ricerca in base 
  alla query inserita dall'utente.
## Configurazione e prova in locale
Per la configurazione si dovrà clonare la repo github del proggetto 
e per prima cosa lanciare il comando da terminale `npm install` e 
solo dopo il comando `ng serve --open` per la prova in locale dell'app.


## Firebase Link
L'app è stata hostata tramite firebase al seguente link: https://veganeats-fcd0e.web.app/

<h3 align="left">Languages and Tools:</h3>
<p align="left"> <a href="https://angular.io" target="_blank" rel="noreferrer"> <img src="https://angular.io/assets/images/logos/angular/angular.svg" alt="angular" width="40" height="40"/> </a> <a href="https://firebase.google.com/" target="_blank" rel="noreferrer"> <img src="https://www.vectorlogo.zone/logos/firebase/firebase-icon.svg" alt="firebase" width="40" height="40"/> </a> <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" alt="javascript" width="40" height="40"/> </a> <a href="https://karma-runner.github.io/latest/index.html" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/detain/svg-logos/780f25886640cef088af994181646db2f6b1a3f8/svg/karma.svg" alt="karma" width="40" height="40"/> </a> </p>

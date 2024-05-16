# DT208G TypeScript, moment 3 - Angular I

Detta är en webbplats skapad för en uppgift i kursen DT208G TypeScript vid Mittuniversitetet.
Webbplatsen använder Angular och TypeScript och innehåller tre sidor, inklusive en startsida.

## Syfte och mål
- Förstå Angular och dess användning för att skapa dynamiska och responsiva webbapplikationer.
- Lära sig att konstruera en Angular-applikation och förstå hur dess komponenter interagerar.
- Använda CLI-verktyg för att testköra och publicera optimerade filer.

## Konstruktion
Webbplatsen har komponenter för varje undersida (inklusive en 404-sida), header, footer, längdkonvertering och temperaturkonvertering. FormsModule används för two-way data binding i konverteringskomponenterna. RouterLink används för navigation utan sidladdning.

Styling sker med CSS där varje komponent har egna stilregler, och globala stilregler finns i styles.css. FontAwesome används för ikoner. Webbplatsen är responsiv och fungerar på olika skärmstorlekar. Bilder finns i 'assets/images' och inkluderas i respektive undersida

## Utveckling
Nedan finns en översättning och sammanfattning av den autogenererade readme-instruktionen som skapas när man skapar ett nytt Angularprojekt.
Det är steg-för-steg instruktioner för hur man skapar ett Angularprojekt.

### 1. Installera Angular CLI globalt:
`npm install -g @angular/cli`

### 2. Skapa ett nytt projekt :
`ng new project-name`

### 3. Starta utvecklingsservern:
`ng serve --open` (öppnas i webbläsaren till `http://localhost:4200/`).

### 4. Generera nya komponenter:
`ng generate component component-name`
Man kan också använda `ng generate directive|pipe|service|class|guard|interface|enum|module`.

### Bygg projektet:
`ng build`

### Kör enhetstester:
`ng test`

### Kör end-to-end-tester:
`ng e2e`
För att använda detta kommando, lägg först till ett paket som implementerar end-to-end testfunktionalitet.

### Ytterligare hjälp
För mer hjälp om Angular CLI, använd `ng help` eller besök [Angular CLI Overview and Command Reference](https://angular.io/cli).



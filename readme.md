# Prova iniziale di installazione di ADMOB su app expo con SDK47
https://docs.page/invertase/react-native-google-mobile-ads

# Problematica
La vecchia libreria, perfettamente funzionante su <= SDK45 con i nuovi SDK non funziona più.
In più ho la problematica di non riuscire ad installare i podfile su processore M1Pro.
Quindi per ora manterrò lo sviluppo su processore Intel, cercando di risolvere i problemi di installazione iniziali.

# Non utilizziamo più la build di expo, useremo EAS BUILD, che esclude il file .env
Risoluzione: duplicare il file .gitignore, rinominarlo .easignore rimuovendo il file .env tra le esclusioni

# Dispositivo di test
Ovviamente facendo riferimento a Native Modules, l'app di ExpoGo diventa inutilizzabile: procedo con la creazione di build di dev come da istruzioni.
=> npx eas-cli build --profile development

# European User Consent
=> https://docs.page/invertase/react-native-google-mobile-ads/european-user-consent



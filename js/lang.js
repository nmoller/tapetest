i18next.init({
  lng: 'fr',
  debug: false,
  resources: {
    fr: {
      translation: {
        "pageTitle": "Test vitesse au clavier",
        "1minute": "1 minute",
        "3minute": "3 minute",
        "5minute": "5 minute",
        "duration": '<i class="tiny material-icons">schedule</i> Temps du test',
        "testStart": "Le test commence dès que vous frappez la premier touche",
        "temp": "Temps : {{tmin}} minutes",
        "tryAgain": "Essayer autre fois",
        "userStop": "Test arreté",
        "verifyCL": "Vérifier CL",
        "realWPM": 'MPM : <strong> {{wpm}} </strong> <div class="ea">(ajusté avec erreur)</div>',
        "accuracy": '<div id="finalTwo">Exactitude : <strong> {{accuracy}}%</strong></div>',
        "errors": '<span id="finalThree">{{errors}} erreur(s) non-corrigées</span><br>'
      }
    }
  }
}, function(err, t) {
  // init set content
  updateContent();
});

function updateContent() {
  document.getElementById('i18nTitle').innerHTML = i18next.t('pageTitle');
  document.getElementById('i18n1minute').innerHTML = i18next.t('1minute');
  document.getElementById('i18n3minute').innerHTML = i18next.t('3minute');
  document.getElementById('i18n5minute').innerHTML = i18next.t('5minute');
  document.getElementById('i18nDuration').innerHTML = i18next.t('duration');
  document.getElementById('typedTextBox').placeholder = i18next.t('testStart');
}

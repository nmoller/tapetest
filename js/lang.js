var uqam = {
  pluralTemps: function(temps){
    if (temps <= 1) {
      return "{{time}} minute";
    }
    return "{{time}} minutes";
  }
};

i18next.init({
  
  lng: 'fr',
  debug: false,
  resources: {
    fr: {
      translation: {
        "pageTitle": "Test vitesse au clavier",
        "1minute": uqam.pluralTemps(1),
        "3minute": uqam.pluralTemps(3),
        "5minute": uqam.pluralTemps(5),
        "duration": '<i class="tiny material-icons">schedule</i> Temps du test',
        "testStart": "Le test commence dès que vous frappez la premier touche",
        "temp": "Temps : {{tmin}} minutes",
        "tryAgain": "Essayer autre fois",
        "userStop": "Test arreté",
        "verifyCL": "Vérifier CL",
        "realWPM": 'MPM : <strong> {{wpm}} </strong> <div class="ea">(ajusté avec erreur)</div>',
        "accuracy": '<div id="finalTwo">Exactitude : <strong> {{accuracy}}%</strong></div>',
        "nocorrected": '<span id="finalThree"> {{errors}} non-corrigée(s)</span><br>',
        "corrections": '<span id="finalE">Corrigés :  {{correctedErrors}} </span><br>',
        "totlChar": '<span id="finalFour">Nombre total de caractères {{totalCharacters}}</span><br>',
        "finalWPM": '<span id="finalFive">MPM sans ajustement : {{wpm}} </span>',
      }
    }
  }
}, function(err, t) {
  // init set content
  updateContent();
});

function updateContent() {
  document.getElementById('i18nTitle').innerHTML = i18next.t('pageTitle');
  document.getElementById('i18n1minute').innerHTML = i18next.t('1minute', {time: 1});
  document.getElementById('i18n3minute').innerHTML = i18next.t('3minute', {time: 3});
  document.getElementById('i18n5minute').innerHTML = i18next.t('5minute', {time: 5});
  document.getElementById('i18nDuration').innerHTML = i18next.t('duration');
  document.getElementById('typedTextBox').placeholder = i18next.t('testStart');
}

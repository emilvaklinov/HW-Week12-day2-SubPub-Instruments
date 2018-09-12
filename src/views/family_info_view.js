const PubSub = require('../helpers/pub_sub.js');

const FamilyInfoView = function () {

}

FamilyInfoView.prototype.bindEvents = function () {
    PubSub.subscribe('InstrumentFamilies:selected-family-ready', (event) => {
        const selectedInstrumentFamily = event.detail;
        this.render(selectedInstrumentFamily);
    })
}

FamilyInfoView.prototype.render = function (instrumentFamily) {
    const infoContainer = document.querySelector('#info-container');

    infoContainer.innerHTML = '';


    const name = document.createElement('h2');
    name.textContent = instrumentFamily.name;
    infoContainer.appendChild(name);

    const description = document.createElement('p');
    description.textContent = instrumentFamily.description;
    infoContainer.appendChild(description);

    const instrumentsHeading = document.createElement('h3');
    instrumentsHeading.textContent = 'Instruments Include:'
    infoContainer.appendChild(instrumentsHeading);

    const familyInstruments = document.createElement('ul');
    const instrumentsArray = instrumentFamily.instruments;
    instrumentsArray.forEach((instrument) => {
        const instrumentLi = document.createElement('li');
        instrumentLi.textContent = instrument;
        familyInstruments.appendChild(instrumentLi);
    })
    infoContainer.appendChild(familyInstruments);
}

module.exports = FamilyInfoView;

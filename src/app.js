const InstrumentFamilies = require('./models/instrument_families.js');
const SelectView = require('./views/select_view.js');
const FamilyInfoView = require('./views/family_info_view.js');

document.addEventListener('DOMContentLoaded', () => {
  // console.log('JavaScript Loaded');

  const selectView = new SelectView();
  selectView.bindEvents();

  const instrumentFamilies = new InstrumentFamilies();
  instrumentFamilies.bindEvents();

  const familyInfoView = new FamilyInfoView();
  familyInfoView.bindEvents();

});

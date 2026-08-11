// Data is embedded directly (instead of fetched from data.json) so the page
// works when opened straight from disk (file://), where browsers block fetch().
const DTC_DATA = [
    { "code": "P0100", "title": "Mass Air Flow (MAF) Circuit Malfunction", "system": "Fuel/Air Metering", "causes": ["Dirty or contaminated MAF sensor", "Damaged wiring/connector to MAF sensor", "Air intake leak before the MAF sensor", "Failing MAF sensor"], "service": ["Inspect and clean MAF sensor", "Inspect intake ducting for cracks/leaks", "Check wiring harness continuity"], "parts": ["MAF sensor", "Intake air duct/hose", "MAF sensor cleaner"] },
    { "code": "P0101", "title": "MAF Circuit Range/Performance Problem", "system": "Fuel/Air Metering", "causes": ["Dirty MAF sensor", "Vacuum/intake leak", "Clogged air filter", "Exhaust leak affecting readings"], "service": ["Clean or replace MAF sensor", "Replace air filter", "Inspect for vacuum leaks"], "parts": ["MAF sensor", "Engine air filter", "Vacuum hoses"] },
    { "code": "P0102", "title": "MAF Circuit Low Input", "system": "Fuel/Air Metering", "causes": ["Wiring short to ground", "Faulty MAF sensor", "Loose or corroded connector"], "service": ["Test MAF sensor output voltage", "Repair/replace wiring", "Replace MAF sensor if faulty"], "parts": ["MAF sensor", "Wiring harness connector"] },
    { "code": "P0103", "title": "MAF Circuit High Input", "system": "Fuel/Air Metering", "causes": ["Short to voltage in MAF circuit", "Faulty MAF sensor", "Contaminated sensor element"], "service": ["Inspect wiring for shorts", "Clean or replace MAF sensor"], "parts": ["MAF sensor"] },
    { "code": "P0110", "title": "Intake Air Temperature (IAT) Circuit Malfunction", "system": "Fuel/Air Metering", "causes": ["Faulty IAT sensor", "Damaged wiring/connector"], "service": ["Test IAT sensor resistance", "Replace sensor or repair wiring"], "parts": ["IAT sensor"] },
    { "code": "P0113", "title": "IAT Circuit High Input", "system": "Fuel/Air Metering", "causes": ["Open circuit in IAT sensor wiring", "Faulty IAT sensor"], "service": ["Check wiring continuity", "Replace IAT sensor"], "parts": ["IAT sensor"] },
    { "code": "P0116", "title": "Engine Coolant Temperature (ECT) Circuit Range/Performance", "system": "Fuel/Air Metering", "causes": ["Faulty ECT sensor", "Low coolant level", "Stuck thermostat"], "service": ["Check coolant level", "Test ECT sensor", "Replace thermostat if stuck"], "parts": ["Coolant temperature sensor", "Thermostat", "Coolant"] },
    { "code": "P0117", "title": "ECT Circuit Low Input", "system": "Fuel/Air Metering", "causes": ["Short circuit in ECT wiring", "Faulty ECT sensor"], "service": ["Inspect wiring", "Replace ECT sensor"], "parts": ["Coolant temperature sensor"] },
    { "code": "P0118", "title": "ECT Circuit High Input", "system": "Fuel/Air Metering", "causes": ["Open circuit in ECT wiring", "Faulty ECT sensor"], "service": ["Inspect wiring", "Replace ECT sensor"], "parts": ["Coolant temperature sensor"] },
    { "code": "P0120", "title": "Throttle Position Sensor (TPS) Circuit Malfunction", "system": "Fuel/Air Metering", "causes": ["Faulty TPS", "Worn throttle body", "Wiring issue"], "service": ["Test TPS output", "Replace TPS or throttle body assembly"], "parts": ["Throttle position sensor", "Throttle body"] },
    { "code": "P0121", "title": "TPS Circuit Range/Performance Problem", "system": "Fuel/Air Metering", "causes": ["Misadjusted or worn TPS", "Carbon buildup in throttle body"], "service": ["Clean throttle body", "Recalibrate/replace TPS"], "parts": ["Throttle position sensor", "Throttle body cleaner"] },
    { "code": "P0125", "title": "Insufficient Coolant Temperature for Closed Loop Fuel Control", "system": "Fuel/Air Metering", "causes": ["Stuck-open thermostat", "Faulty ECT sensor", "Low coolant"], "service": ["Replace thermostat", "Check coolant system"], "parts": ["Thermostat", "Coolant temperature sensor"] },
    { "code": "P0128", "title": "Coolant Thermostat Below Regulating Temperature", "system": "Fuel/Air Metering", "causes": ["Stuck-open thermostat", "Low coolant level", "Faulty ECT sensor"], "service": ["Replace thermostat", "Top off/flush coolant"], "parts": ["Thermostat", "Coolant"] },
    { "code": "P0130", "title": "O2 Sensor Circuit Malfunction (Bank 1 Sensor 1)", "system": "Oxygen Sensor", "causes": ["Failed upstream O2 sensor", "Wiring/connector damage", "Exhaust leak near sensor"], "service": ["Test O2 sensor response", "Replace O2 sensor", "Repair exhaust leak"], "parts": ["Upstream (Bank 1, Sensor 1) oxygen sensor"] },
    { "code": "P0133", "title": "O2 Sensor Slow Response (Bank 1 Sensor 1)", "system": "Oxygen Sensor", "causes": ["Aged/contaminated O2 sensor", "Exhaust leak", "Fuel system issue"], "service": ["Replace O2 sensor", "Inspect exhaust for leaks"], "parts": ["Upstream oxygen sensor"] },
    { "code": "P0134", "title": "O2 Sensor No Activity Detected (Bank 1 Sensor 1)", "system": "Oxygen Sensor", "causes": ["Failed O2 sensor", "Open circuit in sensor wiring", "Exhaust leak"], "service": ["Test and replace O2 sensor", "Repair wiring"], "parts": ["Upstream oxygen sensor"] },
    { "code": "P0135", "title": "O2 Sensor Heater Circuit Malfunction (Bank 1 Sensor 1)", "system": "Oxygen Sensor", "causes": ["Failed sensor heater element", "Blown fuse", "Wiring issue"], "service": ["Test heater circuit resistance", "Replace O2 sensor"], "parts": ["Upstream oxygen sensor", "Fuse"] },
    { "code": "P0136", "title": "O2 Sensor Circuit Malfunction (Bank 1 Sensor 2)", "system": "Oxygen Sensor", "causes": ["Failed downstream O2 sensor", "Wiring damage", "Exhaust/catalyst issue"], "service": ["Test and replace O2 sensor"], "parts": ["Downstream (Bank 1, Sensor 2) oxygen sensor"] },
    { "code": "P0141", "title": "O2 Sensor Heater Circuit Malfunction (Bank 1 Sensor 2)", "system": "Oxygen Sensor", "causes": ["Failed heater element", "Wiring/fuse issue"], "service": ["Test heater circuit", "Replace O2 sensor"], "parts": ["Downstream oxygen sensor"] },
    { "code": "P0171", "title": "System Too Lean (Bank 1)", "system": "Fuel Trim", "causes": ["Vacuum leak", "Weak fuel pump", "Dirty/faulty MAF sensor", "Clogged fuel injector(s)"], "service": ["Inspect for vacuum leaks", "Test fuel pressure", "Clean/replace injectors", "Clean MAF sensor"], "parts": ["Fuel injectors", "MAF sensor", "Fuel pump", "Vacuum hoses"] },
    { "code": "P0172", "title": "System Too Rich (Bank 1)", "system": "Fuel Trim", "causes": ["Leaking fuel injector(s)", "Faulty MAF or O2 sensor", "High fuel pressure", "Clogged air filter"], "service": ["Test fuel pressure regulator", "Inspect injectors", "Replace air filter"], "parts": ["Fuel injectors", "Fuel pressure regulator", "O2 sensor", "Air filter"] },
    { "code": "P0174", "title": "System Too Lean (Bank 2)", "system": "Fuel Trim", "causes": ["Vacuum leak", "Weak fuel pump", "Dirty MAF sensor"], "service": ["Inspect for vacuum leaks", "Test fuel pressure", "Clean MAF sensor"], "parts": ["Fuel injectors", "MAF sensor", "Fuel pump"] },
    { "code": "P0175", "title": "System Too Rich (Bank 2)", "system": "Fuel Trim", "causes": ["Leaking fuel injector(s)", "Faulty O2 sensor", "High fuel pressure"], "service": ["Inspect injectors", "Test fuel pressure regulator"], "parts": ["Fuel injectors", "Fuel pressure regulator", "O2 sensor"] },
    { "code": "P0217", "title": "Engine Overtemperature Condition", "system": "Engine Cooling", "causes": ["Low coolant", "Failed water pump", "Clogged radiator", "Faulty cooling fan"], "service": ["Check coolant level and leaks", "Test water pump and thermostat", "Inspect cooling fan operation"], "parts": ["Water pump", "Radiator", "Cooling fan", "Coolant"] },
    { "code": "P0230", "title": "Fuel Pump Primary Circuit Malfunction", "system": "Fuel System", "causes": ["Failed fuel pump relay", "Wiring fault", "Failing fuel pump"], "service": ["Test fuel pump relay and wiring", "Replace fuel pump if needed"], "parts": ["Fuel pump", "Fuel pump relay", "Fuse"] },
    { "code": "P0300", "title": "Random/Multiple Cylinder Misfire Detected", "system": "Ignition/Misfire", "causes": ["Worn spark plugs", "Failing ignition coil(s)", "Vacuum leak", "Low fuel pressure", "Clogged injectors"], "service": ["Inspect/replace spark plugs", "Test ignition coils", "Check fuel pressure", "Inspect for vacuum leaks"], "parts": ["Spark plugs", "Ignition coils", "Fuel injectors"] },
    { "code": "P0301", "title": "Cylinder 1 Misfire Detected", "system": "Ignition/Misfire", "causes": ["Faulty spark plug/coil on cylinder 1", "Low compression", "Clogged/leaking injector"], "service": ["Swap coil/plug to isolate fault", "Compression test", "Inspect injector"], "parts": ["Spark plug (cyl 1)", "Ignition coil (cyl 1)", "Fuel injector (cyl 1)"] },
    { "code": "P0302", "title": "Cylinder 2 Misfire Detected", "system": "Ignition/Misfire", "causes": ["Faulty spark plug/coil on cylinder 2", "Low compression", "Clogged/leaking injector"], "service": ["Swap coil/plug to isolate fault", "Compression test"], "parts": ["Spark plug (cyl 2)", "Ignition coil (cyl 2)", "Fuel injector (cyl 2)"] },
    { "code": "P0303", "title": "Cylinder 3 Misfire Detected", "system": "Ignition/Misfire", "causes": ["Faulty spark plug/coil on cylinder 3", "Low compression", "Clogged/leaking injector"], "service": ["Swap coil/plug to isolate fault", "Compression test"], "parts": ["Spark plug (cyl 3)", "Ignition coil (cyl 3)", "Fuel injector (cyl 3)"] },
    { "code": "P0304", "title": "Cylinder 4 Misfire Detected", "system": "Ignition/Misfire", "causes": ["Faulty spark plug/coil on cylinder 4", "Low compression", "Clogged/leaking injector"], "service": ["Swap coil/plug to isolate fault", "Compression test"], "parts": ["Spark plug (cyl 4)", "Ignition coil (cyl 4)", "Fuel injector (cyl 4)"] },
    { "code": "P0305", "title": "Cylinder 5 Misfire Detected", "system": "Ignition/Misfire", "causes": ["Faulty spark plug/coil on cylinder 5", "Low compression", "Clogged/leaking injector"], "service": ["Swap coil/plug to isolate fault", "Compression test"], "parts": ["Spark plug (cyl 5)", "Ignition coil (cyl 5)", "Fuel injector (cyl 5)"] },
    { "code": "P0306", "title": "Cylinder 6 Misfire Detected", "system": "Ignition/Misfire", "causes": ["Faulty spark plug/coil on cylinder 6", "Low compression", "Clogged/leaking injector"], "service": ["Swap coil/plug to isolate fault", "Compression test"], "parts": ["Spark plug (cyl 6)", "Ignition coil (cyl 6)", "Fuel injector (cyl 6)"] },
    { "code": "P0325", "title": "Knock Sensor Circuit Malfunction", "system": "Ignition Control", "causes": ["Faulty knock sensor", "Damaged wiring", "Loose sensor mounting"], "service": ["Test knock sensor", "Inspect/repair wiring", "Torque sensor mounting"], "parts": ["Knock sensor"] },
    { "code": "P0335", "title": "Crankshaft Position Sensor Circuit Malfunction", "system": "Ignition Control", "causes": ["Faulty crankshaft position sensor", "Damaged reluctor ring", "Wiring fault"], "service": ["Test sensor signal", "Replace sensor", "Inspect reluctor/tone ring"], "parts": ["Crankshaft position sensor"] },
    { "code": "P0340", "title": "Camshaft Position Sensor Circuit Malfunction", "system": "Ignition Control", "causes": ["Faulty camshaft position sensor", "Timing chain/belt wear", "Wiring fault"], "service": ["Test sensor signal", "Inspect timing components"], "parts": ["Camshaft position sensor", "Timing chain/belt"] },
    { "code": "P0341", "title": "Camshaft Position Sensor Range/Performance", "system": "Ignition Control", "causes": ["Sensor misalignment", "Timing chain stretch", "Faulty sensor"], "service": ["Inspect timing chain/belt", "Replace sensor"], "parts": ["Camshaft position sensor", "Timing chain kit"] },
    { "code": "P0401", "title": "EGR Flow Insufficient Detected", "system": "Emissions (EGR)", "causes": ["Clogged EGR passages", "Faulty EGR valve", "Carbon buildup"], "service": ["Clean EGR passages/valve", "Replace EGR valve"], "parts": ["EGR valve", "EGR gasket"] },
    { "code": "P0402", "title": "EGR Flow Excessive Detected", "system": "Emissions (EGR)", "causes": ["Stuck-open EGR valve", "Faulty EGR position sensor"], "service": ["Inspect/replace EGR valve", "Test EGR sensor"], "parts": ["EGR valve"] },
    { "code": "P0420", "title": "Catalyst System Efficiency Below Threshold (Bank 1)", "system": "Emissions (Catalytic Converter)", "causes": ["Failing catalytic converter", "Exhaust leak", "Faulty O2 sensor(s)", "Engine misfire damaging catalyst"], "service": ["Inspect exhaust for leaks", "Test O2 sensors", "Replace catalytic converter if confirmed failed"], "parts": ["Catalytic converter", "Oxygen sensors", "Exhaust gasket"] },
    { "code": "P0430", "title": "Catalyst System Efficiency Below Threshold (Bank 2)", "system": "Emissions (Catalytic Converter)", "causes": ["Failing catalytic converter (bank 2)", "Exhaust leak", "Faulty O2 sensor(s)"], "service": ["Inspect exhaust system", "Test O2 sensors", "Replace catalytic converter"], "parts": ["Catalytic converter", "Oxygen sensors"] },
    { "code": "P0440", "title": "Evaporative Emission (EVAP) System Malfunction", "system": "Emissions (EVAP)", "causes": ["Loose or damaged gas cap", "Cracked EVAP hose", "Faulty purge valve"], "service": ["Check/replace gas cap", "Inspect EVAP hoses", "Smoke test system"], "parts": ["Gas cap", "EVAP hoses", "Purge valve"] },
    { "code": "P0442", "title": "EVAP System Small Leak Detected", "system": "Emissions (EVAP)", "causes": ["Loose gas cap", "Small crack in EVAP hose", "Faulty seal"], "service": ["Replace gas cap", "Smoke test to find small leak"], "parts": ["Gas cap", "EVAP hose"] },
    { "code": "P0446", "title": "EVAP Vent Control Circuit Malfunction", "system": "Emissions (EVAP)", "causes": ["Clogged/stuck vent valve", "Wiring fault"], "service": ["Inspect/replace vent valve", "Check wiring"], "parts": ["EVAP vent control valve"] },
    { "code": "P0455", "title": "EVAP System Large Leak Detected", "system": "Emissions (EVAP)", "causes": ["Missing/loose gas cap", "Disconnected or split EVAP hose", "Faulty purge/vent valve"], "service": ["Check gas cap and hoses", "Smoke test system"], "parts": ["Gas cap", "EVAP hose", "Purge valve"] },
    { "code": "P0456", "title": "EVAP System Very Small Leak Detected", "system": "Emissions (EVAP)", "causes": ["Slightly loose gas cap", "Pinhole leak in hose or canister"], "service": ["Replace gas cap", "Smoke test EVAP system"], "parts": ["Gas cap", "EVAP canister"] },
    { "code": "P0500", "title": "Vehicle Speed Sensor Malfunction", "system": "Transmission/Speed Sensing", "causes": ["Faulty vehicle speed sensor", "Damaged tone ring", "Wiring fault"], "service": ["Test speed sensor signal", "Replace sensor"], "parts": ["Vehicle speed sensor"] },
    { "code": "P0505", "title": "Idle Control System Malfunction", "system": "Idle Control", "causes": ["Dirty/faulty idle air control valve", "Vacuum leak", "Carbon buildup in throttle body"], "service": ["Clean throttle body/IAC valve", "Inspect for vacuum leaks"], "parts": ["Idle air control valve", "Throttle body cleaner"] },
    { "code": "P0506", "title": "Idle Control System RPM Lower Than Expected", "system": "Idle Control", "causes": ["Dirty throttle body", "Vacuum leak", "Faulty IAC valve"], "service": ["Clean throttle body", "Inspect vacuum lines"], "parts": ["Idle air control valve"] },
    { "code": "P0507", "title": "Idle Control System RPM Higher Than Expected", "system": "Idle Control", "causes": ["Vacuum leak", "Stuck-open IAC valve", "Throttle cable/body issue"], "service": ["Inspect for vacuum leaks", "Clean/replace IAC valve"], "parts": ["Idle air control valve", "Vacuum hoses"] },
    { "code": "P0600", "title": "Serial Communication Link Malfunction", "system": "Control Module", "causes": ["Wiring/connector fault on data bus", "Faulty control module"], "service": ["Inspect wiring/connectors", "Scan all modules for related codes"], "parts": ["Wiring harness connector"] },
    { "code": "P0601", "title": "Internal Control Module Memory Checksum Error", "system": "Control Module", "causes": ["Corrupted ECM/PCM memory", "Failing control module"], "service": ["Reflash/reprogram ECM", "Replace control module if needed"], "parts": ["Engine control module (ECM/PCM)"] },
    { "code": "P0700", "title": "Transmission Control System Malfunction", "system": "Transmission", "causes": ["Fault detected by TCM (check separate transmission codes)", "Low transmission fluid", "Wiring issue"], "service": ["Scan for transmission-specific codes", "Check transmission fluid level/condition"], "parts": ["Transmission fluid", "Transmission filter"] },
    { "code": "P0705", "title": "Transmission Range Sensor Circuit Malfunction", "system": "Transmission", "causes": ["Faulty park/neutral position switch", "Wiring fault", "Misadjusted linkage"], "service": ["Test range sensor", "Adjust or replace switch"], "parts": ["Transmission range sensor (PNP switch)"] },
    { "code": "P0715", "title": "Input/Turbine Speed Sensor Circuit Malfunction", "system": "Transmission", "causes": ["Faulty input speed sensor", "Wiring fault", "Low/dirty transmission fluid"], "service": ["Test sensor signal", "Replace sensor", "Service transmission fluid"], "parts": ["Input/turbine speed sensor", "Transmission fluid"] },
    { "code": "P0720", "title": "Output Speed Sensor Circuit Malfunction", "system": "Transmission", "causes": ["Faulty output speed sensor", "Wiring fault"], "service": ["Test and replace sensor"], "parts": ["Output speed sensor"] },
    { "code": "P0730", "title": "Incorrect Gear Ratio", "system": "Transmission", "causes": ["Worn clutch packs/bands", "Low fluid", "Solenoid failure"], "service": ["Check fluid level/condition", "Diagnose internal transmission wear", "Test shift solenoids"], "parts": ["Transmission fluid", "Shift solenoids", "Transmission filter"] },
    { "code": "P0740", "title": "Torque Converter Clutch Circuit Malfunction", "system": "Transmission", "causes": ["Faulty torque converter clutch solenoid", "Low transmission fluid", "Wiring fault"], "service": ["Test TCC solenoid", "Check fluid level"], "parts": ["Torque converter clutch solenoid", "Transmission fluid"] },
    { "code": "P0743", "title": "Torque Converter Clutch Circuit Electrical", "system": "Transmission", "causes": ["Wiring short/open in TCC circuit", "Faulty solenoid"], "service": ["Inspect wiring", "Replace solenoid"], "parts": ["Torque converter clutch solenoid"] }
];

// Advance Auto Parts category pages, confirmed directly from their own
// sitemap (shop.advanceautoparts.com/o/sitemap) — not guessed. Matched
// against a cleaned-up part name (substring match, longest key wins).
// Anything not covered here falls back to AAP's own keyword search page,
// also taken from their sitemap (used there for "Throttle Position Sensor"):
// https://shop.advanceautoparts.com/web/SearchResults?searchTerm=...
const AAP_CATEGORY_LINKS = [
  ['spark plug', 'https://shop.advanceautoparts.com/c4/spark-plug/-49997624'],
  ['ignition coil', 'https://shop.advanceautoparts.com/c4/ignition-coil/-49999417'],
  ['oxygen sensor', 'https://shop.advanceautoparts.com/c2/oxygen-sensors/81962'],
  ['maf sensor', 'https://shop.advanceautoparts.com/c4/air-flow-meter-and-mass-air/-49998072'],
  ['egr valve', 'https://shop.advanceautoparts.com/c4/egr-valve/-49999261'],
  ['catalytic converter', 'https://shop.advanceautoparts.com/c4/catalytic-converter/-49999460'],
  ['thermostat', 'https://shop.advanceautoparts.com/c4/thermostat/-49999546'],
  ['water pump', 'https://shop.advanceautoparts.com/c4/water-pump/-49998007'],
  ['radiator', 'https://shop.advanceautoparts.com/c4/radiator/-49999114'],
  ['fuel injector', 'https://shop.advanceautoparts.com/c4/fuel-injector/-49997874'],
  ['fuel pump', 'https://shop.advanceautoparts.com/c4/fuel-pump/-49998027'],
  ['fuel filter', 'https://shop.advanceautoparts.com/c4/fuel-filter/-49998334'],
  ['transmission fluid', 'https://shop.advanceautoparts.com/c2/transmission-fluids/82162'],
  ['serpentine belt', 'https://shop.advanceautoparts.com/c4/serpentine-belt/-49999720'],
  ['throttle body', 'https://shop.advanceautoparts.com/c4/throttle-body/13442'],
  ['crankshaft position sensor', 'https://shop.advanceautoparts.com/c2/engine-switches-sensors-and-relays/81774'],
  ['camshaft position sensor', 'https://shop.advanceautoparts.com/c2/engine-switches-sensors-and-relays/81774'],
  ['vehicle speed sensor', 'https://shop.advanceautoparts.com/c2/engine-switches-sensors-and-relays/81774'],
  ['timing chain', 'https://shop.advanceautoparts.com/c4/timing-belt/-49999444'],
  ['air filter', 'https://shop.advanceautoparts.com/c2/air-filters/81576'],
  ['engine coolant', 'https://shop.advanceautoparts.com/c4/engine-coolant-and-antifreeze/13200'],
].sort((a, b) => b[0].length - a[0].length);

function partShopUrl(partName, vehicle) {
  // Strip parenthetical qualifiers like "(cyl 1)" or "(Bank 1, Sensor 1)"
  // for matching/searching, but keep the original text as the link label.
  const clean = partName.replace(/\s*\([^)]*\)/g, '').replace(/\s+/g, ' ').trim();
  const cleanLower = clean.toLowerCase();
  const match = AAP_CATEGORY_LINKS.find(([key]) => cleanLower.includes(key));
  if (match) return match[1];

  // No dedicated category page for this part — fall back to AAP's own
  // keyword search. There's no public fitment API to build a true
  // vehicle-filtered link, so instead we fold year/make/model into the
  // search text itself, giving their search engine vehicle context even
  // though it isn't a structured fitment filter.
  const vehicleBits = vehicle ? [vehicle.year, vehicle.make, vehicle.model].filter(Boolean) : [];
  const searchText = [...vehicleBits, clean].join(' ').trim();
  return `https://shop.advanceautoparts.com/web/SearchResults?searchTerm=${encodeURIComponent(searchText)}`;
}

// --- EmailJS configuration (for "Send me details in Email") ---
// To turn this on:
// 1. Sign up free at https://www.emailjs.com
// 2. Add an Email Service (e.g. Gmail) → copy its Service ID below.
// 3. Create an Email Template with these variables in it: {{to_email}}, {{subject}}, {{message}}
//    Important: on the template's "Settings" tab, set the "To Email" field to {{to_email}}.
// 4. Copy your Public Key from Account → General.
// 5. Paste all three values in place of the YOUR_... placeholders below.
const EMAILJS_PUBLIC_KEY = 'BOo56JEuNPYGYjPu0';
const EMAILJS_SERVICE_ID = 'service_d1v984v';
const EMAILJS_TEMPLATE_ID = 'template_xgcujjo';
const emailjsConfigured = ![EMAILJS_PUBLIC_KEY, EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID].some(v => v.startsWith('YOUR_'));

if (typeof emailjs !== 'undefined' && emailjsConfigured) {
  emailjs.init({ publicKey: EMAILJS_PUBLIC_KEY });
}

const codeInput = document.getElementById('code');
const suggestionsBox = document.getElementById('suggestions');
const form = document.getElementById('lookup-form');
const resultBox = document.getElementById('result');

// Remembers the most recently displayed lookup result, so the email
// button can send exactly what's on screen.
let currentEntry = null;
let currentVehicle = null;

codeInput.addEventListener('input', () => {
  const val = codeInput.value.trim().toUpperCase();
  suggestionsBox.innerHTML = '';
  if (!val) { suggestionsBox.classList.remove('show'); return; }

  const matches = DTC_DATA.filter(c => c.code.startsWith(val)).slice(0, 8);
  if (matches.length === 0) { suggestionsBox.classList.remove('show'); return; }

  matches.forEach(m => {
    const div = document.createElement('div');
    div.textContent = `${m.code} — ${m.title}`;
    div.addEventListener('click', () => {
      codeInput.value = m.code;
      suggestionsBox.classList.remove('show');
    });
    suggestionsBox.appendChild(div);
  });
  suggestionsBox.classList.add('show');
});

document.addEventListener('click', (e) => {
  if (!suggestionsBox.contains(e.target) && e.target !== codeInput) {
    suggestionsBox.classList.remove('show');
  }
});

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const make = document.getElementById('make').value.trim();
  const model = document.getElementById('model').value.trim();
  const year = document.getElementById('year').value.trim();
  const codeRaw = codeInput.value.trim().toUpperCase();

  const entry = DTC_DATA.find(c => c.code === codeRaw);

  resultBox.classList.remove('hidden');

  if (!entry) {
    currentEntry = null;
    currentVehicle = null;
    resultBox.innerHTML = `
      <p class="not-found">No match found for code "<strong>${escapeHtml(codeRaw)}</strong>".
      Double-check the code (format like P0301) or try another.</p>
    `;
    return;
  }

  currentEntry = entry;
  currentVehicle = { make, model, year };

  const vehicleLine = [year, make, model].filter(Boolean).join(' ');

  resultBox.innerHTML = `
    <h2><span class="code-badge">${entry.code}</span>${escapeHtml(entry.title)}</h2>
    <div class="system-tag">${escapeHtml(entry.system)}${vehicleLine ? ' · ' + escapeHtml(vehicleLine) : ''}</div>

    <h3>Likely Causes</h3>
    <ul>${entry.causes.map(c => `<li>${escapeHtml(c)}</li>`).join('')}</ul>

    <h3>Recommended Service</h3>
    <ul>${entry.service.map(s => `<li>${escapeHtml(s)}</li>`).join('')}</ul>

    <h3>Parts Commonly Needed</h3>
    <ul class="parts-list">${entry.parts.map(p => `<li>${escapeHtml(p)} — <a href="${partShopUrl(p, { make, model, year })}" target="_blank" rel="noopener noreferrer">Shop at Advance Auto Parts ↗</a></li>`).join('')}</ul>

    <h3>Who Can Fix This Near You</h3>
    <div class="nearby-block">
      <p class="nearby-intro">An Advance Auto Parts associate can often pull the same code for free and point you to the right part, but they can't perform repairs. For actual service, use your location to find nearby help.</p>
      <button type="button" id="find-nearby-btn" class="nearby-btn">📍 Use My Location to Find Nearby Help</button>
      <div id="nearby-results"></div>
    </div>
  `;
});

// --- Nearby help (uses the browser's own Geolocation API — only runs when
// the button below is clicked, and only after the browser's native
// permission prompt is accepted by the user. Nothing is sent anywhere
// until that happens.) ---

resultBox.addEventListener('click', (e) => {
  if (e.target && e.target.id === 'find-nearby-btn') {
    findNearbyHelp(e.target);
  }
});

// --- Send me details in Email (button sits next to Look Up. Uses EmailJS
// to send whatever code was most recently looked up straight to the
// address the customer types in — nothing is sent until they click Send.) ---

const emailLink = document.getElementById('email-link');
const emailFormEl = document.getElementById('email-form');
const emailInput = document.getElementById('email-input');
const emailSendBtn = document.getElementById('email-send-btn');
const emailStatusEl = document.getElementById('email-status');

emailLink.addEventListener('click', (e) => {
  e.preventDefault();
  emailFormEl.classList.toggle('hidden');
  emailStatusEl.textContent = '';
  emailStatusEl.className = 'email-status';
  if (!emailFormEl.classList.contains('hidden')) {
    if (!currentEntry) {
      emailStatusEl.textContent = 'Look up a code first, then click here to email yourself the results.';
      emailStatusEl.className = 'email-status email-error';
    } else {
      emailInput.focus();
    }
  }
});

emailSendBtn.addEventListener('click', () => {
  sendDetailsEmail(emailInput.value.trim(), emailStatusEl, emailSendBtn);
});

emailInput.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') {
    e.preventDefault();
    emailSendBtn.click();
  }
});

function buildEmailMessage(entry, vehicle) {
  const vehicleLine = [vehicle.year, vehicle.make, vehicle.model].filter(Boolean).join(' ');
  const lines = [];
  lines.push(`${entry.code} — ${entry.title}`);
  lines.push(entry.system + (vehicleLine ? ' · ' + vehicleLine : ''));
  lines.push('');
  lines.push('LIKELY CAUSES');
  entry.causes.forEach(c => lines.push('- ' + c));
  lines.push('');
  lines.push('RECOMMENDED SERVICE');
  entry.service.forEach(s => lines.push('- ' + s));
  lines.push('');
  lines.push('PARTS COMMONLY NEEDED');
  entry.parts.forEach(p => lines.push(`- ${p}: ${partShopUrl(p, vehicle)}`));
  lines.push('');
  lines.push('WHO CAN FIX THIS NEAR YOU');
  lines.push('An Advance Auto Parts associate can often pull the same code for free and point you to the right part (they cannot perform repairs).');
  lines.push('Find an Advance Auto Parts store: https://stores.advanceautoparts.com/');
  lines.push('Find nearby repair shops on Google Maps: https://www.google.com/maps/search/auto+repair+shop+near+me');
  lines.push('');
  lines.push('This tool provides general, code-based guidance only — it is not a substitute for a professional diagnosis. Sent from CheckEngine.');
  return lines.join('\n');
}

function sendDetailsEmail(email, statusEl, sendBtn) {
  if (!statusEl || !sendBtn) return;

  if (typeof emailjs === 'undefined' || !emailjsConfigured) {
    statusEl.textContent = 'Email sending isn’t set up yet on this site. (Site owner: add your EmailJS keys near the top of script.js.)';
    statusEl.className = 'email-status email-error';
    return;
  }

  if (!currentEntry) {
    statusEl.textContent = 'Look up a code first, then come back to email the results.';
    statusEl.className = 'email-status email-error';
    return;
  }

  const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRe.test(email)) {
    statusEl.textContent = 'Please enter a valid email address.';
    statusEl.className = 'email-status email-error';
    return;
  }

  sendBtn.disabled = true;
  sendBtn.textContent = 'Sending…';
  statusEl.textContent = '';
  statusEl.className = 'email-status';

  const message = buildEmailMessage(currentEntry, currentVehicle || {});

  emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, {
    to_email: email,
    subject: `Your CheckEngine results — ${currentEntry.code}`,
    code: currentEntry.code,
    title: currentEntry.title,
    message,
  }).then(() => {
    statusEl.textContent = `Sent! Check ${email} for the details.`;
    statusEl.className = 'email-status email-success';
    sendBtn.textContent = 'Send';
    sendBtn.disabled = false;
  }).catch((err) => {
    console.error('EmailJS error:', err);
    statusEl.textContent = 'Something went wrong sending the email. Please try again.';
    statusEl.className = 'email-status email-error';
    sendBtn.textContent = 'Send';
    sendBtn.disabled = false;
  });
}

function findNearbyHelp(button) {
  const out = document.getElementById('nearby-results');
  if (!navigator.geolocation) {
    out.innerHTML = `<p class="nearby-error">Your browser doesn't support location lookup. You can still search manually:
      <a href="https://www.google.com/maps/search/auto+repair+shop+near+me" target="_blank" rel="noopener noreferrer">Find repair shops on Google Maps ↗</a></p>`;
    return;
  }

  button.disabled = true;
  button.textContent = 'Locating…';
  out.innerHTML = '';

  navigator.geolocation.getCurrentPosition(
    (pos) => {
      button.remove();
      renderNearbyHelp(out, pos.coords.latitude, pos.coords.longitude);
    },
    (err) => {
      button.disabled = false;
      button.textContent = '📍 Use My Location to Find Nearby Help';
      const reason = err.code === err.PERMISSION_DENIED
        ? 'Location access was denied.'
        : 'Could not determine your location.';
      out.innerHTML = `<p class="nearby-error">${reason} You can still search manually:
        <a href="https://www.google.com/maps/search/auto+repair+shop+near+me" target="_blank" rel="noopener noreferrer">Find repair shops on Google Maps ↗</a> ·
        <a href="https://stores.advanceautoparts.com/" target="_blank" rel="noopener noreferrer">Find an Advance Auto Parts store ↗</a></p>`;
    },
    { enableHighAccuracy: false, timeout: 10000, maximumAge: 300000 }
  );
}

function renderNearbyHelp(out, lat, lng) {
  const mapsSearchUrl = `https://www.google.com/maps/search/auto+repair+shop/@${lat},${lng},14z`;
  const aapStoreUrl = `https://stores.advanceautoparts.com/search?q=${lat},${lng}`;

  out.innerHTML = `
    <div class="nearby-card">
      <div class="nearby-card-title">Advance Auto Parts (nearest store)</div>
      <p class="nearby-card-sub">Free check-engine code scan, battery/alternator/starter testing at most locations — call ahead to confirm.</p>
      <a href="${aapStoreUrl}" target="_blank" rel="noopener noreferrer">Find nearest store ↗</a>
    </div>
    <div class="nearby-card">
      <div class="nearby-card-title">Independent Repair Shops Near You</div>
      <div id="mechanic-list"><p class="nearby-loading">Looking up nearby shops…</p></div>
      <a href="${mapsSearchUrl}" target="_blank" rel="noopener noreferrer">Open full results in Google Maps ↗</a>
    </div>
  `;

  fetchNearbyMechanics(lat, lng)
    .then((shops) => {
      const list = document.getElementById('mechanic-list');
      if (!list) return;
      if (!shops.length) {
        list.innerHTML = `<p class="nearby-loading">No listed shops found nearby — try the Google Maps link below.</p>`;
        return;
      }
      list.innerHTML = `<ul class="mechanic-list">${shops.map(s => `
        <li>
          <div class="mechanic-name">${escapeHtml(s.name)}</div>
          ${s.address ? `<div class="mechanic-addr">${escapeHtml(s.address)}</div>` : ''}
          <a href="https://www.google.com/maps/dir/?api=1&destination=${s.lat},${s.lon}" target="_blank" rel="noopener noreferrer">Directions ↗</a>
          ${s.distanceMi ? `<span class="mechanic-dist">${s.distanceMi.toFixed(1)} mi</span>` : ''}
        </li>`).join('')}</ul>`;
    })
    .catch(() => {
      const list = document.getElementById('mechanic-list');
      if (list) list.innerHTML = `<p class="nearby-loading">Couldn't load a shop list right now — use the Google Maps link below instead.</p>`;
    });
}

async function fetchNearbyMechanics(lat, lng) {
  // OpenStreetMap Overpass API — free, no key required, community-sourced data.
  // Coverage/accuracy varies by area; treat as a starting point, not a vetted list.
  const query = `[out:json][timeout:10];(node["shop"="car_repair"](around:12000,${lat},${lng});node["amenity"="car_repair"](around:12000,${lat},${lng}););out center 12;`;
  const url = `https://overpass-api.de/api/interpreter?data=${encodeURIComponent(query)}`;

  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), 9000);

  const res = await fetch(url, { signal: controller.signal });
  clearTimeout(timer);
  if (!res.ok) throw new Error('Overpass request failed');
  const data = await res.json();

  const seen = new Set();
  const shops = (data.elements || [])
    .map((el) => {
      const elLat = el.lat ?? el.center?.lat;
      const elLon = el.lon ?? el.center?.lon;
      if (elLat == null || elLon == null) return null;
      const tags = el.tags || {};
      const name = tags.name || 'Auto Repair Shop';
      const addrParts = [tags['addr:housenumber'], tags['addr:street'], tags['addr:city']].filter(Boolean);
      return {
        name,
        address: addrParts.join(' '),
        lat: elLat,
        lon: elLon,
        distanceMi: haversineMiles(lat, lng, elLat, elLon),
      };
    })
    .filter((s) => {
      if (!s) return false;
      const key = `${s.name}|${s.lat.toFixed(3)}|${s.lon.toFixed(3)}`;
      if (seen.has(key)) return false;
      seen.add(key);
      return true;
    })
    .sort((a, b) => a.distanceMi - b.distanceMi)
    .slice(0, 6);

  return shops;
}

function haversineMiles(lat1, lon1, lat2, lon2) {
  const toRad = (d) => (d * Math.PI) / 180;
  const R = 3958.8;
  const dLat = toRad(lat2 - lat1);
  const dLon = toRad(lon2 - lon1);
  const a = Math.sin(dLat / 2) ** 2 + Math.cos(toRad(lat1)) * Math.cos(toRad(lat2)) * Math.sin(dLon / 2) ** 2;
  return R * 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
}

function escapeHtml(str) {
  const div = document.createElement('div');
  div.textContent = str;
  return div.innerHTML;
}

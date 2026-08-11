// Data is embedded directly (instead of fetched from data.json) so the page
// works when opened straight from disk (file://), where browsers block fetch().
const DTC_DATA = [
    { "code": "P0100", "title": "Mass Air Flow (MAF) Circuit Malfunction", "system": "Fuel/Air Metering", "causes": ["Dirty or contaminated MAF sensor", "Damaged wiring/connector to MAF sensor", "Air intake leak before the MAF sensor", "Failing MAF sensor"], "service": ["Inspect and clean MAF sensor", "Inspect intake ducting for cracks/leaks", "Check wiring harness continuity"], "parts": ["MAF sensor", "Intake air duct/hose", "MAF sensor cleaner"], "severity": { "level": "caution", "note": "Can cause rough idle, hesitation, or stalling at low speed. Safe for short trips, but avoid highway driving if the engine hesitates or stalls under load." }, "causesRanked": [{ "cause": "Dirty or contaminated MAF sensor", "likelihood": "~45%" }, { "cause": "Air intake leak before the MAF sensor", "likelihood": "~25%" }, { "cause": "Damaged wiring/connector", "likelihood": "~20%" }, { "cause": "Failing MAF sensor (needs replacement)", "likelihood": "~10%" }], "diyTests": ["With the engine off, unplug the MAF sensor connector and inspect for dirt, oil residue, or damaged pins.", "Spray the sensor element with MAF-safe cleaner (not brake cleaner) and let it air-dry fully before reconnecting.", "After cleaning, clear the code and test drive — if it returns immediately, check the intake boot/ducting ahead of the sensor for cracks or loose clamps by squeezing the hose while the engine runs and listening for a hissing vacuum leak."] },
    { "code": "P0101", "title": "MAF Circuit Range/Performance Problem", "system": "Fuel/Air Metering", "causes": ["Dirty MAF sensor", "Vacuum/intake leak", "Clogged air filter", "Exhaust leak affecting readings"], "service": ["Clean or replace MAF sensor", "Replace air filter", "Inspect for vacuum leaks"], "parts": ["MAF sensor", "Engine air filter", "Vacuum hoses"], "severity": { "level": "caution", "note": "Can cause rough idle, hesitation, or stalling at low speed. Safe for short trips, but avoid highway driving if the engine hesitates or stalls under load." }, "causesRanked": [{ "cause": "Dirty MAF sensor", "likelihood": "~40%" }, { "cause": "Vacuum/intake leak", "likelihood": "~30%" }, { "cause": "Clogged air filter", "likelihood": "~20%" }, { "cause": "Exhaust leak affecting readings", "likelihood": "~10%" }], "diyTests": ["Check and replace the engine air filter if it's visibly dirty — a clogged filter is a common, cheap trigger for this code.", "Clean the MAF sensor as described for P0100.", "Inspect intake hoses for cracks and listen for a hissing sound near hose joints with the engine idling."] },
    { "code": "P0102", "title": "MAF Circuit Low Input", "system": "Fuel/Air Metering", "causes": ["Wiring short to ground", "Faulty MAF sensor", "Loose or corroded connector"], "service": ["Test MAF sensor output voltage", "Repair/replace wiring", "Replace MAF sensor if faulty"], "parts": ["MAF sensor", "Wiring harness connector"] },
    { "code": "P0103", "title": "MAF Circuit High Input", "system": "Fuel/Air Metering", "causes": ["Short to voltage in MAF circuit", "Faulty MAF sensor", "Contaminated sensor element"], "service": ["Inspect wiring for shorts", "Clean or replace MAF sensor"], "parts": ["MAF sensor"] },
    { "code": "P0110", "title": "Intake Air Temperature (IAT) Circuit Malfunction", "system": "Fuel/Air Metering", "causes": ["Faulty IAT sensor", "Damaged wiring/connector"], "service": ["Test IAT sensor resistance", "Replace sensor or repair wiring"], "parts": ["IAT sensor"] },
    { "code": "P0113", "title": "IAT Circuit High Input", "system": "Fuel/Air Metering", "causes": ["Open circuit in IAT sensor wiring", "Faulty IAT sensor"], "service": ["Check wiring continuity", "Replace IAT sensor"], "parts": ["IAT sensor"], "severity": { "level": "safe", "note": "Minor effect on fuel mixture and fuel economy. Not a safety or damage concern — fine to keep driving normally until you can get it looked at." }, "causesRanked": [{ "cause": "Open circuit in IAT sensor wiring/connector", "likelihood": "~55%" }, { "cause": "Faulty IAT sensor", "likelihood": "~45%" }], "diyTests": ["Locate the IAT sensor (often built into the MAF sensor or air intake duct) and check the connector for corrosion or a loose pin.", "With the key on and engine off, use a multimeter to check for a broken wire between the sensor connector and the ECM."] },
    { "code": "P0116", "title": "Engine Coolant Temperature (ECT) Circuit Range/Performance", "system": "Fuel/Air Metering", "causes": ["Faulty ECT sensor", "Low coolant level", "Stuck thermostat"], "service": ["Check coolant level", "Test ECT sensor", "Replace thermostat if stuck"], "parts": ["Coolant temperature sensor", "Thermostat", "Coolant"], "severity": { "level": "caution", "note": "A wrong coolant reading can affect fuel mixture and cooling fan operation. Check your coolant level before driving further — if it's low, top it off and watch the temperature gauge closely." }, "causesRanked": [{ "cause": "Faulty ECT sensor", "likelihood": "~40%" }, { "cause": "Low coolant level", "likelihood": "~35%" }, { "cause": "Stuck thermostat", "likelihood": "~25%" }], "diyTests": ["Check coolant level in the reservoir when the engine is cold — top off if low and watch for a repeat drop, which points to a leak.", "Watch the temperature gauge on a drive — if it never settles at the normal midpoint, the sensor or thermostat is worth checking further."] },
    { "code": "P0117", "title": "ECT Circuit Low Input", "system": "Fuel/Air Metering", "causes": ["Short circuit in ECT wiring", "Faulty ECT sensor"], "service": ["Inspect wiring", "Replace ECT sensor"], "parts": ["Coolant temperature sensor"] },
    { "code": "P0118", "title": "ECT Circuit High Input", "system": "Fuel/Air Metering", "causes": ["Open circuit in ECT wiring", "Faulty ECT sensor"], "service": ["Inspect wiring", "Replace ECT sensor"], "parts": ["Coolant temperature sensor"] },
    { "code": "P0120", "title": "Throttle Position Sensor (TPS) Circuit Malfunction", "system": "Fuel/Air Metering", "causes": ["Faulty TPS", "Worn throttle body", "Wiring issue"], "service": ["Test TPS output", "Replace TPS or throttle body assembly"], "parts": ["Throttle position sensor", "Throttle body"] },
    { "code": "P0121", "title": "TPS Circuit Range/Performance Problem", "system": "Fuel/Air Metering", "causes": ["Misadjusted or worn TPS", "Carbon buildup in throttle body"], "service": ["Clean throttle body", "Recalibrate/replace TPS"], "parts": ["Throttle position sensor", "Throttle body cleaner"] },
    { "code": "P0125", "title": "Insufficient Coolant Temperature for Closed Loop Fuel Control", "system": "Fuel/Air Metering", "causes": ["Stuck-open thermostat", "Faulty ECT sensor", "Low coolant"], "service": ["Replace thermostat", "Check coolant system"], "parts": ["Thermostat", "Coolant temperature sensor"] },
    { "code": "P0128", "title": "Coolant Thermostat Below Regulating Temperature", "system": "Fuel/Air Metering", "causes": ["Stuck-open thermostat", "Low coolant level", "Faulty ECT sensor"], "service": ["Replace thermostat", "Top off/flush coolant"], "parts": ["Thermostat", "Coolant"], "severity": { "level": "safe", "note": "The engine is running cooler than normal, not hotter — not a damage risk. You'll likely notice weak heater output and slightly worse fuel economy until it's fixed." }, "causesRanked": [{ "cause": "Stuck-open thermostat", "likelihood": "~60%" }, { "cause": "Faulty ECT sensor", "likelihood": "~25%" }, { "cause": "Low coolant level", "likelihood": "~15%" }], "diyTests": ["Let the car warm up for 15-20 minutes and watch the temperature gauge — if it never reaches the normal operating range, the thermostat is likely stuck open.", "Feel the upper radiator hose after warm-up: if it stays cool for an unusually long time, that supports a stuck-open thermostat."] },
    { "code": "P0130", "title": "O2 Sensor Circuit Malfunction (Bank 1 Sensor 1)", "system": "Oxygen Sensor", "causes": ["Failed upstream O2 sensor", "Wiring/connector damage", "Exhaust leak near sensor"], "service": ["Test O2 sensor response", "Replace O2 sensor", "Repair exhaust leak"], "parts": ["Upstream (Bank 1, Sensor 1) oxygen sensor"], "severity": { "level": "safe", "note": "Mainly affects fuel economy and emissions, not drivability. Safe to keep driving, but fuel economy will likely suffer the longer it's ignored." }, "causesRanked": [{ "cause": "Failed upstream O2 sensor", "likelihood": "~55%" }, { "cause": "Exhaust leak near the sensor", "likelihood": "~25%" }, { "cause": "Wiring/connector damage", "likelihood": "~20%" }], "diyTests": ["Visually inspect the exhaust manifold/pipe near the sensor for black soot streaks or listen for a hissing sound at idle, which points to an exhaust leak rather than the sensor.", "Check the O2 sensor's electrical connector for corrosion, melted insulation, or a loose pin."] },
    { "code": "P0133", "title": "O2 Sensor Slow Response (Bank 1 Sensor 1)", "system": "Oxygen Sensor", "causes": ["Aged/contaminated O2 sensor", "Exhaust leak", "Fuel system issue"], "service": ["Replace O2 sensor", "Inspect exhaust for leaks"], "parts": ["Upstream oxygen sensor"], "severity": { "level": "safe", "note": "Mainly affects fuel economy and emissions, not drivability. Safe to keep driving, but fuel economy will likely suffer the longer it's ignored." }, "causesRanked": [{ "cause": "Aged/contaminated O2 sensor", "likelihood": "~60%" }, { "cause": "Exhaust leak", "likelihood": "~25%" }, { "cause": "Underlying fuel system issue", "likelihood": "~15%" }], "diyTests": ["O2 sensors naturally slow down with age (100k+ miles is common) — check your maintenance records for the last replacement.", "Inspect the exhaust for leaks as described for P0130 before replacing the sensor."] },
    { "code": "P0134", "title": "O2 Sensor No Activity Detected (Bank 1 Sensor 1)", "system": "Oxygen Sensor", "causes": ["Failed O2 sensor", "Open circuit in sensor wiring", "Exhaust leak"], "service": ["Test and replace O2 sensor", "Repair wiring"], "parts": ["Upstream oxygen sensor"] },
    { "code": "P0135", "title": "O2 Sensor Heater Circuit Malfunction (Bank 1 Sensor 1)", "system": "Oxygen Sensor", "causes": ["Failed sensor heater element", "Blown fuse", "Wiring issue"], "service": ["Test heater circuit resistance", "Replace O2 sensor"], "parts": ["Upstream oxygen sensor", "Fuse"], "severity": { "level": "safe", "note": "Mainly affects fuel economy and emissions, not drivability. Safe to keep driving, but fuel economy will likely suffer the longer it's ignored." }, "causesRanked": [{ "cause": "Failed sensor heater element (sensor itself)", "likelihood": "~60%" }, { "cause": "Blown fuse", "likelihood": "~20%" }, { "cause": "Wiring issue", "likelihood": "~20%" }], "diyTests": ["Check the fuse box for a blown O2 sensor heater fuse before assuming the sensor has failed — a 2-minute check that can save a replacement.", "With the key on and engine off, use a multimeter across the heater circuit pins on the sensor connector to check for the expected resistance from your vehicle's spec."] },
    { "code": "P0136", "title": "O2 Sensor Circuit Malfunction (Bank 1 Sensor 2)", "system": "Oxygen Sensor", "causes": ["Failed downstream O2 sensor", "Wiring damage", "Exhaust/catalyst issue"], "service": ["Test and replace O2 sensor"], "parts": ["Downstream (Bank 1, Sensor 2) oxygen sensor"] },
    { "code": "P0141", "title": "O2 Sensor Heater Circuit Malfunction (Bank 1 Sensor 2)", "system": "Oxygen Sensor", "causes": ["Failed heater element", "Wiring/fuse issue"], "service": ["Test heater circuit", "Replace O2 sensor"], "parts": ["Downstream oxygen sensor"] },
    { "code": "P0171", "title": "System Too Lean (Bank 1)", "system": "Fuel Trim", "causes": ["Vacuum leak", "Weak fuel pump", "Dirty/faulty MAF sensor", "Clogged fuel injector(s)"], "service": ["Inspect for vacuum leaks", "Test fuel pressure", "Clean/replace injectors", "Clean MAF sensor"], "parts": ["Fuel injectors", "MAF sensor", "Fuel pump", "Vacuum hoses"], "severity": { "level": "caution", "note": "Running lean over time can cause spark plug and engine damage from excess heat, and often causes rough idle or hesitation. Fine for short trips, but don't ignore it for long." }, "causesRanked": [{ "cause": "Vacuum leak", "likelihood": "~40%" }, { "cause": "Dirty/faulty MAF sensor", "likelihood": "~25%" }, { "cause": "Weak fuel pump", "likelihood": "~20%" }, { "cause": "Clogged fuel injector(s)", "likelihood": "~15%" }], "diyTests": ["With the engine idling, spray a small amount of soapy water around intake hoses, gaskets, and the throttle body — bubbling or a change in idle reveals a vacuum leak.", "Clean the MAF sensor as described for P0100.", "If you have an OBD-II reader, check the fuel trim numbers — high positive long-term fuel trim confirms a lean condition."] },
    { "code": "P0172", "title": "System Too Rich (Bank 1)", "system": "Fuel Trim", "causes": ["Leaking fuel injector(s)", "Faulty MAF or O2 sensor", "High fuel pressure", "Clogged air filter"], "service": ["Test fuel pressure regulator", "Inspect injectors", "Replace air filter"], "parts": ["Fuel injectors", "Fuel pressure regulator", "O2 sensor", "Air filter"], "severity": { "level": "caution", "note": "A rich mixture wastes fuel and can foul spark plugs and damage the catalytic converter over time. Safe for short trips, but get it looked at soon." }, "causesRanked": [{ "cause": "Faulty MAF or O2 sensor", "likelihood": "~35%" }, { "cause": "Leaking fuel injector(s)", "likelihood": "~30%" }, { "cause": "Clogged air filter", "likelihood": "~20%" }, { "cause": "High fuel pressure", "likelihood": "~15%" }], "diyTests": ["Check and replace the air filter if dirty — a clogged filter is a very common, cheap fix for this code.", "Smell the exhaust for a strong fuel odor, which points to a leaking injector or high fuel pressure.", "Clean the MAF sensor as described for P0100."] },
    { "code": "P0174", "title": "System Too Lean (Bank 2)", "system": "Fuel Trim", "causes": ["Vacuum leak", "Weak fuel pump", "Dirty MAF sensor"], "service": ["Inspect for vacuum leaks", "Test fuel pressure", "Clean MAF sensor"], "parts": ["Fuel injectors", "MAF sensor", "Fuel pump"], "severity": { "level": "caution", "note": "Running lean over time can cause spark plug and engine damage from excess heat, and often causes rough idle or hesitation. Fine for short trips, but don't ignore it for long." }, "causesRanked": [{ "cause": "Vacuum leak", "likelihood": "~45%" }, { "cause": "Dirty MAF sensor", "likelihood": "~30%" }, { "cause": "Weak fuel pump", "likelihood": "~25%" }], "diyTests": ["With the engine idling, spray a small amount of soapy water around intake hoses, gaskets, and the throttle body — bubbling or a change in idle reveals a vacuum leak.", "Clean the MAF sensor as described for P0100.", "If you have an OBD-II reader, check the fuel trim numbers for bank 2."] },
    { "code": "P0175", "title": "System Too Rich (Bank 2)", "system": "Fuel Trim", "causes": ["Leaking fuel injector(s)", "Faulty O2 sensor", "High fuel pressure"], "service": ["Inspect injectors", "Test fuel pressure regulator"], "parts": ["Fuel injectors", "Fuel pressure regulator", "O2 sensor"], "severity": { "level": "caution", "note": "A rich mixture wastes fuel and can foul spark plugs and damage the catalytic converter over time. Safe for short trips, but get it looked at soon." }, "causesRanked": [{ "cause": "Faulty O2 sensor", "likelihood": "~40%" }, { "cause": "Leaking fuel injector(s)", "likelihood": "~35%" }, { "cause": "High fuel pressure", "likelihood": "~25%" }], "diyTests": ["Smell the exhaust for a strong fuel odor, which points to a leaking injector or high fuel pressure.", "Have the fuel pressure tested against spec at a parts store or with a gauge if you have one.", "If those check out fine, have the O2 sensor tested."] },
    { "code": "P0217", "title": "Engine Overtemperature Condition", "system": "Engine Cooling", "causes": ["Low coolant", "Failed water pump", "Clogged radiator", "Faulty cooling fan"], "service": ["Check coolant level and leaks", "Test water pump and thermostat", "Inspect cooling fan operation"], "parts": ["Water pump", "Radiator", "Cooling fan", "Coolant"] },
    { "code": "P0230", "title": "Fuel Pump Primary Circuit Malfunction", "system": "Fuel System", "causes": ["Failed fuel pump relay", "Wiring fault", "Failing fuel pump"], "service": ["Test fuel pump relay and wiring", "Replace fuel pump if needed"], "parts": ["Fuel pump", "Fuel pump relay", "Fuse"], "severity": { "level": "caution", "note": "This can cause sudden stalling or a no-start. If the engine is running fine right now, get it checked soon — if it stalls or struggles to start, avoid highway driving and have it towed rather than risk being stranded." }, "causesRanked": [{ "cause": "Failed fuel pump relay", "likelihood": "~45%" }, { "cause": "Wiring fault", "likelihood": "~30%" }, { "cause": "Failing fuel pump", "likelihood": "~25%" }], "diyTests": ["Locate the fuel pump relay in the fuse/relay box (check your owner's manual) and swap it with an identical relay from elsewhere in the box to see if the symptom follows the relay.", "Turn the key to 'on' without starting and listen for a 2-second whirring sound from the fuel tank area — no sound points to the pump or its wiring rather than the relay."] },
    { "code": "P0300", "title": "Random/Multiple Cylinder Misfire Detected", "system": "Ignition/Misfire", "causes": ["Worn spark plugs", "Failing ignition coil(s)", "Vacuum leak", "Low fuel pressure", "Clogged injectors"], "service": ["Inspect/replace spark plugs", "Test ignition coils", "Check fuel pressure", "Inspect for vacuum leaks"], "parts": ["Spark plugs", "Ignition coils", "Fuel injectors"], "severity": { "level": "caution", "note": "If your check engine light is flashing (not just steadily on), stop driving as soon as it's safe — a flashing light during a misfire means raw fuel is reaching the catalytic converter and can destroy it within minutes. If the light is steady/solid, it's safe for short trips, but get it diagnosed soon." }, "causesRanked": [{ "cause": "Worn spark plugs", "likelihood": "~35%" }, { "cause": "Failing ignition coil(s)", "likelihood": "~30%" }, { "cause": "Vacuum leak", "likelihood": "~15%" }, { "cause": "Low fuel pressure", "likelihood": "~10%" }, { "cause": "Clogged injectors", "likelihood": "~10%" }], "diyTests": ["Pop the hood and check spark plug wires/coil boots for cracking or a burnt smell.", "If comfortable removing a spark plug, check its tip: black/oily fouling points to a rich mixture or oil leak, a very light/white tip points to lean or overheating.", "If your engine uses coil-on-plug ignition, swap coils between cylinders and see if the misfire follows the coil to a different cylinder — that confirms a bad coil rather than a plug or injector."] },
    { "code": "P0301", "title": "Cylinder 1 Misfire Detected", "system": "Ignition/Misfire", "causes": ["Faulty spark plug/coil on cylinder 1", "Low compression", "Clogged/leaking injector"], "service": ["Swap coil/plug to isolate fault", "Compression test", "Inspect injector"], "parts": ["Spark plug (cyl 1)", "Ignition coil (cyl 1)", "Fuel injector (cyl 1)"], "severity": { "level": "caution", "note": "If your check engine light is flashing (not just steadily on), stop driving as soon as it's safe — a flashing light during a misfire means raw fuel is reaching the catalytic converter and can destroy it within minutes. If the light is steady/solid, it's safe for short trips, but get it diagnosed soon." }, "causesRanked": [{ "cause": "Faulty spark plug or ignition coil on that cylinder", "likelihood": "~55%" }, { "cause": "Clogged or leaking injector on that cylinder", "likelihood": "~25%" }, { "cause": "Low compression (valve, ring, or head gasket issue)", "likelihood": "~20%" }], "diyTests": ["Swap the spark plug and/or ignition coil from the misfiring cylinder with a known-good one from another cylinder — if the misfire moves with it, you've found the bad part.", "If the misfire stays on the same cylinder after swapping parts, a compression test is the next step to rule out an internal engine issue."] },
    { "code": "P0302", "title": "Cylinder 2 Misfire Detected", "system": "Ignition/Misfire", "causes": ["Faulty spark plug/coil on cylinder 2", "Low compression", "Clogged/leaking injector"], "service": ["Swap coil/plug to isolate fault", "Compression test"], "parts": ["Spark plug (cyl 2)", "Ignition coil (cyl 2)", "Fuel injector (cyl 2)"], "severity": { "level": "caution", "note": "If your check engine light is flashing (not just steadily on), stop driving as soon as it's safe — a flashing light during a misfire means raw fuel is reaching the catalytic converter and can destroy it within minutes. If the light is steady/solid, it's safe for short trips, but get it diagnosed soon." }, "causesRanked": [{ "cause": "Faulty spark plug or ignition coil on that cylinder", "likelihood": "~55%" }, { "cause": "Clogged or leaking injector on that cylinder", "likelihood": "~25%" }, { "cause": "Low compression (valve, ring, or head gasket issue)", "likelihood": "~20%" }], "diyTests": ["Swap the spark plug and/or ignition coil from the misfiring cylinder with a known-good one from another cylinder — if the misfire moves with it, you've found the bad part.", "If the misfire stays on the same cylinder after swapping parts, a compression test is the next step to rule out an internal engine issue."] },
    { "code": "P0303", "title": "Cylinder 3 Misfire Detected", "system": "Ignition/Misfire", "causes": ["Faulty spark plug/coil on cylinder 3", "Low compression", "Clogged/leaking injector"], "service": ["Swap coil/plug to isolate fault", "Compression test"], "parts": ["Spark plug (cyl 3)", "Ignition coil (cyl 3)", "Fuel injector (cyl 3)"], "severity": { "level": "caution", "note": "If your check engine light is flashing (not just steadily on), stop driving as soon as it's safe — a flashing light during a misfire means raw fuel is reaching the catalytic converter and can destroy it within minutes. If the light is steady/solid, it's safe for short trips, but get it diagnosed soon." }, "causesRanked": [{ "cause": "Faulty spark plug or ignition coil on that cylinder", "likelihood": "~55%" }, { "cause": "Clogged or leaking injector on that cylinder", "likelihood": "~25%" }, { "cause": "Low compression (valve, ring, or head gasket issue)", "likelihood": "~20%" }], "diyTests": ["Swap the spark plug and/or ignition coil from the misfiring cylinder with a known-good one from another cylinder — if the misfire moves with it, you've found the bad part.", "If the misfire stays on the same cylinder after swapping parts, a compression test is the next step to rule out an internal engine issue."] },
    { "code": "P0304", "title": "Cylinder 4 Misfire Detected", "system": "Ignition/Misfire", "causes": ["Faulty spark plug/coil on cylinder 4", "Low compression", "Clogged/leaking injector"], "service": ["Swap coil/plug to isolate fault", "Compression test"], "parts": ["Spark plug (cyl 4)", "Ignition coil (cyl 4)", "Fuel injector (cyl 4)"], "severity": { "level": "caution", "note": "If your check engine light is flashing (not just steadily on), stop driving as soon as it's safe — a flashing light during a misfire means raw fuel is reaching the catalytic converter and can destroy it within minutes. If the light is steady/solid, it's safe for short trips, but get it diagnosed soon." }, "causesRanked": [{ "cause": "Faulty spark plug or ignition coil on that cylinder", "likelihood": "~55%" }, { "cause": "Clogged or leaking injector on that cylinder", "likelihood": "~25%" }, { "cause": "Low compression (valve, ring, or head gasket issue)", "likelihood": "~20%" }], "diyTests": ["Swap the spark plug and/or ignition coil from the misfiring cylinder with a known-good one from another cylinder — if the misfire moves with it, you've found the bad part.", "If the misfire stays on the same cylinder after swapping parts, a compression test is the next step to rule out an internal engine issue."] },
    { "code": "P0305", "title": "Cylinder 5 Misfire Detected", "system": "Ignition/Misfire", "causes": ["Faulty spark plug/coil on cylinder 5", "Low compression", "Clogged/leaking injector"], "service": ["Swap coil/plug to isolate fault", "Compression test"], "parts": ["Spark plug (cyl 5)", "Ignition coil (cyl 5)", "Fuel injector (cyl 5)"], "severity": { "level": "caution", "note": "If your check engine light is flashing (not just steadily on), stop driving as soon as it's safe — a flashing light during a misfire means raw fuel is reaching the catalytic converter and can destroy it within minutes. If the light is steady/solid, it's safe for short trips, but get it diagnosed soon." }, "causesRanked": [{ "cause": "Faulty spark plug or ignition coil on that cylinder", "likelihood": "~55%" }, { "cause": "Clogged or leaking injector on that cylinder", "likelihood": "~25%" }, { "cause": "Low compression (valve, ring, or head gasket issue)", "likelihood": "~20%" }], "diyTests": ["Swap the spark plug and/or ignition coil from the misfiring cylinder with a known-good one from another cylinder — if the misfire moves with it, you've found the bad part.", "If the misfire stays on the same cylinder after swapping parts, a compression test is the next step to rule out an internal engine issue."] },
    { "code": "P0306", "title": "Cylinder 6 Misfire Detected", "system": "Ignition/Misfire", "causes": ["Faulty spark plug/coil on cylinder 6", "Low compression", "Clogged/leaking injector"], "service": ["Swap coil/plug to isolate fault", "Compression test"], "parts": ["Spark plug (cyl 6)", "Ignition coil (cyl 6)", "Fuel injector (cyl 6)"], "severity": { "level": "caution", "note": "If your check engine light is flashing (not just steadily on), stop driving as soon as it's safe — a flashing light during a misfire means raw fuel is reaching the catalytic converter and can destroy it within minutes. If the light is steady/solid, it's safe for short trips, but get it diagnosed soon." }, "causesRanked": [{ "cause": "Faulty spark plug or ignition coil on that cylinder", "likelihood": "~55%" }, { "cause": "Clogged or leaking injector on that cylinder", "likelihood": "~25%" }, { "cause": "Low compression (valve, ring, or head gasket issue)", "likelihood": "~20%" }], "diyTests": ["Swap the spark plug and/or ignition coil from the misfiring cylinder with a known-good one from another cylinder — if the misfire moves with it, you've found the bad part.", "If the misfire stays on the same cylinder after swapping parts, a compression test is the next step to rule out an internal engine issue."] },
    { "code": "P0325", "title": "Knock Sensor Circuit Malfunction", "system": "Ignition Control", "causes": ["Faulty knock sensor", "Damaged wiring", "Loose sensor mounting"], "service": ["Test knock sensor", "Inspect/repair wiring", "Torque sensor mounting"], "parts": ["Knock sensor"], "severity": { "level": "caution", "note": "The engine computer often pulls timing to protect against knock, which reduces power but isn't itself dangerous. If you're also hearing an actual pinging/knocking sound from the engine, treat that as more urgent and avoid hard acceleration or low-octane fuel until it's checked." }, "causesRanked": [{ "cause": "Faulty knock sensor", "likelihood": "~50%" }, { "cause": "Damaged or corroded wiring", "likelihood": "~30%" }, { "cause": "Loose sensor mounting bolt", "likelihood": "~20%" }], "diyTests": ["Check that the knock sensor's mounting bolt is torqued down — a loose sensor is a common, free fix.", "Inspect the sensor's wiring harness for chafing or corrosion where it routes near the exhaust or engine block."] },
    { "code": "P0335", "title": "Crankshaft Position Sensor Circuit Malfunction", "system": "Ignition Control", "causes": ["Faulty crankshaft position sensor", "Damaged reluctor ring", "Wiring fault"], "service": ["Test sensor signal", "Replace sensor", "Inspect reluctor/tone ring"], "parts": ["Crankshaft position sensor"], "severity": { "level": "stop", "note": "This sensor tells the engine when to fire — a failure can cause sudden stalling or a no-start with little warning. If you've had any unexplained stalling along with this code, avoid highway driving and have it towed rather than risk stalling in traffic." }, "causesRanked": [{ "cause": "Faulty crankshaft position sensor", "likelihood": "~55%" }, { "cause": "Wiring fault/connector issue", "likelihood": "~30%" }, { "cause": "Damaged reluctor/tone ring", "likelihood": "~15%" }], "diyTests": ["Inspect the sensor's electrical connector for corrosion or a loose pin — a surprisingly common cause.", "If comfortable, visually check the sensor for oil contamination (common on engines where it's mounted near a leaking seal), which can cause an intermittent signal."] },
    { "code": "P0340", "title": "Camshaft Position Sensor Circuit Malfunction", "system": "Ignition Control", "causes": ["Faulty camshaft position sensor", "Timing chain/belt wear", "Wiring fault"], "service": ["Test sensor signal", "Inspect timing components"], "parts": ["Camshaft position sensor", "Timing chain/belt"], "severity": { "level": "caution", "note": "Many engines can still run on the crankshaft signal alone with a bad cam sensor, just roughly — but some will stall or fail to restart. Get it checked soon and avoid long trips until you know which category your vehicle falls into." }, "causesRanked": [{ "cause": "Faulty camshaft position sensor", "likelihood": "~55%" }, { "cause": "Wiring fault/connector issue", "likelihood": "~30%" }, { "cause": "Timing chain/belt wear affecting signal", "likelihood": "~15%" }], "diyTests": ["Inspect the sensor's electrical connector for corrosion or damage.", "Note whether the engine runs rough or hesitates versus stalling and failing to restart — the latter points more strongly to needing the sensor replaced soon."] },
    { "code": "P0341", "title": "Camshaft Position Sensor Range/Performance", "system": "Ignition Control", "causes": ["Sensor misalignment", "Timing chain stretch", "Faulty sensor"], "service": ["Inspect timing chain/belt", "Replace sensor"], "parts": ["Camshaft position sensor", "Timing chain kit"] },
    { "code": "P0401", "title": "EGR Flow Insufficient Detected", "system": "Emissions (EGR)", "causes": ["Clogged EGR passages", "Faulty EGR valve", "Carbon buildup"], "service": ["Clean EGR passages/valve", "Replace EGR valve"], "parts": ["EGR valve", "EGR gasket"] },
    { "code": "P0402", "title": "EGR Flow Excessive Detected", "system": "Emissions (EGR)", "causes": ["Stuck-open EGR valve", "Faulty EGR position sensor"], "service": ["Inspect/replace EGR valve", "Test EGR sensor"], "parts": ["EGR valve"] },
    { "code": "P0420", "title": "Catalyst System Efficiency Below Threshold (Bank 1)", "system": "Emissions (Catalytic Converter)", "causes": ["Failing catalytic converter", "Exhaust leak", "Faulty O2 sensor(s)", "Engine misfire damaging catalyst"], "service": ["Inspect exhaust for leaks", "Test O2 sensors", "Replace catalytic converter if confirmed failed"], "parts": ["Catalytic converter", "Oxygen sensors", "Exhaust gasket"], "severity": { "level": "safe", "note": "Not a safety issue and won't strand you. But check for an underlying misfire or oil-burning problem first — driving with those unresolved is what wears out a catalytic converter, and replacing the converter without fixing the root cause means it'll just fail again." }, "causesRanked": [{ "cause": "Underlying misfire or O2 sensor issue (not the converter itself)", "likelihood": "~40%" }, { "cause": "Actually failing/worn catalytic converter", "likelihood": "~35%" }, { "cause": "Exhaust leak upstream or downstream of the converter", "likelihood": "~25%" }], "diyTests": ["Check for any other stored codes, especially misfire or O2 sensor codes — those are common root causes and should be fixed first.", "Look underneath the car for a rusted-through or physically damaged exhaust section near the converter.", "If those check out clean, have a shop check exhaust backpressure or converter temperature differential to confirm the converter itself has failed."] },
    { "code": "P0430", "title": "Catalyst System Efficiency Below Threshold (Bank 2)", "system": "Emissions (Catalytic Converter)", "causes": ["Failing catalytic converter (bank 2)", "Exhaust leak", "Faulty O2 sensor(s)"], "service": ["Inspect exhaust system", "Test O2 sensors", "Replace catalytic converter"], "parts": ["Catalytic converter", "Oxygen sensors"], "severity": { "level": "safe", "note": "Not a safety issue and won't strand you. But check for an underlying misfire or oil-burning problem first — driving with those unresolved is what wears out a catalytic converter, and replacing the converter without fixing the root cause means it'll just fail again." }, "causesRanked": [{ "cause": "Underlying misfire or O2 sensor issue (not the converter itself)", "likelihood": "~40%" }, { "cause": "Actually failing/worn catalytic converter (bank 2)", "likelihood": "~35%" }, { "cause": "Exhaust leak upstream or downstream of the converter", "likelihood": "~25%" }], "diyTests": ["Check for any other stored codes, especially misfire or O2 sensor codes on bank 2 — those are common root causes and should be fixed first.", "Look underneath the car for a rusted-through or physically damaged exhaust section near the converter.", "If those check out clean, have a shop check exhaust backpressure or converter temperature differential to confirm the converter itself has failed."] },
    { "code": "P0440", "title": "Evaporative Emission (EVAP) System Malfunction", "system": "Emissions (EVAP)", "causes": ["Loose or damaged gas cap", "Cracked EVAP hose", "Faulty purge valve"], "service": ["Check/replace gas cap", "Inspect EVAP hoses", "Smoke test system"], "parts": ["Gas cap", "EVAP hoses", "Purge valve"], "severity": { "level": "safe", "note": "Purely an emissions-system code — no effect on how the car drives or runs. Completely fine to keep driving; just get the gas cap and hoses checked before your next emissions test." }, "causesRanked": [{ "cause": "Loose, cracked, or missing gas cap", "likelihood": "~55%" }, { "cause": "Cracked or disconnected EVAP hose", "likelihood": "~30%" }, { "cause": "Faulty purge valve", "likelihood": "~15%" }], "diyTests": ["Check that the gas cap is fully tightened (listen for the clicking sound) and inspect its rubber seal for cracks — a cheap and very common fix.", "With the engine off, look under the car and near the gas tank for any visibly cracked or disconnected black rubber/plastic EVAP hoses."] },
    { "code": "P0442", "title": "EVAP System Small Leak Detected", "system": "Emissions (EVAP)", "causes": ["Loose gas cap", "Small crack in EVAP hose", "Faulty seal"], "service": ["Replace gas cap", "Smoke test to find small leak"], "parts": ["Gas cap", "EVAP hose"], "severity": { "level": "safe", "note": "Purely an emissions-system code — no effect on how the car drives or runs. Completely fine to keep driving; just get the gas cap and hoses checked before your next emissions test." }, "causesRanked": [{ "cause": "Loose or worn gas cap seal", "likelihood": "~60%" }, { "cause": "Small crack in an EVAP hose", "likelihood": "~30%" }, { "cause": "Faulty seal elsewhere in the system", "likelihood": "~10%" }], "diyTests": ["Check the gas cap first — it's the single most common cause of this exact code.", "If the cap checks out, a shop smoke test is the most reliable way to pinpoint a small EVAP leak — inexpensive and much faster than guessing."] },
    { "code": "P0446", "title": "EVAP Vent Control Circuit Malfunction", "system": "Emissions (EVAP)", "causes": ["Clogged/stuck vent valve", "Wiring fault"], "service": ["Inspect/replace vent valve", "Check wiring"], "parts": ["EVAP vent control valve"] },
    { "code": "P0455", "title": "EVAP System Large Leak Detected", "system": "Emissions (EVAP)", "causes": ["Missing/loose gas cap", "Disconnected or split EVAP hose", "Faulty purge/vent valve"], "service": ["Check gas cap and hoses", "Smoke test system"], "parts": ["Gas cap", "EVAP hose", "Purge valve"], "severity": { "level": "safe", "note": "Purely an emissions-system code — no effect on how the car drives or runs. Completely fine to keep driving; just get the gas cap and hoses checked before your next emissions test." }, "causesRanked": [{ "cause": "Missing or very loose gas cap", "likelihood": "~45%" }, { "cause": "Disconnected or split EVAP hose", "likelihood": "~40%" }, { "cause": "Faulty purge/vent valve stuck open", "likelihood": "~15%" }], "diyTests": ["Confirm the gas cap is actually present and tightened — sounds obvious, but it's the most common cause of this specific code.", "Visually trace the EVAP hoses from the gas tank forward for any that are visibly disconnected or split — a large leak is often easy to spot without special tools."] },
    { "code": "P0456", "title": "EVAP System Very Small Leak Detected", "system": "Emissions (EVAP)", "causes": ["Slightly loose gas cap", "Pinhole leak in hose or canister"], "service": ["Replace gas cap", "Smoke test EVAP system"], "parts": ["Gas cap", "EVAP canister"], "severity": { "level": "safe", "note": "Purely an emissions-system code — no effect on how the car drives or runs. Completely fine to keep driving; just get the gas cap and hoses checked before your next emissions test." }, "causesRanked": [{ "cause": "Slightly loose or worn gas cap seal", "likelihood": "~65%" }, { "cause": "Pinhole leak in a hose or the canister", "likelihood": "~35%" }], "diyTests": ["Check the gas cap first, same as P0442.", "This code detects extremely small leaks, so if the gas cap checks out, a professional smoke test is really the only practical way to find it — not worth hours of guesswork."] },
    { "code": "P0500", "title": "Vehicle Speed Sensor Malfunction", "system": "Transmission/Speed Sensing", "causes": ["Faulty vehicle speed sensor", "Damaged tone ring", "Wiring fault"], "service": ["Test speed sensor signal", "Replace sensor"], "parts": ["Vehicle speed sensor"] },
    { "code": "P0505", "title": "Idle Control System Malfunction", "system": "Idle Control", "causes": ["Dirty/faulty idle air control valve", "Vacuum leak", "Carbon buildup in throttle body"], "service": ["Clean throttle body/IAC valve", "Inspect for vacuum leaks"], "parts": ["Idle air control valve", "Throttle body cleaner"], "severity": { "level": "safe", "note": "Usually shows up as a rough, high, or low idle. Annoying but not dangerous in most cases — though if the idle is rough enough to stall at stoplights, be cautious in traffic until it's fixed." }, "causesRanked": [{ "cause": "Carbon buildup in the throttle body/idle passages", "likelihood": "~45%" }, { "cause": "Dirty or faulty idle air control valve", "likelihood": "~35%" }, { "cause": "Vacuum leak", "likelihood": "~20%" }], "diyTests": ["With the engine off and cool, remove the air intake duct and look into the throttle body for thick black, tar-like buildup around the throttle plate — clean it with throttle body cleaner and a rag if present.", "Perform the soapy-water vacuum leak test described for P0171 around the throttle body and intake gaskets."] },
    { "code": "P0506", "title": "Idle Control System RPM Lower Than Expected", "system": "Idle Control", "causes": ["Dirty throttle body", "Vacuum leak", "Faulty IAC valve"], "service": ["Clean throttle body", "Inspect vacuum lines"], "parts": ["Idle air control valve"] },
    { "code": "P0507", "title": "Idle Control System RPM Higher Than Expected", "system": "Idle Control", "causes": ["Vacuum leak", "Stuck-open IAC valve", "Throttle cable/body issue"], "service": ["Inspect for vacuum leaks", "Clean/replace IAC valve"], "parts": ["Idle air control valve", "Vacuum hoses"] },
    { "code": "P0600", "title": "Serial Communication Link Malfunction", "system": "Control Module", "causes": ["Wiring/connector fault on data bus", "Faulty control module"], "service": ["Inspect wiring/connectors", "Scan all modules for related codes"], "parts": ["Wiring harness connector"] },
    { "code": "P0601", "title": "Internal Control Module Memory Checksum Error", "system": "Control Module", "causes": ["Corrupted ECM/PCM memory", "Failing control module"], "service": ["Reflash/reprogram ECM", "Replace control module if needed"], "parts": ["Engine control module (ECM/PCM)"], "severity": { "level": "caution", "note": "Can cause unpredictable behavior across multiple systems, like transmission shifting or engine performance. Not usually an immediate safety issue, but avoid long trips until it's diagnosed since symptoms can vary." }, "causesRanked": [{ "cause": "Corrupted memory from a low-voltage event (weak battery, bad jump start, etc.)", "likelihood": "~65%" }, { "cause": "Failing control module (hardware)", "likelihood": "~35%" }], "diyTests": ["Check your battery voltage and connections — a weak battery or bad ground is a very common trigger for this exact code, and cheap to rule out.", "This one usually needs a scan tool to reflash/reprogram the module, so if the battery checks out fine, a shop visit is the practical next step rather than more DIY testing."] },
    { "code": "P0700", "title": "Transmission Control System Malfunction", "system": "Transmission", "causes": ["Fault detected by TCM (check separate transmission codes)", "Low transmission fluid", "Wiring issue"], "service": ["Scan for transmission-specific codes", "Check transmission fluid level/condition"], "parts": ["Transmission fluid", "Transmission filter"] },
    { "code": "P0705", "title": "Transmission Range Sensor Circuit Malfunction", "system": "Transmission", "causes": ["Faulty park/neutral position switch", "Wiring fault", "Misadjusted linkage"], "service": ["Test range sensor", "Adjust or replace switch"], "parts": ["Transmission range sensor (PNP switch)"] },
    { "code": "P0715", "title": "Input/Turbine Speed Sensor Circuit Malfunction", "system": "Transmission", "causes": ["Faulty input speed sensor", "Wiring fault", "Low/dirty transmission fluid"], "service": ["Test sensor signal", "Replace sensor", "Service transmission fluid"], "parts": ["Input/turbine speed sensor", "Transmission fluid"] },
    { "code": "P0720", "title": "Output Speed Sensor Circuit Malfunction", "system": "Transmission", "causes": ["Faulty output speed sensor", "Wiring fault"], "service": ["Test and replace sensor"], "parts": ["Output speed sensor"] },
    { "code": "P0730", "title": "Incorrect Gear Ratio", "system": "Transmission", "causes": ["Worn clutch packs/bands", "Low fluid", "Solenoid failure"], "service": ["Check fluid level/condition", "Diagnose internal transmission wear", "Test shift solenoids"], "parts": ["Transmission fluid", "Shift solenoids", "Transmission filter"] },
    { "code": "P0740", "title": "Torque Converter Clutch Circuit Malfunction", "system": "Transmission", "causes": ["Faulty torque converter clutch solenoid", "Low transmission fluid", "Wiring fault"], "service": ["Test TCC solenoid", "Check fluid level"], "parts": ["Torque converter clutch solenoid", "Transmission fluid"] },
    { "code": "P0743", "title": "Torque Converter Clutch Circuit Electrical", "system": "Transmission", "causes": ["Wiring short/open in TCC circuit", "Faulty solenoid"], "service": ["Inspect wiring", "Replace solenoid"], "parts": ["Torque converter clutch solenoid"] },

    // --- Expanded generic (SAE J2012) codes below. These are standardized
    // OBD-II codes that read the same way on every US OBD-II vehicle
    // (1996+), regardless of make. Manufacturer-specific codes (P1xxx and
    // beyond) are not included since their meaning varies by brand. ---

    { "code": "P0104", "title": "Mass Air Flow (MAF) Circuit Intermittent", "system": "Fuel/Air Metering", "causes": ["Loose or corroded MAF connector", "Damaged wiring harness", "Intermittent internal sensor fault"], "service": ["Inspect and clean MAF connector", "Check wiring for chafing/looseness", "Replace MAF sensor if intermittent fault persists"], "parts": ["MAF sensor", "Wiring harness connector"] },
    { "code": "P0105", "title": "Manifold Absolute Pressure (MAP)/Barometric Pressure Circuit Malfunction", "system": "Fuel/Air Metering", "causes": ["Faulty MAP sensor", "Vacuum leak/disconnected MAP hose", "Damaged wiring/connector"], "service": ["Inspect MAP vacuum hose for leaks/cracks", "Test MAP sensor output", "Replace sensor if faulty"], "parts": ["MAP sensor", "Vacuum hose"] },
    { "code": "P0106", "title": "MAP/Barometric Pressure Circuit Range/Performance Problem", "system": "Fuel/Air Metering", "causes": ["Vacuum leak", "Contaminated or failing MAP sensor", "Clogged MAP sensor port"], "service": ["Inspect for vacuum leaks", "Clean/replace MAP sensor"], "parts": ["MAP sensor", "Vacuum hose"] },
    { "code": "P0107", "title": "MAP Circuit Low Input", "system": "Fuel/Air Metering", "causes": ["Short to ground in MAP wiring", "Faulty MAP sensor", "Disconnected vacuum hose"], "service": ["Inspect wiring for shorts", "Check vacuum hose connection", "Replace MAP sensor if needed"], "parts": ["MAP sensor"] },
    { "code": "P0108", "title": "MAP Circuit High Input", "system": "Fuel/Air Metering", "causes": ["Short to voltage in MAP circuit", "Faulty MAP sensor", "Pinched/blocked vacuum hose"], "service": ["Inspect wiring for shorts", "Replace MAP sensor if faulty"], "parts": ["MAP sensor"] },
    { "code": "P0109", "title": "MAP/Barometric Pressure Circuit Intermittent", "system": "Fuel/Air Metering", "causes": ["Loose or corroded connector", "Intermittent wiring fault", "Failing MAP sensor"], "service": ["Inspect and clean connector", "Check wiring harness", "Replace sensor if fault persists"], "parts": ["MAP sensor", "Wiring harness connector"] },
    { "code": "P0111", "title": "Intake Air Temperature (IAT) Circuit Range/Performance Problem", "system": "Fuel/Air Metering", "causes": ["Faulty IAT sensor", "Sensor reading affected by engine heat soak", "Wiring issue"], "service": ["Test IAT sensor resistance vs. temperature", "Replace sensor if out of spec"], "parts": ["IAT sensor"] },
    { "code": "P0112", "title": "IAT Circuit Low Input", "system": "Fuel/Air Metering", "causes": ["Short to ground in IAT wiring", "Faulty IAT sensor"], "service": ["Inspect wiring for shorts", "Replace IAT sensor"], "parts": ["IAT sensor"] },
    { "code": "P0114", "title": "IAT Circuit Intermittent", "system": "Fuel/Air Metering", "causes": ["Loose/corroded connector", "Intermittent wiring fault", "Failing sensor"], "service": ["Inspect and clean connector", "Replace sensor if fault persists"], "parts": ["IAT sensor"] },
    { "code": "P0115", "title": "Engine Coolant Temperature (ECT) Circuit Malfunction", "system": "Fuel/Air Metering", "causes": ["Faulty ECT sensor", "Damaged wiring/connector", "Low coolant level"], "service": ["Check coolant level", "Test ECT sensor", "Repair wiring or replace sensor"], "parts": ["Coolant temperature sensor", "Coolant"] },
    { "code": "P0119", "title": "ECT Circuit Intermittent", "system": "Fuel/Air Metering", "causes": ["Loose/corroded connector", "Intermittent wiring fault", "Failing ECT sensor"], "service": ["Inspect and clean connector", "Replace sensor if fault persists"], "parts": ["Coolant temperature sensor"] },
    { "code": "P0122", "title": "Throttle Position Sensor (TPS) Circuit Low Input", "system": "Fuel/Air Metering", "causes": ["Short to ground in TPS wiring", "Faulty TPS", "Worn throttle body"], "service": ["Inspect wiring for shorts", "Test/replace TPS"], "parts": ["Throttle position sensor"] },
    { "code": "P0123", "title": "TPS Circuit High Input", "system": "Fuel/Air Metering", "causes": ["Short to voltage in TPS circuit", "Faulty TPS"], "service": ["Inspect wiring for shorts", "Replace TPS if faulty"], "parts": ["Throttle position sensor"] },
    { "code": "P0124", "title": "TPS Circuit Intermittent", "system": "Fuel/Air Metering", "causes": ["Loose/corroded connector", "Worn throttle body contacts", "Intermittent wiring fault"], "service": ["Inspect and clean connector/throttle body", "Replace TPS if fault persists"], "parts": ["Throttle position sensor", "Throttle body"] },
    { "code": "P0131", "title": "O2 Sensor Circuit Low Voltage (Bank 1 Sensor 1)", "system": "Oxygen Sensor", "causes": ["Failed upstream O2 sensor", "Exhaust leak near sensor", "Wiring short to ground"], "service": ["Inspect exhaust for leaks", "Test and replace O2 sensor"], "parts": ["Upstream (Bank 1, Sensor 1) oxygen sensor"] },
    { "code": "P0132", "title": "O2 Sensor Circuit High Voltage (Bank 1 Sensor 1)", "system": "Oxygen Sensor", "causes": ["Failed upstream O2 sensor", "Wiring short to voltage", "Contaminated sensor"], "service": ["Test O2 sensor output", "Replace O2 sensor", "Inspect wiring for shorts"], "parts": ["Upstream (Bank 1, Sensor 1) oxygen sensor"] },
    { "code": "P0137", "title": "O2 Sensor Circuit Low Voltage (Bank 1 Sensor 2)", "system": "Oxygen Sensor", "causes": ["Failed downstream O2 sensor", "Exhaust/catalyst issue", "Wiring short to ground"], "service": ["Inspect exhaust system", "Test and replace O2 sensor"], "parts": ["Downstream (Bank 1, Sensor 2) oxygen sensor"] },
    { "code": "P0138", "title": "O2 Sensor Circuit High Voltage (Bank 1 Sensor 2)", "system": "Oxygen Sensor", "causes": ["Failed downstream O2 sensor", "Wiring short to voltage"], "service": ["Test O2 sensor output", "Replace O2 sensor if faulty"], "parts": ["Downstream (Bank 1, Sensor 2) oxygen sensor"] },
    { "code": "P0139", "title": "O2 Sensor Circuit Slow Response (Bank 1 Sensor 2)", "system": "Oxygen Sensor", "causes": ["Aged/contaminated downstream O2 sensor", "Exhaust leak"], "service": ["Replace O2 sensor", "Inspect exhaust for leaks"], "parts": ["Downstream (Bank 1, Sensor 2) oxygen sensor"] },
    { "code": "P0140", "title": "O2 Sensor Circuit No Activity Detected (Bank 1 Sensor 2)", "system": "Oxygen Sensor", "causes": ["Failed downstream O2 sensor", "Open circuit in wiring"], "service": ["Test and replace O2 sensor", "Repair wiring"], "parts": ["Downstream (Bank 1, Sensor 2) oxygen sensor"] },
    { "code": "P0150", "title": "O2 Sensor Circuit Malfunction (Bank 2 Sensor 1)", "system": "Oxygen Sensor", "causes": ["Failed upstream O2 sensor (bank 2)", "Wiring/connector damage", "Exhaust leak near sensor"], "service": ["Test O2 sensor response", "Replace O2 sensor", "Repair exhaust leak"], "parts": ["Upstream (Bank 2, Sensor 1) oxygen sensor"] },
    { "code": "P0151", "title": "O2 Sensor Circuit Low Voltage (Bank 2 Sensor 1)", "system": "Oxygen Sensor", "causes": ["Failed upstream O2 sensor (bank 2)", "Exhaust leak", "Wiring short to ground"], "service": ["Inspect for exhaust leaks", "Test and replace O2 sensor"], "parts": ["Upstream (Bank 2, Sensor 1) oxygen sensor"] },
    { "code": "P0152", "title": "O2 Sensor Circuit High Voltage (Bank 2 Sensor 1)", "system": "Oxygen Sensor", "causes": ["Failed upstream O2 sensor (bank 2)", "Wiring short to voltage"], "service": ["Test O2 sensor output", "Replace O2 sensor"], "parts": ["Upstream (Bank 2, Sensor 1) oxygen sensor"] },
    { "code": "P0153", "title": "O2 Sensor Circuit Slow Response (Bank 2 Sensor 1)", "system": "Oxygen Sensor", "causes": ["Aged/contaminated O2 sensor", "Exhaust leak", "Fuel system issue"], "service": ["Replace O2 sensor", "Inspect exhaust for leaks"], "parts": ["Upstream (Bank 2, Sensor 1) oxygen sensor"] },
    { "code": "P0154", "title": "O2 Sensor Circuit No Activity Detected (Bank 2 Sensor 1)", "system": "Oxygen Sensor", "causes": ["Failed O2 sensor (bank 2)", "Open circuit in sensor wiring", "Exhaust leak"], "service": ["Test and replace O2 sensor", "Repair wiring"], "parts": ["Upstream (Bank 2, Sensor 1) oxygen sensor"] },
    { "code": "P0155", "title": "O2 Sensor Heater Circuit Malfunction (Bank 2 Sensor 1)", "system": "Oxygen Sensor", "causes": ["Failed sensor heater element", "Blown fuse", "Wiring issue"], "service": ["Test heater circuit resistance", "Replace O2 sensor"], "parts": ["Upstream (Bank 2, Sensor 1) oxygen sensor", "Fuse"] },
    { "code": "P0156", "title": "O2 Sensor Circuit Malfunction (Bank 2 Sensor 2)", "system": "Oxygen Sensor", "causes": ["Failed downstream O2 sensor (bank 2)", "Wiring damage", "Exhaust/catalyst issue"], "service": ["Test and replace O2 sensor"], "parts": ["Downstream (Bank 2, Sensor 2) oxygen sensor"] },
    { "code": "P0157", "title": "O2 Sensor Circuit Low Voltage (Bank 2 Sensor 2)", "system": "Oxygen Sensor", "causes": ["Failed downstream O2 sensor (bank 2)", "Exhaust leak", "Wiring short to ground"], "service": ["Inspect exhaust system", "Test and replace O2 sensor"], "parts": ["Downstream (Bank 2, Sensor 2) oxygen sensor"] },
    { "code": "P0158", "title": "O2 Sensor Circuit High Voltage (Bank 2 Sensor 2)", "system": "Oxygen Sensor", "causes": ["Failed downstream O2 sensor (bank 2)", "Wiring short to voltage"], "service": ["Test O2 sensor output", "Replace O2 sensor if faulty"], "parts": ["Downstream (Bank 2, Sensor 2) oxygen sensor"] },
    { "code": "P0159", "title": "O2 Sensor Circuit Slow Response (Bank 2 Sensor 2)", "system": "Oxygen Sensor", "causes": ["Aged/contaminated downstream O2 sensor", "Exhaust leak"], "service": ["Replace O2 sensor", "Inspect exhaust for leaks"], "parts": ["Downstream (Bank 2, Sensor 2) oxygen sensor"] },
    { "code": "P0160", "title": "O2 Sensor Circuit No Activity Detected (Bank 2 Sensor 2)", "system": "Oxygen Sensor", "causes": ["Failed downstream O2 sensor (bank 2)", "Open circuit in wiring"], "service": ["Test and replace O2 sensor", "Repair wiring"], "parts": ["Downstream (Bank 2, Sensor 2) oxygen sensor"] },
    { "code": "P0161", "title": "O2 Sensor Heater Circuit Malfunction (Bank 2 Sensor 2)", "system": "Oxygen Sensor", "causes": ["Failed heater element", "Wiring/fuse issue"], "service": ["Test heater circuit", "Replace O2 sensor"], "parts": ["Downstream (Bank 2, Sensor 2) oxygen sensor"] },
    { "code": "P0181", "title": "Fuel Temperature Sensor A Circuit Malfunction", "system": "Fuel System", "causes": ["Faulty fuel temperature sensor", "Damaged wiring/connector"], "service": ["Test fuel temperature sensor", "Repair wiring or replace sensor"], "parts": ["Fuel temperature sensor"] },
    { "code": "P0182", "title": "Fuel Temperature Sensor A Circuit Low Input", "system": "Fuel System", "causes": ["Short to ground in sensor wiring", "Faulty fuel temperature sensor"], "service": ["Inspect wiring for shorts", "Replace sensor"], "parts": ["Fuel temperature sensor"] },
    { "code": "P0183", "title": "Fuel Temperature Sensor A Circuit High Input", "system": "Fuel System", "causes": ["Short to voltage in sensor wiring", "Faulty fuel temperature sensor"], "service": ["Inspect wiring for shorts", "Replace sensor if faulty"], "parts": ["Fuel temperature sensor"] },
    { "code": "P0190", "title": "Fuel Rail Pressure Sensor Circuit Malfunction", "system": "Fuel System", "causes": ["Faulty fuel rail pressure sensor", "Damaged wiring/connector", "Fuel pump/regulator issue"], "service": ["Test fuel rail pressure sensor", "Check fuel pressure", "Replace sensor if faulty"], "parts": ["Fuel rail pressure sensor"] },
    { "code": "P0191", "title": "Fuel Rail Pressure Sensor Circuit Range/Performance", "system": "Fuel System", "causes": ["Contaminated/failing pressure sensor", "Fuel pressure regulator issue"], "service": ["Test fuel pressure against spec", "Replace sensor or regulator as needed"], "parts": ["Fuel rail pressure sensor", "Fuel pressure regulator"] },
    { "code": "P0192", "title": "Fuel Rail Pressure Sensor Circuit Low Input", "system": "Fuel System", "causes": ["Short to ground in sensor wiring", "Faulty pressure sensor"], "service": ["Inspect wiring for shorts", "Replace sensor"], "parts": ["Fuel rail pressure sensor"] },
    { "code": "P0193", "title": "Fuel Rail Pressure Sensor Circuit High Input", "system": "Fuel System", "causes": ["Short to voltage in sensor wiring", "Faulty pressure sensor"], "service": ["Inspect wiring for shorts", "Replace sensor if faulty"], "parts": ["Fuel rail pressure sensor"] },
    { "code": "P0201", "title": "Injector Circuit Malfunction — Cylinder 1", "system": "Fuel System", "causes": ["Faulty injector (cyl 1)", "Damaged wiring/connector", "Failed injector driver in ECM"], "service": ["Test injector resistance/response", "Repair wiring", "Replace injector if faulty"], "parts": ["Fuel injector (cyl 1)"] },
    { "code": "P0202", "title": "Injector Circuit Malfunction — Cylinder 2", "system": "Fuel System", "causes": ["Faulty injector (cyl 2)", "Damaged wiring/connector", "Failed injector driver in ECM"], "service": ["Test injector resistance/response", "Repair wiring", "Replace injector if faulty"], "parts": ["Fuel injector (cyl 2)"] },
    { "code": "P0203", "title": "Injector Circuit Malfunction — Cylinder 3", "system": "Fuel System", "causes": ["Faulty injector (cyl 3)", "Damaged wiring/connector", "Failed injector driver in ECM"], "service": ["Test injector resistance/response", "Repair wiring", "Replace injector if faulty"], "parts": ["Fuel injector (cyl 3)"] },
    { "code": "P0204", "title": "Injector Circuit Malfunction — Cylinder 4", "system": "Fuel System", "causes": ["Faulty injector (cyl 4)", "Damaged wiring/connector", "Failed injector driver in ECM"], "service": ["Test injector resistance/response", "Repair wiring", "Replace injector if faulty"], "parts": ["Fuel injector (cyl 4)"] },
    { "code": "P0205", "title": "Injector Circuit Malfunction — Cylinder 5", "system": "Fuel System", "causes": ["Faulty injector (cyl 5)", "Damaged wiring/connector", "Failed injector driver in ECM"], "service": ["Test injector resistance/response", "Repair wiring", "Replace injector if faulty"], "parts": ["Fuel injector (cyl 5)"] },
    { "code": "P0206", "title": "Injector Circuit Malfunction — Cylinder 6", "system": "Fuel System", "causes": ["Faulty injector (cyl 6)", "Damaged wiring/connector", "Failed injector driver in ECM"], "service": ["Test injector resistance/response", "Repair wiring", "Replace injector if faulty"], "parts": ["Fuel injector (cyl 6)"] },
    { "code": "P0351", "title": "Ignition Coil A Primary/Secondary Circuit Malfunction", "system": "Ignition/Misfire", "causes": ["Failing ignition coil A", "Damaged coil wiring/connector", "Worn spark plug on that cylinder"], "service": ["Swap coil to isolate fault", "Test coil primary/secondary resistance", "Replace coil and/or spark plug"], "parts": ["Ignition coil", "Spark plug"] },
    { "code": "P0352", "title": "Ignition Coil B Primary/Secondary Circuit Malfunction", "system": "Ignition/Misfire", "causes": ["Failing ignition coil B", "Damaged coil wiring/connector", "Worn spark plug on that cylinder"], "service": ["Swap coil to isolate fault", "Test coil resistance", "Replace coil and/or spark plug"], "parts": ["Ignition coil", "Spark plug"] },
    { "code": "P0353", "title": "Ignition Coil C Primary/Secondary Circuit Malfunction", "system": "Ignition/Misfire", "causes": ["Failing ignition coil C", "Damaged coil wiring/connector", "Worn spark plug on that cylinder"], "service": ["Swap coil to isolate fault", "Test coil resistance", "Replace coil and/or spark plug"], "parts": ["Ignition coil", "Spark plug"] },
    { "code": "P0354", "title": "Ignition Coil D Primary/Secondary Circuit Malfunction", "system": "Ignition/Misfire", "causes": ["Failing ignition coil D", "Damaged coil wiring/connector", "Worn spark plug on that cylinder"], "service": ["Swap coil to isolate fault", "Test coil resistance", "Replace coil and/or spark plug"], "parts": ["Ignition coil", "Spark plug"] },
    { "code": "P0355", "title": "Ignition Coil E Primary/Secondary Circuit Malfunction", "system": "Ignition/Misfire", "causes": ["Failing ignition coil E", "Damaged coil wiring/connector", "Worn spark plug on that cylinder"], "service": ["Swap coil to isolate fault", "Test coil resistance", "Replace coil and/or spark plug"], "parts": ["Ignition coil", "Spark plug"] },
    { "code": "P0356", "title": "Ignition Coil F Primary/Secondary Circuit Malfunction", "system": "Ignition/Misfire", "causes": ["Failing ignition coil F", "Damaged coil wiring/connector", "Worn spark plug on that cylinder"], "service": ["Swap coil to isolate fault", "Test coil resistance", "Replace coil and/or spark plug"], "parts": ["Ignition coil", "Spark plug"] },
    { "code": "P0326", "title": "Knock Sensor 1 Circuit Range/Performance (Bank 1 or Single Sensor)", "system": "Ignition Control", "causes": ["Faulty knock sensor", "Loose sensor mounting", "Engine mechanical noise interference"], "service": ["Test knock sensor signal", "Torque sensor mounting", "Replace sensor if faulty"], "parts": ["Knock sensor"] },
    { "code": "P0327", "title": "Knock Sensor 1 Circuit Low Input (Bank 1 or Single Sensor)", "system": "Ignition Control", "causes": ["Short to ground in wiring", "Faulty knock sensor"], "service": ["Inspect wiring for shorts", "Replace knock sensor"], "parts": ["Knock sensor"] },
    { "code": "P0328", "title": "Knock Sensor 1 Circuit High Input (Bank 1 or Single Sensor)", "system": "Ignition Control", "causes": ["Short to voltage in wiring", "Faulty knock sensor"], "service": ["Inspect wiring for shorts", "Replace knock sensor if faulty"], "parts": ["Knock sensor"] },
    { "code": "P0330", "title": "Knock Sensor 2 Circuit Malfunction (Bank 2)", "system": "Ignition Control", "causes": ["Faulty knock sensor (bank 2)", "Damaged wiring", "Loose sensor mounting"], "service": ["Test knock sensor", "Inspect/repair wiring", "Torque sensor mounting"], "parts": ["Knock sensor"] },
    { "code": "P0331", "title": "Knock Sensor 2 Circuit Range/Performance (Bank 2)", "system": "Ignition Control", "causes": ["Faulty knock sensor (bank 2)", "Loose mounting", "Engine noise interference"], "service": ["Test knock sensor signal", "Torque sensor mounting"], "parts": ["Knock sensor"] },
    { "code": "P0332", "title": "Knock Sensor 2 Circuit Low Input (Bank 2)", "system": "Ignition Control", "causes": ["Short to ground in wiring", "Faulty knock sensor"], "service": ["Inspect wiring for shorts", "Replace knock sensor"], "parts": ["Knock sensor"] },
    { "code": "P0333", "title": "Knock Sensor 2 Circuit High Input (Bank 2)", "system": "Ignition Control", "causes": ["Short to voltage in wiring", "Faulty knock sensor"], "service": ["Inspect wiring for shorts", "Replace knock sensor if faulty"], "parts": ["Knock sensor"] },
    { "code": "P0336", "title": "Crankshaft Position Sensor Circuit Range/Performance", "system": "Ignition Control", "causes": ["Faulty crankshaft position sensor", "Damaged reluctor/tone ring", "Wiring fault"], "service": ["Test sensor signal", "Inspect reluctor ring", "Replace sensor"], "parts": ["Crankshaft position sensor"] },
    { "code": "P0337", "title": "Crankshaft Position Sensor Circuit Low Input", "system": "Ignition Control", "causes": ["Short to ground in wiring", "Faulty sensor"], "service": ["Inspect wiring for shorts", "Replace sensor"], "parts": ["Crankshaft position sensor"] },
    { "code": "P0338", "title": "Crankshaft Position Sensor Circuit High Input", "system": "Ignition Control", "causes": ["Short to voltage in wiring", "Faulty sensor"], "service": ["Inspect wiring for shorts", "Replace sensor if faulty"], "parts": ["Crankshaft position sensor"] },
    { "code": "P0342", "title": "Camshaft Position Sensor Circuit Low Input", "system": "Ignition Control", "causes": ["Short to ground in wiring", "Faulty camshaft position sensor"], "service": ["Inspect wiring for shorts", "Replace sensor"], "parts": ["Camshaft position sensor"] },
    { "code": "P0343", "title": "Camshaft Position Sensor Circuit High Input", "system": "Ignition Control", "causes": ["Short to voltage in wiring", "Faulty camshaft position sensor"], "service": ["Inspect wiring for shorts", "Replace sensor if faulty"], "parts": ["Camshaft position sensor"] },
    { "code": "P0400", "title": "Exhaust Gas Recirculation (EGR) Flow Malfunction", "system": "Emissions (EGR)", "causes": ["Stuck or clogged EGR valve", "Faulty EGR position sensor", "Carbon buildup in EGR passages"], "service": ["Clean/replace EGR valve", "Test EGR position sensor", "Clean EGR passages"], "parts": ["EGR valve", "EGR gasket"] },
    { "code": "P0403", "title": "EGR Circuit Malfunction", "system": "Emissions (EGR)", "causes": ["Faulty EGR valve solenoid", "Damaged wiring/connector"], "service": ["Test EGR solenoid circuit", "Repair wiring or replace valve"], "parts": ["EGR valve"] },
    { "code": "P0405", "title": "EGR Sensor A Circuit Low", "system": "Emissions (EGR)", "causes": ["Short to ground in EGR position sensor wiring", "Faulty sensor"], "service": ["Inspect wiring for shorts", "Replace EGR position sensor"], "parts": ["EGR position sensor"] },
    { "code": "P0406", "title": "EGR Sensor A Circuit High", "system": "Emissions (EGR)", "causes": ["Short to voltage in EGR position sensor wiring", "Faulty sensor"], "service": ["Inspect wiring for shorts", "Replace EGR position sensor if faulty"], "parts": ["EGR position sensor"] },
    { "code": "P0410", "title": "Secondary Air Injection System Malfunction", "system": "Emissions (Secondary Air)", "causes": ["Faulty secondary air pump", "Stuck air injection valve", "Damaged hoses"], "service": ["Test air pump operation", "Inspect hoses and valve", "Replace faulty components"], "parts": ["Secondary air injection pump", "Air injection valve"] },
    { "code": "P0411", "title": "Secondary Air Injection System Incorrect Flow Detected", "system": "Emissions (Secondary Air)", "causes": ["Leaking or disconnected hose", "Failing air pump", "Stuck check valve"], "service": ["Inspect hoses for leaks/disconnection", "Test air pump and check valve"], "parts": ["Secondary air injection pump", "Check valve", "Hoses"] },
    { "code": "P0421", "title": "Warm Up Catalyst Efficiency Below Threshold (Bank 1)", "system": "Emissions (Catalytic Converter)", "causes": ["Aging or failing catalytic converter", "Exhaust leak", "Faulty O2 sensor(s)"], "service": ["Inspect exhaust for leaks", "Test O2 sensors", "Replace catalytic converter if confirmed failed"], "parts": ["Catalytic converter", "Oxygen sensors"] },
    { "code": "P0431", "title": "Warm Up Catalyst Efficiency Below Threshold (Bank 2)", "system": "Emissions (Catalytic Converter)", "causes": ["Aging or failing catalytic converter (bank 2)", "Exhaust leak", "Faulty O2 sensor(s)"], "service": ["Inspect exhaust system", "Test O2 sensors", "Replace catalytic converter"], "parts": ["Catalytic converter", "Oxygen sensors"] },
    { "code": "P0441", "title": "EVAP System Incorrect Purge Flow", "system": "Emissions (EVAP)", "causes": ["Faulty purge valve", "Blocked or leaking purge line", "Clogged charcoal canister"], "service": ["Test purge valve operation", "Inspect purge lines", "Replace canister/valve if needed"], "parts": ["Purge valve", "EVAP canister"], "severity": { "level": "safe", "note": "Purely an emissions-system code — no effect on how the car drives or runs. Completely fine to keep driving; just get it checked before your next emissions test." }, "causesRanked": [{ "cause": "Faulty purge valve", "likelihood": "~50%" }, { "cause": "Blocked or leaking purge line", "likelihood": "~30%" }, { "cause": "Clogged charcoal canister", "likelihood": "~20%" }], "diyTests": ["With the engine running, try to locate the purge valve (small solenoid, often near the throttle body) — it should click periodically; if silent, it may be stuck.", "Inspect the purge line hoses for cracks or a loose connection at the valve or canister."] },
    { "code": "P0443", "title": "EVAP Purge Control Valve Circuit Malfunction", "system": "Emissions (EVAP)", "causes": ["Faulty purge control valve", "Damaged wiring/connector"], "service": ["Test purge valve circuit", "Replace purge valve"], "parts": ["Purge valve"] },
    { "code": "P0449", "title": "EVAP Vent Valve/Solenoid Circuit Malfunction", "system": "Emissions (EVAP)", "causes": ["Faulty vent valve/solenoid", "Damaged wiring/connector"], "service": ["Test vent valve circuit", "Replace vent valve/solenoid"], "parts": ["EVAP vent control valve"] },
    { "code": "P0451", "title": "EVAP Pressure Sensor Range/Performance", "system": "Emissions (EVAP)", "causes": ["Faulty EVAP pressure sensor", "Blocked sense line"], "service": ["Inspect sense line", "Replace EVAP pressure sensor"], "parts": ["EVAP pressure sensor"] },
    { "code": "P0452", "title": "EVAP Pressure Sensor Low Input", "system": "Emissions (EVAP)", "causes": ["Short to ground in sensor wiring", "Faulty EVAP pressure sensor"], "service": ["Inspect wiring for shorts", "Replace sensor"], "parts": ["EVAP pressure sensor"] },
    { "code": "P0453", "title": "EVAP Pressure Sensor High Input", "system": "Emissions (EVAP)", "causes": ["Short to voltage in sensor wiring", "Faulty EVAP pressure sensor"], "service": ["Inspect wiring for shorts", "Replace sensor if faulty"], "parts": ["EVAP pressure sensor"] },
    { "code": "P0501", "title": "Vehicle Speed Sensor Range/Performance", "system": "Transmission/Speed Sensing", "causes": ["Faulty vehicle speed sensor", "Damaged tone ring", "Wiring fault"], "service": ["Test speed sensor signal", "Inspect tone ring", "Replace sensor"], "parts": ["Vehicle speed sensor"] },
    { "code": "P0502", "title": "Vehicle Speed Sensor Low Input", "system": "Transmission/Speed Sensing", "causes": ["Short to ground in wiring", "Faulty vehicle speed sensor"], "service": ["Inspect wiring for shorts", "Replace sensor"], "parts": ["Vehicle speed sensor"] },
    { "code": "P0503", "title": "Vehicle Speed Sensor Intermittent/Erratic/High", "system": "Transmission/Speed Sensing", "causes": ["Loose/corroded connector", "Damaged tone ring", "Intermittent wiring fault"], "service": ["Inspect connector and tone ring", "Replace sensor if fault persists"], "parts": ["Vehicle speed sensor"] },
    { "code": "P0520", "title": "Engine Oil Pressure Sensor/Switch Circuit Malfunction", "system": "Engine Lubrication", "causes": ["Faulty oil pressure sensor/switch", "Damaged wiring/connector", "Low oil level"], "service": ["Check oil level", "Test oil pressure sensor", "Replace sensor if faulty"], "parts": ["Oil pressure sensor/switch", "Engine oil"] },
    { "code": "P0521", "title": "Engine Oil Pressure Sensor/Switch Range/Performance", "system": "Engine Lubrication", "causes": ["Faulty oil pressure sensor", "Actual low/high oil pressure condition"], "service": ["Verify actual oil pressure with gauge", "Replace sensor if reading is inaccurate"], "parts": ["Oil pressure sensor/switch"] },
    { "code": "P0522", "title": "Engine Oil Pressure Sensor/Switch Low Voltage", "system": "Engine Lubrication", "causes": ["Short to ground in wiring", "Faulty sensor", "Low oil pressure"], "service": ["Check oil level/pressure", "Inspect wiring", "Replace sensor"], "parts": ["Oil pressure sensor/switch"] },
    { "code": "P0523", "title": "Engine Oil Pressure Sensor/Switch High Voltage", "system": "Engine Lubrication", "causes": ["Short to voltage in wiring", "Faulty sensor"], "service": ["Inspect wiring for shorts", "Replace sensor if faulty"], "parts": ["Oil pressure sensor/switch"] },
    { "code": "P0530", "title": "A/C Refrigerant Pressure Sensor Circuit Malfunction", "system": "HVAC", "causes": ["Faulty A/C pressure sensor", "Low refrigerant charge", "Damaged wiring/connector"], "service": ["Check refrigerant charge", "Test pressure sensor", "Replace sensor if faulty"], "parts": ["A/C refrigerant pressure sensor"] },
    { "code": "P0551", "title": "Power Steering Pressure Sensor Circuit Malfunction", "system": "Power Steering", "causes": ["Faulty power steering pressure sensor", "Damaged wiring/connector", "Low power steering fluid"], "service": ["Check power steering fluid level", "Test pressure sensor", "Replace sensor if faulty"], "parts": ["Power steering pressure sensor", "Power steering fluid"] },
    { "code": "P0562", "title": "System Voltage Low", "system": "Charging System", "causes": ["Weak or failing battery", "Failing alternator", "Loose/corroded battery cables"], "service": ["Test battery and charging voltage", "Inspect battery cables/terminals", "Replace battery or alternator as needed"], "parts": ["Battery", "Alternator"] },
    { "code": "P0563", "title": "System Voltage High", "system": "Charging System", "causes": ["Faulty voltage regulator", "Failing alternator", "Bad battery cell"], "service": ["Test charging system voltage", "Replace alternator/regulator if overcharging"], "parts": ["Alternator", "Battery"] },
    { "code": "P0602", "title": "Control Module Programming Error", "system": "Control Module", "causes": ["Incomplete or corrupted ECM/PCM programming", "Failed reflash"], "service": ["Reflash/reprogram ECM with correct calibration"], "parts": ["Engine control module (ECM/PCM)"] },
    { "code": "P0603", "title": "Internal Control Module Keep Alive Memory (KAM) Error", "system": "Control Module", "causes": ["Loss of battery power to ECM", "Corrupted KAM memory", "Failing control module"], "service": ["Check for battery/power interruptions", "Reset/reprogram ECM", "Replace module if persistent"], "parts": ["Engine control module (ECM/PCM)"] },
    { "code": "P0604", "title": "Internal Control Module RAM Error", "system": "Control Module", "causes": ["Corrupted ECM memory", "Failing control module"], "service": ["Reflash/reprogram ECM", "Replace control module if needed"], "parts": ["Engine control module (ECM/PCM)"] },
    { "code": "P0605", "title": "Internal Control Module ROM Error", "system": "Control Module", "causes": ["Corrupted ECM firmware", "Failing control module"], "service": ["Reflash/reprogram ECM", "Replace control module if needed"], "parts": ["Engine control module (ECM/PCM)"] },
    { "code": "P0706", "title": "Transmission Range Sensor Circuit Range/Performance", "system": "Transmission", "causes": ["Misadjusted or worn range sensor", "Wiring fault"], "service": ["Test/adjust range sensor", "Replace if faulty"], "parts": ["Transmission range sensor (PNP switch)"] },
    { "code": "P0710", "title": "Transmission Fluid Temperature Sensor Circuit Malfunction", "system": "Transmission", "causes": ["Faulty fluid temperature sensor", "Damaged wiring/connector", "Low/dirty fluid"], "service": ["Check fluid level/condition", "Test sensor", "Replace sensor if faulty"], "parts": ["Transmission fluid temperature sensor", "Transmission fluid"] },
    { "code": "P0711", "title": "Transmission Fluid Temperature Sensor Range/Performance", "system": "Transmission", "causes": ["Contaminated/degraded fluid", "Failing temperature sensor"], "service": ["Service transmission fluid", "Replace sensor if reading inaccurate"], "parts": ["Transmission fluid temperature sensor", "Transmission fluid"] },
    { "code": "P0716", "title": "Input/Turbine Speed Sensor Circuit Range/Performance", "system": "Transmission", "causes": ["Faulty input speed sensor", "Damaged tone ring", "Low/dirty transmission fluid"], "service": ["Test sensor signal", "Service fluid", "Replace sensor"], "parts": ["Input/turbine speed sensor", "Transmission fluid"] },
    { "code": "P0717", "title": "Input/Turbine Speed Sensor Circuit No Signal", "system": "Transmission", "causes": ["Open circuit in sensor wiring", "Failed input speed sensor"], "service": ["Inspect wiring for open circuit", "Replace sensor"], "parts": ["Input/turbine speed sensor"] },
    { "code": "P0721", "title": "Output Speed Sensor Circuit Range/Performance", "system": "Transmission", "causes": ["Faulty output speed sensor", "Damaged tone ring", "Wiring fault"], "service": ["Test sensor signal", "Replace sensor"], "parts": ["Output speed sensor"] },
    { "code": "P0731", "title": "Gear 1 Incorrect Ratio", "system": "Transmission", "causes": ["Worn clutch pack/band for gear 1", "Low fluid", "Solenoid failure"], "service": ["Check fluid level/condition", "Diagnose internal transmission wear", "Test shift solenoids"], "parts": ["Transmission fluid", "Shift solenoids"] },
    { "code": "P0732", "title": "Gear 2 Incorrect Ratio", "system": "Transmission", "causes": ["Worn clutch pack/band for gear 2", "Low fluid", "Solenoid failure"], "service": ["Check fluid level/condition", "Diagnose internal transmission wear", "Test shift solenoids"], "parts": ["Transmission fluid", "Shift solenoids"] },
    { "code": "P0733", "title": "Gear 3 Incorrect Ratio", "system": "Transmission", "causes": ["Worn clutch pack/band for gear 3", "Low fluid", "Solenoid failure"], "service": ["Check fluid level/condition", "Diagnose internal transmission wear", "Test shift solenoids"], "parts": ["Transmission fluid", "Shift solenoids"] },
    { "code": "P0734", "title": "Gear 4 Incorrect Ratio", "system": "Transmission", "causes": ["Worn clutch pack/band for gear 4", "Low fluid", "Solenoid failure"], "service": ["Check fluid level/condition", "Diagnose internal transmission wear", "Test shift solenoids"], "parts": ["Transmission fluid", "Shift solenoids"] },
    { "code": "P0735", "title": "Gear 5 Incorrect Ratio", "system": "Transmission", "causes": ["Worn clutch pack/band for gear 5", "Low fluid", "Solenoid failure"], "service": ["Check fluid level/condition", "Diagnose internal transmission wear", "Test shift solenoids"], "parts": ["Transmission fluid", "Shift solenoids"] },
    { "code": "P0741", "title": "Torque Converter Clutch Circuit Performance or Stuck Off", "system": "Transmission", "causes": ["Faulty TCC solenoid", "Low/contaminated transmission fluid", "Worn torque converter"], "service": ["Test TCC solenoid", "Service fluid", "Inspect torque converter"], "parts": ["Torque converter clutch solenoid", "Transmission fluid"] },
    { "code": "P0742", "title": "Torque Converter Clutch Circuit Stuck On", "system": "Transmission", "causes": ["Stuck TCC solenoid", "Wiring short"], "service": ["Test/replace TCC solenoid", "Inspect wiring"], "parts": ["Torque converter clutch solenoid"] },
    { "code": "P0750", "title": "Shift Solenoid A Malfunction", "system": "Transmission", "causes": ["Faulty shift solenoid A", "Low/dirty transmission fluid", "Wiring fault"], "service": ["Test shift solenoid", "Service fluid", "Replace solenoid if faulty"], "parts": ["Shift solenoid A", "Transmission fluid"] },
    { "code": "P0755", "title": "Shift Solenoid B Malfunction", "system": "Transmission", "causes": ["Faulty shift solenoid B", "Low/dirty transmission fluid", "Wiring fault"], "service": ["Test shift solenoid", "Service fluid", "Replace solenoid if faulty"], "parts": ["Shift solenoid B", "Transmission fluid"] },
    { "code": "P0760", "title": "Shift Solenoid C Malfunction", "system": "Transmission", "causes": ["Faulty shift solenoid C", "Low/dirty transmission fluid", "Wiring fault"], "service": ["Test shift solenoid", "Service fluid", "Replace solenoid if faulty"], "parts": ["Shift solenoid C", "Transmission fluid"] },
    { "code": "P0765", "title": "Shift Solenoid D Malfunction", "system": "Transmission", "causes": ["Faulty shift solenoid D", "Low/dirty transmission fluid", "Wiring fault"], "service": ["Test shift solenoid", "Service fluid", "Replace solenoid if faulty"], "parts": ["Shift solenoid D", "Transmission fluid"] }
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
  const vehicleBits = vehicle ? [vehicle.year, vehicle.make, vehicle.model].filter(Boolean) : [];

  // If the customer told us their vehicle (make/model, optionally year),
  // always point them to AAP's search scoped to that vehicle + this part —
  // never the generic, all-vehicles category page. AAP doesn't expose a
  // public fitment API, so there's no way to build a guaranteed structured
  // "only parts that fit a 2015 Honda Civic" link from a URL alone; folding
  // year/make/model into the search text is the closest thing available,
  // and it's what AAP's own search results will actually rank against.
  if (vehicleBits.length) {
    const searchText = [...vehicleBits, clean].join(' ').trim();
    return `https://shop.advanceautoparts.com/web/SearchResults?searchTerm=${encodeURIComponent(searchText)}`;
  }

  // No vehicle info at all (make/model left blank) — fall back to a
  // general, non-vehicle-specific category page if we have one curated,
  // otherwise AAP's own keyword search page.
  const match = AAP_CATEGORY_LINKS.find(([key]) => cleanLower.includes(key));
  if (match) return match[1];

  return `https://shop.advanceautoparts.com/web/SearchResults?searchTerm=${encodeURIComponent(clean)}`;
}

// --- US-market vehicle data for the Make/Model dropdowns. Covers the
// major automakers sold in the US during the OBD-II era (1996+), including
// a handful of discontinued brands since plenty of check-engine lookups
// are for older/used vehicles. Not every trim/generation is listed — this
// is meant to prevent typos in the dropdown, not serve as a fitment guide;
// the actual DTC lookup below is generic and code-based either way.
const VEHICLE_DATA = {
  "Acura": ["ILX", "Integra", "MDX", "NSX", "RDX", "RLX", "RSX", "TL", "TLX", "TSX", "ZDX"],
  "Alfa Romeo": ["4C", "Giulia", "Giulietta", "Stelvio"],
  "Audi": ["A3", "A4", "A5", "A6", "A7", "A8", "e-tron", "Q3", "Q5", "Q7", "Q8", "R8", "TT"],
  "BMW": ["2 Series", "3 Series", "4 Series", "5 Series", "7 Series", "i3", "i4", "iX", "X1", "X3", "X5", "X7", "Z4"],
  "Buick": ["Enclave", "Encore", "Envision", "LaCrosse", "Lucerne", "Regal", "Rendezvous", "Verano"],
  "Cadillac": ["ATS", "CT4", "CT5", "CT6", "CTS", "DTS", "Escalade", "SRX", "STS", "XT4", "XT5", "XT6", "XTS"],
  "Chevrolet": ["Astro", "Avalanche", "Aveo", "Blazer", "Bolt", "Camaro", "Cavalier", "Cobalt", "Colorado", "Corvette", "Cruze", "Equinox", "Express", "HHR", "Impala", "Malibu", "Monte Carlo", "S-10", "Silverado", "Sonic", "Spark", "Suburban", "Tahoe", "Trailblazer", "Traverse", "Trax", "Volt"],
  "Chrysler": ["200", "300", "Aspen", "Concorde", "Crossfire", "Pacifica", "PT Cruiser", "Sebring", "Town & Country", "Voyager"],
  "Dodge": ["Avenger", "Caliber", "Caravan", "Challenger", "Charger", "Dakota", "Durango", "Grand Caravan", "Journey", "Magnum", "Neon", "Nitro", "Stratus", "Viper"],
  "Fiat": ["500", "500L", "500X"],
  "Ford": ["Bronco", "C-Max", "Edge", "Escape", "Escort", "Expedition", "Explorer", "F-150", "F-250", "F-350", "Fiesta", "Five Hundred", "Flex", "Focus", "Fusion", "Mustang", "Ranger", "Taurus", "Transit", "Windstar"],
  "Genesis": ["G70", "G80", "G90", "GV70", "GV80"],
  "GMC": ["Acadia", "Canyon", "Envoy", "Jimmy", "Savana", "Sierra", "Terrain", "Yukon"],
  "Honda": ["Accord", "Civic", "CR-V", "CR-Z", "Element", "Fit", "HR-V", "Insight", "Odyssey", "Passport", "Pilot", "Prelude", "Ridgeline", "S2000"],
  "Hummer": ["H1", "H2", "H3"],
  "Hyundai": ["Accent", "Azera", "Elantra", "Ioniq", "Kona", "Palisade", "Santa Fe", "Sonata", "Tucson", "Veloster", "Venue"],
  "Infiniti": ["EX35", "FX35", "G35", "G37", "JX35", "M35", "Q50", "Q60", "QX50", "QX60", "QX80"],
  "Jaguar": ["F-Pace", "F-Type", "S-Type", "X-Type", "XE", "XF", "XJ", "XK"],
  "Jeep": ["Cherokee", "Commander", "Compass", "Gladiator", "Grand Cherokee", "Liberty", "Patriot", "Renegade", "Wrangler"],
  "Kia": ["Forte", "Optima", "Rio", "Sedona", "Sorento", "Soul", "Sportage", "Stinger", "Telluride"],
  "Land Rover": ["Defender", "Discovery", "Discovery Sport", "Range Rover", "Range Rover Evoque", "Range Rover Sport", "Range Rover Velar"],
  "Lexus": ["CT200h", "ES", "GS", "GX", "IS", "LC", "LS", "LX", "NX", "RC", "RX", "UX"],
  "Lincoln": ["Aviator", "Continental", "Corsair", "MKC", "MKS", "MKT", "MKX", "MKZ", "Nautilus", "Navigator", "Town Car"],
  "Mazda": ["3", "5", "6", "CX-3", "CX-30", "CX-5", "CX-9", "MX-5 Miata", "RX-8", "Tribute"],
  "Mercedes-Benz": ["A-Class", "C-Class", "CLA", "CLS", "E-Class", "G-Class", "GLA", "GLC", "GLE", "GLS", "S-Class", "SL", "SLK"],
  "Mercury": ["Grand Marquis", "Milan", "Montego", "Mountaineer", "Sable"],
  "Mini": ["Clubman", "Convertible", "Countryman", "Hardtop", "Paceman"],
  "Mitsubishi": ["Eclipse", "Endeavor", "Galant", "Lancer", "Mirage", "Outlander"],
  "Nissan": ["350Z", "370Z", "Altima", "Armada", "Frontier", "Juke", "Kicks", "Maxima", "Murano", "Pathfinder", "Rogue", "Sentra", "Titan", "Versa", "Xterra"],
  "Oldsmobile": ["Alero", "Aurora", "Bravada", "Intrigue"],
  "Plymouth": ["Breeze", "Neon", "Voyager"],
  "Pontiac": ["Aztek", "Bonneville", "G6", "G8", "Grand Am", "Grand Prix", "Solstice", "Sunfire", "Torrent", "Vibe"],
  "Polestar": ["Polestar 1", "Polestar 2", "Polestar 3"],
  "Porsche": ["911", "718 Boxster", "718 Cayman", "Cayenne", "Macan", "Panamera", "Taycan"],
  "Ram": ["1500", "2500", "3500", "ProMaster"],
  "Saab": ["9-3", "9-5", "9-7X"],
  "Saturn": ["Aura", "Ion", "Outlook", "Sky", "Vue"],
  "Scion": ["FR-S", "iQ", "tC", "xA", "xB", "xD"],
  "Subaru": ["Ascent", "BRZ", "Crosstrek", "Forester", "Impreza", "Legacy", "Outback", "WRX"],
  "Suzuki": ["Forenza", "Grand Vitara", "SX4", "Verona", "XL7"],
  "Tesla": ["Cybertruck", "Model 3", "Model S", "Model X", "Model Y"],
  "Toyota": ["4Runner", "Avalon", "Camry", "Corolla", "Highlander", "Land Cruiser", "Matrix", "Prius", "RAV4", "Sequoia", "Sienna", "Solara", "Tacoma", "Tundra", "Venza", "Yaris"],
  "Volkswagen": ["Atlas", "Beetle", "CC", "Golf", "GTI", "ID.4", "Jetta", "Passat", "Tiguan", "Touareg"],
  "Volvo": ["C30", "S60", "S80", "S90", "V60", "V90", "XC40", "XC60", "XC90"]
};

const makeSelect = document.getElementById('make');
const modelSelect = document.getElementById('model');
const yearSelect = document.getElementById('year');

Object.keys(VEHICLE_DATA).sort().forEach(make => {
  const opt = document.createElement('option');
  opt.value = make;
  opt.textContent = make;
  makeSelect.appendChild(opt);
});

(function populateYears() {
  const currentYear = new Date().getFullYear();
  const topYear = currentYear + 1; // next model year is usually already on sale
  for (let y = topYear; y >= 1996; y--) {
    const opt = document.createElement('option');
    opt.value = String(y);
    opt.textContent = String(y);
    yearSelect.appendChild(opt);
  }
})();

makeSelect.addEventListener('change', () => {
  const models = VEHICLE_DATA[makeSelect.value] || [];
  modelSelect.innerHTML = '';
  if (!models.length) {
    modelSelect.disabled = true;
    modelSelect.appendChild(new Option('Select make first…', ''));
    return;
  }
  modelSelect.disabled = false;
  modelSelect.appendChild(new Option('Select model…', ''));
  models.forEach(model => modelSelect.appendChild(new Option(model, model)));
});

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

    ${severityBadgeHtml(entry)}

    <h3>Likely Causes</h3>
    ${causesHtml(entry)}

    ${diyTestsHtml(entry)}

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
  if (entry.severity) {
    const label = SEVERITY_LABELS[entry.severity.level] || 'Check with a professional';
    lines.push(`CAN I KEEP DRIVING? ${label}`);
    lines.push(entry.severity.note);
    lines.push('');
  }
  lines.push('LIKELY CAUSES');
  if (entry.causesRanked && entry.causesRanked.length) {
    entry.causesRanked.forEach(c => lines.push(`- (${c.likelihood}) ${c.cause}`));
    lines.push('(Estimated likelihood based on common repair patterns, not a formal statistical study.)');
  } else {
    entry.causes.forEach(c => lines.push('- ' + c));
  }
  lines.push('');
  if (entry.diyTests && entry.diyTests.length) {
    lines.push('HOW TO TEST IT YOURSELF');
    entry.diyTests.forEach((t, i) => lines.push(`${i + 1}. ${t}`));
    lines.push('');
  }
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

// --- Severity / likelihood / DIY test rendering. These fields only exist
// on the ~30 most commonly searched codes so far — everything else falls
// back to the plain causes list with no severity badge, same as before. ---

const SEVERITY_LABELS = {
  stop: 'Stop driving now',
  caution: 'OK for short trips — get it checked soon',
  safe: 'Safe to keep driving',
};

function severityBadgeHtml(entry) {
  if (!entry.severity) return '';
  const label = SEVERITY_LABELS[entry.severity.level] || 'Check with a professional';
  return `
    <div class="severity-badge sev-${escapeHtml(entry.severity.level)}">
      <div class="severity-label">${escapeHtml(label)}</div>
      <p class="severity-note">${escapeHtml(entry.severity.note)}</p>
    </div>
  `;
}

function causesHtml(entry) {
  if (entry.causesRanked && entry.causesRanked.length) {
    return `
      <ul class="causes-ranked">${entry.causesRanked.map(c => `<li><span class="likelihood-tag">${escapeHtml(c.likelihood)}</span>${escapeHtml(c.cause)}</li>`).join('')}</ul>
      <p class="likelihood-disclaimer">Estimated likelihood based on common repair patterns, not a formal statistical study — always confirm before replacing parts.</p>
    `;
  }
  return `<ul>${entry.causes.map(c => `<li>${escapeHtml(c)}</li>`).join('')}</ul>`;
}

function diyTestsHtml(entry) {
  if (!entry.diyTests || !entry.diyTests.length) return '';
  return `
    <h3>How to Test It Yourself</h3>
    <ol class="diy-tests">${entry.diyTests.map(t => `<li>${escapeHtml(t)}</li>`).join('')}</ol>
  `;
}

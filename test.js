"use Strict";

import unitLoop from './Automate_Topics.js';


// todo   Unit_color List Dont Change this 

const unit_01_color = 'bd-blue';
const unit_02_color = 'bd-yellow';
const unit_03_color = 'bd-green';
const unit_04_color = 'bd-pink' ;
const unit_05_color = 'bd-orange';

// todo Unit text  Change Input text


let unit_text1 = "Sources - Definition and significance of color -Definition and significance of odour -Definition and significance of turbidity -Definition and significance ";

let unit_text2 = "Distinction between molecules - nanomaterials - bulk materials - Size Dependent -properties optical-properties electrical-properties mechanical -properties magnetic";

let unit_text3 = " One component system - water system - Reduced phase rule - Construction of a simple eutectic phase diagram - Thermal analysis -  lead-silver system - Pattinson process ";

let unit_text4 = " Classification of fuels- Coal and coke - Analysis of coal (proximate and ultimate)- Carbonization - Manufacture of metallurgical coke (Otto Hoffmann method) -Manufacture of synthetic";

let unit_text5 = "mass defect (problems) - binding energy -  Nuclear energy - light water nuclearpower plant - breeder reactor-Solar energy conversion -Solar energy conversion Principle";




// todo Cont Change the Fucniton Call 
unitLoop(unit_text1 , unit_01_color , 1);
unitLoop(unit_text2 , unit_02_color , 2);
unitLoop(unit_text3 , unit_03_color , 3);
unitLoop(unit_text4 , unit_04_color , 4);
unitLoop(unit_text5 , unit_05_color , 5);


// ****************************  End Of the Funciton call *****************
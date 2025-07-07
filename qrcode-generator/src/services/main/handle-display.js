//import prompt from "prompt";

//import promptSchemaMain from "./prompts-schema/prompt-schema-main.js";

import createQRCode from "../qr-code/create.js";
import createPassword from "../password/create.js";
import validatePassword from "../password/validate.js";
import displayTaxByCountry from "../tax-by-country/display.js";


async function handleDisplayMain(err, choose) {
    if (err) console.log(err);

    // choose.nome_do_prompt
    if (choose.select == 1) await createQRCode();
    if (choose.select == 2) await createPassword();
    if (choose.select == 3) await displayTaxByCountry();
    if (choose.select == 4) await validatePassword();

    /*switch (+choose.select) { // Convertendo para número com o operador unário +
      case 1:
        await createQRCode();
        break;
      case 2:
        await createPassword();
        break;
    }*/
}

export default handleDisplayMain;
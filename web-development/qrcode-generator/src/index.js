/*import prompt from "prompt";

import promptSchemaMain from "./prompts-schema/prompt-schema-main.js";

import createQRCode from "./services/qr-code/create.js";
import createPassword from "./services/password/create.js";
import createTaxByCountry from "./services/tax-by-country/create.js";*/

import displayMainMenu from "./services/main/display.js";

async function main() {
  await displayMainMenu();
}

main();
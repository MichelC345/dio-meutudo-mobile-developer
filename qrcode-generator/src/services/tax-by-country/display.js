import prompt from "prompt";
import promptSchemaCountry from "../../prompts-schema/prompt-schema-country.js";
import handle from "./handle.js";

async function displayTaxByCountry() {
    //console.log("createTaxByCountry");
    // O resultado do prompt será passado para a função handle, a qual será executada logo em seguida
    prompt.get(promptSchemaCountry, handle);
    prompt.start();
}

export default displayTaxByCountry;
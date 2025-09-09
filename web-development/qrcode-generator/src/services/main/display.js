import prompt from "prompt";
//import promptSchemaCountry from "../../prompts-schema/prompt-schema-main.js";
import handleDisplayMain from "./handle-display.js";
import promptSchemaMain from "../../prompts-schema/prompt-schema-main.js";

async function displayMain() {
    //console.log("createTaxByCountry");
    // O resultado do prompt será passado para a função handle, a qual será executada logo em seguida
    prompt.get(promptSchemaMain, handleDisplayMain);
    prompt.start();
}

export default displayMain;
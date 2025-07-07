import prompt from "prompt";
import promptSchemaValidatePassword from "../../prompts-schema/prompt-schema-validatePassword.js";
import handleValidatePassword from "./handle-validate.js"; // Importando a função de validação

async function validatePassword() {
    prompt.get(promptSchemaValidatePassword, handleValidatePassword);
    prompt.start();
}

export default validatePassword;
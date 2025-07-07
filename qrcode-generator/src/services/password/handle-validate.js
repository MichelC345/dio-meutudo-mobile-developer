import permittedCharacters from "./utils/permitted-characters.js";
import displayPasswordValidationCriteria from "./utils/display-validation-criteria.js";

async function handleValidatePassword(err, result) {
    if (err) {
        console.error("Erro ao obter a senha:", err);
        return;
    }

    /*const { password: inputPassword, confirmPassword } = result;

    if (inputPassword !== confirmPassword) {
        console.log("As senhas não coincidem. Tente novamente.");
        return;
    }*/
    const password = result.password;

    //const isValid = await handleValidatePassword(inputPassword);
    const passwordLength = process.env.PASSWORD_LENGTH;
    let isValid = true;

    // Verifica se a senha tem o tamanho correto
    if (password.length !== parseInt(passwordLength, 10)) {
        isValid = false;
    }else {
        let characters = [];
        
        //console.log(`Tamanho da senha: ${passwordLength}`);
        characters = await permittedCharacters();
        
        // Verifica se a senha contém apenas caracteres permitidos
        for (let i = 0; i < password.length; i++) {
            if (!characters.includes(password[i])) {
                isValid = false;
                break;
            }
        }
    }

    if (isValid) {
        console.log("Senha válida!");
    } else {
        console.log("Senha inválida. Verifique os critérios de validação.");
        await displayPasswordValidationCriteria();
    }
    
    return isValid;
}

export default handleValidatePassword;
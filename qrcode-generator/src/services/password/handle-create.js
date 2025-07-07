import permittedCharacters from "./utils/permitted-characters.js";

async function handleCreatePassword() {
  let characters = [];
  let password = "";

  const passwordLength = process.env.PASSWORD_LENGTH;
  console.log(`Tamanho da senha: ${passwordLength}`);
  characters = await permittedCharacters();

  // Cria uma senha aleatória com os caracteres permitidos
  for (let i = 0; i < passwordLength; i++) {
    const index = Math.floor(Math.random() * characters.length);
    password += characters[index];
  }

  return password;
}

export default handleCreatePassword;
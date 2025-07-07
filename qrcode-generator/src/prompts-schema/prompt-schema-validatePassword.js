import chalk from "chalk"; // Importando a biblioteca chalk para estilizar o texto
import prompt from "prompt";

const promptSchemaValidatePassword = [
    {
        name: "password",
        description: chalk.yellow.bold("Digite a senha para validação"),
        required: true,
    },
    {
        name: "confirmPassword",
        description: chalk.yellow.bold("Confirme a senha digitada"),
        required: true,
        message: "As senhas não coincidem. Tente novamente.",
        conform: function (confirmPassword) { // Referência: https://www.npmjs.com/package/prompt
            var inputPassword = prompt.history('password').value;
            return (inputPassword === confirmPassword);
        }
    },
];

export default promptSchemaValidatePassword;
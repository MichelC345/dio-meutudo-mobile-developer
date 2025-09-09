import chalk from "chalk"; // Importando a biblioteca chalk para estilizar o texto

const promptSchemaCountry = [
    {
        name: "countrySelect",
        description: chalk.yellow(`Digite o número do país para calcular a taxa de entrega.\n
            1 - Alemanha
            2 - Brasil
            3 - China
            4 - Estados Unidos
            5 - Rússia`),
        pattern: /^[1-5]+$/,
        message: chalk.red.italic("Escolha apenas entre 1, 2, 3, 4 ou 5"),
        required: true,
    },
];

export default promptSchemaCountry;
import chalk from "chalk"; // Importando a biblioteca chalk para estilizar o texto

const promptSchemaMain = [
  {
    name: "select",
    description: chalk.yellow.bold(
      `Escolha a ferramenta\n
       (1 - QRCODE
       (2- CREATE PASSWORD
       (3- TAX BY COUNTRY
       (4- VALIDATE PASSWORD)`
    ),
    pattern: /^[1-4]+$/,
    message: chalk.red.italic("Escolha apenas entre 1 e 4"),
    required: true,
  },
];

export default promptSchemaMain;
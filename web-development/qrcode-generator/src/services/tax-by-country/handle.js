import chalk from "chalk";
import getKnownFeesByCountry from "./utils/known-countries.js";

async function handle(err, result) {
    if (err) {
        console.log("Erro na aplicação:", err);
        return;
    }
    const countryNumber = result.countrySelect;
    console.log(chalk.blue.bold("Calculando a taxa do país selecionado..."));
    const knownCountries = await getKnownFeesByCountry();
    if (countryNumber < 1 || countryNumber > knownCountries.length) {
        console.log(chalk.red("Número do país inválido!"));
        return;
    }
    const selectedCountry = knownCountries[countryNumber - 1]; // Ajustando o índice para começar em 0
    console.log(chalk.green(`Taxa de entrega para ${selectedCountry.country}: ${selectedCountry.fee}`));
}

export default handle;
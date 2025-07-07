import chalk from "chalk";

async function displayPasswordValidationCriteria() {
    let criteria = [];
    let c = 0;
    //criteria.push(chalk.green(`{$c} A senha deve conter pelo menos 8 caracteres.`));
    criteria.push(chalk.green(`${++c} A senha deve ter ${process.env.PASSWORD_LENGTH} caracteres.`));
    if (process.env.UPPERCASE_LETTERS === "true") {
        criteria.push(chalk.green(`${++c} A senha pode conter uma ou mais letras maiúsculas.`));
    }
    if (process.env.LOWERCASE_LETTERS === "true") {
        criteria.push(chalk.green(`${++c} A senha pode conter uma ou mais letras minúsculas.`));
    }
    if (process.env.NUMBERS === "true") {
        criteria.push(chalk.green(`${++c} A senha pode conter um ou mais números.`));
    }
    if (process.env.SPECIAL_CHARACTERS === "true") {
        criteria.push(chalk.green(`${++c} A senha pode conter um ou mais caracteres especiais. Ex: "!@#$%^&*()-_".`));
    }

    for (const criterion of criteria) {
        console.log(criterion);
    }
}

export default displayPasswordValidationCriteria;
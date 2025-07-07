import chalk from "chalk";
import handleCreatePassword from "./handle-create.js";

async function createPassword() {
  console.log(chalk.green("password"));
  const password = await handleCreatePassword();
  console.log(password);
}

export default createPassword;
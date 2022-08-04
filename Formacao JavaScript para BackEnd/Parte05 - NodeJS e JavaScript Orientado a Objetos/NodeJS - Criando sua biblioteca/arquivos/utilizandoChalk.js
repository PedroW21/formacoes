import chalk from 'chalk';
import fs from 'fs'; // ESM - ECMAScript module type

console.log(chalk.blue("Começando! Olá mundo! :D"));

console.log(`
CPU: ${chalk.hex("#FF4500")("86%")} usage!
RAM: ${chalk.blue("34%")} usage!
GPU: ${chalk.rgb(91, 10, 145).bold("96%")} usage! ${chalk.hex("#E3CE12").bold("Are you crazy??")}
`);



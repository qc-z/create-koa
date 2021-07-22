import inquirer from "inquirer";
import packageName from "./packageName.js";
import port from "./port.js";
import middleware from "./middleware.js";

console.log(packageName, 'packageName')
export default () => {
  return inquirer
    .prompt([
      packageName(),
      port(),
      middleware()
    ])
}

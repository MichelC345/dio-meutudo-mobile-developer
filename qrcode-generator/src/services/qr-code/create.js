import prompt from "prompt";
import promptSchemaQRCode from "../../prompts-schema/prompt-schema-qrcode.js";
import handle from "./handle.js";

async function createQRCode() {
  console.log("createQRCode");
  prompt.get(promptSchemaQRCode, handle);
  prompt.start();
}

export default createQRCode;
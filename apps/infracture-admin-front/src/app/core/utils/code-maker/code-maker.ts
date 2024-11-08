import { spawn } from "child_process";

const RUTA = './run.js'
export const codeMakerAndRun = async () => {
  await generateFile();
  await runFile();
};


async  function generateFile() {
  return '';
}

async function runFile() {
  ejecutarScript(RUTA)
  .then((message) => console.log(message))
  .catch((error) => console.error(error.message));
}

function ejecutarScript(rutaArchivo: string) {
  return new Promise((resolve, reject) => {
    const childProcess = spawn('node', [rutaArchivo]);

    childProcess.stdout.on('data', (data: any) => {
      console.log(`Script output: ${data.toString()}`);
    });

    childProcess.stderr.on('data', (data: any) => {
      console.error(`Script error: ${data.toString()}`);
    });

    childProcess.on('close', (code: any) => {
      if (code === 0) {
        resolve('Script executed successfully!');
      } else {
        reject(new Error(`Script execution failed with code: ${code}`));
      }
    });

    childProcess.on('error', (error: any) => {
      reject(new Error(`Error spawning child process: ${error.message}`));
    });
  });
}
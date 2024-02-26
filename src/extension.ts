import fsp from "fs/promises";
import * as path from "path";

async function createDistFolder() {
  await fsp.rm(path.join(__dirname, "dist"), { recursive: true, force: true });
  await fsp.mkdir(path.join(__dirname, "dist"));
}

async function createPackageJson() {
  await fsp.writeFile(
    path.join(__dirname, "dist", "package.json"),
    JSON.stringify({
      name: "amuris-icons",
      displayName: "Amuris Icons",
      engines: {
        vscode: "^1.86.0",
      },
      contributes: {
        iconThemes: [
          {
            id: "amuris-icons",
            label: "Amuris Icons",
            path: "./icons.json",
          },
        ],
      },
    })
  );
}

async function main() {
  await createDistFolder();
}

main();

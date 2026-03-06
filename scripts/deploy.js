import { execSync } from "child_process";

function run(command) {
  console.log(`\n⚡ Ejecutando: ${command}\n`);
  execSync(command, { stdio: "inherit" });
}

try {
  console.log("\n🚀 Iniciando deploy\n");

  run("git add .");
  run('git commit -m "deploy update"');

  console.log("\n📦 Push a GitHub...");
  run("git push origin main");

  console.log("\n🛰️ Push a tu servidor...");
  run("git push server main");

  console.log("\n✅ Deploy completado\n");
} catch (error) {
  console.error("\n💥 Algo falló en el deploy");
  process.exit(1);
}

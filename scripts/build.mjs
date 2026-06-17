import { spawnSync } from "node:child_process";
import { rmSync } from "node:fs";

const runNextBuild = process.env.RADTRAILS_OPENNEXT_BUILD === "1";
const command = runNextBuild ? "next" : "opennextjs-cloudflare";
const args = ["build"];

if (!runNextBuild) {
	rmSync(".open-next", { recursive: true, force: true });
}

const result = spawnSync(command, args, {
	env: {
		...process.env,
		RADTRAILS_OPENNEXT_BUILD: "1",
	},
	shell: process.platform === "win32",
	stdio: "inherit",
});

process.exit(result.status ?? 1);

import { watch } from "fs";
import { exec } from "child_process";

const watcher = watch("dist", (event, filename) => {
	console.log(`Detected ${event} in ${filename}`);

	exec("pnpm run copy:extension", (error, stdout, stderr) => {
		if (error) {
			console.error(`Error: ${error.message}`);
			return;
		}
		if (stderr) {
			console.error(`stderr: ${stderr}`);
			return;
		}
		console.log(stdout);
		console.log("Updates");
	});
});

process.on("SIGINT", () => {
	// close watcher when Ctrl-C is pressed
	console.log("Closing watcher...");
	watcher.close();

	process.exit(0);
});

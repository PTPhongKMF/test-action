import core from "@actions/core";

function main() {
  try {
    try {
      const name = core.getInput("name", { required: true });
    } catch {
      throw new Error("this is custom");
    }

    core.info(`We are special because we were born into this world.`);
    // core.info(`Don't you agree, ${name}?`);
    core.info("=======================================================");
    core.notice("Zephyr Release run successfully!");
  } catch (error) {
    core.setFailed(
      "❌ An unexpected error occurred:\n" +
        ((error instanceof Error)
          ? `name: "${error.name}" and msg: "${error.message}"`
          : error),
    );
  }
}

main();

/**
 * This example collects a prompt from the user, sends it to GPT
 * and relays the response.
 */

import { ask, say } from "./shared/cli.ts";
import { promptDalle } from "./shared/openai.ts";

const subjectone = await ask("Choose a subject");
const subjecttwo = await ask("Choose another subject");
const setting = await ask("Choose a setting");

// sent prompt to gpt and relay response
const response = await promptDalle(
    `A photograph of a ${subjectone} and ${subjecttwo} in ${setting} environment`,
);

say("");
say("URL");
say(response.url);

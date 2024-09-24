/**
 * This example collects a prompt from the user, sends it to GPT
 * and relays the response.
 */

import { promptGPT } from "./shared/openai.ts";
import { ask, say } from "./shared/cli.ts";
import { promptDalle } from "./shared/openai.ts";

const subjectone = await ask("What do you want from Dall•e?");

// sent prompt to gpt and relay response
const response = await promptGPT(
    `You are a prompter that asks questions to generate a related prompt for Dall•e. Create a follow-up question based on ${subjectone}`,
);

const answerToGPT = await ask(response);

const finalanswer = await promptDalle(
    `Draw an image of ${subjectone}. Add details based on the following interaction: Question: ${response}; Answer: ${answerToGPT}`,
);

say("");
say("URL");
say(finalanswer.url);

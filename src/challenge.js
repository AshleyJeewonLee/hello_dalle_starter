import { promptGPT } from "./shared/openai.ts";
import { ask, say } from "./shared/cli.ts";
import { promptDalle } from "./shared/openai.ts";

const dream = await ask(
    "I am a dream painter. Describe the dream you want to illustrate, and I will turn that into a painting.",
);

const scene = await ask(
    "Which scene from your dream do you want Dall•e to paint?",
);

const scenenumber = await ask(
    "How many versions would you like Dall•e to paint?",
);

const prompt = await promptGPT(
    `You are to generate a question. Create a follow-up question based on ${dream}, try to find out more details regarding the ${scene}. `,
);

const answerToGPT = await ask(prompt);
const drawing = await promptDalle(
    `Draw set of ${scenenumber} scenes of ${scene} from a dream of ${dream}. Add details based on the following interaction: Question: ${prompt}; Answer: ${answerToGPT}`,
);

say("");
say("URL");
say(drawing.url);

import Groq from "groq-sdk";

const groq = new Groq({ apiKey: process.env.GROQ_API_KEY });

async function main() {
  const completion = await groq.chat.completions.create({
    temperature: 1,
    //top_p: 0.2,
    //stop: "ga", //Negative
    //max_completion_tokens: 1000,
    //max_tokens: "",
    //frequency_penalty: 1,
    //presence_penalty: 1,
    //response_format: {"type": "json_object"},             For Json/object Structured output
    model: "openai/gpt-oss-20b",
    messages: [
      {
        role: "system",
        content: "you are sarvis, smart ai assistent.",
      },
      {
        role: "user",
        content: "who are you?",
      },
    ],
  });

  console.log(completion.choices[0].message.content);
}

main();

// import OpenAI from "openai";

// const client = new OpenAI({
//     apiKey: process.env.GROQ_API_KEY,
//     baseURL: "https://api.groq.com/openai/v1",
// });

// async function main(){
// const response = await client.responses.create({
//     model: "openai/gpt-oss-20b",
//     input: "can you give me a tips for creating ai agent",
// });
// console.log(response.output_text);

// }

// main()

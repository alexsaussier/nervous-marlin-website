import axios from "axios";

// Use this if you want to make a call to OpenAI GPT-4 for instance. userId is used to identify the user on openAI side.
export const sendOpenAi = async (guideline, request, userId, max, temp = 1) => {
  const url = "https://api.openai.com/v1/chat/completions";

  const body = JSON.stringify({
    model: "gpt-4o-mini",
    messages: [{"role": "system", "content": guideline}, 
    {"role": "user", "content": request}],
    max_tokens: max || 500, // Set a higher default, or remove if not needed
    temperature: temp,
    user: userId,
  });

  const options = {
    headers: {
      Authorization: 'Bearer sk-proj-ZWZVp9jM0e3SqUQQELX8T3BlbkFJ8fDmikeoI9FKtTqsM36B',//${process.env.OPENAI_API_KEY}`,
      "Content-Type": "application/json",
    },
  };

  try {
    const res = await axios.post(url, body, options);

    const answer = res.data.choices[0].message.content;
    const usage = res?.data?.usage;

    console.log("Answer >>> " + answer);
    console.log(
      "TOKENS USED: " +
        usage?.total_tokens +
        " (prompt: " +
        usage?.prompt_tokens +
        " / response: " +
        usage?.completion_tokens +
        ")"
    );
    console.log("\n");

    return answer;
  } catch (e) {
    console.error("GPT Error: " + e?.response?.status, e?.response?.data);
    return null;
  }
};

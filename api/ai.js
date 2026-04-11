export default async function handler(req, res) {
  const { message } = req.body;

  const response = await fetch("https://api.openai.com/v1/chat/completions", {
    method: "POST",
    headers: {
      "Authorization": "Bearer " + process.env.sk_proj_UOptzZnSqOI11oMAqwFtZwHQ3P32k4V2Kb56SrFzaEtHNFZxZAPJTo7PxjYo3_oizc_EFbMF_XT3BlbkFJcTIgbd6XWeG5VNLgpd6MwpjPkhFkTNtNU5pSN6gzGOPtXmecam1u_80foxgj757h_Ya1_kLJkA,
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      model: "gpt-4o-mini",
      messages: [{ role: "user", content: message }]
    })
  });

  const data = await response.json();

  res.status(200).json({
    reply: data.choices[0].message.content
  });
}

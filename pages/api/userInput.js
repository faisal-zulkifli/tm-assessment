

export default function userInput(req, res) {
  if (req.method === "POST") {
    const reqPayload = req?.body;

    console.log("Req Payload", reqPayload);

    return res.json({ msg: "Success" });
  }
  
  return res.status(400).json({
    msg: "Error 400: Bad Request",
  });
}

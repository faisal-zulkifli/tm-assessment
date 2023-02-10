export default function userInput(req, res) {
  if (req.method === "POST") {
    const reqPayload = req?.body;

    console.log("Req Payload", reqPayload);

    res.json({ msg: "Test" });
  }

  return res.status(500).json({
    msg: "Error, This need to be a respond",
  });
}

export default function handler(req, res) {
  const { email, password } = req.query;
  setTimeout(() => {
    if (email !== "TEST" || password !== "Te$t123")
      res
        .status(400)
        .json({ code: 400, message: "The information entered is not valid." });
    else
      res
        .status(200)
        .json({ token: "bearer 18694246-9897-a0ac-7f9b-07b32637347c" });
  }, 1000);
}

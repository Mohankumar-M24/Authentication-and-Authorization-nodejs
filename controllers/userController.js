exports.getUserInfo = async (req, res) => {
  res.json({ id: req.user.id, email: req.user.email });
};
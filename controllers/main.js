const login = async (req, res) => {
  res.send("Fake login/register/Signup Route");
};

const dashboard = async (req, res) => {
  const luckyNumber = Math.floor(Math.random() * 100);
  res
    .status(200)
    .json({
      msg: `Hello, Bright Orton`,
      secrete: `here is your authorized data, your lucky number is ${luckyNumber}`,
    });
};

module.exports = {
  login,
  dashboard,
};

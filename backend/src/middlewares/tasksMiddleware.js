const validateTitle = (req, res, next) => {
  const { title } = req.body;

  if (title === '') {
    return res.status(400).json({ message: '"title" cannot be empty' });
  }
  if (!title) {
    return res.status(400).json({ message: '"title" is required' });
  }

  next();
};

const validateStatus = (req, res, next) => {
  const { status } = req.body;

  if (status === '') {
    return res.status(400).json({ message: '"status" cannot be empty' });
  }
  if (!status) {
    return res.status(400).json({ message: '"status" is required' });
  }

  next();
};

module.exports = {
  validateTitle,
  validateStatus,
};

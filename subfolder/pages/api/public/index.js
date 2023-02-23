const handler = async (req, res) => {
  if (req.method === 'GET') {
    res.status(200).json({
      message: 'Hello from public API',
    });
  }
};

export default handler;

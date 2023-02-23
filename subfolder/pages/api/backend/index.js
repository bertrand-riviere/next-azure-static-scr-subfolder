const handler = async (req, res) => {
  if (req.method === 'GET') {
    res.status(200).json({
      message: 'Hello from protected API',
    });
  }
};

export default handler;

const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

exports.createHouse = async (req, res) => {
  try {
    const { title, price, location, imageUrl } = req.body;

    const house = await prisma.house.create({
      data: {
        title,
        price,
        location,
        imageUrl,
        ownerId: req.user.id,   // from JWT
      },
    });

    res.json(house);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.getHouses = async (req, res) => {
  const houses = await prisma.house.findMany({
    include: { owner: true }
  });

  res.json(houses);
};

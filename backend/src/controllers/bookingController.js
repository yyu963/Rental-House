const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

exports.createBooking = async (req, res) => {
  try {
    const { houseId } = req.body;

    const booking = await prisma.booking.create({
      data: {
        status: "pending",
        tenantId: req.user.id,
        houseId,
      },
    });

    res.json(booking);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.updateBooking = async (req, res) => {
  try {
    const { status } = req.body;

    const booking = await prisma.booking.update({
      where: { id: Number(req.params.id) },
      data: { status },
    });

    res.json(booking);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

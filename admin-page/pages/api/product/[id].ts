import type { NextApiRequest, NextApiResponse } from 'next'
import prisma from '../../../config/prisma'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    return await getProduct(req, res)
  } else {
    res.status(405).json({ message: 'Method not allowed' })
  }
}

async function getProduct(req: NextApiRequest, res: NextApiResponse) {
  try {
    const { id } = req.query
    const product = await prisma.product.findUnique({
      where: {
        id: Number(id)
      },
      include: {
        category: true,
        pictures: true,
        sizes: true,
        brand: true,
        colors: true,
      }
    })
    res.status(200).json(product)
  } catch (err) {
    res.status(500).json({ message: 'Error getting product', error: err})
  }
}

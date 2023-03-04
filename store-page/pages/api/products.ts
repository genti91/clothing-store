// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import prisma from '../../config/prisma'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    return await getProducts(req, res)
  } else {
    res.status(405).json({ message: 'Method not allowed' })
  }
}

async function getProducts(_: NextApiRequest, res: NextApiResponse) {
  try {
    const products = await prisma.product.findMany({
      include: {
        category: true,
        pictures: true,
        sizes: true,
        brand: true,
        colors: true,
      }
    })
    res.status(200).json(products)
  } catch (err) {
    console.log(err)
    res.status(500).json({ message: 'Error getting products', error: err})
  }
} 

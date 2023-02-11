// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import prisma from '../../config/prisma'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    return await createProduct(req, res)
  } else if (req.method === 'GET') {
    return await getProducts(req, res)
  } else {
    res.status(405).json({ message: 'Method not allowed' })
  }
}

async function createProduct(req: NextApiRequest, res: NextApiResponse) {
  const { name, price, img, description } = req.body
  try{
    const product = await prisma.product.create({
      data: {
        name: name,
        price: Number(price),
        img: img,
        description: description,
      }
    })
    res.status(200).json(product)
  } catch (err) {
    console.log(err)
    res.status(500).json({ message: 'Error creating product', error: err});
  }
}

async function getProducts(req: NextApiRequest, res: NextApiResponse) {
  try {
    const products = await prisma.product.findMany()
    res.status(200).json(products)
  } catch (err) {
    res.status(500).json({ message: 'Error getting products', error: err})
  }
} 
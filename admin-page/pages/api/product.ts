// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import prisma from '../../config/prisma'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    return await createProduct(req, res)
  } else if (req.method === 'GET') {
    return await getProducts(req, res)
  } else if (req.method === 'PUT') {
    return await updateProduct(req, res)
  } else {
    res.status(405).json({ message: 'Method not allowed' })
  }
}

async function createProduct(req: NextApiRequest, res: NextApiResponse) {
  const { name, price, image, description, brand, color, size } = req.body
  try{
    const product = await prisma.product.create({
      data: {
        name,
        description,
        price: price,
        pictures: {
          create: image.map((i:any) => ({ url: i.src, position: i.position}))
        },
        brand: {
          connect: { id: brand }
        },
        colors: {
          connect: color.map((c: string) => ({ id: c }))
        },
        sizes: {
          connect: size.map((s: string) => ({ id: s }))
        },
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
    const products = await prisma.product.findMany({
      include: {
        pictures: true,
        sizes: true,
        brand: true,
        colors: true,
      }
    })
    res.status(200).json(products)
  } catch (err) {
    res.status(500).json({ message: 'Error getting products', error: err})
  }
} 

async function updateProduct(req: NextApiRequest, res: NextApiResponse) {
  const { id, name, price, image, description, brand, color, size } = req.body
  try {
    const updatedProduct = await prisma.product.update({
      where: { id },
      data: {
        name,
        description,
        price,
        pictures: {
          upsert: image.map((i: string) => ({
            where: { url: i },
            create: { url: i }
          })),
          deleteMany: {
            url: {
              notIn: image
            }
          }
        },
        brand: {
          connect: { id: brand }
        },
        colors: {
          set: color.map((c: number) => ({ id: c }))
        },
        sizes: {
          set: size.map((s: number) => ({ id: s }))
        },
      },
      include: {
        pictures: true,
        sizes: true,
        brand: true,
        colors: true,
      }
    })
    res.status(200).json(updatedProduct)
  } catch (err) {
    console.log(err)
    res.status(500).json({ message: 'Error updating product', error: err})
  }
}

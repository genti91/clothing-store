import type { NextApiRequest, NextApiResponse } from 'next'
import prisma from '../../config/prisma'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    return await createBrand(req, res)
  } else if (req.method === 'GET') {
    return await getBrands(req, res)
  } else if (req.method === 'DELETE') {
    return await deletetBrand(req, res)
  } else if (req.method === 'PUT') {
    return await editBrand(req, res)
  } else {
    res.status(405).json({ message: 'Method not allowed' })
  }
}

async function createBrand(req: NextApiRequest, res: NextApiResponse) {
  const { name } = req.body
  console.log(name)
  try{
    const brand = await prisma.brand.create({
      data: {
        name: name,
      }
    })
    res.status(200).json(brand)
  } catch (err) {
    console.log(err)
    res.status(500).json({ message: 'Error creating product', error: err});
  }
}

async function getBrands(req: NextApiRequest, res: NextApiResponse) {
  try {
    const brands = await prisma.brand.findMany({
        include: {
            _count: {
                select: {
                    products: true
                }
            }
        }
    })
    res.status(200).json(brands)
  } catch (err) {
    res.status(500).json({ message: 'Error getting brands', error: err})
  }
} 

async function deletetBrand(req: NextApiRequest, res: NextApiResponse) {
  const { id } = req.query
  try {
    const brand = await prisma.brand.delete({
      where: {
        id: Number(id)
      }
    })
    res.status(200).json(brand)
  } catch (err) {
    res.status(500).json({ message: 'Error deleting brand', error: err})
  }
}

async function editBrand(req: NextApiRequest, res: NextApiResponse) {
  const { id, name } = req.body
  try {
    const brand = await prisma.brand.update({
      where: {
        id: Number(id)
      },
      data: {
        name: name
      }
    })
    res.status(200).json(brand)
  } catch (err) {
    res.status(500).json({ message: 'Error editing brand', error: err})
  }
}

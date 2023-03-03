import type { NextApiRequest, NextApiResponse } from 'next'
import prisma from '../../config/prisma'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    return await createCategory(req, res)
  } else if (req.method === 'GET') {
    return await getCategories(req, res)
  } else if (req.method === 'DELETE') {
    return await deletetCategory(req, res)
  } else if (req.method === 'PUT') {
    return await editCategory(req, res)
  } else {
    res.status(405).json({ message: 'Method not allowed' })
  }
}

async function createCategory(req: NextApiRequest, res: NextApiResponse) {
  const { name } = req.body
  console.log(name)
  try{
    const category = await prisma.category.create({
      data: {
        name: name,
      }
    })
    res.status(200).json(category)
  } catch (err) {
    console.log(err)
    res.status(500).json({ message: 'Error creating category', error: err});
  }
}

async function getCategories(_: NextApiRequest, res: NextApiResponse) {
  try {
    const category = await prisma.category.findMany({
        include: {
            _count: {
                select: {
                    products: true
                }
            }
        }
    })
    res.status(200).json(category)
  } catch (err) {
    res.status(500).json({ message: 'Error getting categories', error: err})
  }
} 

async function deletetCategory(req: NextApiRequest, res: NextApiResponse) {
  const { id } = req.query
  try {
    const category = await prisma.category.delete({
      where: {
        id: Number(id)
      }
    })
    res.status(200).json(category)
  } catch (err) {
    res.status(500).json({ message: 'Error deleting category', error: err})
  }
}

async function editCategory(req: NextApiRequest, res: NextApiResponse) {
  const { id, name } = req.body
  try {
    const category = await prisma.category.update({
      where: {
        id: Number(id)
      },
      data: {
        name: name
      }
    })
    res.status(200).json(category)
  } catch (err) {
    res.status(500).json({ message: 'Error editing category', error: err})
  }
}

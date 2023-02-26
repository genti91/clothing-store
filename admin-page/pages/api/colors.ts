import type { NextApiRequest, NextApiResponse } from 'next'
import prisma from '../../config/prisma'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    return await createColor(req, res)
  } else if (req.method === 'GET') {
    return await getColor(req, res)
  } else if (req.method === 'DELETE') {
    return await deleteColor(req, res)
  } else if (req.method === 'PUT') {
    return await editColor(req, res)
  } else {
    res.status(405).json({ message: 'Method not allowed' })
  }
}

async function createColor(req: NextApiRequest, res: NextApiResponse) {
  const { name, hex } = req.body
  console.log(name)
  try{
    const color = await prisma.color.create({
      data: {
        name: name,
        hex: hex
      }
    })
    res.status(200).json(color)
  } catch (err) {
    console.log(err)
    res.status(500).json({ message: 'Error creating color', error: err});
  }
}

async function getColor(req: NextApiRequest, res: NextApiResponse) {
  try {
    const color = await prisma.color.findMany({
        include: {
            _count: {
                select: {
                    products: true
                }
            }
        }
    })
    res.status(200).json(color)
  } catch (err) {
    res.status(500).json({ message: 'Error getting color', error: err})
  }
} 

async function deleteColor(req: NextApiRequest, res: NextApiResponse) {
  const { id } = req.query
  try {
    const color = await prisma.color.delete({
      where: {
        id: Number(id)
      }
    })
    res.status(200).json(color)
  } catch (err) {
    res.status(500).json({ message: 'Error deleting color', error: err})
  }
}

async function editColor(req: NextApiRequest, res: NextApiResponse) {
  const { id, name } = req.body
  try {
    const color = await prisma.color.update({
      where: {
        id: Number(id)
      },
      data: {
        name: name
      }
    })
    res.status(200).json(color)
  } catch (err) {
    res.status(500).json({ message: 'Error editing color', error: err})
  }
}

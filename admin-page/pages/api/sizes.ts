import type { NextApiRequest, NextApiResponse } from 'next'
import prisma from '../../config/prisma'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    return await createSize(req, res)
  } else if (req.method === 'GET') {
    return await getSize(req, res)
  } else if (req.method === 'DELETE') {
    return await deleteSize(req, res)
  } else if (req.method === 'PUT') {
    return await editSize(req, res)
  } else {
    res.status(405).json({ message: 'Method not allowed' })
  }
}

async function createSize(req: NextApiRequest, res: NextApiResponse) {
  const { name } = req.body
  console.log(name)
  try{
    const size = await prisma.size.create({
      data: {
        name: name,
      }
    })
    res.status(200).json(size)
  } catch (err) {
    console.log(err)
    res.status(500).json({ message: 'Error creating size', error: err});
  }
}

async function getSize(req: NextApiRequest, res: NextApiResponse) {
  try {
    const size = await prisma.size.findMany({
        include: {
            _count: {
                select: {
                    products: true
                }
            }
        }
    })
    res.status(200).json(size)
  } catch (err) {
    res.status(500).json({ message: 'Error getting size', error: err})
  }
} 

async function deleteSize(req: NextApiRequest, res: NextApiResponse) {
  const { id } = req.query
  try {
    const size = await prisma.size.delete({
      where: {
        id: Number(id)
      }
    })
    res.status(200).json(size)
  } catch (err) {
    res.status(500).json({ message: 'Error deleting size', error: err})
  }
}

async function editSize(req: NextApiRequest, res: NextApiResponse) {
  const { id, name } = req.body
  try {
    const size = await prisma.size.update({
      where: {
        id: Number(id)
      },
      data: {
        name: name
      }
    })
    res.status(200).json(size)
  } catch (err) {
    res.status(500).json({ message: 'Error editing size', error: err})
  }
}

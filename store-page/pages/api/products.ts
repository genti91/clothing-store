import { NextApiRequest, NextApiResponse } from 'next'

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).send(data)
}

const data = [
  {
      img: "https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/13a.jpg",
      name: "Red Hoodie",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      price: 35.99,
  },
  {
      img: "https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/14a.jpg",
      name: "Grey Sweater",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      price: 21.99,
  },
  {
      img: "https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/12a.jpg",
      name: "Blue Denim Shirt",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      price: 17.99,
  },
  {
      img: "https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/15a.jpg",
      name: "Black Denim Jacket",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      price: 99.99,
  },
  {
      img: "https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/13a.jpg",
      name: "Red Hoodie",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      price: 35.99,
  },
  {
      img: "https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/14a.jpg",
      name: "Grey Sweater",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      price: 21.99,
  },
  {
      img: "https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/12a.jpg",
      name: "Blue Denim Shirt",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      price: 17.99,
  },
  {
      img: "https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/15a.jpg",
      name: "Black Denim Jacket",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      price: 99.99,
  },
  {
      img: "https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/13a.jpg",
      name: "Red Hoodie",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      price: 35.99,
  }
]
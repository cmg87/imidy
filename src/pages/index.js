import * as React from "react"
import { Link } from 'gatsby'
import Layout from '../components/Layout'
import ProductGrid from "../components/productgrid"
import { StaticImage } from "gatsby-plugin-image"


const IndexPage = () => {
 
  return (
    <Layout>
       <StaticImage src="../images/logo.jpeg" alt="Plush Toy 4" />
      <h1 className="text-4xl font-bold text-center text-pink-800 mb-6">About Me</h1>
      <p className='text-center text-pink-800 mb-2'>Hi, I'm Kate, a 21-year-old with a passion for bringing yarn to life! I love crocheting adorable plushies, each one with its own unique personality. When I'm not conjuring up cuddly creatures, you can find me getting lost in a good book, or trying out new recipes. I'm always excited to learn new techniques and share my creations with the world.</p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-pink-100 p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold text-pink-800 mb-4">Featured Tutorial</h2>
          <p>Learn how to crochet a cute pumpkin in this step-by-step tutorial.</p>
          <Link to="https://www.youtube.com/watch?v=01WH9K5fZUs" className="mt-4 inline-block text-pink-800 hover:text-pink-600">Watch tutorial →</Link>
        </div>
        <ProductGrid/>
      </div>
    </Layout>
  )
}

export default IndexPage

export const Head = () => <title>Imidy Crochet</title>

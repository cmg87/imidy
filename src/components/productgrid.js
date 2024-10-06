import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import './productgrid.css'

const ProductGrid = () => (
  <div className="product-grid">
    <StaticImage src="../images/cows.webp" alt="Plush Toy 1" />
    <StaticImage src="../images/turtle.webp" alt="Plush Toy 2" />
    <StaticImage src="../images/duck.webp" alt="Plush Toy 3" />
    <StaticImage src="../images/otter.webp" alt="Plush Toy 4" />
  </div>
)

export default ProductGrid
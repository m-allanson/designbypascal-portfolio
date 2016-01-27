import React from 'react'
import Products from '../components/products/Products'
import { connect } from 'react-redux'

const ProductsContainer = ({
  params, products
}) => (
  <Products products={ products } />
)

export default connect(
  state => ({ products: state.products })
)(ProductsContainer)

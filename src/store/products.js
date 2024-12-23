import React from 'react'
import Rating from './Rating'

export default function Products(props) {
  return (
    <tr>
      <td>{props.product.id}</td>
      <td>{props.product.title}</td>
      <td>{props.product.price}</td>
      <td>{props.product.description}</td>
      <td>{props.product.category}</td>
      <td><img src={props.product.image} alt="" width={250} /></td>
      <td><Rating rate = {props.product.rating.rate}/></td>
    </tr>
  )
}

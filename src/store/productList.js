import React, { useEffect, useState } from 'react'
import Products from './products'
import './style.css'
export default function ProductList() {
    const [productsList, setProductsList] = useState([])
    const [categoriestsList, setCategoriestsList] = useState([])
    const [searchInput, setSearchInput] = useState("")
    const [valueButton, setValueButton] = useState("")

    const getProducts = () => {
        fetch('https://fakestoreapi.com/products')
            .then((response) => response.json())
            .then((response) => setProductsList(response))
    }

    const Reset = () => {
        setValueButton("")
        setSearchInput("")
        document.getElementById('search').value = ""
    }
    useEffect(() => {
        getProducts()
        getCategories()
    }, [])

    const displayProducts = () => {
        if (valueButton === "") {
            if (searchInput === "") {
                return productsList.map((item) => {
                    return <Products product={item} />
                })
            } else {
                return productsList.filter(function (item) {
                    return item.title.toLowerCase().startsWith(searchInput.toLowerCase()) || item.description.toLowerCase().includes(searchInput.toLowerCase())
                }).map((item) => {
                    return <Products product={item} />
                })

            }
        } else {
            if (searchInput === "") {
                return productsList.filter(function (item) {
                    return item.category.toLowerCase() === valueButton.toLowerCase()
                }).map((item) => {
                    return <Products product={item} />
                })
            } else {
                return productsList.filter(function (item) {
                    return (item.title.toLowerCase().startsWith(searchInput.toLowerCase()) || item.description.toLowerCase().includes(searchInput)) && (item.category.toLowerCase() === valueButton.toLowerCase())
                }).map((item) => {
                    return <Products product={item} />
                })

            }
        }
    }
    const handleSearch = (e) => {
        e.preventDefault()
        setSearchInput(e.target.value)
    }

    const getCategories = () => {
        fetch('https://fakestoreapi.com/products/categories')
            .then((response) => response.json())
            .then((response) => setCategoriestsList(response))
    }



    const displayCategoriests = () => {
        return categoriestsList.map(function (item) {
            return <button type='button' className='btn btn-secondary' value={item} onClick={(e) => setValueButton(e.target.value)}>{item}</button>
        })
    }


    return (
        <div className="container my-4 fade-in">
            <h2 className="mb-4">Search:</h2>
            <form>
                <div className="row g-3 align-items-center mb-3">
                    <div className="col-auto">
                        <label htmlFor="search" className="col-form-label">Search</label>
                    </div>
                    <div className="col-auto d-flex">
                        <input
                            type="text"
                            id="search"
                            className="form-control form-control-sm me-2 slide-in-left"
                            onChange={handleSearch}
                            placeholder="Type to search..."
                        />
                        <button
                            className="btn btn-sm btn-primary bounce-in"
                            type="button"
                            onClick={Reset}
                        >
                            Reset
                        </button>
                    </div>
                </div>

                <h5 className="mt-4 mb-3 slide-in-down">Categories:</h5>
                <div className="row g-3 align-items-center">
                    <div className="btn-group" role="group">
                        {displayCategoriests()}
                    </div>
                </div>
            </form>

            <h1 className="mt-5 zoom-in">Products:</h1>
            <div className="table-responsive mt-3 fade-in-up">
                <table className="table table-bordered table-hover">
                    <thead className="table-light">
                        <tr>
                            <th scope="col">Id</th>
                            <th scope="col">Title</th>
                            <th scope="col">Price</th>
                            <th scope="col">Description</th>
                            <th scope="col">Category</th>
                            <th scope="col">Image</th>
                            <th scope="col">Rating</th>
                        </tr>
                    </thead>
                    <tbody>
                        {displayProducts()}
                    </tbody>
                </table>
            </div>
        </div>


    )
}

import React from 'react'
import { Link } from "react-router-dom";

const Header = (props) => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg bg-light">
                <div className="container-fluid">
                    <Link className="navbar-brand" to={"/home"} >{props.title}</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-a active m-2 " aria-current="page" to={"/home"} >Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-a" to={"/about"} >About</Link>
                            </li>
                        </ul>
                        {props.searchBar?<form className="d-flex" role="search">
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                            <button className="btn btn-outline-success" type="submit">Search</button>
                        </form>: 'No SearchBar Here..'}
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Header

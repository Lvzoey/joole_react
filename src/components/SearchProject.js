import React, {useCallback, useEffect, useRef, useState} from "react";
import LogInSignUpProject from '../Layout/LogIn-SignUp-Project';
import './SearchProject.css'
import {useDispatch} from "react-redux";
import {logout} from "../actions/authAction";
import SearchService from "../services/serachService";
import Autocomplete from "./AutoComplete";
import {Link} from "react-router-dom";

const SearchProject = (props) => {
    const [projects, setProjects] = useState([]);
    const [select, setSelect] = useState();
    const [productList, setProductList] = useState([]);
    const dispatch = useDispatch();

    const logOut = useCallback(() => {
        dispatch(logout());
    }, [dispatch]);

    const fetchProjects = (userName) => {
        console.log("fetchProjects")
        return SearchService.getProjectList(userName).then((response) => setProjects(response.data));
    }

    const fetchProductList = (projectId) => {
        console.log(projects)
        console.log("fetchProducts");
        return SearchService.getProductList(projectId).then((response) => setProductList(response.data));
    }

    console.log(productList)

    // const saveProducts = (productName) => {
    //     console.log(productName)
    //     return SearchService.saveProduct(productName)
    // }


    const handleSelect = (e) => {
        console.log("handleSelect")
        const select = e.target.value;
        setSelect(select);
        fetchProductList(parseInt(select));
    }

    // const handleInput = () => {
    //     console.log("handleInput")
    //     const input = inputForm;
    //     console.log(input)
    //     setProductName(input);
    //     saveProducts(input);
    // }


    useEffect(() => {
        console.log("useEffect")
        fetchProjects(localStorage.getItem("userName"));
    }, []);

    // useEffect(() => {
    //     fetchProducts(parseInt(select));
    // }, []);
    // console.log(select)
    // console.log(productList)

    const suggestion = [];
    productList.forEach((product) => {
        if (!suggestion.includes(product.productName)) {
            suggestion.push(product.productName);
        }
    })

    return (
      <div className={"search-project"}>
          <LogInSignUpProject/>
          <div className={"log-out"}>
              <a href="/login" className="nav-link" onClick={logOut}>
                  LogOut
              </a>
          </div>
          <form autoComplete={"on"}>
              <select className={"project"} id={"select-project"} onChange={handleSelect}>
                  <option defaultValue hidden>Select project</option>
                  {projects.map((option) => (<option value={option.projectId}>{option.projectName}</option>))}
              </select>
              <Autocomplete suggestions={
                  // productList.map((product) => (product.productName))
                  suggestion
              }/>
              <Link to={"/search-product"}>
                  <button className="search-button">Search</button>
              </Link>
          </form>
      </div>
    );
}

export default SearchProject;
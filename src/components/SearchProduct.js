import React, {useCallback, useEffect, useState} from "react";
import Search from '../Layout/Search';
import './SearchProduct.css'
import {logout} from "../actions/authAction";
import {useDispatch} from "react-redux";
import SearchService from "../services/serachService";

const SearchProduct = () => {
    const [products, setProducts] = useState();
    const dispatch = useDispatch();

    const logOut = useCallback(() => {
        dispatch(logout());
    }, [dispatch]);

    const fetchProducts = (productName) => {
        console.log("fetchProducts");
        return SearchService.getProductsByName(productName).then(response => setProducts(response.data));
    }

    useEffect(() => {
        console.log("useEffect");
        fetchProducts(localStorage.getItem('productName'));
    },[])

    console.log(products)

    return (
        <div className={"search-product"}>
            <header><Search/></header>
            <div className={"log-out"}>
                <a href="/login" className="nav-link" onClick={logOut}>
                    LogOut
                </a>
            </div>
            <div className={"search-product-body"}>
                <div className={"products-grid"}>
                    <div className="grid-item-1" >
                        <img src={"data:image/jpeg;base64,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"}
                             className={"img"}/>
                        <div className={"item-description"}>
                            <a>{products[0].description.manufacturer}</a>
                            <br/>
                            <a>{products[0].description.series}</a>
                            <br/>
                            <a>{products[0].description.model}</a>
                        </div>
                        <div className={"item-technicalDetail"}>
                            <a>{products[0].technicalDetail.airflow} CFM</a>
                            <br/>
                            <a>{products[0].technicalDetail.power}W at max speed</a>
                            <br/>
                            <a>{products[0].technicalDetail.soundAtMaxSpeed}dBA at max speed</a>
                            <br/>
                            <a>{products[0].technicalDetail.fanSweepDiameter}" fan sweep diameter</a>
                        </div>
                    </div>
                    <div className="grid-item-1">
                        <img src={"data:image/jpeg;base64,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"}
                             className={"img"}/>
                        <div className={"item-description"}>
                            <a>{products[1].description.manufacturer}</a>
                            <br/>
                            <a>{products[1].description.series}</a>
                            <br/>
                            <a>{products[1].description.model}</a>
                        </div>
                        <div className={"item-technicalDetail"}>
                            <a>{products[1].technicalDetail.airflow} CFM</a>
                            <br/>
                            <a>{products[1].technicalDetail.power}W at max speed</a>
                            <br/>
                            <a>{products[1].technicalDetail.soundAtMaxSpeed}dBA at max speed</a>
                            <br/>
                            <a>{products[1].technicalDetail.fanSweepDiameter}" fan sweep diameter</a>
                        </div>
                    </div>
                    <div className="grid-item-1">
                        <img src={"data:image/jpeg;base64,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"}
                             className={"img"}/>
                        <div className={"item-description"}>
                            <a>{products[2].description.manufacturer}</a>
                            <br/>
                            <a>{products[2].description.series}</a>
                            <br/>
                            <a>{products[2].description.model}</a>
                        </div>
                        <div className={"item-technicalDetail"}>
                            <a>{products[2].technicalDetail.airflow} CFM</a>
                            <br/>
                            <a>{products[2].technicalDetail.power}W at max speed</a>
                            <br/>
                            <a>{products[2].technicalDetail.soundAtMaxSpeed}dBA at max speed</a>
                            <br/>
                            <a>{products[2].technicalDetail.fanSweepDiameter}" fan sweep diameter</a>
                        </div>
                    </div>
                    <div className="grid-item-1">
                        <img src={"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBhMSBxITFhUSFhUVFxcYGRYUGBcbFRUaGhYYGRMZHiwgGR0mHRgVIT0hKCk3Li4vIyA/RDgtQygtLisBCgoKDQ0ODg8PFSsZFRkrKysrKysrLS0tKzcrKzcrKy0tKzcrKzctLSstKy0rKys3KystLSsrKysrKysrKysrK//AABEIAOEA4QMBIgACEQEDEQH/xAAcAAEAAgIDAQAAAAAAAAAAAAAABgcFCAIDBAH/xABHEAACAQEGAwUDBwkECwAAAAAAAQIDBAUGESExEkFRBxMiYXEyYoFCcpGhscHRFDM1UoKDkrLwQ1OTwhUWIyQlRISUorPS/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAH/xAAWEQEBAQAAAAAAAAAAAAAAAAAAEQH/2gAMAwEAAhEDEQA/ALxAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAbAhV93xbZ37Us9HJLKMYp6r2eKTy66/UBKK17XbQq8NavSjJ8nOKf0Nnqp1IVY502muqeZUF/0IKSVSLdWUn4nFJNLL5KWTJReNuqXbRcrG3GMVpJ75/htoyUidA893Wh2u76dSSSdSEJ5LZcUU/vPQUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADAYkuVWqLr2TNVqaUo5fKcNUvXLQz4Apa/L5vi8bwU6dmTp0nssk3xe0k36JcnmTC5bJPFdNSvKDhTp5LhTTU5dOJco88uu+hlb6pU/wDTtJOKyl3eei1zqPPPqSOMVGOUVklyIpGMYRSgsktEumR9AKgAAABGMZ44unCdD/enx1mvBRi1xPzk/kR838M9gM/brbZbuskqtunGFOCzlKTSSXqys7R223XSvVwpWarOgtO9Ukpvq1Rkl4fWSfkVdi3Ft64qtfHecsoRbcKUc1Th8PlSy+U9d9tjCUod69Cq2kw7i64sSQ/4TXjKWWbpvwVF605a/HYzhp+13c04vJp5prRprZprZ+ZZvZfjLGduvaFnpr8qoprvJVM06Uerr83lnlGWbYhF5gAiAAAAAAAAAAAAAAAAAAAAACPXz+n6P7v/ANjJCR6+f0/R/Y/nZIQAAAHCtVp0KTlXkoxis3JtJJLdtvZGDxZi+6MK2XivKec5JuFKOTqTy6R5L3noUJjLHF74srtWmXd0E/DRi/Dps5vecvXRckuYTrHHa2vFRwn5p2hrT91B7/OenRPcqKvWq2itKdolKU5POUpNylJ9XJ6tnFI7IKMPa1fT8Sq406HEs6mi/rZH2Uko5R0X2+rO6z0LTb7XGnZISnUm8oxis2/JJf0i5cC9lNCwuNfEyjUqrxRo704dOPlUl5eyvPcCFYF7NbfiVxrXjxUbNvntUqr3E9l7z+GfK+Lmue77jsEaN1U404R5Lm+bk95N9Xqe1JJaH0iAAAAAAAAAAAAAAAAAAAAAAAdVqtFOy2eU6zyjFZsDCXz+n6H7H80iQETt9ulabzhOEclTSeTer4ZPotNz1XvjO57ksLqXpPga2prxTm3twR5+uiXPIgkMpRhFubSS1beiWXmVVjntao2Xio4V4ak9nXetOPXu1/aPz9n52xBMbdoF64rbp/mbPrlSi/aXJ1ZfK+bt67kSUSjstdptNvtUqttnKdSbzlOTzb+P3cjrURmfHIquTkorwmcwjhC9sWWvhu+PDTi/HWknwQ8l+tL3V8ctyX4E7KbVebjXxKpUqW8aOsalTpxvenHy9p+7zuuxWOzWCyxpWKEYQgsoxikkl5JBGEwhg26sKWXKwx4qkl46ssnOXln8mPur63qSIAgAAAAAAAAAAAAAAAAA+NpbnCdoow9uUV6tIDsB5JXnYI+1WpL9uP4nTO/rnp/nLVZ161aa+8DIgwdXGGGaT8dusv8AjU39SZ9smLsOWyrw2a2WeTSby7yGy3erAzZicTSyuzh/XqU4/wDmm/qTMdZse4dt1r7q7K6qz6QUuHfLPvGuH6HqLztbtUkrRklF8UeKSprPJrPL2ub5AYi91bnQqK6uDvu7fBx58GfEt8tds/jkURf8r1pXzOOIJqdbRSkpqSXSKkvCvm6ZdC6LVC1ydfODnFrhivFk091FpLNepXNXBinVl31CtBPN593JrV85U5N/UTFRKM4paHxy/W/r1LduDsuw9Zp5X1OtN1MlDKThGEmmmk4+0s2sm+i8zpfYfalb8oWyPc57uD73h6ZZ8Lfn9XIqK2ui67ffdvjRuunKpOXJbJfrSltGK6svbAfZrYMOKNa8uGtaVqpZeCk+lOL5++9fTYk2GcNXXhiwd1dNPhT1lJ6zm+s57v02XLIy4AAAAAAAAAAAVr2n4hxdhWp393ujKyyyjm6ecqUnym+LZvaWWWenTOvJdsOJmvz9JelOn95sXOEZxymk0+T1X0HV+RWX+7h/DH8ANcp9rmKZbWpL0p2f74nVLtRxVU/5yXwjZ19kTZL8isv93D+GP4H1WWzx2hD+FAa0S7QsVVd7ZW+HAv5UdUsY4nqb2u1/CpNfYbPqlTW0V9COaWWwGq8r+xJXf5+2v0q1vuZwdfEdff8ALZfGvL7jasAapuwX/VWtmtcv3deX+U4q4L8ltYLU/wDpq7/ym1wA1UWHMRS9m77X/wBtX/8Ak7Y4UxNJaWG1f4FRfajaYAau0sG4rqPwWG0fGHD/ADZGXw/2cYht98U4XtZa1Ki2+OopUYuOmjyk3nrlokbFgCnv9R6OD7yTs9epPNOabSg82+HJuO+S9NzJ2CrKnWzrPPP+vj8SxLxu+zXjQ4bVHNcns16MjlfBrjLOy1fhJfevwItepW2jVsa2MXb7ZDh4abOc8N22zUJvPNKLbUeJyeSzyjHm/IrK24+sNGUo0KNZyi2mp8NLJrdPWTTXRoCY1bX3UW6k+CEcpSk3koqLTbfTLqSKx9pWEbZeEaNC1Lik+GLcakYNvZKpKKjr66lB33ie33vHgq5Qpv5Ec9enFJ6y+zyMO4ZryKa3CBRHZ32nV7mlGzYhcp2fRQqaynR6KXOcPrXmtFedmr0bVQjOzSjKE0pRlFppp7NNboI7AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACLYxwFcuK4cVqjwVsslWhkp6bKXKa8n8MiUgDWLF2Bb6wnJytke8o8q0E3D9tb0366ebIzFuPsm4M4RqQaqJNNZNPVNPdNFWY17IbJbFKrhbho1N3RelKXzH/Zvy9nyW4FKaTXhJZgLHlvwhX4JJ1bNJ5ypZ6xb3lSb2fu7Py3IxeV3226rbKledOdKpHeMlk/VPaS81odKkn7f0hW2VyXxYL9u6Ne66inCXNbp84yjvGS6M95qxhXE154UvHvbslpLLjptvgqJcmuT6SWq+lPYnCOLLsxXd/eXfLKUcu8pSy46bfVc10ktH9QRngAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABiMSYaunE1j7u96Sml7Ml4ZwfWE1qvTZ88yjcadmF74d4ql352izrXiiv9pBe/TW696PxSNiQBp5CemmqPZdN6Wy6LyhWumcoVYvwtbvPeLj8pPobCX/2ZYZvy8FWr0505Z5z7qSpxqfPjk9fOOTfUzdx4XuO4IZXTZ6dN/rZcU361JZyfxYHkwNiC24iufvLystWz1I5KSnGUIz09unxa8Prt57kjAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP/9k="}
                            className={"img"}/>
                        <div className={"item-description"}>
                            <a>{products[3].description.manufacturer}</a>
                            <br/>
                            <a>{products[3].description.series}</a>
                            <br/>
                            <a>{products[3].description.model}</a>
                        </div>
                        <div className={"item-technicalDetail"}>
                            <a>{products[3].technicalDetail.airflow} CFM</a>
                            <br/>
                            <a>{products[3].technicalDetail.power}W at max speed</a>
                            <br/>
                            <a>{products[3].technicalDetail.soundAtMaxSpeed}dBA at max speed</a>
                            <br/>
                            <a>{products[3].technicalDetail.fanSweepDiameter}" fan sweep diameter</a>
                        </div>
                    </div>
                    <div className="grid-item-2">5</div>
                    <div className="grid-item-2">6</div>
                    <div className="grid-item-2">7</div>
                    <div className="grid-item-2">8</div>
                </div>
                <div className={"filter"}>
                    <h1>filter</h1>
                </div>
            </div>
            <footer/>
        </div>
    );
}

export default SearchProduct;
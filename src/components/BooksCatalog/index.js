import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {getBooks} from "../../redux/actions/catalogActions";
import Spinner from "../Spinner";

const BooksCatalog = () => {

    const dispatch = useDispatch()
    const {books, loading} = useSelector(store => store.catalog)
    useEffect(() => {
        dispatch(getBooks())
    }, [dispatch])


    if (loading){
        return <div className="offset-md-5 ps-5"><Spinner /></div>
    }
    return (

        <div className="row">
            {
                books.map(item =>
                    <div className="col-md-3" key={item.id}>
                        <div className="card">
                            <img src={item.coverImage} className="card-img-top" alt={item.title} style={{height: "400px"}}/>
                                <div className="card-body" style={{height: "170px"}}>
                                    <h5 className="card-title">{item.title}</h5>
                                    <p className="card-text">Price: {item.price}$</p>
                                    <button className="btn btn-primary">Add to cart</button>
                                </div>
                        </div>
                    </div>

                )
            }
        </div>
    );
};

export default BooksCatalog;
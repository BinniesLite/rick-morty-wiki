import React from 'react'
import classes from "./Card.module.scss";
import { Link } from 'react-router-dom';

// * Make sure to make the data receive from the Pages are the same
export const Card = ({results , page}) => {
    

    let display;

    if (results) {
        display = results.map(result => {
            // Decomposition of element
            const {id, name, image, location, status} = result;
            // The status of the character
            let displayStatus;

            if (status === 'Alive') {
                displayStatus = 'bg-success';
            }
            else if (status === 'Dead') {
                displayStatus = 'bg-danger';
            }
            else {
                displayStatus = 'bg-secondary'
            }
            

            return ( <Link to={`${page}${id}`} key={id} className="col-lg-4 col-md-6 col-12 mb-4 text-black position-relative text-decoration-none">
                <div className={` ${classes.cards} d-flex justtify-content-center flex-column`}>
                    <img src={image} alt="" srcset="" className={`img-fluid ${classes.img}`} />
                    <div className={classes.content}>
                        <div className='fs-5 fw-bold mb-3'>{name}</div>
                        <div className="">
                            <div className="fs-6">Last Location</div>
                            <div className="fs-5">{location.name}</div>
                        </div>
                    </div>
                </div>
                <div className={`${displayStatus} ${classes.badge} badge position-absolute`}>{status}</div>
            </Link> )
        });
    }
    else {  
        display =<p>No Character Found :/</p>; 
    }

    return (
        <div className='row'>
            {display}
        </div>
    )
}

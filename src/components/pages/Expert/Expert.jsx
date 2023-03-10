import React from 'react';
// import PageTitle from '../../shared/page title/PageTitle';

const Expert = ({expert}) => {
    const { name, img } = expert;
    return (
        <div className='g-5 col-sm-12 col-md-6 col-lg-4'>
            {/* <PageTitle title='expert'></PageTitle> */}
        <div className="card" style={{ width: "18rem" }}>
            <img src={img} className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">{name}</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="#" className="btn btn-primary">learn more</a>
            </div>
        </div>
    </div>
    );
};

export default Expert;
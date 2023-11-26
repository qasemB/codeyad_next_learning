import React from 'react';

const Page = ({ params, searchParams }) => {
    return (
        <section className="featured-cars" style={{width:"100%",display:"flex", flexDirection:"column", marginTop:"70px", justifyContent:"center", alignItems:"center"}}>
            <div className="col-lg-3 col-md-4 col-sm-6" >
                <h1>
                    Car No:
                    {params.carId}
                </h1>
                <div className="single-featured-cars">
                    <div className="featured-img-box">
                        <div className="featured-cars-img">
                            <img src={`/assets/images/featured-cars/fc${params.carId}.png`} alt="cars" />
                        </div>
                        <div className="featured-model-info">
                            <p>
                                model: 2017 
                                <span className="featured-mi-span"> 3100 mi</span>
                                <span className="featured-hp-span"> 240HP</span>
                                automatic
                            </p>
                        </div>
                    </div>
                    <div className="featured-cars-txt">
                        <h2><a href="#">BMW 6-series gran coupe - {params.carId}</a></h2>
                        <h3>$89,395</h3>
                        <p>
                            Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Page;

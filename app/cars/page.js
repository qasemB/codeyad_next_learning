'use client'
import { useRouter } from 'next/navigation';
import React from 'react';

const cars = [
    {id: 1, name: "BMW 6-series gran coupe" , price: "$89,395" },
    {id: 2, name: "chevrolet camaro wmv20" , price: "$66,575" },
    {id: 3, name: "lamborghini v520" , price: "$125,250" },
    {id: 4, name: "audi  a3 sedan" , price: "$95,500" },
    {id: 5, name: "infiniti z5" , price: "$36,850" },
    {id: 6, name: "porsche 718 cayman" , price: "$48,500" },
    {id: 7, name: "bmw 8-series coupe" , price: "$56,000" },
    {id: 8, name: "BMW  xseries-6" , price: "$75,800" },
]

const Page = () => {
    const router = useRouter()
    return (
        <section id="featured-cars" className="featured-cars">
            <div className="container">
                <div className="section-header">
                    <p>checkout <span>the</span> featured cars</p>
                    <h2>featured cars</h2>
                </div>
                <div className="featured-cars-content">
                    <div className="row">
                        {cars.map(c=>(
                            <div onClick={()=>router.push(`/cars/${c.id}`)} key={c.id} className="col-lg-3 col-md-4 col-sm-6">
                                <div className="single-featured-cars">
                                    <div className="featured-img-box">
                                        <div className="featured-cars-img">
                                            <img src={`/assets/images/featured-cars/fc${c.id}.png`} alt="cars" />
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
                                        <h2><a href="#">{c.name}</a></h2>
                                        <h3>{c.price}</h3>
                                        <p>
                                            Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

        </section>
    );
}

export default Page;

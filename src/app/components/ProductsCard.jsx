import React from 'react';

const ProductsCard = ({ data }) => {
    return (
        <div className="place-content-center text-center mt-25">
            <div className="grid grid-cols-3 max-w-7xl mx-auto gap-3">
                {
                    data.map(item =>
                        <div key={item._id} className="card bg-base-100 w-96 shadow-sm">
                            <figure className="px-10 pt-10">
                                <img
                                    src={item.productImage}
                                    alt="Shoes"
                                    className="rounded-xl" />
                            </figure>
                            <div className="card-body items-center text-center">
                                <h2 className="card-title">{item.productName}</h2>
                                <p>{item.productDetails}</p>
                                <div className="card-actions justify-end">
                                    <button className="btn btn-primary ">Details</button>
                                    <button className="btn btn-primary ">Edit</button>
                                </div>
                            </div>
                        </div>
                    )
                }
            </div>
        </div>
    );
};

export default ProductsCard;
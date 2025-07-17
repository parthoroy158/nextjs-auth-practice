"use client";
import React from "react";

const AddProducts = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.productName.value;
    const price = form.productPrice.value;
    const details = form.productDetails.value;
    const image = form.productImage.files[0]; // Get actual file

    console.log({ name, price, details, image });
  };

  return (
    <div className="flex items-center justify-center min-h-screen px-4 py-8">
      <div className="w-full max-w-7xl mx-auto">
        <form className="space-y-4" onSubmit={handleSubmit}>
          {/* First Row */}
          <div className="flex flex-col md:flex-row gap-4">
            <fieldset className="fieldset w-full">
              <legend className="fieldset-legend">Product Name</legend>
              <input
                type="text"
                className="input w-full"
                name="productName"
                placeholder="Type here"
                required
              />
            </fieldset>
            <fieldset className="fieldset w-full">
              <legend className="fieldset-legend">Product Price</legend>
              <input
                type="text"
                className="input w-full"
                name="productPrice"
                placeholder="Type here"
                required
              />
            </fieldset>
          </div>

          {/* Second Row */}
          <div className="flex flex-col md:flex-row gap-4">
            <fieldset className="fieldset w-full">
              <legend className="fieldset-legend">Product Details</legend>
              <input
                type="text"
                className="input w-full"
                name="productDetails"
                placeholder="Type here"
                required
              />
            </fieldset>
            <fieldset className="fieldset w-full">
              <legend className="fieldset-legend">Product Image</legend>
              <input
                type="file"
                name="productImage"
                className="file-input w-full"
                accept="image/*"
                required
              />
            </fieldset>
          </div>

          {/* Button */}
          <div>
            <button type="submit" className="btn w-full btn-primary">
              Add Product
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddProducts;

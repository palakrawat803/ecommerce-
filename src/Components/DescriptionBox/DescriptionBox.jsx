import React from 'react'
import './DescriptionBox.css'

const DescriptionBox = () => {
  return (
    <div className='descriptionbox'>
      <div className="descriptionbox-navigator">
        <div className="descriptionbox-nav-box">Description</div>
        <div className="descriptionbox-nav-box-fade">Reviews (122)</div>
      </div>

      <div className="descriptionbox-description">
        <p>An e-commerce website is an online platform that facilitates the buying and selling of goods or services over the internet. These websites allow businesses or individuals to showcase their products or services, enabling customers to browse, select, and purchase items online.E-commerce websites can range from small, single-person operations to large-scale platforms like Amazon, eBay, or Shopify, offering a wide array of products from multiple sellers. </p>

        <p>An e-commerce website facilitates online buying and selling, showcasing products/services, enabling transactions, and offering features like secure payment gateways, user accounts, and varied product catalogs.</p>
      </div>
    </div>
  )
}

export default DescriptionBox;

import React, { Component } from "react";
import SanPham from "./san-pham";
import { connect } from "react-redux";

class DanhSachSanPham extends Component {
  renderListProduct = () => {
    return this.props.listProduct.map((product, index) => {
      return <SanPham product={product} key={index} />;
    });
  };

  render() {
    return (
      <div className="container">
        <div className="row">{this.renderListProduct()}</div>
      </div>
    );
  }
}

let mapStateToProps = (state) => {
  return {
    listProduct: state.cartReducer.listProduct,
  };
};

export default connect(mapStateToProps, null)(DanhSachSanPham);

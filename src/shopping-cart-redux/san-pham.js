import React, { Component } from "react";
import { connect } from "react-redux";
import { actAddProduct, actShowProductInfo } from "../redux/actions/product";

class SanPham extends Component {
  render() {
    let { product } = this.props;
    return (
      <div className="col-sm-4">
        <div className="card">
          <img className="card-img-top" src={product.hinhAnh} alt="" />
          <div className="card-body">
            <h4 className="card-title">{product.tenSP}</h4>
            <button
              className="btn btn-success"
              onClick={() => this.props.showProductInfo(product)}
            >
              Chi tiết
            </button>
            <button
              className="btn btn-danger"
              onClick={() => this.props.addProduct(product)}
            >
              Thêm giỏ hàng
            </button>
          </div>
        </div>
      </div>
    );
  }
}

let mapDispatchToProps = (dispatch) => {
  return {
    showProductInfo: (product) => {
      dispatch(actShowProductInfo(product));
    },
    addProduct: (product) => {
      dispatch(actAddProduct(product));
    },
  };
};

export default connect(null, mapDispatchToProps)(SanPham);

import React, { Component } from "react";
import { connect } from "react-redux";
import {
  actDeleteProduct,
  actChangeNumberProductCart,
} from "../redux/actions/product";

class Modal extends Component {
  renderListCart = () => {
    return this.props.listProductCart.map((product, index) => {
      return (
        <tr key={index}>
          <td>{product.maSP}</td>
          <td>{product.tenSP}</td>
          <td>
            <img src={product.hinhAnh} width={50} alt="" />
          </td>
          <td>
            <button
              onClick={() =>
                this.props.changeNumberProductCart(product.maSP, false)
              }
            >
              -
            </button>
            {product.soLuong}
            <button
              onClick={() =>
                this.props.changeNumberProductCart(product.maSP, true)
              }
            >
              +
            </button>
          </td>
          <td>{product.giaBan.toLocaleString()}</td>
          <td>{(product.giaBan * product.soLuong).toLocaleString()}</td>
          <td>
            <button
              className="btn btn-danger"
              onClick={() => this.props.deleteProductCart(product.maSP)}
            >
              Delete
            </button>
          </td>
        </tr>
      );
    });
  };
  render() {
    return (
      <div
        className="modal fade"
        id="modelId"
        tabIndex={-1}
        role="dialog"
        aria-labelledby="modelTitleId"
        aria-hidden="true"
      >
        <div
          className="modal-dialog"
          style={{ maxWidth: "1000px" }}
          role="document"
        >
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Giỏ hàng</h5>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">×</span>
              </button>
            </div>
            <div className="modal-body">
              <table className="table">
                <thead>
                  <tr>
                    <th>Mã sản phẩm</th>
                    <th>tên sản phẩm</th>
                    <th>hình ảnh</th>
                    <th>số lượng</th>
                    <th>đơn giá</th>
                    <th>thành tiền</th>
                  </tr>
                </thead>
                <tbody>{this.renderListCart()}</tbody>
              </table>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-dismiss="modal"
              >
                Close
              </button>
              <button type="button" className="btn btn-primary">
                Save
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

let mapStateToProps = (state) => {
  return {
    listProductCart: state.cartReducer.listProductCart,
  };
};

let mapDispatchToProps = (dispatch) => {
  return {
    deleteProductCart: (productId) => {
      dispatch(actDeleteProduct(productId));
    },
    changeNumberProductCart: (productId, isIncrease) => {
      dispatch(actChangeNumberProductCart(productId, isIncrease));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Modal);

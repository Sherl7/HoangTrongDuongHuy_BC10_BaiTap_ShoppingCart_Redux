import React, { Component } from "react";
import DanhSachSanPham from "./danh-sach-san-pham";
import Modal from "./modal";
import { connect } from "react-redux";

class ShoppingCartRedux extends Component {
  getNumberCart = () => {
    return this.props.listProductCart.reduce((numberCart, product) => {
      return numberCart + product.soLuong;
    }, 0);
  };
  render() {
    let { currentProduct } = this.props;
    return (
      <div>
        <h3 className="title">Bài tập giỏ hàng</h3>
        <div className="container">
          <button
            className="btn btn-danger"
            data-toggle="modal"
            data-target="#modelId"
          >
            Giỏ hàng ({this.getNumberCart()})
          </button>
        </div>
        <DanhSachSanPham />
        <Modal />
        <div className="row">
          <div className="col-sm-5">
            <img className="img-fluid" src={currentProduct.hinhAnh} alt="" />
          </div>
          <div className="col-sm-7">
            <h3>Thông số kỹ thuật</h3>
            <table className="table">
              <tbody>
                <tr>
                  <td>Màn hình</td>
                  <td>{currentProduct.manHinh}</td>
                </tr>
                <tr>
                  <td>Hệ điều hành</td>
                  <td>{currentProduct.heDieuHanh}</td>
                </tr>
                <tr>
                  <td>Camera trước</td>
                  <td>{currentProduct.cameraTruoc}</td>
                </tr>
                <tr>
                  <td>Camera sau</td>
                  <td>{currentProduct.cameraSau}</td>
                </tr>
                <tr>
                  <td>RAM</td>
                  <td>{currentProduct.ram}</td>
                </tr>
                <tr>
                  <td>ROM</td>
                  <td>{currentProduct.rom}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}

let mapStateToProps = (state) => {
  return {
    currentProduct: state.cartReducer.currentProduct,
    listProductCart: state.cartReducer.listProductCart,
  };
};

export default connect(mapStateToProps, null)(ShoppingCartRedux);

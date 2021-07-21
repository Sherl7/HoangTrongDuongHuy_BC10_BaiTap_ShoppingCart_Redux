import {
  ADD_PRODUCT,
  DELETE_PRODUCT,
  SHOW_PRODUCT_INFO,
  CHANGE_NUMBER_PRODUCT_CART,
} from "../constants/actionType";

const cartState = {
  listProduct: [
    {
      maSP: 1,
      tenSP: "VinSmart Live",
      manHinh: 'AMOLED, 6.2", Full HD+',
      heDieuHanh: "Android 9.0 (Pie)",
      cameraTruoc: "20 MP",
      cameraSau: "Chính 48 MP & Phụ 8 MP, 5 MP",
      ram: "4 GB",
      rom: "64 GB",
      giaBan: 5700000,
      hinhAnh: "./img/vsphone.jpg",
    },

    {
      maSP: 2,
      tenSP: "Meizu 16Xs",
      manHinh: "AMOLED, FHD+ 2232 x 1080 pixels",
      heDieuHanh: "Android 9.0 (Pie); Flyme",
      cameraTruoc: "20 MP",
      cameraSau: "Chính 48 MP & Phụ 8 MP, 5 MP",
      ram: "4 GB",
      rom: "64 GB",
      giaBan: 7600000,
      hinhAnh: "./img/meizuphone.jpg",
    },

    {
      maSP: 3,
      tenSP: "Iphone XS Max",
      manHinh: 'OLED, 6.5", 1242 x 2688 Pixels',
      heDieuHanh: "iOS 12",
      cameraSau: "Chính 12 MP & Phụ 12 MP",
      cameraTruoc: "7 MP",
      ram: "4 GB",
      rom: "64 GB",
      giaBan: 27000000,
      hinhAnh: "./img/applephone.jpg",
    },
  ],
  currentProduct: {
    maSP: 1,
    tenSP: "VinSmart Live",
    manHinh: 'AMOLED, 6.2", Full HD+',
    heDieuHanh: "Android 9.0 (Pie)",
    cameraTruoc: "20 MP",
    cameraSau: "Chính 48 MP & Phụ 8 MP, 5 MP",
    ram: "4 GB",
    rom: "64 GB",
    giaBan: 5700000,
    hinhAnh: "./img/vsphone.jpg",
  },
  listProductCart: [],
};

export const cartReducer = (state = cartState, action) => {
  switch (action.type) {
    case ADD_PRODUCT:
      let listProductCartAdd = [...state.listProductCart];

      let index = listProductCartAdd.findIndex(
        (product) => product.maSP === action.product.maSP
      );
      if (index !== -1) {
        listProductCartAdd[index].soLuong += 1;
      } else {
        listProductCartAdd.push(action.product);
      }

      state.listProductCart = listProductCartAdd;

      return { ...state };

    case DELETE_PRODUCT:
      let listProductCartDel = [...state.listProductCart];

      listProductCartDel = listProductCartDel.filter(
        (product) => product.maSP !== action.productId
      );

      state.listProductCart = listProductCartDel;

      return { ...state };

    case SHOW_PRODUCT_INFO:
      state.currentProduct = action.product;
      return { ...state };

    case CHANGE_NUMBER_PRODUCT_CART:
      let listProductCartChange = [...state.listProductCart];

      listProductCartChange = listProductCartChange.map((product) => {
        if (product.maSP === action.productId) {
          if (action.isIncrease) {
            product.soLuong += 1;
          } else {
            if (product.soLuong > 1) {
              product.soLuong -= 1;
            }
          }
        }
        return product;
      });

      state.listProductCart = listProductCartChange;

      return { ...state };

    default:
      return { ...state };
  }
};

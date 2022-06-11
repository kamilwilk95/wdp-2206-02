/* selectors */
export const getAll = ({ products }) => products;
export const getCount = ({ products }) => products.length;
export const getIsFavorite = ({ products }) =>
  products.filter(product => product.isFavorite === true);
export const getProductById = ({ products }, productId) =>
  products.find(product => product.id === productId);


export const getNew = ({ products }) =>
  products.filter(item => item.newFurniture === true);

/* actions */
const createActionName = actionName => `app/products/${actionName}`;
const TOGGLE_PRODUCT_FAVORITE = createActionName('TOGGLE_PRODUCT_FAVORITE');
const UPDATE_REVIEW = createActionName('UPDATE_REVIEW');


/* action creators */
export const toggleFavoriteProduct = payload => ({
  type: TOGGLE_PRODUCT_FAVORITE,
  payload,
});

export const updateRating = payload => ({
  type: UPDATE_REVIEW,
  payload,
});

//functions
const addRating = (state, action) => {
  return state.map(product => {
    if (product.id !== action.payload.productId) {
      return product;
    }
    return {
      ...product,
      ownStars: action.payload.ownStars,
    };
  });
};

/* reducer */
export default function reducer(statePart = [], action = {}) {
  switch (action.type) {
    case TOGGLE_PRODUCT_FAVORITE:
      return statePart.map(product =>
        product.id === action.payload
          ? { ...product, isFavorite: !product.isFavorite }
          : product
      );
    case UPDATE_REVIEW: {
      return addRating(statePart, action);
    }
    default:
      return statePart;
  }
}

// STORE = {
//     counter : {
//         count: 0
//     }
//     auth : {
//         idUser: "",
//         token: "",
//         refreshToken: ""
//     }
// }

const initialState = {
    count: 0
  };
  
  const counter = (state = initialState, action) => {
    switch (action.type) {
      default: {
        return state;
      }
    }
  };
  
  export default counter;
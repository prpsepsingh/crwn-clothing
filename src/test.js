import firebase from "firebase/compat/app";
import "firebase/compat/firestore";

const firestore = firebase.firestore();

firestore
  .collection("users")
  .doc("2UeOIAo1Mga6u9E48ZQb")
  .collection("cartItems")
  .doc("2V9wk8XYaYDDgX9j40Py");
firestore.doc('/users/2UeOIAo1Mga6u9E48ZQb/cartItems/2V9wk8XYaYDDgX9j40Py');
firestore.collection('/users/2UeOIAo1Mga6u9E48ZQb/cartItems');
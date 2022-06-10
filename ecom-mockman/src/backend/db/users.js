import { v4 as uuid } from "uuid";
import { formatDate } from "../utils/authUtils";
/**
 * User Database can be added here.
 * You can add default users of your wish with different attributes
 * Every user will have cart (Quantity of all Products in Cart is set to 1 by default), wishList by default
 * */

export const users = [
  {
    _id: uuid(),
    firstName: "Guest",
    lastName: "",
    email: "guest@windys.com",
    password: "guest@windys",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    address: [
      {
        _id: uuid(),
        name: "Prashant Singh Chauhan",
        street: "10, Indira Nagar",
        city: "Bangalore",
        state: "KArnataka",
        zipcode: "110011",
        country: "India",
        mobile: "9876543210",
      },
      {
        _id: uuid(),
        name: "Shaily Ranjan",
        street: "R.T. Nagar",
        city: "Bangalore",
        state: "Karnataka",
        zipcode: "550011",
        country: "India",
        mobile: "9123456780",
      },
    ],
  },
];

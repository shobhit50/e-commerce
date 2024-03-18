# API Documentation

## User Functionality

### Authentication
- [x] `POST /users/register`: Register a new user.
- [ ] `POST /users/login`: Authenticate a user and return a token.
- [ ] `GET /users/profile`: Get the user's profile (requires auth).
- [ ] `PUT /users/profile`: Update the user's profile (requires auth).

### User Address Management
- [x] `POST /users/address`: Add a new address (requires auth).
- [x] `GET /users/address`: List user's addresses (requires auth).
- [x] `PUT /users/address/:addressId`: Update an address (requires auth).
- [x] `DELETE /users/address/:addressId`: Delete an address (requires auth).

### Products
- [x] `GET /products`: Retrieve a list of products for the listing page.
- [x] `GET /products/:id`: Retrieve a specific product's information for the product info page.

### Cart
- [ ] `POST /cart`: Add an item to the cart (requires auth).
- [ ] `GET /cart`: Retrieve the contents of the cart (requires auth).
- [ ] `DELETE /cart/:itemId`: Remove an item from the cart (requires auth).
- [ ] `PUT /cart/:itemId`: Update the quantity of an item in the cart (requires auth).

### Orders
- [ ] `POST /orders`: Place a new order (requires auth).
- [ ] `GET /orders/:orderId`: Retrieve a specific order's details (requires auth).
- [ ] `GET /orders/history`: Retrieve the user's order history (requires auth).

### Payments
- [ ] `POST /payments`: Process a payment (requires auth).

### Wishlist
- [ ] `POST /wishlist`: Add a product to the wishlist (requires auth).
- [ ] `GET /wishlist`: Get the user's wishlist items (requires auth).
- [ ] `DELETE /wishlist/:productId`: Remove a product from the wishlist (requires auth).

### Reviews
- [ ] `POST /products/:productId/reviews`: Add a review for a product (requires auth).
- [ ] `GET /products/:productId/reviews`: Get all reviews for a product.
- [ ] `DELETE /reviews/:reviewId`: Delete a review (requires auth and user must be the author of the review).

## Client Functionality

### List Product (for admin or seller)
- [x] `POST /products`: Add a new product to the listing (requires admin/seller auth).
- [x] `GET /products`: List all products (can be public or admin/seller specific).
- [x] `PUT /products/:id`: Update a specific product's details (requires admin/seller auth).
- [x] `DELETE /products/:id`: Delete a product from the listing (requires admin/seller auth).

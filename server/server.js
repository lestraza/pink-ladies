const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');


const app = express();
const mongoose = require('mongoose');
require('dotenv').config();




mongoose.Promise = global.Promise;
mongoose.connect(process.env.DATABASE)


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cookieParser());

//Middleware
const { auth } = require('./middleware/auth');

// Models

const { User } = require('./models/user');
const { Product } = require('./models/product');
const { Order } = require('./models/order');


//=====================================
//              USERS
//=====================================

app.post('/api/users/register', (req, res) => {
    const user = new User(req.body);

    user.save((err, doc) => {
        if (err) return res.json({ success: false, err });
        res.status(200).json({
            success: true,
            userdata: doc
        })
    })
})

app.post('/api/users/login', (req, res) => {
    // find email
    User.findOne({ 'email': req.body.email }, (err, user) => {
        if (!user) return res.status(403).json({ loginSuccess: false, message: "Email not found. Try again." });

        // check password
        user.comparePassword(req.body.password, (err, isMatch) => {
            if (!isMatch) return res.status(403).json({ loginSuccess: false, message: 'Wrong password. Try again.' });

            // generate a token
            user.generateToken((err, user) => {
                if (err) return res.status(400).send(err);

                res.cookie('user_token', user.token).status(200).json({
                    loginSuccess: true,
                    token: user.token
                })
            })
        })
    })
})

app.post('/api/users/auth', auth, (req, res) => {
    res.status(200).json({
        isAdmin: req.user.role === 0 ? false : true,
        isAuth: true,
        email: req.user.email,
        name: req.user.name,
        lastname: req.user.lastname,
        role: req.user.role,
        history: req.user.history
    })
})


//=====================================
//              PRODUCTS
//=====================================
app.get('/api/products_get_by_id', (req, res) => {
    let id = req.query.id;
    Product
        .find({ "_id": { $in: id } })
        .exec((err, docs) => {
            return res.status(200).send(docs)
        })

})

app.post('/api/products_add_product', (req, res) => {
    const product = new Product(req.body);

    product.save((err, doc) => {
        if (err) return res.json({ success: false, err });
        res.status(200).json({
            success: true,
            productdata: doc
        })
    })
})

app.get('/api/products', (req, res) => {

    Product.find({}, (err, products) => {
        if (err) return res.status(400).send(err);
        res.status(200).send(products);
    })
})

//=====================================
//              CART
//=====================================

app.post('/api/users/cart_add_prod', (req, res) => {
    const { productId } = req.body
    Product
        .findOne({ "_id": { $in: productId } })
        .exec((err, product) => {
            const token = req.cookies.user_token;

            User.findByToken(token, (err, user) => {
                if (user) {
                    user.cart.push(product)
                }
                user.save((err, doc) => {
                    res.status(200).json({
                        success: true,
                        userdata: doc
                    })
                })

                if (err) return res.status(400).send("Please sign in");
            })
        })
})

app.post('/api/users/cart_item_delete', (req, res) => {
    const { productId } = req.body;

    const token = req.cookies.user_token;

    User.findByToken(token, (err, user) => {
        if (err) return res.status(400).send("User not found");
        if (user) {
            Product
                .findOne({ "_id": { $in: productId } })
                .exec((err, product) => {
                    const itemToDelete = user.cart.find(prod => String(prod._id) === productId)
                    const index = user.cart.indexOf(itemToDelete)

                    if (index >= 0) {
                        user.cart.splice(index, 1)

                        user.save((err, doc) => {
                            res.status(200).json({
                                success: true,
                                userdata: doc
                            })
                        })
                    }
                })

            // const filteredProduct = user.cart.filter(product => String(product._id) === productId);
            // if(filteredProduct > 1) {
            //     filteredProduct.pop(0)
            // }
            // user.cart = newCart;

        }

    })

})

app.get('/api/users/cart_get_cart', (req, res) => {
    const token = req.cookies.user_token;

    User.findByToken(token, (err, user) => {
        if (err) return res.status(400).send("User not found");
        if (user) {
            res.status(200).send(user.cart);
        }
    })
})


//=====================================
//              ORDER
//=====================================

app.post('/api/users/order', (req, res) => {
    const token = req.cookies.user_token;
    User.findByToken(token, (err, user) => {

        if (user) {            
            const { cart } = user;
            const order = new Order({
                ...req.body,
                user,
                products: [...cart],
            });
            
            order.save((err, doc) => {
                if (err) {
                    console.log(err);
                }
                
                res.status(200).json({
                    success: true,
                    userdata: doc
                })
            })
        }
        if (err) return res.status(400).send("Please sign in");
    })
})


//=====================================
//              PORT
//=====================================

const port = process.env.PORT || 3006;
app.listen(port, () => {
    console.log(`Server running at ${port}`);
})
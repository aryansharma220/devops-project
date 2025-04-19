function App() {
    const { Container, Row, Col, Navbar, Nav, Card, Button, Badge } = ReactBootstrap;
    const [cartCount, setCartCount] = React.useState(0);
    const [wishlistCount, setWishlistCount] = React.useState(0);
    const [activeCategory, setActiveCategory] = React.useState('all');

    // Product data
    const products = [
        {
            id: 1,
            name: "Premium Leather Jacket",
            price: 249.99,
            rating: 4.5,
            image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
            category: "clothing",
            badge: "New"
        },
        {
            id: 2,
            name: "Wireless Headphones",
            price: 179.99,
            rating: 4.8,
            image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
            category: "electronics",
            badge: "Best Seller"
        },
        {
            id: 3,
            name: "Smart Watch Pro",
            price: 299.99,
            rating: 4.7,
            image: "https://images.unsplash.com/photo-1579586337278-3befd40fd17a?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
            category: "electronics"
        },
        {
            id: 4,
            name: "Designer Sunglasses",
            price: 129.99,
            rating: 4.2,
            image: "https://images.unsplash.com/photo-1572635196237-14b3f281503f?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
            category: "accessories",
            badge: "20% Off"
        },
        {
            id: 5,
            name: "Luxury Perfume",
            price: 89.99,
            rating: 4.6,
            image: "https://images.unsplash.com/photo-1523293182086-7651a899d37f?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
            category: "beauty"
        },
        {
            id: 6,
            name: "Classic Denim Jeans",
            price: 79.99,
            rating: 4.4,
            image: "https://images.unsplash.com/photo-1542272604-787c3835535d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
            category: "clothing"
        },
        {
            id: 7,
            name: "Premium Sneakers",
            price: 159.99,
            rating: 4.9,
            image: "https://images.unsplash.com/photo-1556048219-bb6978360b84?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
            category: "shoes",
            badge: "Limited Edition"
        },
        {
            id: 8,
            name: "Smartphone Pro Max",
            price: 899.99,
            rating: 4.7,
            image: "https://images.unsplash.com/photo-1580910051074-3eb694886505?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
            category: "electronics",
            badge: "New"
        }
    ];

    // Filter products by category
    const filteredProducts = activeCategory === 'all' 
        ? products 
        : products.filter(product => product.category === activeCategory);

    // Handle add to cart
    const handleAddToCart = (product) => {
        console.log(`Added to cart: ${product.name}`);
        setCartCount(cartCount + 1);
    };

    // Handle add to wishlist
    const handleAddToWishlist = (product) => {
        console.log(`Added to wishlist: ${product.name}`);
        setWishlistCount(wishlistCount + 1);
    };

    return (
        <React.Fragment>
            {/* Navigation */}
            <Navbar bg="white" expand="lg" fixed="top" className="navbar">
                <Container>
                    <Navbar.Brand href="#home" className="navbar-brand">Elegance</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mx-auto">
                            <Nav.Link href="#home" className="nav-link">Home</Nav.Link>
                            <Nav.Link href="#products" className="nav-link">Products</Nav.Link>
                            <Nav.Link href="#categories" className="nav-link">Categories</Nav.Link>
                            <Nav.Link href="#about" className="nav-link">About</Nav.Link>
                            <Nav.Link href="#contact" className="nav-link">Contact</Nav.Link>
                        </Nav>
                        <Nav>
                            <Nav.Link href="#search">
                                <i className="fas fa-search"></i>
                            </Nav.Link>
                            <Nav.Link href="#account">
                                <i className="fas fa-user"></i>
                            </Nav.Link>
                            <Nav.Link href="#wishlist" className="position-relative">
                                <i className="far fa-heart"></i>
                                {wishlistCount > 0 && (
                                    <span className="cart-count">{wishlistCount}</span>
                                )}
                            </Nav.Link>
                            <Nav.Link href="#cart" className="cart-icon">
                                <i className="fas fa-shopping-bag"></i>
                                {cartCount > 0 && (
                                    <span className="cart-count">{cartCount}</span>
                                )}
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

            {/* Hero Section */}
            <section className="hero" id="home" style={{ 
                backgroundImage: "url('https://images.unsplash.com/photo-1483985988355-763728e1935b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80')" 
            }}>
                <div className="hero-overlay"></div>
                <Container>
                    <Row>
                        <Col lg={8} className="hero-content">
                            <div data-aos="fade-up" className="animate-fadeInUp">
                                <h1>Elevate Your Style with Our Premium Collection</h1>
                                <p>Discover the latest trends and timeless classics in our carefully curated selection of high-quality fashion and lifestyle products.</p>
                                <Button variant="primary" size="lg" className="mr-3">Shop Now</Button>
                                <Button variant="outline-light" size="lg">Explore Collections</Button>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>

            {/* Features Section */}
            <section className="py-5">
                <Container>
                    <Row>
                        <Col md={3} sm={6} className="mb-4" data-aos="fade-up" data-aos-delay="100">
                            <div className="feature-box">
                                <i className="fas fa-shipping-fast feature-icon"></i>
                                <h4>Free Shipping</h4>
                                <p>On all orders over $50</p>
                            </div>
                        </Col>
                        <Col md={3} sm={6} className="mb-4" data-aos="fade-up" data-aos-delay="200">
                            <div className="feature-box">
                                <i className="fas fa-undo feature-icon"></i>
                                <h4>Easy Returns</h4>
                                <p>30-day return policy</p>
                            </div>
                        </Col>
                        <Col md={3} sm={6} className="mb-4" data-aos="fade-up" data-aos-delay="300">
                            <div className="feature-box">
                                <i className="fas fa-lock feature-icon"></i>
                                <h4>Secure Payment</h4>
                                <p>100% secure checkout</p>
                            </div>
                        </Col>
                        <Col md={3} sm={6} className="mb-4" data-aos="fade-up" data-aos-delay="400">
                            <div className="feature-box">
                                <i className="fas fa-headset feature-icon"></i>
                                <h4>24/7 Support</h4>
                                <p>Dedicated customer support</p>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>

            {/* Product Categories */}
            <section className="py-5" id="categories">
                <Container>
                    <h2 className="section-title" data-aos="fade-up">Shop by Category</h2>
                    
                    <div className="category-tabs" data-aos="fade-up">
                        <div 
                            className={`category-tab ${activeCategory === 'all' ? 'active' : ''}`}
                            onClick={() => setActiveCategory('all')}
                        >
                            All Products
                        </div>
                        <div 
                            className={`category-tab ${activeCategory === 'clothing' ? 'active' : ''}`}
                            onClick={() => setActiveCategory('clothing')}
                        >
                            Clothing
                        </div>
                        <div 
                            className={`category-tab ${activeCategory === 'electronics' ? 'active' : ''}`}
                            onClick={() => setActiveCategory('electronics')}
                        >
                            Electronics
                        </div>
                        <div 
                            className={`category-tab ${activeCategory === 'accessories' ? 'active' : ''}`}
                            onClick={() => setActiveCategory('accessories')}
                        >
                            Accessories
                        </div>
                    </div>
                    
                    <Row id="products">
                        {filteredProducts.map((product, index) => (
                            <Col lg={3} md={4} sm={6} key={product.id} data-aos="fade-up" data-aos-delay={100 * (index % 4)}>
                                <Card className="product-card">
                                    <div className="product-img-container">
                                        {product.badge && (
                                            <div className="product-badge">{product.badge}</div>
                                        )}
                                        <Card.Img variant="top" src={product.image} className="product-img" />
                                    </div>
                                    <Card.Body>
                                        <div className="product-rating">
                                            {[...Array(5)].map((_, i) => (
                                                <i key={i} className={`${i < Math.floor(product.rating) ? 'fas' : i < product.rating ? 'fas fa-star-half-alt' : 'far'} fa-star`}></i>
                                            ))}
                                            <span className="ml-1 text-muted">({product.rating})</span>
                                        </div>
                                        <Card.Title className="product-title">{product.name}</Card.Title>
                                        <div className="product-price">${product.price.toFixed(2)}</div>
                                        <div className="product-buttons">
                                            <Button 
                                                variant="primary" 
                                                className="add-to-cart"
                                                onClick={() => handleAddToCart(product)}
                                            >
                                                <i className="fas fa-shopping-cart mr-1"></i> Add to Cart
                                            </Button>
                                            <Button 
                                                variant="outline-secondary" 
                                                className="wishlist"
                                                onClick={() => handleAddToWishlist(product)}
                                            >
                                                <i className="far fa-heart"></i>
                                            </Button>
                                        </div>
                                    </Card.Body>
                                </Card>
                            </Col>
                        ))}
                    </Row>
                </Container>
            </section>

            {/* Banner Section */}
            <section className="banner" data-aos="fade-up">
                <Container>
                    <Row className="align-items-center">
                        <Col md={6}>
                            <h2>Special Offer</h2>
                            <p className="lead">Get 20% off on your first purchase! Use code: WELCOME20</p>
                            <Button variant="light">Shop Now</Button>
                        </Col>
                        <Col md={6} className="text-center">
                            <img 
                                src="https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80" 
                                alt="Special Offer" 
                                className="img-fluid rounded" 
                                style={{ maxHeight: '300px' }}
                            />
                        </Col>
                    </Row>
                </Container>
            </section>

            {/* New Arrivals */}
            <section className="py-5">
                <Container>
                    <h2 className="section-title" data-aos="fade-up">New Arrivals</h2>
                    <Row>
                        {products.slice(0, 4).map((product, index) => (
                            <Col lg={3} md={4} sm={6} key={`new-${product.id}`} data-aos="fade-up" data-aos-delay={100 * index}>
                                <Card className="product-card">
                                    <div className="product-img-container">
                                        {product.badge && (
                                            <div className="product-badge">{product.badge}</div>
                                        )}
                                        <Card.Img variant="top" src={product.image} className="product-img" />
                                    </div>
                                    <Card.Body>
                                        <Card.Title className="product-title">{product.name}</Card.Title>
                                        <div className="product-price">${product.price.toFixed(2)}</div>
                                        <div className="product-buttons mt-3">
                                            <Button 
                                                variant="primary" 
                                                className="add-to-cart"
                                                onClick={() => handleAddToCart(product)}
                                            >
                                                View Details
                                            </Button>
                                        </div>
                                    </Card.Body>
                                </Card>
                            </Col>
                        ))}
                    </Row>
                </Container>
            </section>

            {/* Testimonials */}
            <section className="py-5 bg-light">
                <Container>
                    <h2 className="section-title" data-aos="fade-up">What Our Customers Say</h2>
                    <Row>
                        <Col md={4} data-aos="fade-up">
                            <div className="testimonial-card">
                                <p>"The quality of products from this store is exceptional. I've been a customer for years and have never been disappointed!"</p>
                                <div className="testimonial-rating">
                                    <i className="fas fa-star text-warning"></i>
                                    <i className="fas fa-star text-warning"></i>
                                    <i className="fas fa-star text-warning"></i>
                                    <i className="fas fa-star text-warning"></i>
                                    <i className="fas fa-star text-warning"></i>
                                </div>
                                <div className="testimonial-author">
                                    <img 
                                        src="https://randomuser.me/api/portraits/women/10.jpg" 
                                        alt="Testimonial Author" 
                                        className="testimonial-avatar" 
                                    />
                                    <div>
                                        <h5 className="mb-0">Sarah Johnson</h5>
                                        <small>Loyal Customer</small>
                                    </div>
                                </div>
                            </div>
                        </Col>
                        <Col md={4} data-aos="fade-up" data-aos-delay="100">
                            <div className="testimonial-card">
                                <p>"Fast shipping, excellent customer service, and trendy products. This has become my go-to online store for all fashion needs!"</p>
                                <div className="testimonial-rating">
                                    <i className="fas fa-star text-warning"></i>
                                    <i className="fas fa-star text-warning"></i>
                                    <i className="fas fa-star text-warning"></i>
                                    <i className="fas fa-star text-warning"></i>
                                    <i className="fas fa-star text-warning"></i>
                                </div>
                                <div className="testimonial-author">
                                    <img 
                                        src="https://randomuser.me/api/portraits/men/32.jpg" 
                                        alt="Testimonial Author" 
                                        className="testimonial-avatar" 
                                    />
                                    <div>
                                        <h5 className="mb-0">Michael Thomas</h5>
                                        <small>Repeat Customer</small>
                                    </div>
                                </div>
                            </div>
                        </Col>
                        <Col md={4} data-aos="fade-up" data-aos-delay="200">
                            <div className="testimonial-card">
                                <p>"The variety of products is amazing. I always find exactly what I'm looking for, and the prices are reasonable compared to competitors."</p>
                                <div className="testimonial-rating">
                                    <i className="fas fa-star text-warning"></i>
                                    <i className="fas fa-star text-warning"></i>
                                    <i className="fas fa-star text-warning"></i>
                                    <i className="fas fa-star text-warning"></i>
                                    <i className="fas fa-star-half-alt text-warning"></i>
                                </div>
                                <div className="testimonial-author">
                                    <img 
                                        src="https://randomuser.me/api/portraits/women/68.jpg" 
                                        alt="Testimonial Author" 
                                        className="testimonial-avatar" 
                                    />
                                    <div>
                                        <h5 className="mb-0">Emma Rodriguez</h5>
                                        <small>Fashion Enthusiast</small>
                                    </div>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>

            {/* Newsletter */}
            <section className="py-5">
                <Container className="text-center" data-aos="fade-up">
                    <h2>Join Our Newsletter</h2>
                    <p className="lead mb-4">Get the latest updates on new products and special offers</p>
                    <Row className="justify-content-center">
                        <Col md={6}>
                            <div className="input-group mb-3">
                                <input type="email" className="form-control" placeholder="Your email address" aria-label="Email" />
                                <div className="input-group-append">
                                    <button className="btn btn-primary" type="button">Subscribe</button>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>

            {/* Footer */}
            <footer className="footer" id="contact">
                <Container>
                    <Row>
                        <Col lg={3} md={6} className="mb-4 mb-md-0">
                            <div className="footer-logo">Elegance</div>
                            <p>Premium shopping experience for the modern lifestyle. Quality products, exceptional service.</p>
                            <div className="mt-3">
                                <a href="#" className="social-icon"><i className="fab fa-facebook-f"></i></a>
                                <a href="#" className="social-icon"><i className="fab fa-twitter"></i></a>
                                <a href="#" className="social-icon"><i className="fab fa-instagram"></i></a>
                                <a href="#" className="social-icon"><i className="fab fa-pinterest-p"></i></a>
                            </div>
                        </Col>
                        <Col lg={3} md={6} className="mb-4 mb-md-0">
                            <h5>Quick Links</h5>
                            <ul className="footer-links">
                                <li><a href="#">Home</a></li>
                                <li><a href="#products">Shop</a></li>
                                <li><a href="#about">About Us</a></li>
                                <li><a href="#contact">Contact Us</a></li>
                            </ul>
                        </Col>
                        <Col lg={3} md={6} className="mb-4 mb-md-0">
                            <h5>Customer Care</h5>
                            <ul className="footer-links">
                                <li><a href="#">My Account</a></li>
                                <li><a href="#">Order Tracking</a></li>
                                <li><a href="#">Wishlist</a></li>
                                <li><a href="#">Returns & Exchanges</a></li>
                                <li><a href="#">FAQs</a></li>
                            </ul>
                        </Col>
                        <Col lg={3} md={6}>
                            <h5>Contact Us</h5>
                            <p>123 Fashion Street<br />New York, NY 10001</p>
                            <p><i className="fas fa-phone-alt mr-2"></i> (123) 456-7890</p>
                            <p><i className="fas fa-envelope mr-2"></i> info@elegance.com</p>
                        </Col>
                    </Row>
                    <div className="text-center copyright">
                        <p>&copy; 2025 Elegance. All rights reserved.</p>
                    </div>
                </Container>
            </footer>
        </React.Fragment>
    );
}

ReactDOM.render(<App />, document.getElementById('root'));

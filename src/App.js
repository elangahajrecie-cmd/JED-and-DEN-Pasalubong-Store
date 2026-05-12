import React, { useEffect, useMemo, useState } from 'react';
import './App.css';
import piayaNewImage from './assets/piaya-new.png';
import piayaBigPackImage from './assets/piaya-big-pack.png';
import piayaMediumPackImage from './assets/piaya-medium-pack.png';
import piayaSmallPackImage from './assets/piaya-small-pack.png';
import coconutBandiImage from './assets/coconut-bandi-final.png';
import biscochoNewImage from './assets/biscocho-new.png';
import biscochoOriginalMediumImage from './assets/biscocho-original-medium.png';
import biscochoOriginalLargeImage from './assets/biscocho-original-large.png';
import biscochoGarlicMediumImage from './assets/biscocho-garlic-medium.png';
import biscochoWewinsMediumImage from './assets/biscocho-wewins-medium.png';
import peanutBandiNewImage from './assets/peanut-bandi-new.png';
import peanutBandiBigPackImage from './assets/peanut-bandi-big-pack.png';
import peanutBandiMediumPackImage from './assets/peanut-bandi-medium-pack.png';
import peanutBandiSmallPackImage from './assets/peanut-bandi-small-pack.png';
import mamonTostadoNewImage from './assets/mamon-tostado-new.png';
import premiumPasalubongNewImage from './assets/premium-filipino-pasalubong-new.png';
import traditionalBreadNewImage from './assets/traditional-filipino-bread-new.jpg';
import assortedSweetsNewImage from './assets/assorted-filipino-sweets-new.jpg';
import breadCataluganImage from './assets/bread-catalugan.png';
import breadEnsaymadaImage from './assets/bread-ensaymada.png';
import breadSambagImage from './assets/bread-sambag.png';
import breadUgoyUgoyImage from './assets/bread-ugoy-ugoy.png';
import breadPanDeRosaImage from './assets/bread-pan-de-rosa.png';
import breadMongoLoafImage from './assets/bread-mongo-loaf.png';
import breadTerenTerenImage from './assets/bread-teren-teren.png';
import breadOtapImage from './assets/bread-otap.png';
import premiumMeringueImage from './assets/premium-meringue.png';
import premiumDriedMangoesImage from './assets/premium-dried-mangoes.png';
import premiumPinasugboImage from './assets/premium-pinasugbo.png';
import premiumButterscotchImage from './assets/premium-butterscotch.png';
import assortedMacapunoImage from './assets/assorted-macapuno.png';
import assortedPutoSekoImage from './assets/assorted-puto-seko.png';
import assortedChocolateCacaoTableaImage from './assets/assorted-chocolate-cacao-tablea.png';
import assortedPeanutTableaImage from './assets/assorted-peanut-tablea.png';
import assortedUbeBarAndBallsImage from './assets/assorted-ube-bar-and-balls.png';
import assortedBarquironImage from './assets/assorted-barquiron.png';
import assortedSampalokCandyImage from './assets/assorted-sampalok-candy.png';
import assortedSerafinaImage from './assets/assorted-serafina.png';
import assortedButongButongImage from './assets/assorted-butong-butong.png';
import assortedChicharonImage from './assets/assorted-chicharon.png';
import washVariantImage from './Wash.PNG';
import muscovadoVariantImage from './muscovado.PNG';
import mamonMediumImage from './Medium.PNG';
import mamonLargeImage from './Large.PNG';
import ubeVariantImage from './Ube.PNG';
import mangoVariantImage from './assets/mango-piaya.png';
import {
  Bar,
  BarChart,
  CartesianGrid,
  Cell,
  Legend,
  Line,
  LineChart,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';

const ADMIN_PASSWORD = 'PASALUBONG 2K26';
const STORAGE_KEY = 'jedDenOrders';

const business = {
  name: 'JED and DEN Pastries',
  shortName: 'JED and DEN',
  tagline: 'Pasalubong Made with Love, Shared with Joy.',
  location: 'Trade Town, Dalipe, San Jose de Buenavista, Antique',
  contact: '09936206328',
  hours: 'Monday to Sunday, 8AM to 6PM',
  paymentMethods: ['Cash'],
};

const products = [
  {
    id: 'piaya',
    name: 'Piaya',
    category: 'Flat Pastry',
    description:
      'Traditional flat pastry filled with muscovado sugar, made with a thin soft crust, a gentle crisp, and a sweet caramel-like center.',
    variants: ['Original', 'Ube', 'Mango'],
    variantImages: {
      Ube: ubeVariantImage,
      Mango: mangoVariantImage,
    },
    brands: ["Bongbong's", 'Merzci'],
    options: [
      { label: 'Big pack', price: 90, image: piayaBigPackImage },
      { label: 'Medium pack', price: 50, image: piayaMediumPackImage },
      { label: 'Small pack', price: 35, image: piayaSmallPackImage },
    ],
    image: piayaNewImage,
  },
  {
    id: 'peanut-bandi',
    name: 'Peanut Bandi',
    category: 'Native Sweets',
    description:
      'A crunchy local snack made from roasted peanuts coated with caramelized sugar for a sweet, nutty finish.',
    variants: ['Muscovado', 'Wash'],
    brands: ['Local Homemade Products'],
    options: [
      { label: 'Big pack', price: 50, image: peanutBandiBigPackImage },
      { label: 'Medium pack', price: 25, image: peanutBandiMediumPackImage },
      { label: 'Small pack', price: 10, image: peanutBandiSmallPackImage },
    ],
    image: peanutBandiNewImage,
  },
  {
    id: 'coconut-bandi',
    name: 'Coconut Bandi',
    category: 'Coconut Candy',
    description:
      'Traditional coconut delicacy with a chewy texture and rich muscovado sweetness from unrefined brown sugar.',
    variants: ['Muscovado', 'Wash'],
    variantImages: {
      Muscovado: muscovadoVariantImage,
      Wash: washVariantImage,
    },
    brands: ['Local Homemade'],
    options: [{ label: 'Per pack', price: 25 }],
    image: coconutBandiImage,
  },
  {
    id: 'biscocho',
    name: 'Biscocho',
    category: 'Baked Snack',
    description:
      'Twice-baked sliced bread coated in sugar and toasted until perfectly crunchy, available in classic and garlic flavors.',
    variants: ['Original', 'Garlic'],
    brands: ["Bongbong's", 'Wewins'],
    options: [
      { label: 'Original medium', price: 70, image: biscochoOriginalMediumImage },
      { label: 'Original large', price: 140, image: biscochoOriginalLargeImage },
      { label: 'Garlic medium', price: 80, image: biscochoGarlicMediumImage },
      { label: 'Wewins medium', price: 100, image: biscochoWewinsMediumImage },
    ],
    image: biscochoNewImage,
  },
  {
    id: 'mamon-tostado',
    name: 'Mamon Tostado',
    category: 'Sponge Cake',
    description:
      'Light, buttery sponge cake toasted into a sweet and nostalgic pasalubong snack.',
    variants: ['Original'],
    brands: ["Bongbong's"],
    options: [
      { label: 'Medium', price: 70, image: mamonMediumImage },
      { label: 'Large', price: 140, image: mamonLargeImage },
    ],
    image: mamonTostadoNewImage,
  },
  {
    id: 'premium-pasalubong',
    name: 'Premium Filipino Pasalubong',
    category: 'Premium Pasalubong',
    description:
      'A gift-ready selection of sweet, crunchy, and caramelized Filipino favorites made with quality ingredients.',
    variants: ['Original', 'Extra Crunch', 'Classic Sweetened'],
    brands: ["Bongbong's", 'Merzci', "N's"],
    options: [
      { label: 'Meringue pack', price: 85, image: premiumMeringueImage },
      { label: 'Butterscotch pack', price: 100, image: premiumButterscotchImage },
      { label: 'Pinasugbo pack', price: 35, image: premiumPinasugboImage },
      { label: 'Dried Mangoes pack', price: 135, image: premiumDriedMangoesImage },
      { label: 'Banana Chips pack', price: 35 },
    ],
    image: premiumPasalubongNewImage,
  },
  {
    id: 'traditional-bread',
    name: 'Traditional Filipino Bread',
    category: 'Pasalubong Bread',
    description:
      'Freshly baked Filipino breads with soft textures, sweet flavors, and a homemade taste suited for snacks or gifts.',
    variants: ['Original', 'Cheese Filled', 'Buttered', 'Sweet Mongo'],
    brands: ["Bongbong's", 'Wewins', 'Tibiao Bakery', 'Angelina', "N's"],
    options: [
      { label: 'Catalugan pack', price: 25, image: breadCataluganImage },
      { label: 'Ensaymada pack', price: 25, image: breadEnsaymadaImage },
      { label: 'Sambag pack', price: 80, image: breadSambagImage },
      { label: 'Ugoy-Ugoy pack', price: 35, image: breadUgoyUgoyImage },
      { label: 'Pan De Rosa pack', price: 85, image: breadPanDeRosaImage },
      { label: 'Mongo Loaf pack', price: 65, image: breadMongoLoafImage },
      { label: 'Teren-Teren pack', price: 25, image: breadTerenTerenImage },
      { label: 'Otap pack', price: 35, image: breadOtapImage },
    ],
    image: traditionalBreadNewImage,
  },
  {
    id: 'assorted-sweets',
    name: 'Assorted Filipino Pasalubong Sweets',
    category: 'Native Delicacies',
    description:
      'Traditional sweets made from coconut, rice flour, ube, cacao, tamarind, and other local ingredients.',
    variants: ['Original Homemade Recipe'],
    brands: ['Local Pasalubong Producer'],
    options: [
      { label: 'Macapuno pack', price: 15, image: assortedMacapunoImage },
      { label: 'Puto Seko pack', price: 8, image: assortedPutoSekoImage },
      { label: 'Chocolate Cacao Tablea pack', price: 60, image: assortedChocolateCacaoTableaImage },
      { label: 'Peanut Tablea pack', price: 35, image: assortedPeanutTableaImage },
      { label: 'Ube Bar and Ube Balls pack', price: 25, image: assortedUbeBarAndBallsImage },
      { label: 'Barquiron pack', price: 35, image: assortedBarquironImage },
      { label: 'Sampalok Candy pack', price: 25, image: assortedSampalokCandyImage },
      { label: 'Serafina pack', price: 35, image: assortedSerafinaImage },
      { label: 'Butong-Butong pack', price: 25, image: assortedButongButongImage },
      { label: 'Chicharon pack', price: 30, image: assortedChicharonImage },
    ],
    image: assortedSweetsNewImage,
  },
];

const statusOptions = ['Pending', 'Confirmed', 'Preparing', 'Pick up', 'Cancelled'];
const chartColors = ['#7c4f31', '#b9733a', '#2f7d68', '#e0a72f', '#9a463d'];

const peso = new Intl.NumberFormat('en-PH', {
  style: 'currency',
  currency: 'PHP',
  maximumFractionDigits: 0,
});

function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [orders, setOrders] = useState(() => loadOrders());
  const [adminLoggedIn, setAdminLoggedIn] = useState(false);
  const [passwordInput, setPasswordInput] = useState('');
  const [loginError, setLoginError] = useState('');

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(orders));
  }, [orders]);

  const analytics = useMemo(() => getAnalytics(orders), [orders]);

  const navigate = (page) => {
    setCurrentPage(page);
    setLoginError('');
  };

  const submitOrder = (orderData) => {
    const order = {
      ...orderData,
      id: crypto.randomUUID ? crypto.randomUUID() : String(Date.now()),
      orderNumber: makeOrderNumber(orders.length),
      createdAt: new Date().toISOString(),
      status: 'Pending',
    };

    setOrders((currentOrders) => [order, ...currentOrders]);
    return order;
  };

  const updateOrderStatus = (orderId, status) => {
    setOrders((currentOrders) =>
      currentOrders.map((order) => (order.id === orderId ? { ...order, status } : order)),
    );
  };

  const deleteOrder = (orderId) => {
    setOrders((currentOrders) => currentOrders.filter((order) => order.id !== orderId));
  };

  const exportOrders = () => {
    const headers = [
      'Order Number',
      'Date and Time',
      'Customer Name',
      'Contact',
      'Email',
      'Items',
      'Total Amount',
      'Payment Method',
      'Preferred Pick Up',
      'Status',
      'Notes',
    ];

    const rows = orders.map((order) => [
      order.orderNumber,
      formatDateTime(order.createdAt),
      order.customerName,
      order.contactNumber,
      order.email || '',
      order.items.map((item) => `${item.name} - ${item.option} x ${item.quantity}`).join('; '),
      order.totalAmount,
      order.paymentMethod,
      formatDateTime(order.pickupDateTime),
      order.status,
      order.notes || '',
    ]);

    const csv = [headers, ...rows].map((row) => row.map(csvCell).join(',')).join('\n');
    const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `jed-den-orders-${new Date().toISOString().slice(0, 10)}.csv`;
    link.click();
    URL.revokeObjectURL(url);
  };

  const loginAdmin = (event) => {
    event.preventDefault();

    if (passwordInput === ADMIN_PASSWORD) {
      setAdminLoggedIn(true);
      setPasswordInput('');
      setLoginError('');
      setCurrentPage('admin');
      return;
    }

    setLoginError('Incorrect password. Please try again.');
  };

  const logoutAdmin = () => {
    setAdminLoggedIn(false);
    setCurrentPage('home');
  };

  return (
    <div className="app-shell">
      <header className="site-header">
        <button className="brand-lockup" type="button" onClick={() => navigate('home')}>
          <span className="brand-mark">JD</span>
          <span>
            <strong>{business.name}</strong>
            <small>{business.tagline}</small>
          </span>
        </button>

        <nav className="main-nav" aria-label="Main navigation">
          <button className={currentPage === 'home' ? 'active' : ''} onClick={() => navigate('home')}>
            Home
          </button>
          <button
            className={currentPage === 'products' ? 'active' : ''}
            onClick={() => navigate('products')}
          >
            Products
          </button>
          <button className={currentPage === 'order' ? 'active' : ''} onClick={() => navigate('order')}>
            Order
          </button>
          <button className={currentPage === 'admin' ? 'active' : ''} onClick={() => navigate('admin')}>
            Admin
          </button>
          {adminLoggedIn && (
            <button className="logout-button" onClick={logoutAdmin}>
              Logout
            </button>
          )}
        </nav>
      </header>

      {currentPage === 'home' && <HomePage onShop={() => navigate('products')} onOrder={() => navigate('order')} />}
      {currentPage === 'products' && <ProductsPage onOrder={() => navigate('order')} />}
      {currentPage === 'order' && <OrderPage onSubmitOrder={submitOrder} />}
      {currentPage === 'admin' &&
        (adminLoggedIn ? (
          <AdminDashboard
            analytics={analytics}
            orders={orders}
            onDeleteOrder={deleteOrder}
            onExportOrders={exportOrders}
            onUpdateStatus={updateOrderStatus}
          />
        ) : (
          <AdminLogin
            error={loginError}
            onSubmit={loginAdmin}
            passwordInput={passwordInput}
            setPasswordInput={setPasswordInput}
          />
        ))}
    </div>
  );
}

function HomePage({ onOrder, onShop }) {
  return (
    <main>
      <section className="hero-section">
        <div className="hero-content">
          <p className="eyebrow">Pasalubong store in Antique since 1999</p>
          <h1>Pasalubong Made with Love</h1>
          <p className="hero-copy">Sharing authentic flavors and heartfelt memories in every bite.</p>
          <div className="hero-actions">
            <button className="primary-button" onClick={onOrder}>
              Grab Your Pasalubong Now!
            </button>
            <button className="secondary-button" onClick={onShop}>
              View Products
            </button>
          </div>
        </div>
      </section>

      <section className="section-grid about-section">
        <div>
          <p className="eyebrow">Our Story</p>
          <h2>Rooted in local flavor, family work, and warm service.</h2>
          <p>
            Our pasalubong business started in 1999 with a passion for creating authentic local
            delicacies made from quality ingredients and traditional methods. The family began by
            producing muscovado products, wash bandi, coconut delicacies, peanut treats, and other
            local varieties that became loved by customers and travelers alike.
          </p>
          <p>
            As Trade Town Dalipe opened and demand continued to grow, the family established a
            physical store to make these products more accessible to the community and visitors.
            Guided by tradition, quality, and heartfelt service, the business continues to share
            proudly local flavors that bring joy and memories.
          </p>
        </div>

        <aside className="store-card">
          <h3>Store Information</h3>
          <dl>
            <div>
              <dt>Location</dt>
              <dd>{business.location}</dd>
            </div>
            <div>
              <dt>Hours</dt>
              <dd>{business.hours}</dd>
            </div>
            <div>
              <dt>Contact</dt>
              <dd>{business.contact}</dd>
            </div>
            <div>
              <dt>Payment</dt>
              <dd>{business.paymentMethods.join(', ')}</dd>
            </div>
          </dl>
        </aside>
      </section>

      <section className="why-section">
        <p className="eyebrow">Why Choose Us</p>
        <h2>Every pack is chosen for freshness, tradition, and everyday value.</h2>
        <div className="reason-grid">
          {[
            'Trusted pasalubong store since 1999',
            'Made from authentic local ingredients and traditional recipes',
            'Wide variety of pasalubong products',
            'Affordable choices for sharing and gifting',
            'Fresh, high-quality local delicacies',
          ].map((reason) => (
            <article className="reason-card" key={reason}>
              <span aria-hidden="true">✓</span>
              <p>{reason}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="testimonial-band">
        <article>
          <p>
            "A dependable stop for Antique pasalubong: simple, local, sweet, and always easy to
            share."
          </p>
          <strong>Community Favorite</strong>
        </article>
        <article>
          <p>"The flavors feel homemade, especially the bandi and classic breads."</p>
          <strong>Traveler Pick</strong>
        </article>
      </section>
    </main>
  );
}

function ProductsPage({ onOrder }) {
  const [previewImage, setPreviewImage] = useState(null);

  const openImagePreview = (src, alt) => {
    setPreviewImage({ src, alt });
  };

  const closeImagePreview = () => {
    setPreviewImage(null);
  };

  useEffect(() => {
    if (!previewImage) {
      return undefined;
    }

    const closeOnEscape = (event) => {
      if (event.key === 'Escape') {
        closeImagePreview();
      }
    };

    window.addEventListener('keydown', closeOnEscape);
    return () => window.removeEventListener('keydown', closeOnEscape);
  }, [previewImage]);

  return (
    <main className="page-container">
      <div className="page-heading">
        <p className="eyebrow">PRODUCTS</p>
        <h1>Products</h1>
        <p>Browse classic pasalubong favorites, local sweets, breads, and giftable treats.</p>
      </div>

      <div className="product-grid">
        {products.map((product) => (
          <article className="product-card" key={product.id}>
            <div
              className="product-image"
              style={{ backgroundImage: `url(${product.image})` }}
              aria-label={product.name}
            />
            <div className="product-body">
              <div className="product-title-row">
                <div>
                  <h2>{product.name}</h2>
                  <p>{product.category}</p>
                </div>
                <span className="stock-pill">Available</span>
              </div>
              <p className="product-description">{product.description}</p>
              <ProductMeta
                label="Variants"
                values={product.variants}
                valueImages={product.variantImages}
                onImageClick={openImagePreview}
                imageAltPrefix={product.name}
              />
              <ProductMeta label="Brands" values={product.brands} />
              {product.id === 'premium-pasalubong' ||
              product.id === 'piaya' ||
              product.id === 'peanut-bandi' ||
              product.id === 'biscocho' ||
              product.id === 'mamon-tostado' ||
              product.id === 'traditional-bread' ||
              product.id === 'assorted-sweets' ? (
                <div className="price-list premium-price-list">
                  {product.options.map((option) => (
                    <div className="premium-option-row" key={option.label}>
                      <span className="premium-option-name">
                        <button
                          className="image-preview-trigger"
                          type="button"
                          onClick={() =>
                            openImagePreview(
                              option.image || product.image,
                              `${product.name} - ${option.label}`,
                            )
                          }
                          aria-label={`View ${product.name} ${option.label} image`}
                        >
                          <img src={option.image || product.image} alt={option.label} />
                        </button>
                        <span>{option.label}</span>
                      </span>
                      <strong>{peso.format(option.price)}</strong>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="price-list">
                  {product.options.map((option) => (
                    <span key={option.label}>
                      {option.label}: <strong>{peso.format(option.price)}</strong>
                    </span>
                  ))}
                </div>
              )}
              <button className="small-primary" onClick={onOrder}>
                Order This Product
              </button>
            </div>
          </article>
        ))}
      </div>
      {previewImage && (
        <div
          className="image-preview-modal"
          role="dialog"
          aria-modal="true"
          aria-label={previewImage.alt}
          onClick={closeImagePreview}
        >
          <div className="image-preview-content" onClick={(event) => event.stopPropagation()}>
            <button className="image-preview-close" type="button" onClick={closeImagePreview}>
              Close
            </button>
            <img src={previewImage.src} alt={previewImage.alt} />
            <p>{previewImage.alt}</p>
          </div>
        </div>
      )}
    </main>
  );
}

function ProductMeta({ label, values, valueImages, onImageClick, imageAltPrefix = '' }) {
  return (
    <div className="meta-block">
      <strong>{label}</strong>
      <div>
        {values.map((value) => {
          const valueImage = valueImages?.[value];

          return (
            <span className={valueImage ? 'meta-chip-with-image' : ''} key={value}>
              {valueImage && (
                <button
                  className="meta-image-trigger"
                  type="button"
                  onClick={() => onImageClick?.(valueImage, `${imageAltPrefix} - ${value}`)}
                  aria-label={`View ${value} image`}
                >
                  <img src={valueImage} alt={value} />
                </button>
              )}
              {value}
            </span>
          );
        })}
      </div>
    </div>
  );
}

function OrderPage({ onSubmitOrder }) {
  const [form, setForm] = useState({
    customerName: '',
    contactNumber: '',
    email: '',
    notes: '',
    paymentMethod: 'Cash',
    pickupDateTime: '',
  });
  const [productId, setProductId] = useState(products[0].id);
  const [optionLabel, setOptionLabel] = useState(products[0].options[0].label);
  const [quantity, setQuantity] = useState(1);
  const [items, setItems] = useState([]);
  const [submittedOrder, setSubmittedOrder] = useState(null);
  const [error, setError] = useState('');

  const selectedProduct = products.find((product) => product.id === productId) || products[0];
  const selectedOption =
    selectedProduct.options.find((option) => option.label === optionLabel) || selectedProduct.options[0];
  const totalAmount = items.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const updateProduct = (nextProductId) => {
    const nextProduct = products.find((product) => product.id === nextProductId) || products[0];
    setProductId(nextProduct.id);
    setOptionLabel(nextProduct.options[0].label);
  };

  const addItem = () => {
    const nextItem = {
      id: `${selectedProduct.id}-${selectedOption.label}`,
      productId: selectedProduct.id,
      name: selectedProduct.name,
      option: selectedOption.label,
      price: selectedOption.price,
      quantity: Math.max(1, Number(quantity) || 1),
    };

    setItems((currentItems) => {
      const existing = currentItems.find((item) => item.id === nextItem.id);
      if (!existing) {
        return [...currentItems, nextItem];
      }

      return currentItems.map((item) =>
        item.id === nextItem.id ? { ...item, quantity: item.quantity + nextItem.quantity } : item,
      );
    });
    setQuantity(1);
    setError('');
  };

  const updateQuantity = (itemId, nextQuantity) => {
    setItems((currentItems) =>
      currentItems.map((item) =>
        item.id === itemId ? { ...item, quantity: Math.max(1, Number(nextQuantity) || 1) } : item,
      ),
    );
  };

  const removeItem = (itemId) => {
    setItems((currentItems) => currentItems.filter((item) => item.id !== itemId));
  };

  const submit = (event) => {
    event.preventDefault();

    if (!form.customerName.trim() || !form.contactNumber.trim() || !form.pickupDateTime) {
      setError('Please provide your name, contact number, and preferred pick up date and time.');
      return;
    }

    if (items.length === 0) {
      setError('Please add at least one product to your order.');
      return;
    }

    const order = onSubmitOrder({
      ...form,
      customerName: form.customerName.trim(),
      contactNumber: form.contactNumber.trim(),
      email: form.email.trim(),
      items,
      totalAmount,
    });

    setSubmittedOrder(order);
    setItems([]);
    setForm({
      customerName: '',
      contactNumber: '',
      email: '',
      notes: '',
      paymentMethod: 'Cash',
      pickupDateTime: '',
    });
  };

  if (submittedOrder) {
    return <OrderConfirmation order={submittedOrder} onNewOrder={() => setSubmittedOrder(null)} />;
  }

  return (
    <main className="page-container checkout-page">
      <div className="page-heading">
        <p className="eyebrow">Checkout</p>
        <h1>Ordering Page</h1>
        <p>Submit your pick up order. We will contact you within 2 hours to confirm availability.</p>
      </div>

      <form className="checkout-grid" onSubmit={submit}>
        <section className="form-panel">
          <h2>Customer Details</h2>
          <label>
            Customer Full Name
            <input
              value={form.customerName}
              onChange={(event) => setForm({ ...form, customerName: event.target.value })}
              placeholder="Juan Dela Cruz"
            />
          </label>
          <label>
            Contact Number
            <input
              value={form.contactNumber}
              onChange={(event) => setForm({ ...form, contactNumber: event.target.value })}
              placeholder="09XXXXXXXXX"
              type="tel"
            />
          </label>
          <label>
            Email Address Optional
            <input
              value={form.email}
              onChange={(event) => setForm({ ...form, email: event.target.value })}
              placeholder="customer@email.com"
              type="email"
            />
          </label>
          <label>
            Preferred Payment Method
            <select
              value={form.paymentMethod}
              onChange={(event) => setForm({ ...form, paymentMethod: event.target.value })}
            >
              <option>Cash</option>
            </select>
          </label>
          <label>
            Preferred Pick Up Date and Time
            <input
              value={form.pickupDateTime}
              onChange={(event) => setForm({ ...form, pickupDateTime: event.target.value })}
              type="datetime-local"
            />
          </label>
          <label>
            Special Instructions or Notes
            <textarea
              value={form.notes}
              onChange={(event) => setForm({ ...form, notes: event.target.value })}
              placeholder="Packaging request, preferred brand, or other notes"
              rows="4"
            />
          </label>
        </section>

        <section className="form-panel">
          <h2>Product Selection</h2>
          <div className="product-picker">
            <label>
              Product
              <select value={productId} onChange={(event) => updateProduct(event.target.value)}>
                {products.map((product) => (
                  <option key={product.id} value={product.id}>
                    {product.name}
                  </option>
                ))}
              </select>
            </label>
            <label>
              Size or Item
              <select value={optionLabel} onChange={(event) => setOptionLabel(event.target.value)}>
                {selectedProduct.options.map((option) => (
                  <option key={option.label} value={option.label}>
                    {option.label} - {peso.format(option.price)}
                  </option>
                ))}
              </select>
            </label>
            <label>
              Quantity
              <input
                min="1"
                type="number"
                value={quantity}
                onChange={(event) => setQuantity(event.target.value)}
              />
            </label>
            <button className="secondary-button add-button" type="button" onClick={addItem}>
              Add Product
            </button>
          </div>

          <div className="order-summary">
            <h3>Order Summary</h3>
            {items.length === 0 ? (
              <p className="empty-state">No products added yet.</p>
            ) : (
              <div className="summary-list">
                {items.map((item) => (
                  <div className="summary-row" key={item.id}>
                    <div>
                      <strong>{item.name}</strong>
                      <span>{item.option}</span>
                    </div>
                    <input
                      aria-label={`${item.name} quantity`}
                      min="1"
                      type="number"
                      value={item.quantity}
                      onChange={(event) => updateQuantity(item.id, event.target.value)}
                    />
                    <span>{peso.format(item.price * item.quantity)}</span>
                    <button type="button" onClick={() => removeItem(item.id)}>
                      Remove
                    </button>
                  </div>
                ))}
              </div>
            )}
            <div className="summary-total">
              <span>Total Amount</span>
              <strong>{peso.format(totalAmount)}</strong>
            </div>
          </div>

          {error && <p className="form-error">{error}</p>}
          <button className="primary-button submit-order" type="submit">
            Submit Order
          </button>
        </section>
      </form>
    </main>
  );
}

function OrderConfirmation({ onNewOrder, order }) {
  return (
    <main className="page-container confirmation-page">
      <section className="confirmation-card">
        <p className="eyebrow">Order Received</p>
        <h1>Thank you for ordering from JED and DEN Pasalubong Store</h1>
        <p>Your order has been successfully received.</p>
        <p>
          We will contact you within 2 hours to confirm your order details and availability. Please
          ensure your contact number is active so we can reach you quickly for confirmation.
        </p>
        <p>
          For urgent orders or inquiries, call us at <strong>{business.contact}</strong>. We truly
          appreciate your support for our local Filipino pasalubong delicacies.
        </p>

        <div className="receipt-box">
          <h2>Order Summary</h2>
          <dl>
            <div>
              <dt>Order Number</dt>
              <dd>{order.orderNumber}</dd>
            </div>
            <div>
              <dt>Customer</dt>
              <dd>{order.customerName}</dd>
            </div>
            <div>
              <dt>Pick Up</dt>
              <dd>{formatDateTime(order.pickupDateTime)}</dd>
            </div>
            <div>
              <dt>Total</dt>
              <dd>{peso.format(order.totalAmount)}</dd>
            </div>
          </dl>
          <ul>
            {order.items.map((item) => (
              <li key={item.id}>
                {item.name} ({item.option}) x {item.quantity}
              </li>
            ))}
          </ul>
        </div>

        <button className="primary-button" onClick={onNewOrder}>
          Place Another Order
        </button>
      </section>
    </main>
  );
}

function AdminLogin({ error, onSubmit, passwordInput, setPasswordInput }) {
  return (
    <main className="admin-login-page">
      <form className="admin-login-card" onSubmit={onSubmit}>
        <p className="eyebrow">Private Access</p>
        <h1>JED and Den Pasalubong Admin Panel</h1>
        <label>
          Admin Password
          <input
            autoComplete="current-password"
            type="password"
            value={passwordInput}
            onChange={(event) => setPasswordInput(event.target.value)}
            placeholder="Enter password"
          />
        </label>
        {error && <p className="form-error">{error}</p>}
        <button className="primary-button" type="submit">
          Login
        </button>
      </form>
    </main>
  );
}

function AdminDashboard({ analytics, onDeleteOrder, onExportOrders, onUpdateStatus, orders }) {
  return (
    <main className="page-container admin-page">
      <div className="admin-heading">
        <div>
          <p className="eyebrow">Admin Dashboard</p>
          <h1>JED and Den Pasalubong Admin Panel</h1>
        </div>
        <button className="secondary-button" onClick={onExportOrders}>
          Export Orders CSV
        </button>
      </div>

      <section className="stats-grid">
        <StatCard label="Total Revenue" value={peso.format(analytics.totalRevenue)} />
        <StatCard label="This Month" value={peso.format(analytics.monthRevenue)} />
        <StatCard label="Total Orders" value={analytics.totalOrders} />
        <StatCard label="Average Order Value" value={peso.format(analytics.averageOrderValue)} />
      </section>

      <section className="charts-grid">
        <ChartCard title="Best-Selling Products">
          {analytics.bestSellers.length ? (
            <ResponsiveContainer width="100%" height={280}>
              <BarChart data={analytics.bestSellers}>
                <CartesianGrid strokeDasharray="3 3" stroke="#eadbcb" />
                <XAxis dataKey="name" tick={{ fontSize: 11 }} />
                <YAxis allowDecimals={false} />
                <Tooltip formatter={(value) => `${value} sold`} />
                <Bar dataKey="quantity" fill="#7c4f31" radius={[6, 6, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          ) : (
            <p className="empty-state">No order data yet.</p>
          )}
        </ChartCard>

        <ChartCard title="Orders by Status">
          {analytics.statusData.some((item) => item.value > 0) ? (
            <ResponsiveContainer width="100%" height={280}>
              <PieChart>
                <Pie data={analytics.statusData} dataKey="value" innerRadius={58} outerRadius={92} label>
                  {analytics.statusData.map((entry, index) => (
                    <Cell key={entry.name} fill={chartColors[index % chartColors.length]} />
                  ))}
                </Pie>
                <Tooltip />
                <Legend />
              </PieChart>
            </ResponsiveContainer>
          ) : (
            <p className="empty-state">No order data yet.</p>
          )}
        </ChartCard>

        <ChartCard title="Daily Order Volume">
          {analytics.dailyOrders.length ? (
            <ResponsiveContainer width="100%" height={280}>
              <LineChart data={analytics.dailyOrders}>
                <CartesianGrid strokeDasharray="3 3" stroke="#eadbcb" />
                <XAxis dataKey="date" tick={{ fontSize: 11 }} />
                <YAxis allowDecimals={false} />
                <Tooltip />
                <Line type="monotone" dataKey="orders" stroke="#2f7d68" strokeWidth={3} />
              </LineChart>
            </ResponsiveContainer>
          ) : (
            <p className="empty-state">No order data yet.</p>
          )}
        </ChartCard>

        <ChartCard title="Top Customers">
          {analytics.topCustomers.length ? (
            <ol className="ranked-list">
              {analytics.topCustomers.map((customer) => (
                <li key={customer.name}>
                  <span>{customer.name}</span>
                  <strong>{customer.orders} orders</strong>
                </li>
              ))}
            </ol>
          ) : (
            <p className="empty-state">No customer data yet.</p>
          )}
        </ChartCard>
      </section>

      <section className="orders-panel">
        <div className="panel-heading">
          <h2>Orders Section</h2>
          <span>{orders.length} saved orders</span>
        </div>

        {orders.length ? (
          <div className="table-wrap">
            <table>
              <thead>
                <tr>
                  <th>Order Number</th>
                  <th>Date and Time</th>
                  <th>Customer</th>
                  <th>Items Ordered</th>
                  <th>Total</th>
                  <th>Payment</th>
                  <th>Pick Up</th>
                  <th>Status</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {orders.map((order) => (
                  <tr key={order.id}>
                    <td>{order.orderNumber}</td>
                    <td>{formatDateTime(order.createdAt)}</td>
                    <td>
                      <strong>{order.customerName}</strong>
                      <span>{order.contactNumber}</span>
                    </td>
                    <td>
                      {order.items.map((item) => (
                        <span className="item-chip" key={item.id}>
                          {item.name} {item.option} x{item.quantity}
                        </span>
                      ))}
                    </td>
                    <td>{peso.format(order.totalAmount)}</td>
                    <td>{order.paymentMethod}</td>
                    <td>{formatDateTime(order.pickupDateTime)}</td>
                    <td>
                      <select
                        className={`status-select status-${order.status.toLowerCase().replaceAll(' ', '-')}`}
                        value={order.status}
                        onChange={(event) => onUpdateStatus(order.id, event.target.value)}
                      >
                        {statusOptions.map((status) => (
                          <option key={status}>{status}</option>
                        ))}
                      </select>
                    </td>
                    <td>
                      <button className="danger-button" onClick={() => onDeleteOrder(order.id)}>
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <p className="empty-state">Submitted orders will appear here automatically.</p>
        )}
      </section>
    </main>
  );
}

function StatCard({ label, value }) {
  return (
    <article className="stat-card">
      <span>{label}</span>
      <strong>{value}</strong>
    </article>
  );
}

function ChartCard({ children, title }) {
  return (
    <article className="chart-card">
      <h2>{title}</h2>
      {children}
    </article>
  );
}

function loadOrders() {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    return saved ? JSON.parse(saved) : [];
  } catch {
    return [];
  }
}

function makeOrderNumber(orderCount) {
  const date = new Date();
  const stamp = `${date.getFullYear()}${String(date.getMonth() + 1).padStart(2, '0')}${String(
    date.getDate(),
  ).padStart(2, '0')}`;
  return `JD-${stamp}-${String(orderCount + 1001).padStart(4, '0')}`;
}

function formatDateTime(value) {
  if (!value) {
    return 'Not set';
  }

  const date = new Date(value);
  if (Number.isNaN(date.getTime())) {
    return value;
  }

  return new Intl.DateTimeFormat('en-PH', {
    dateStyle: 'medium',
    timeStyle: 'short',
  }).format(date);
}

function csvCell(value) {
  return `"${String(value ?? '').replaceAll('"', '""')}"`;
}

function getAnalytics(orders) {
  const now = new Date();
  const totalRevenue = orders.reduce((sum, order) => sum + Number(order.totalAmount || 0), 0);
  const monthRevenue = orders.reduce((sum, order) => {
    const created = new Date(order.createdAt);
    const sameMonth =
      created.getFullYear() === now.getFullYear() && created.getMonth() === now.getMonth();
    return sameMonth ? sum + Number(order.totalAmount || 0) : sum;
  }, 0);

  const productMap = new Map();
  const statusMap = new Map(statusOptions.map((status) => [status, 0]));
  const dailyMap = new Map();
  const customerMap = new Map();

  orders.forEach((order) => {
    statusMap.set(order.status, (statusMap.get(order.status) || 0) + 1);

    const day = order.createdAt ? order.createdAt.slice(0, 10) : 'Unknown';
    dailyMap.set(day, (dailyMap.get(day) || 0) + 1);

    const customerName = order.customerName || 'Unknown Customer';
    customerMap.set(customerName, (customerMap.get(customerName) || 0) + 1);

    order.items.forEach((item) => {
      const key = `${item.name} (${item.option})`;
      productMap.set(key, (productMap.get(key) || 0) + Number(item.quantity || 0));
    });
  });

  return {
    totalRevenue,
    monthRevenue,
    totalOrders: orders.length,
    averageOrderValue: orders.length ? totalRevenue / orders.length : 0,
    bestSellers: [...productMap.entries()]
      .map(([name, quantity]) => ({ name, quantity }))
      .sort((a, b) => b.quantity - a.quantity)
      .slice(0, 6),
    statusData: [...statusMap.entries()].map(([name, value]) => ({ name, value })),
    dailyOrders: [...dailyMap.entries()]
      .sort(([a], [b]) => a.localeCompare(b))
      .map(([date, ordersCount]) => ({ date, orders: ordersCount })),
    topCustomers: [...customerMap.entries()]
      .map(([name, ordersCount]) => ({ name, orders: ordersCount }))
      .sort((a, b) => b.orders - a.orders)
      .slice(0, 5),
  };
}

export default App;

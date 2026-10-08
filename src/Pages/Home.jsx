import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Tshirt from "../components/Tshirt";
import Wallet from "../components/Wallet";
import { getProducts, loadProducts } from "../utils/products";
import { getHeroImages, loadHeroImages } from "../utils/siteSettings";

const PRODUCTS_PER_PAGE = 6;

const featuredProduct = {
  name: "Premium Oversized T-Shirt",
  price: 750,
  image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=600",
  type: "shirt",
};

const heroSlides = [
  {
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=2000&q=85",
    alt: "Premium white T-shirt",
    eyebrow: "Premium Collection",
    // title: "Style That Speaks For You.",
  },
  {
    image: "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=2000&q=85",
    alt: "Contemporary streetwear look",
    eyebrow: "Everyday Essentials",
    // title: "Make Every Day Your Own.",
  },
  {
    image: "https://images.unsplash.com/photo-1551488831-00ddcb6c6bd3?auto=format&fit=crop&w=2000&q=85",
    alt: "A curated collection of clothing",
    eyebrow: "Made To Move",
    // title: "Find Your New Favorite.",
  },
  {
    image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?auto=format&fit=crop&w=2000&q=85",
    alt: "Modern apparel from the collection",
    eyebrow: "Shoulder Slack",
    // title: "Wear What Moves You.",
  },
];

const Home = () => {
  const [catalog, setCatalog] = useState(getProducts);
  const [tshirtPage, setTshirtPage] = useState(0);
  const [walletPage, setWalletPage] = useState(0);
  const [heroImages, setHeroImages] = useState(getHeroImages);
  const tshirts = catalog.filter((product) => product.type === "shirt");
  const wallets = catalog.filter((product) => product.type === "wallet");
  const tshirtPageCount = Math.ceil(tshirts.length / PRODUCTS_PER_PAGE);
  const walletPageCount = Math.ceil(wallets.length / PRODUCTS_PER_PAGE);
  const tshirtProducts = tshirts.slice(tshirtPage * PRODUCTS_PER_PAGE, (tshirtPage + 1) * PRODUCTS_PER_PAGE);
  const walletProducts = wallets.slice(walletPage * PRODUCTS_PER_PAGE, (walletPage + 1) * PRODUCTS_PER_PAGE);
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    const intervalId = window.setInterval(() => {
      setActiveSlide((currentSlide) => (currentSlide + 1) % heroSlides.length);
    }, 5000);

    return () => window.clearInterval(intervalId);
  }, []);

  useEffect(() => {
    let active = true;
    loadProducts()
      .then((products) => {
        if (active) {
          setCatalog(products);
          setTshirtPage(0);
          setWalletPage(0);
        }
      })
      .catch((error) => console.error("Could not load products from Supabase:", error));

    return () => {
      active = false;
    };
  }, []);

  useEffect(() => {
    let active = true;
    loadHeroImages()
      .then((images) => {
        if (active) setHeroImages(images);
      })
      .catch((error) => console.error("Could not load home hero images:", error));

    return () => {
      active = false;
    };
  }, []);

  const showSlide = (offset) => {
    setActiveSlide((currentSlide) => (currentSlide + offset + heroSlides.length) % heroSlides.length);
  };

  const currentSlide = { ...heroSlides[activeSlide], image: heroImages[activeSlide] };

  return (
    <div className="min-h-screen bg-gray-50">

      {/* Hero Section */}
      <section className="relative isolate flex min-h-[120px] items-center overflow-hidden bg-black text-white sm:min-h-[560px]" aria-roledescription="carousel" aria-label="Featured collection">
        <img
          src={currentSlide.image}
          alt=""
          aria-hidden="true"
          className="absolute inset-0 -z-30 h-full w-full scale-110 object-cover object-center blur-md"
        />
        <img
          key={currentSlide.image}
          src={currentSlide.image}
          alt={currentSlide.alt}
          className="absolute inset-0 -z-20 h-full w-full object-contain object-center sm:object-cover"
        />
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-black/80 via-black/45 to-black/10" />

        <div className="mx-auto w-full max-w-7xl px-5 py-20 sm:px-6">
          <div key={currentSlide.title} className="max-w-2xl">
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.25em] text-gray-300 sm:text-xl sm:tracking-[14px]">
              {currentSlide.eyebrow}
            </p>
            <h1 className="text-3xl font-extrabold leading-tight sm:text-5xl md:text-6xl">
              {currentSlide.title}
            </h1>
            
          </div>
        </div>

        <div className="absolute bottom-2 left-0 right-0 z-10 mx-auto max-w-7xl px-5 sm:bottom-6 sm:px-6">
          <Link
            to="/cod-from"
            state={{ product: featuredProduct }}
            className="inline-block rounded-lg bg-red-600 px-7 py-3 font-semibold transition hover:bg-red-700"
          >
            Shop Now
          </Link>
        </div>

        <button
          type="button"
          onClick={() => showSlide(-1)}
          aria-label="Previous slide"
          className="absolute left-4 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/60 bg-black/30 text-2xl text-white transition hover:bg-black/60 sm:left-8"
        >
          &#8249;
        </button>
        <button
          type="button"
          onClick={() => showSlide(1)}
          aria-label="Next slide"
          className="absolute right-4 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/60 bg-black/30 text-2xl text-white transition hover:bg-black/60 sm:right-8"
        >
          &#8250;
        </button>

        <div className="absolute bottom-6 left-1/2 flex -translate-x-1/2 items-center gap-3" role="group" aria-label="Choose slide">
          {heroSlides.map((slide, index) => (
            <button
              key={slide.image}
              type="button"
              onClick={() => setActiveSlide(index)}
              aria-label={`Go to slide ${index + 1}`}
              aria-current={activeSlide === index ? "true" : undefined}
              className={`h-2.5 rounded-full transition-all ${activeSlide === index ? "w-8 bg-white" : "w-2.5 bg-white/60 hover:bg-white"}`}
            />
          ))}
        </div>
      </section>


      {/* T-Shirt Section */}
      <section className="px-6 py-16">
        <div className="mx-auto max-w-7xl">

          <div className="mb-10">
            <p className="text-sm font-semibold uppercase tracking-widest text-red-600">
              Our Collection
            </p>

            <h2 className="mt-2 text-3xl font-bold text-gray-900 sm:text-4xl">
              T-Shirts
            </h2>

            <p className="mt-2 text-gray-500">
              Premium T-shirts for your everyday style.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-3 sm:gap-8 lg:grid-cols-3">
            {tshirtProducts.map((product) => <Tshirt key={product.id} product={product} />)}
          </div>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-3 sm:gap-4" role="group" aria-label="T-shirt product pages">
            <button
              type="button"
              onClick={() => setTshirtPage((page) => Math.max(0, page - 1))}
              disabled={tshirtPage === 0}
              className="rounded-lg border border-gray-300 px-4 py-2 text-sm font-semibold text-gray-800 transition hover:border-black hover:bg-black hover:text-white disabled:cursor-not-allowed disabled:opacity-40 disabled:hover:border-gray-300 disabled:hover:bg-white disabled:hover:text-gray-800"
            >
              Previous
            </button>
            <span className="text-sm text-gray-600" aria-live="polite">
              Page {tshirtPage + 1} of {Math.max(1, tshirtPageCount)}
            </span>
            <button
              type="button"
              onClick={() => setTshirtPage((page) => Math.min(tshirtPageCount - 1, page + 1))}
              disabled={tshirtPage >= tshirtPageCount - 1}
              className="rounded-lg border border-gray-300 px-4 py-2 text-sm font-semibold text-gray-800 transition hover:border-black hover:bg-black hover:text-white disabled:cursor-not-allowed disabled:opacity-40 disabled:hover:border-gray-300 disabled:hover:bg-white disabled:hover:text-gray-800"
            >
              Next
            </button>
            <Link to="/tshirt" className="text-sm font-semibold text-red-600 transition hover:text-red-700">
              View all
            </Link>
          </div>

        </div>
      </section>


      {/* Wallet Section */}
      <section className="bg-white px-6 py-16">
        <div className="mx-auto max-w-7xl">

          <div className="mb-10">
            <p className="text-sm font-semibold uppercase tracking-widest text-red-600">
              Accessories
            </p>

            <h2 className="mt-2 text-3xl font-bold text-gray-900 sm:text-4xl">
              Wallets
            </h2>

            <p className="mt-2 text-gray-500">
              Minimal and premium wallets for your everyday essentials.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-3 sm:gap-8 lg:grid-cols-3">
            {walletProducts.map((product) => <Wallet key={product.id} product={product} />)}
          </div>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-3 sm:gap-4" role="group" aria-label="Wallet product pages">
            <button
              type="button"
              onClick={() => setWalletPage((page) => Math.max(0, page - 1))}
              disabled={walletPage === 0}
              className="rounded-lg border border-gray-300 px-4 py-2 text-sm font-semibold text-gray-800 transition hover:border-black hover:bg-black hover:text-white disabled:cursor-not-allowed disabled:opacity-40 disabled:hover:border-gray-300 disabled:hover:bg-white disabled:hover:text-gray-800"
            >
              Previous
            </button>
            <span className="text-sm text-gray-600" aria-live="polite">
              Page {walletPage + 1} of {Math.max(1, walletPageCount)}
            </span>
            <button
              type="button"
              onClick={() => setWalletPage((page) => Math.min(walletPageCount - 1, page + 1))}
              disabled={walletPage >= walletPageCount - 1}
              className="rounded-lg border border-gray-300 px-4 py-2 text-sm font-semibold text-gray-800 transition hover:border-black hover:bg-black hover:text-white disabled:cursor-not-allowed disabled:opacity-40 disabled:hover:border-gray-300 disabled:hover:bg-white disabled:hover:text-gray-800"
            >
              Next
            </button>
            <Link to="/wallet" className="text-sm font-semibold text-red-600 transition hover:text-red-700">
              View all
            </Link>
          </div>

        </div>
      </section>


    

    </div>
  );
};

export default Home;
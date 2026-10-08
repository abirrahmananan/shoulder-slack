import { supabase } from "../lib/supabase";

export const DEFAULT_HERO_IMAGES = [
  "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=2000&q=85",
  "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=2000&q=85",
  "https://images.unsplash.com/photo-1551488831-00ddcb6c6bd3?auto=format&fit=crop&w=2000&q=85",
  "https://images.unsplash.com/photo-1551028719-00167b16eac5?auto=format&fit=crop&w=2000&q=85",
];

const HERO_IMAGES_STORAGE_KEY = "shoulder-slack-home-hero-images";
const LEGACY_HERO_IMAGE_STORAGE_KEY = "shoulder-slack-home-hero-image";
const HERO_SETTING_KEYS = DEFAULT_HERO_IMAGES.map((_, index) => `home_hero_image_${index + 1}`);

export const getHeroImages = () => {
  try {
    const savedImages = JSON.parse(localStorage.getItem(HERO_IMAGES_STORAGE_KEY) || "null");
    if (Array.isArray(savedImages)) {
      return DEFAULT_HERO_IMAGES.map((image, index) => savedImages[index] || image);
    }
  } catch {
    return [...DEFAULT_HERO_IMAGES];
  }

  const legacyHeroImage = localStorage.getItem(LEGACY_HERO_IMAGE_STORAGE_KEY);
  return DEFAULT_HERO_IMAGES.map((image, index) => index === 0 ? legacyHeroImage || image : image);
};

export const loadHeroImages = async () => {
  if (!supabase) return getHeroImages();

  const fallbackImages = getHeroImages();
  const { data, error } = await supabase
    .from("site_settings")
    .select("value")
    .in("key", [...HERO_SETTING_KEYS, "home_hero_image"]);

  if (error) throw error;

  const settings = new Map(data.map(({ key, value }) => [key, value]));
  const images = DEFAULT_HERO_IMAGES.map((image, index) =>
    settings.get(HERO_SETTING_KEYS[index])
      || (index === 0 ? settings.get("home_hero_image") : null)
      || fallbackImages[index]
      || image,
  );
  localStorage.setItem(HERO_IMAGES_STORAGE_KEY, JSON.stringify(images));
  return images;
};

export const saveHeroImages = async (images) => {
  if (!Array.isArray(images) || images.length !== DEFAULT_HERO_IMAGES.length
    || images.some((image) => typeof image !== "string" || !image.trim())) {
    throw new Error("Provide an image for each of the four home page slides.");
  }

  if (supabase) {
    const { error } = await supabase
      .from("site_settings")
      .upsert(images.map((value, index) => ({ key: HERO_SETTING_KEYS[index], value })));

    if (error) throw error;
  }

  localStorage.setItem(HERO_IMAGES_STORAGE_KEY, JSON.stringify(images));
  localStorage.setItem(LEGACY_HERO_IMAGE_STORAGE_KEY, images[0]);
  return images;
};

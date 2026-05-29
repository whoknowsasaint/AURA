import type { Product } from "./types"

export const products: Product[] = [
  {
    id: "1",
    slug: "aura-one",
    name: "AURA One",
    tagline: "Silence is a feature.",
    description: "Over-ear headphones with adaptive noise cancellation and 40-hour battery life.",
    longDescription:
      "AURA One redefines what noise-cancellation means. Six microphones sample your environment 50,000 times per second, then silence it. What remains is only what you chose to hear. Built from aerospace-grade aluminium and vegetable-tanned leather, it is the kind of object people ask about.",
    price: 429,
    category: "over-ear",
    badge: "Flagship",
    bestseller: true,
    video: "https://player.vimeo.com/external/434045526.hd.mp4?s=ef5edac5d8c8f16e1853c3e5a5e9e5e9e5e9e5e9&profile_id=174",
    colors: [
      { name: "Lunar White", hex: "#f0ede8", slug: "lunar-white", imageIndex: 1 },
      { name: "Obsidian", hex: "#1c1917", slug: "obsidian", imageIndex: 0 },
      { name: "Sand", hex: "#c4b49a", slug: "sand", imageIndex: 2 },
    ],
    images: [
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=1200&q=90",
      "https://images.unsplash.com/photo-1583394838336-acd977736f90?w=1200&q=90",
      "https://images.unsplash.com/photo-1524678606370-a47ad25cb82a?w=1200&q=90",
    ],
    specs: [
      { label: "Driver size", value: "40mm custom planar" },
      { label: "Frequency response", value: "4Hz — 48kHz" },
      { label: "Battery life", value: "40hrs ANC on" },
      { label: "Charge time", value: "15 min = 4 hrs" },
      { label: "Weight", value: "248g" },
      { label: "Connectivity", value: "Bluetooth 5.3 + USB-C" },
    ],
    features: [
      "Adaptive 6-mic noise cancellation",
      "Lossless audio via USB-C",
      "Companion iOS & Android app",
      "Foldable aerospace aluminium frame",
      "Vegetable-tanned leather earcups",
    ],
  },
  {
    id: "2",
    slug: "aura-arc",
    name: "AURA Arc",
    tagline: "Open air. Closed world.",
    description: "Open-back over-ear headphones for audiophiles who demand a natural soundstage.",
    longDescription:
      "For those who listen in a room rather than on a commute. AURA Arc uses an open-back design to create a soundstage so wide you forget you are wearing headphones. The planar magnetic drivers reproduce every recording decision the engineer made.",
    price: 649,
    originalPrice: 749,
    category: "over-ear",
    badge: "Studio",
    new: true,
    colors: [
      { name: "Brushed Silver", hex: "#d4d0cc", slug: "brushed-silver", imageIndex: 0 },
      { name: "Midnight", hex: "#2d2b2a", slug: "midnight", imageIndex: 1 },
    ],
    images: [
      "https://images.unsplash.com/photo-1572536147248-ac59a8abfa4b?w=1200&q=90",
      "https://images.unsplash.com/photo-1545454675-3531b543be5d?w=1200&q=90",
      "https://images.unsplash.com/photo-1484704849700-f032a568e944?w=1200&q=90",
    ],
    specs: [
      { label: "Driver type", value: "Planar magnetic" },
      { label: "Impedance", value: "23 Ohm" },
      { label: "Sensitivity", value: "94 dB/mW" },
      { label: "Weight", value: "320g" },
      { label: "Cable", value: "3m braided OFC" },
      { label: "Connector", value: "6.35mm + 3.5mm adapter" },
    ],
    features: [
      "Open-back planar magnetic drivers",
      "Hand-selected driver pairs within 0.5dB",
      "Lambskin leather headband",
      "Removable braided cable",
      "Available in balanced XLR (add-on)",
    ],
  },
  {
    id: "3",
    slug: "aura-drift",
    name: "AURA Drift",
    tagline: "Nothing between you and the music.",
    description: "True wireless earbuds with spatial audio and all-day comfort.",
    longDescription:
      "AURA Drift disappears. The smallest form factor we have ever made uses a single-piece liquid silicone body to eliminate pressure points entirely. Spatial audio processes head movement at 1,000Hz for sound that stays exactly where it should be.",
    price: 249,
    category: "earbuds",
    bestseller: true,
    colors: [
      { name: "Chalk", hex: "#ede9e3", slug: "chalk", imageIndex: 0 },
      { name: "Slate", hex: "#4a4845", slug: "slate", imageIndex: 1 },
      { name: "Sage", hex: "#8a9e8c", slug: "sage", imageIndex: 2 },
    ],
    images: [
      "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=1200&q=90",
      "https://images.unsplash.com/photo-1601524909162-ae8725290836?w=1200&q=90",
      "https://images.unsplash.com/photo-1606220945770-b5b6c2c55bf1?w=1200&q=90",
    ],
    specs: [
      { label: "Driver size", value: "11mm custom dynamic" },
      { label: "Battery (buds)", value: "9 hrs ANC on" },
      { label: "Battery (case)", value: "+27 hrs" },
      { label: "Charge", value: "Qi wireless + USB-C" },
      { label: "Water resistance", value: "IPX5" },
      { label: "Codec", value: "aptX Lossless, AAC, SBC" },
    ],
    features: [
      "Spatial audio with head tracking",
      "Transparency mode",
      "Single-piece liquid silicone body",
      "6 ear-tip sizes included",
      "Wireless charging case",
    ],
  },
  {
    id: "4",
    slug: "aura-stem",
    name: "AURA Stem",
    tagline: "Your world, uninterrupted.",
    description: "Open-ear bone conduction for the always-on listener.",
    longDescription:
      "You do not miss a meeting, a conversation, or a moment. AURA Stem uses titanium bone conduction transducers to deliver audio without sealing your ears. Wear it all day without fatigue. Designed for people who live at full speed.",
    price: 199,
    category: "in-ear",
    new: true,
    colors: [
      { name: "Titanium", hex: "#b5b2ae", slug: "titanium", imageIndex: 0 },
      { name: "Carbon", hex: "#2a2827", slug: "carbon", imageIndex: 1 },
    ],
    images: [
      "https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?w=1200&q=90",
      "https://images.unsplash.com/photo-1564424224827-cd24b8915874?w=1200&q=90",
      "https://images.unsplash.com/photo-1610438235354-a6ae5528385c?w=1200&q=90",
    ],
    specs: [
      { label: "Transducer", value: "Bone conduction" },
      { label: "Battery life", value: "10 hrs" },
      { label: "Water resistance", value: "IP67" },
      { label: "Weight", value: "26g" },
      { label: "Connectivity", value: "Bluetooth 5.3" },
      { label: "Charge", value: "Magnetic snap USB-C" },
    ],
    features: [
      "Open-ear design, zero fatigue",
      "Titanium headband",
      "IP67 -- swim-proof",
      "Multipoint 2-device pairing",
      "4-mic call clarity",
    ],
  },
  {
    id: "5",
    slug: "aura-void",
    name: "AURA Void",
    tagline: "Pure signal. Zero compromise.",
    description: "Reference-class IEM for the serious listener.",
    longDescription:
      "AURA Void is built for people who read frequency response graphs for pleasure. Each unit is measured and matched by hand. The hybrid driver configuration is tuned to a target curve developed with three Grammy-winning mastering engineers.",
    price: 899,
    category: "in-ear",
    badge: "Reference",
    colors: [
      { name: "Copper", hex: "#c47d3c", slug: "copper", imageIndex: 0 },
      { name: "Clear", hex: "#e8e4df", slug: "clear", imageIndex: 1 },
    ],
    images: [
      "https://images.unsplash.com/photo-1585386959984-a4155224a1ad?w=1200&q=90",
      "https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=1200&q=90",
      "https://images.unsplash.com/photo-1578311350284-ec2e74d8d7a0?w=1200&q=90",
    ],
    specs: [
      { label: "Driver config", value: "1DD + 2BA + 1 planar" },
      { label: "Impedance", value: "16 Ohm" },
      { label: "Sensitivity", value: "108 dB/Vrms" },
      { label: "Cable", value: "Silver-plated OCC" },
      { label: "Connector", value: "2-pin 0.78mm + 4.4mm" },
      { label: "Shell", value: "CNC machined brass" },
    ],
    features: [
      "Quad-driver hybrid design",
      "Hand-measured and matched pairs",
      "CNC machined brass shell",
      "3 cable terminations included",
      "Custom Pelican carry case",
    ],
  },
  {
    id: "6",
    slug: "aura-form",
    name: "AURA Form",
    tagline: "Everyday excellence.",
    description: "The everyday over-ear for those who will not settle.",
    longDescription:
      "Not everyone needs a flagship. AURA Form delivers 90% of AURA One at a price that does not require a second thought. 30-hour battery, two-mic ANC, and a folding design that disappears into a bag.",
    price: 279,
    category: "over-ear",
    bestseller: true,
    colors: [
      { name: "Stone", hex: "#c8c2bb", slug: "stone", imageIndex: 0 },
      { name: "Ink", hex: "#1c1917", slug: "ink", imageIndex: 1 },
      { name: "Dusk", hex: "#8b7e6e", slug: "dusk", imageIndex: 2 },
    ],
    images: [
      "https://images.unsplash.com/photo-1487215078519-e21cc028cb29?w=1200&q=90",
      "https://images.unsplash.com/photo-1528148343865-51218c4a13e6?w=1200&q=90",
      "https://images.unsplash.com/photo-1578319439584-104c94d37305?w=1200&q=90",
    ],
    specs: [
      { label: "Driver size", value: "40mm dynamic" },
      { label: "Battery life", value: "30hrs ANC on" },
      { label: "Charge time", value: "2 hrs full" },
      { label: "Weight", value: "275g" },
      { label: "Connectivity", value: "Bluetooth 5.2 + 3.5mm" },
      { label: "Foldable", value: "Yes" },
    ],
    features: [
      "2-mic adaptive ANC",
      "Multipoint 2-device pairing",
      "Foldable travel design",
      "3.5mm analog fallback",
      "Companion app with EQ",
    ],
  },
]

export const getProductBySlug = (slug: string) =>
  products.find((p) => p.slug === slug) ?? null

export const getRelatedProducts = (current: Product, count = 3) =>
  products
    .filter((p) => p.id !== current.id && p.category === current.category)
    .slice(0, count)
    .concat(products.filter((p) => p.id !== current.id && p.category !== current.category))
    .slice(0, count)
import type { Product } from "./types"

export const products: Product[] = [
  {
    id: "1", slug: "aura-one", name: "AURA One", tagline: "Silence is a feature.",
    description: "Over-ear headphones with adaptive noise cancellation and 40-hour battery life.",
    longDescription: "AURA One redefines what noise-cancellation means. Six microphones sample your environment 50,000 times per second, then silence it. What remains is only what you chose to hear. Built from aerospace-grade aluminium and vegetable-tanned leather, it is the kind of object people ask about.",
    price: 429, category: "over-ear", badge: "Flagship", bestseller: true, rating: 4.9, reviewCount: 312,
    colors: [
      { name: "Lunar White", hex: "#f0ede8", slug: "lunar-white", imageIndex: 1 },
      { name: "Obsidian", hex: "#1c1917", slug: "obsidian", imageIndex: 0 },
      { name: "Sand", hex: "#c4b49a", slug: "sand", imageIndex: 2 },
    ],
    images: [
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=1200&q=90",
      "https://images.unsplash.com/photo-1583394838336-acd977736f90?w=1200&q=90",
      "https://images.unsplash.com/photo-1487215078519-e21cc028cb29?w=1200&q=90",
    ],
    specs: [
      { label: "Driver size", value: "40mm custom planar" }, { label: "Frequency response", value: "4Hz — 48kHz" },
      { label: "Battery life", value: "40hrs ANC on" }, { label: "Charge time", value: "15 min = 4 hrs" },
      { label: "Weight", value: "248g" }, { label: "Connectivity", value: "Bluetooth 5.3 + USB-C" },
    ],
    features: ["Adaptive 6-mic noise cancellation", "Lossless audio via USB-C", "Companion iOS & Android app", "Foldable aerospace aluminium frame", "Vegetable-tanned leather earcups"],
  },
  {
    id: "2", slug: "aura-arc", name: "AURA Arc", tagline: "Open air. Closed world.",
    description: "Open-back over-ear headphones for audiophiles who demand a natural soundstage.",
    longDescription: "For those who listen in a room rather than on a commute. AURA Arc uses an open-back design to create a soundstage so wide you forget you are wearing headphones. The planar magnetic drivers reproduce every recording decision the engineer made.",
    price: 649, originalPrice: 749, category: "over-ear", badge: "Studio", new: true, rating: 4.8, reviewCount: 94,
    colors: [
      { name: "Brushed Silver", hex: "#d4d0cc", slug: "brushed-silver", imageIndex: 0 },
      { name: "Midnight", hex: "#2d2b2a", slug: "midnight", imageIndex: 1 },
    ],
    images: [
      "https://images.unsplash.com/photo-1524678606370-a47ad25cb82a?w=1200&q=90",
      "https://images.unsplash.com/photo-1545454675-3531b543be5d?w=1200&q=90",
      "https://images.unsplash.com/photo-1528148343865-51218c4a13e6?w=1200&q=90",
    ],
    specs: [
      { label: "Driver type", value: "Planar magnetic" }, { label: "Impedance", value: "23 Ohm" },
      { label: "Sensitivity", value: "94 dB/mW" }, { label: "Weight", value: "320g" },
      { label: "Cable", value: "3m braided OFC" }, { label: "Connector", value: "6.35mm + 3.5mm adapter" },
    ],
    features: ["Open-back planar magnetic drivers", "Hand-selected driver pairs within 0.5dB", "Lambskin leather headband", "Removable braided cable", "Available in balanced XLR (add-on)"],
  },
  {
    id: "3", slug: "aura-drift", name: "AURA Drift", tagline: "Nothing between you and the music.",
    description: "True wireless earbuds with spatial audio and all-day comfort.",
    longDescription: "AURA Drift disappears. The smallest form factor we have ever made uses a single-piece liquid silicone body to eliminate pressure points entirely. Spatial audio processes head movement at 1,000Hz.",
    price: 249, category: "earbuds", bestseller: true, rating: 4.7, reviewCount: 528,
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
      { label: "Driver size", value: "11mm custom dynamic" }, { label: "Battery (buds)", value: "9 hrs ANC on" },
      { label: "Battery (case)", value: "+27 hrs" }, { label: "Charge", value: "Qi wireless + USB-C" },
      { label: "Water resistance", value: "IPX5" }, { label: "Codec", value: "aptX Lossless, AAC, SBC" },
    ],
    features: ["Spatial audio with head tracking", "Transparency mode", "Single-piece liquid silicone body", "6 ear-tip sizes included", "Wireless charging case"],
  },
  {
    id: "4", slug: "aura-stem", name: "AURA Stem", tagline: "Your world, uninterrupted.",
    description: "Open-ear bone conduction for the always-on listener.",
    longDescription: "You do not miss a meeting, a conversation, or a moment. AURA Stem uses titanium bone conduction transducers to deliver audio without sealing your ears. Wear it all day without fatigue.",
    price: 199, category: "in-ear", new: true, rating: 4.5, reviewCount: 187,
    colors: [
      { name: "Titanium", hex: "#b5b2ae", slug: "titanium", imageIndex: 0 },
      { name: "Carbon", hex: "#2a2827", slug: "carbon", imageIndex: 1 },
    ],
    images: [
      "https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?w=1200&q=90",
      "https://images.unsplash.com/photo-1564424224827-cd24b8915874?w=1200&q=90",
      "https://images.unsplash.com/photo-1565538810643-b5bdb714032a?w=1200&q=90",
    ],
    specs: [
      { label: "Transducer", value: "Bone conduction" }, { label: "Battery life", value: "10 hrs" },
      { label: "Water resistance", value: "IP67" }, { label: "Weight", value: "26g" },
      { label: "Connectivity", value: "Bluetooth 5.3" }, { label: "Charge", value: "Magnetic snap USB-C" },
    ],
    features: ["Open-ear design, zero fatigue", "Titanium headband", "IP67 -- swim-proof", "Multipoint 2-device pairing", "4-mic call clarity"],
  },
  {
    id: "5", slug: "aura-void", name: "AURA Void", tagline: "Pure signal. Zero compromise.",
    description: "Reference-class IEM for the serious listener.",
    longDescription: "AURA Void is built for people who read frequency response graphs for pleasure. Each unit is measured and matched by hand. The hybrid driver configuration is tuned to a target curve developed with three Grammy-winning mastering engineers.",
    price: 899, category: "in-ear", badge: "Reference", rating: 4.9, reviewCount: 63,
    colors: [
      { name: "Copper", hex: "#c47d3c", slug: "copper", imageIndex: 0 },
      { name: "Clear", hex: "#e8e4df", slug: "clear", imageIndex: 1 },
    ],
    images: [
      "https://images.unsplash.com/photo-1484704849700-f032a568e944?w=1200&q=90",
      "https://images.unsplash.com/photo-1572536147248-ac59a8abfa4b?w=1200&q=90",
      "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=1200&q=90",
    ],
    specs: [
      { label: "Driver config", value: "1DD + 2BA + 1 planar" }, { label: "Impedance", value: "16 Ohm" },
      { label: "Sensitivity", value: "108 dB/Vrms" }, { label: "Cable", value: "Silver-plated OCC" },
      { label: "Connector", value: "2-pin 0.78mm + 4.4mm" }, { label: "Shell", value: "CNC machined brass" },
    ],
    features: ["Quad-driver hybrid design", "Hand-measured and matched pairs", "CNC machined brass shell", "3 cable terminations included", "Custom Pelican carry case"],
  },
  {
    id: "6", slug: "aura-form", name: "AURA Form", tagline: "Everyday excellence.",
    description: "The everyday over-ear for those who will not settle.",
    longDescription: "Not everyone needs a flagship. AURA Form delivers 90% of AURA One at a price that does not require a second thought. 30-hour battery, two-mic ANC, and a folding design that disappears into a bag.",
    price: 279, category: "over-ear", bestseller: true, rating: 4.6, reviewCount: 743,
    colors: [
      { name: "Stone", hex: "#c8c2bb", slug: "stone", imageIndex: 0 },
      { name: "Ink", hex: "#1c1917", slug: "ink", imageIndex: 1 },
      { name: "Dusk", hex: "#8b7e6e", slug: "dusk", imageIndex: 2 },
    ],
    images: [
      "https://images.unsplash.com/photo-1583394838336-acd977736f90?w=1200&q=90",
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=1200&q=90",
      "https://images.unsplash.com/photo-1578319439584-104c94d37305?w=1200&q=90",
    ],
    specs: [
      { label: "Driver size", value: "40mm dynamic" }, { label: "Battery life", value: "30hrs ANC on" },
      { label: "Charge time", value: "2 hrs full" }, { label: "Weight", value: "275g" },
      { label: "Connectivity", value: "Bluetooth 5.2 + 3.5mm" }, { label: "Foldable", value: "Yes" },
    ],
    features: ["2-mic adaptive ANC", "Multipoint 2-device pairing", "Foldable travel design", "3.5mm analog fallback", "Companion app with EQ"],
  },
  {
    id: "7", slug: "aura-halo", name: "AURA Halo", tagline: "Studio reference. Listening comfort.",
    description: "Semi-open over-ear for long sessions and critical listening.",
    longDescription: "AURA Halo splits the difference between open and closed-back. The semi-open acoustic chamber delivers a natural, airy sound signature while maintaining enough isolation for home studio use. Tuned flat with a gentle presence lift at 10kHz.",
    price: 549, category: "over-ear", new: true, rating: 4.7, reviewCount: 41,
    colors: [
      { name: "Natural", hex: "#d4c8b8", slug: "natural", imageIndex: 0 },
      { name: "Noir", hex: "#1a1a1a", slug: "noir", imageIndex: 1 },
    ],
    images: [
      "https://images.unsplash.com/photo-1546435770-a3e426bf472b?w=1200&q=90",
      "https://images.unsplash.com/photo-1524678606370-a47ad25cb82a?w=1200&q=90",
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=1200&q=90",
    ],
    specs: [
      { label: "Driver type", value: "Semi-open dynamic" }, { label: "Frequency response", value: "8Hz — 42kHz" },
      { label: "Impedance", value: "150 Ohm" }, { label: "Weight", value: "298g" },
      { label: "Cable", value: "1.5m OFC detachable" }, { label: "Connector", value: "3.5mm + 6.35mm adapter" },
    ],
    features: ["Semi-open acoustic chamber", "150 Ohm high-impedance driver", "Memory foam earcups", "Detachable cable system", "Includes carry pouch"],
  },
  {
    id: "8", slug: "aura-pulse", name: "AURA Pulse", tagline: "Feel the music.",
    description: "Over-ear with haptic bass transducers for a physical listening experience.",
    longDescription: "AURA Pulse adds a dimension most headphones do not know exists. Dual haptic transducers in each earcup translate sub-bass frequencies into physical sensation without distorting the acoustic driver. You hear it. You feel it.",
    price: 369, category: "over-ear", badge: "New", new: true, rating: 4.4, reviewCount: 28,
    colors: [
      { name: "Matte Black", hex: "#1c1c1c", slug: "matte-black", imageIndex: 0 },
      { name: "Deep Red", hex: "#7a1f1f", slug: "deep-red", imageIndex: 1 },
    ],
    images: [
      "https://images.unsplash.com/photo-1545454675-3531b543be5d?w=1200&q=90",
      "https://images.unsplash.com/photo-1583394838336-acd977836f90?w=1200&q=90",
      "https://images.unsplash.com/photo-1487215078519-e21cc028cb29?w=1200&q=90",
    ],
    specs: [
      { label: "Driver size", value: "40mm + haptic array" }, { label: "Battery life", value: "24hrs" },
      { label: "Haptic modes", value: "3 intensity levels" }, { label: "Weight", value: "310g" },
      { label: "Connectivity", value: "Bluetooth 5.3" }, { label: "Latency", value: "< 40ms" },
    ],
    features: ["Dual haptic bass transducers", "3 haptic intensity modes", "Dedicated bass driver", "Gaming and music profiles", "USB-C 30min fast charge"],
  },
  {
    id: "9", slug: "aura-core", name: "AURA Core", tagline: "The essentials. Nothing less.",
    description: "Entry-level over-ear with premium materials and honest sound.",
    longDescription: "AURA Core is the answer to a question we hear often: what is the least expensive AURA product that still sounds like AURA? The Core uses a simplified version of our 40mm driver with the same acoustic tuning target. The build uses aluminium rails and protein leather. No compromises in material, only in feature count.",
    price: 179, category: "over-ear", bestseller: true, rating: 4.5, reviewCount: 891,
    colors: [
      { name: "Cloud", hex: "#e8e4de", slug: "cloud", imageIndex: 0 },
      { name: "Graphite", hex: "#3d3d3d", slug: "graphite", imageIndex: 1 },
    ],
    images: [
      "https://images.unsplash.com/photo-1578319439584-104c94d37305?w=1200&q=90",
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=1200&q=90",
      "https://images.unsplash.com/photo-1524678606370-a47ad25cb82a?w=1200&q=90",
    ],
    specs: [
      { label: "Driver size", value: "40mm dynamic" }, { label: "Battery life", value: "25hrs" },
      { label: "Weight", value: "260g" }, { label: "Connectivity", value: "Bluetooth 5.1 + 3.5mm" },
      { label: "Charge", value: "USB-C 2hrs" }, { label: "Foldable", value: "Yes" },
    ],
    features: ["AURA-tuned 40mm driver", "Aluminium headband rails", "Protein leather earcups", "25-hour battery", "Foldable with carrying case"],
  },
  {
    id: "10", slug: "aura-note", name: "AURA Note", tagline: "Every frequency. Every nuance.",
    description: "In-ear monitors for musicians and producers.",
    longDescription: "AURA Note is built for the stage and the studio. The triple balanced armature configuration is tuned for reference accuracy, with a slightly elevated low-mid to help you hear yourself clearly in loud environments. Comes with a moulding kit for custom-fit sleeve creation.",
    price: 449, category: "in-ear", badge: "Pro", rating: 4.8, reviewCount: 112,
    colors: [
      { name: "Translucent", hex: "#d8d4ce", slug: "translucent", imageIndex: 0 },
      { name: "Onyx", hex: "#1f1f1f", slug: "onyx", imageIndex: 1 },
    ],
    images: [
      "https://images.unsplash.com/photo-1484704849700-f032a568e944?w=1200&q=90",
      "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=1200&q=90",
      "https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?w=1200&q=90",
    ],
    specs: [
      { label: "Driver config", value: "Triple balanced armature" }, { label: "Impedance", value: "22 Ohm" },
      { label: "Sensitivity", value: "112 dB/mW" }, { label: "Cable", value: "Braided Kevlar-reinforced" },
      { label: "Connector", value: "MMCX detachable" }, { label: "Isolation", value: "-26dB passive" },
    ],
    features: ["Triple balanced armature", "MMCX detachable cable", "Custom moulding kit included", "-26dB passive isolation", "Comes with Pelican case"],
  },
  {
    id: "11", slug: "aura-drop", name: "AURA Drop", tagline: "Compact. Uncompromised.",
    description: "Ultra-compact true wireless earbuds engineered for the minimalist.",
    longDescription: "AURA Drop rethinks the earbud form factor entirely. The stem-free design sits flush with the ear using a new wingtip anchor system we spent 18 months developing. The case is the size of a matchbox. The sound is not.",
    price: 219, category: "earbuds", new: true, rating: 4.6, reviewCount: 203,
    colors: [
      { name: "Pearl", hex: "#f0ece6", slug: "pearl", imageIndex: 0 },
      { name: "Storm", hex: "#3a3f4a", slug: "storm", imageIndex: 1 },
    ],
    images: [
      "https://images.unsplash.com/photo-1606220945770-b5b6c2c55bf1?w=1200&q=90",
      "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=1200&q=90",
      "https://images.unsplash.com/photo-1601524909162-ae8725290836?w=1200&q=90",
    ],
    specs: [
      { label: "Driver size", value: "8mm custom dynamic" }, { label: "Battery (buds)", value: "7 hrs" },
      { label: "Battery (case)", value: "+21 hrs" }, { label: "Weight (each bud)", value: "4.8g" },
      { label: "Water resistance", value: "IPX4" }, { label: "Codec", value: "AAC, SBC" },
    ],
    features: ["Stem-free flush fit design", "Wingtip anchor system", "Matchbox-size charging case", "Touch controls", "Voice assistant support"],
  },
  {
    id: "12", slug: "aura-field", name: "AURA Field", tagline: "Built for the elements.",
    description: "Rugged over-ear headphones for outdoor and active use.",
    longDescription: "AURA Field is built to go where most headphones cannot. IP54 rated housing, stainless steel hinge pivots, and a reinforced headband that survives being packed under a tent. The ANC adapts to wind noise specifically -- a problem every other headphone ignores.",
    price: 319, category: "over-ear", rating: 4.5, reviewCount: 156,
    colors: [
      { name: "Coyote", hex: "#8d7355", slug: "coyote", imageIndex: 0 },
      { name: "Ranger Green", hex: "#4a5240", slug: "ranger-green", imageIndex: 1 },
    ],
    images: [
      "https://images.unsplash.com/photo-1487215078519-e21cc028cb29?w=1200&q=90",
      "https://images.unsplash.com/photo-1578319439584-104c94d37305?w=1200&q=90",
      "https://images.unsplash.com/photo-1545454675-3531b543be5d?w=1200&q=90",
    ],
    specs: [
      { label: "Water resistance", value: "IP54" }, { label: "Battery life", value: "35hrs" },
      { label: "Driver size", value: "40mm rugged dynamic" }, { label: "Weight", value: "295g" },
      { label: "Hinge", value: "Stainless steel pivot" }, { label: "ANC type", value: "Wind-adaptive" },
    ],
    features: ["IP54 all-weather rating", "Wind-adaptive ANC", "Stainless steel hinges", "35-hour battery", "Reinforced headband"],
  },
  {
    id: "13", slug: "aura-night", name: "AURA Night", tagline: "Sleep, undisturbed.",
    description: "Ultra-thin sleep headphones with binaural audio programmes.",
    longDescription: "AURA Night is built for side sleepers. The drivers are 5mm thin, housed in a soft-knit headband. Wind-down audio programmes -- rain, pink noise, delta wave binaural beats -- run locally on the device without needing a phone. A sleep timer shuts everything off after you drift.",
    price: 149, category: "over-ear", new: true, rating: 4.3, reviewCount: 89,
    colors: [
      { name: "Oat", hex: "#e8dece", slug: "oat", imageIndex: 0 },
      { name: "Dusk Blue", hex: "#3a4a5a", slug: "dusk-blue", imageIndex: 1 },
    ],
    images: [
      "https://images.unsplash.com/photo-1546435770-a3e426bf472b?w=1200&q=90",
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=1200&q=90",
      "https://images.unsplash.com/photo-1583394838336-acd977736f90?w=1200&q=90",
    ],
    specs: [
      { label: "Driver thickness", value: "5mm ultra-flat" }, { label: "Battery life", value: "12 hrs" },
      { label: "Sleep programmes", value: "8 onboard" }, { label: "Weight", value: "58g" },
      { label: "Material", value: "Soft-knit moisture-wicking" }, { label: "Charge", value: "Micro USB" },
    ],
    features: ["5mm ultra-flat drivers", "8 onboard sleep programmes", "Auto sleep timer", "Soft-knit breathable band", "Gentle wake alarm"],
  },
  {
    id: "14", slug: "aura-wire", name: "AURA Wire", tagline: "Analogue purity.",
    description: "Wired over-ear for purists who reject wireless compromise.",
    longDescription: "AURA Wire is for the listener who knows that a wire is not a limitation -- it is a choice. No DAC, no firmware, no battery. Just the signal, the driver, and your ears. The 50mm driver is the largest we make, wound with 6N OFC copper and housed in a walnut acoustic chamber.",
    price: 499, category: "over-ear", badge: "Purist", rating: 4.9, reviewCount: 47,
    colors: [
      { name: "Walnut", hex: "#8b6349", slug: "walnut", imageIndex: 0 },
      { name: "Ebony", hex: "#1a1008", slug: "ebony", imageIndex: 1 },
    ],
    images: [
      "https://images.unsplash.com/photo-1484704849700-f032a568e944?w=1200&q=90",
      "https://images.unsplash.com/photo-1524678606370-a47ad25cb82a?w=1200&q=90",
      "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=1200&q=90",
    ],
    specs: [
      { label: "Driver size", value: "50mm OFC wound" }, { label: "Impedance", value: "300 Ohm" },
      { label: "Sensitivity", value: "98 dB/mW" }, { label: "Cable length", value: "3m" },
      { label: "Chamber", value: "Solid walnut" }, { label: "Connector", value: "6.35mm + 3.5mm adapter" },
    ],
    features: ["50mm 6N OFC copper driver", "Solid walnut acoustic chamber", "300 Ohm high-impedance", "Hand-assembled and signed", "No battery, no latency, no firmware"],
  },
  {
    id: "15", slug: "aura-sport", name: "AURA Sport", tagline: "Perform. Recover. Repeat.",
    description: "Sport earbuds engineered for athletes who demand stability and sound quality.",
    longDescription: "AURA Sport does not fall out. The dual-lock ear hook system was tested across 200 hours of running, cycling, and CrossFit by 40 athletes before we shipped it. The drivers are tuned with a slight presence boost that cuts through road noise and gym environments.",
    price: 189, category: "earbuds", rating: 4.6, reviewCount: 334,
    colors: [
      { name: "White", hex: "#f5f5f0", slug: "white", imageIndex: 0 },
      { name: "Black", hex: "#1a1a1a", slug: "black", imageIndex: 1 },
      { name: "Electric Blue", hex: "#1a4a7a", slug: "electric-blue", imageIndex: 2 },
    ],
    images: [
      "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=1200&q=90",
      "https://images.unsplash.com/photo-1601524909162-ae8725290836?w=1200&q=90",
      "https://images.unsplash.com/photo-1606220945770-b5b6c2c55bf1?w=1200&q=90",
    ],
    specs: [
      { label: "Battery life", value: "10 hrs" }, { label: "Water resistance", value: "IP57" },
      { label: "Driver size", value: "10mm sport-tuned" }, { label: "Weight (each)", value: "5.2g" },
      { label: "Ear hook", value: "Dual-lock silicone" }, { label: "Charge", value: "15min = 2hrs" },
    ],
    features: ["IP57 sweat and rain proof", "Dual-lock ear hook system", "Sport presence-boost EQ", "Stable fit across 200hrs testing", "Quick charge 15min = 2hrs"],
  },
  {
    id: "16", slug: "aura-monk", name: "AURA Monk", tagline: "Absolute quiet.",
    description: "Hearing protection headphones with passive 35dB isolation and hi-fi drivers.",
    longDescription: "AURA Monk was designed for woodworkers, musicians, and anyone who needs absolute silence without sacrificing audio quality when they want it. The passive isolation reaches 35dB SNR. When you plug in, the drivers reveal a clean, accurate sound. When you do not, the isolation stands alone.",
    price: 229, category: "over-ear", rating: 4.7, reviewCount: 62,
    colors: [
      { name: "Sand", hex: "#c8b89a", slug: "sand", imageIndex: 0 },
      { name: "Safety Orange", hex: "#c85a1a", slug: "safety-orange", imageIndex: 1 },
    ],
    images: [
      "https://images.unsplash.com/photo-1546435770-a3e426bf472b?w=1200&q=90",
      "https://images.unsplash.com/photo-1578319439584-104c94d37305?w=1200&q=90",
      "https://images.unsplash.com/photo-1545454675-3531b543be5d?w=1200&q=90",
    ],
    specs: [
      { label: "Passive isolation", value: "35dB SNR" }, { label: "Driver size", value: "40mm dynamic" },
      { label: "Input", value: "3.5mm passive only" }, { label: "Weight", value: "340g" },
      { label: "Earcup depth", value: "40mm sealed" }, { label: "Certification", value: "EN 352-1" },
    ],
    features: ["35dB SNR passive isolation", "EN 352-1 hearing protection certified", "Hi-fi 40mm driver", "No battery required", "Replaceable earcup seals"],
  },
  {
    id: "17", slug: "aura-lace", name: "AURA Lace", tagline: "Heard, not seen.",
    description: "Transparent open-ear wearable that barely exists.",
    longDescription: "AURA Lace is the open-ear product for people who want the world to forget they are wearing anything. The transparent housing becomes almost invisible on the ear. Sound comes from a directional micro-speaker aimed at the ear canal -- no insertion, no contact.",
    price: 259, category: "in-ear", new: true, rating: 4.2, reviewCount: 34,
    colors: [
      { name: "Crystal", hex: "#e0ddd8", slug: "crystal", imageIndex: 0 },
      { name: "Smoke", hex: "#4a4848", slug: "smoke", imageIndex: 1 },
    ],
    images: [
      "https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?w=1200&q=90",
      "https://images.unsplash.com/photo-1564424224827-cd24b8915874?w=1200&q=90",
      "https://images.unsplash.com/photo-1565538810643-b5bdb714032a?w=1200&q=90",
    ],
    specs: [
      { label: "Design", value: "Open-ear directional" }, { label: "Battery life", value: "8 hrs" },
      { label: "Weight (each)", value: "3.2g" }, { label: "Fit", value: "Over-ear clip, no insertion" },
      { label: "Connectivity", value: "Bluetooth 5.3" }, { label: "Housing", value: "Transparent PCTG" },
    ],
    features: ["Non-inserting open-ear design", "Directional micro-speaker", "Transparent PCTG housing", "3.2g per ear", "Zero pressure, all-day wear"],
  },
  {
    id: "18", slug: "aura-ritual", name: "AURA Ritual", tagline: "The listening chair. For your ears.",
    description: "Premium over-ear designed exclusively for home listening sessions.",
    longDescription: "AURA Ritual is not for commuting. It is for evenings. For the album you put on when the house is quiet and you have an hour to yourself. The 45mm driver is wound and voiced specifically for jazz, classical, and acoustic music. The earcups are real lambskin. The headband is padded with memory foam.",
    price: 589, category: "over-ear", badge: "Limited", rating: 4.8, reviewCount: 29,
    colors: [
      { name: "Cognac", hex: "#9a6030", slug: "cognac", imageIndex: 0 },
      { name: "Ivory", hex: "#f0ebe0", slug: "ivory", imageIndex: 1 },
    ],
    images: [
      "https://images.unsplash.com/photo-1483193722442-5422d99849bc?w=1200&q=90",
      "https://images.unsplash.com/photo-1546435770-a3e426bf472b?w=1200&q=90",
      "https://images.unsplash.com/photo-1524678606370-a47ad25cb82a?w=1200&q=90",
    ],
    specs: [
      { label: "Driver size", value: "45mm jazz-voiced" }, { label: "Impedance", value: "80 Ohm" },
      { label: "Earcup material", value: "Real lambskin leather" }, { label: "Headband", value: "Memory foam padded" },
      { label: "Cable", value: "4m fabric-braided OFC" }, { label: "Weight", value: "365g" },
    ],
    features: ["45mm jazz-voiced driver", "Real lambskin earcups", "Memory foam headband", "4m cable for home use", "Includes wooden stand"],
  },
  {
    id: "19", slug: "aura-ghost", name: "AURA Ghost", tagline: "Wireless. Weightless.",
    description: "The lightest over-ear AURA has ever made.",
    longDescription: "AURA Ghost weighs 168g. That is less than a large egg. We achieved it by combining a carbon fibre headband with magnesium alloy earcup housings and ultra-thin polyethylene foam. You forget you are wearing them. Then the sound reminds you.",
    price: 359, category: "over-ear", new: true, rating: 4.7, reviewCount: 55,
    colors: [
      { name: "Frost", hex: "#e8eaec", slug: "frost", imageIndex: 0 },
      { name: "Midnight", hex: "#1a1c20", slug: "midnight", imageIndex: 1 },
    ],
    images: [
      "https://images.unsplash.com/photo-1545454675-3531b543be5d?w=1200&q=90",
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=1200&q=90",
      "https://images.unsplash.com/photo-1583394838336-acd977736f90?w=1200&q=90",
    ],
    specs: [
      { label: "Weight", value: "168g" }, { label: "Headband", value: "Carbon fibre" },
      { label: "Earcup housing", value: "Magnesium alloy" }, { label: "Battery life", value: "28hrs" },
      { label: "Driver size", value: "36mm custom" }, { label: "Connectivity", value: "Bluetooth 5.3" },
    ],
    features: ["168g -- lightest AURA ever made", "Carbon fibre headband", "Magnesium alloy earcups", "28-hour battery", "Folds completely flat"],
  },
  {
    id: "20", slug: "aura-duo", name: "AURA Duo", tagline: "Two in one. Both excellent.",
    description: "Hybrid earbuds that switch between ANC and open-ear transparency with one tap.",
    longDescription: "AURA Duo solves the problem of choosing between isolation and awareness. A single tap switches between full ANC and open-ear transparency mode. The driver handles both states without re-tuning -- which is harder than it sounds and took us three years to get right.",
    price: 299, category: "earbuds", bestseller: true, rating: 4.8, reviewCount: 276,
    colors: [
      { name: "Pebble", hex: "#b0a898", slug: "pebble", imageIndex: 0 },
      { name: "Jet", hex: "#1a1a1a", slug: "jet", imageIndex: 1 },
    ],
    images: [
      "https://images.unsplash.com/photo-1601524909162-ae8725290836?w=1200&q=90",
      "https://images.unsplash.com/photo-1606220945770-b5b6c2c55bf1?w=1200&q=90",
      "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=1200&q=90",
    ],
    specs: [
      { label: "Driver size", value: "12mm dual-state" }, { label: "Battery (buds)", value: "8 hrs ANC" },
      { label: "Battery (case)", value: "+24 hrs" }, { label: "Switch time", value: "< 0.8 seconds" },
      { label: "Water resistance", value: "IPX5" }, { label: "Codec", value: "aptX Adaptive, AAC" },
    ],
    features: ["Single-tap ANC / transparency switch", "Sub-1-second mode switching", "aptX Adaptive codec", "IPX5 water resistance", "Wireless charging case"],
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
export interface Product {
    id: string;
    name: string;
    subName: string;
    price: string;
    description: string;
    folderPath: string;
    themeColor: string;
    gradient: string;
    glowColor: string;
    features: string[];
    stats: { label: string; val: string }[];
    section1: { title: string; subtitle: string };
    section2: { title: string; subtitle: string };
    section3: { title: string; subtitle: string };
    section4: { title: string; subtitle: string };
    detailsSection: { title: string; description: string; imageAlt: string };
    freshnessSection: { title: string; description: string };
    buyNowSection: {
        price: string;
        unit: string;
        processingParams: string[];
        deliveryPromise: string;
        returnPolicy: string;
    };
}

export const products: Product[] = [
    {
        id: "mango",
        name: "Cream Mango",
        subName: "Pure sunshine.",
        price: "₹120",
        description: "Rich in Vitamin C - No preservatives - 100% fruit",
        folderPath: "/images/mango",
        themeColor: "#FFB74D",
        gradient: "linear-gradient(135deg, #FFB74D 0%, #FF9800 50%, #F57C00 100%)",
        glowColor: "rgba(255, 152, 0, 0.4)",
        features: ["Rich in Vitamin C", "No preservatives", "100% fruit"],
        stats: [{ label: "Sugar", val: "0g" }, { label: "Water", val: "0%" }, { label: "Pulp", val: "100%" }],
        section1: { title: "Cream Mango.", subtitle: "Pure sunshine." },
        section2: { title: "Bursting with fresh mango.", subtitle: "Hand-picked Alphonso mangoes, perfectly ripened under the summer sun." },
        section3: { title: "Vitamin-packed refreshment.", subtitle: "A natural energy boost that revitalizes your body and mind instantly." },
        section4: { title: "Made from fruit, not concentrate.", subtitle: "" },
        detailsSection: {
            title: "The Monster of Fruits",
            description: "Our Cream Mango blend uses only the finest Alphonso mangoes. Known for their rich sweetness and vibrant color, these mangoes are cold-pressed within hours of harvest to preserve every drop of nutrient-rich goodness. It's not just a drink; it's a liquid gold experience.",
            imageAlt: "Mango Details"
        },
        freshnessSection: {
            title: "Farm to Bottle",
            description: "We believe in absolute transparency. From the orchard to the bottle, our process is designed to minimize oxidation and maximize flavor. HPP (High Pressure Processing) ensures that our drink stays safe and fresh without any heat treatment, keeping the vital enzymes and vitamins intact."
        },
        buyNowSection: {
            price: "₹120",
            unit: "per 300ml bottle",
            processingParams: ["Cold Pressed", "Never Heated", "HPP Treated"],
            deliveryPromise: "Next-day delivery available in metro cities. Chilled packaging ensures peak freshness.",
            returnPolicy: "100% Satisfaction Guarantee. Not happy? We'll replace it, no questions asked."
        }
    },
    {
        id: "original",
        name: "Monster Original",
        subName: "Unleash the Beast.",
        price: "₹140",
        description: "Classic Energy - Taurine Blend - B-Vitamins",
        folderPath: "/images/original",
        themeColor: "#4CAF50",
        gradient: "linear-gradient(135deg, #4CAF50 0%, #2E7D32 50%, #1B5E20 100%)",
        glowColor: "rgba(76, 175, 80, 0.4)",
        features: ["Classic Energy", "Taurine Blend", "B-Vitamins"],
        stats: [{ label: "Energy", val: "100%" }, { label: "Taurine", val: "2000mg" }, { label: "Caffeine", val: "160mg" }],
        section1: { title: "Monster Original.", subtitle: "The one that started it all." },
        section2: { title: "Tear into a can.", subtitle: "A smooth, easy drinking flavor packed with the ideal combo of the right ingredients in the right proportion." },
        section3: { title: "Unleash the Beast.", subtitle: "Delivering the big, bad Monster buzz you know and love." },
        section4: { title: "Pure adrenaline.", subtitle: "" },
        detailsSection: {
            title: "Classic Green Energy",
            description: "Our signature original blend delivers a powerful punch with a smooth, unmistakable flavor. Formulated with our proprietary Monster Energy blend of Taurine, Ginseng, L-Carnitine, and B-Vitamins.",
            imageAlt: "Original Details"
        },
        freshnessSection: {
            title: "Peak Performance",
            description: "We don't hold back. Our Original blend is crafted to deliver maximum energy when you need it most. Whether you're hitting the gym, gaming late, or just need to crush your day, this is the fuel."
        },
        buyNowSection: {
            price: "₹140",
            unit: "per 500ml can",
            processingParams: ["Max Energy", "Classic Taste", "Zero Compromise"],
            deliveryPromise: "Shipped fast so you never run out of fuel.",
            returnPolicy: "Not fully energized? We'll make it right."
        }
    },
    {
        id: "grapefruit",
        name: "Ruby Grapefruit",
        subName: "Citrus powerhouse.",
        price: "₹150",
        description: "Bold Energy - Cold Pressed - Refreshing Tang",
        folderPath: "/images/grapefruit",
        themeColor: "#FF5252",
        gradient: "linear-gradient(135deg, #FF5252 0%, #E53935 50%, #B71C1C 100%)",
        glowColor: "rgba(229, 57, 53, 0.4)",
        features: ["Bold Energy", "Cold Pressed", "Refreshing Tang"],
        stats: [{ label: "Additives", val: "0%" }, { label: "Vitamins", val: "B,C,E" }, { label: "Purity", val: "100%" }],
        section1: { title: "Ruby Grapefruit.", subtitle: "Nature's spark." },
        section2: { title: "Explosion of flavor.", subtitle: "Freshly pressed grapefruit delivering a bold and electrifying sensation." },
        section3: { title: "Unstoppable energy.", subtitle: "Packed with powerful citrus to protect and rejuvenate your day." },
        section4: { title: "Pure energy, pure life.", subtitle: "" },
        detailsSection: {
            title: "The Ruby Elixir",
            description: "Each can contains the essence of premium grapefruits. We use a gentle pressing method to extract the flavor without crushing the bitter pith. This results in a sweet, complex, and electric profile.",
            imageAlt: "Grapefruit Details"
        },
        freshnessSection: {
            title: "Potent Preservation",
            description: "Grapefruit vitality is highly sensitive to light and air. Our bottling line is designed to shield the drink from oxidation at every step. We bottle immediately after pressing to lock in the vibrant color and potent citrus kick."
        },
        buyNowSection: {
            price: "₹150",
            unit: "per 300ml bottle",
            processingParams: ["Cold Pressed", "Oxidation Shield", "No Additives"],
            deliveryPromise: "Direct from the pressery to your doorstep. Guaranteed fresh upon arrival.",
            returnPolicy: "Damaged in transit? Instant replacement available."
        }
    }
];

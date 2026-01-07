export interface DayOut {
    id: number;
    title: string;
    description: string;
    image: string;
    location: string;
    rating: number;
    category: string;
    url?: string;
}

export const topDaysOut: DayOut[] = [
    {
        id: 1,
        title: "Wisley Royal Horticultural Society Garden",
        description: "One of the world's greatest gardens with diverse plant collections, glasshouses, and beautiful landscapes.",
        location: "Wisley, Woking",
        image: "🌺",
        rating: 4.7,
        category: "Gardens",
        url: "https://www.rhs.org.uk/gardens/wisley",
    },
    {
        id: 2,
        title: "Chessington World of Adventures",
        description: "Theme park and zoo with rides, shows, and over 1,000 animals from around the world.",
        location: "Chessington",
        image: "🎢",
        rating: 4.5,
        category: "Theme Park & Zoo",
        url: "https://www.chessington.com/",
    },
    {
        id: 3,
        title: "Box Hill",
        description: "Outstanding natural beauty with scenic walking trails and panoramic views of the South Downs.",
        location: "Dorking",
        image: "🏔️",
        rating: 4.6,
        category: "Nature & Hiking",
        url: "https://www.nationaltrust.org.uk/box-hill",
    },
    {
        id: 4,
        title: "Painshill Park",
        description: "Grade I listed historic park with stunning ornamental lake, exotic plants, and 14 follies.",
        location: "Cobham",
        image: "🏛️",
        rating: 4.5,
        category: "Historic Park",
        url: "https://www.painshill.co.uk/",
    },
    {
        id: 5,
        title: "Polesden Lacey",
        description: "Edwardian country house with fine art collections and elegant gardens on the North Downs.",
        location: "Great Bookham",
        image: "🏰",
        rating: 4.4,
        category: "Historic House",
        url: "https://www.nationaltrust.org.uk/polesden-lacey",
    },
    {
        id: 6,
        title: "Dorking Caves - Deepdene Walk",
        description: "Historic quarries and woodland walk with natural caves and stunning river valley views.",
        location: "Dorking",
        image: "🏔️",
        rating: 4.3,
        category: "Nature & Hiking",
        url: "https://www.nationaltrust.org.uk/dorking-and-box-hill",
    },
    {
        id: 7,
        title: "Brooklands Museum",
        description: "Historic motor racing venue and aircraft facility with vintage cars and planes to explore.",
        location: "Weybridge",
        image: "🏎️",
        rating: 4.4,
        category: "Museum",
        url: "https://www.brooklandsmuseum.com/",
    },
    {
        id: 8,
        title: "Shere Village & St James Church",
        description: "Picturesque village with timber-framed cottages, charming tea rooms, and historic church.",
        location: "Shere",
        image: "🏘️",
        rating: 4.5,
        category: "Village & Culture",
        url: "https://www.shere.org/",
    },
    {
        id: 9,
        title: "Winkworth Arboretum",
        description: "Beautiful woodland arboretum with rare trees, two lakes, and peaceful walking trails.",
        location: "Godalming",
        image: "🌳",
        rating: 4.4,
        category: "Gardens & Nature",
        url: "https://www.nationaltrust.org.uk/winkworth-arboretum",
    },
    {
        id: 10,
        title: "Waverley Abbey",
        description: "Romantic ruins of England's first Cistercian monastery set in beautiful riverside grounds.",
        location: "Farnham",
        image: "🏚️",
        rating: 4.3,
        category: "Historic Site",
        url: "https://www.english-heritage.org.uk/visit/places/waverley-abbey/",
    },
];

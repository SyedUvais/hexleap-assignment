export interface Player {
    key: number;
    image: string;
    heading: string;
    total_events: string;
    sport_name: string;
    description?: string; // I have given this field for card 5 which is advertisement card
}

export const playersData: Player[] = [
    {
        "key": 1,
        "image": "/assets/img1.png",
        "heading": "Sacramento River Cats",
        "total_events": "48 Events",
        "sport_name": "Baseball"
    },
    {
        "key": 2,
        "image": "/assets/img2.png",
        "heading": "Las Vegas Aviators",
        "total_events": "28 Events",
        "sport_name": "Baseball"
    },
    {
        "key": 3,
        "image": "/assets/img3.png",
        "heading": "new jersey devils",
        "total_events": "15 Events",
        "sport_name": "ice hockey"
    },
    {
        "key": 4,
        "image": "/assets/img4.png",
        "heading": "Las Vegas Aviators",
        "total_events": "28 Events",
        "sport_name": "Baseball"
    },
    {
        "key": 5,
        "image": "/assets/img5.png",
        "heading": "Advertisement title",
        "total_events": "",
        "sport_name": "",
        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    }
]
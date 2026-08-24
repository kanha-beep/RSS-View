export type Shakha = {
  id: string;
  name: string;
  mukhyaShikshak: string;
  location: string;
  state: string;
  city: string;
  numberOfPeople: number;
  coordinates: {
    lat: number;
    lng: number;
  };
};

export const shakhas: Shakha[] = [
  {
    id: "bhopal-lalghati",
    name: "Om Shiv Nagar Shakha",
    mukhyaShikshak: "Shri Arvind Tiwari",
    location: "Lalghati, Bhopal, Madhya Pradesh",
    state: "Madhya Pradesh",
    city: "Bhopal",
    numberOfPeople: 5,
    coordinates: { lat: 23.277852, lng:77.369943 }
  },
  {
    id: "bhopal-vijay-nagar",
    name: "Vijay Nagar Shakha",
    mukhyaShikshak: "Shri Manish Dubey",
    location: "Vijay Nagar, Bhopal, Madhya Pradesh",
    state: "Madhya Pradesh",
    city: "Bhopal",
    numberOfPeople: 47,
    coordinates: { lat: 23.2024, lng: 77.4378 }
  },
  {
    id: "bhopal-airport-road-3",
    name: "Airport Road Shakha",
    mukhyaShikshak: "Shri Saurabh Pathak",
    location: "Airport Road, Hoshangabad Road, Bhopal, Madhya Pradesh",
    state: "Madhya Pradesh",
    city: "Bhopal",
    numberOfPeople: 39,
    coordinates: { lat: 23.2907, lng: 77.337 }
  },
  {
    id: "bhopal-kolar-road-4",
    name: "Kolar Road Shakha",
    mukhyaShikshak: "Shri Abhishek Sharma",
    location: "Kolar Road, Bhopal, Madhya Pradesh",
    state: "Madhya Pradesh",
    city: "Bhopal",
    numberOfPeople: 61,
    coordinates: { lat: 23.1668, lng: 77.4161 }
  },
  {
    id: "nagpur-mahal",
    name: "Mahal Prabhat Shakha",
    mukhyaShikshak: "Shri Aniruddh Joshi",
    location: "Mahal, Nagpur, Maharashtra",
    state: "Maharashtra",
    city: "Nagpur",
    numberOfPeople: 68,
    coordinates: { lat: 21.1458, lng: 79.0882 }
  },
  {
    id: "delhi-rohini",
    name: "Rohini Nagar Shakha",
    mukhyaShikshak: "Shri Vivek Bansal",
    location: "Rohini, Delhi",
    state: "Delhi",
    city: "Delhi",
    numberOfPeople: 54,
    coordinates: { lat: 28.7495, lng: 77.0565 }
  },
  {
    id: "jaipur-vaishali",
    name: "Vaishali Shakha",
    mukhyaShikshak: "Shri Chetan Sharma",
    location: "Vaishali Nagar, Jaipur, Rajasthan",
    state: "Rajasthan",
    city: "Jaipur",
    numberOfPeople: 39,
    coordinates: { lat: 26.9117, lng: 75.7444 }
  },
  {
    id: "ahmedabad-sabarmati",
    name: "Sabarmati Shakha",
    mukhyaShikshak: "Shri Harshad Trivedi",
    location: "Sabarmati, Ahmedabad, Gujarat",
    state: "Gujarat",
    city: "Ahmedabad",
    numberOfPeople: 43,
    coordinates: { lat: 23.0797, lng: 72.5887 }
  },
  {
    id: "lucknow-indiranagar",
    name: "Indira Nagar Shakha",
    mukhyaShikshak: "Shri Prashant Tiwari",
    location: "Indira Nagar, Lucknow, Uttar Pradesh",
    state: "Uttar Pradesh",
    city: "Lucknow",
    numberOfPeople: 51,
    coordinates: { lat: 26.8786, lng: 81.0004 }
  },
  {
    id: "kolkata-bagbazar",
    name: "Bagbazar Shakha",
    mukhyaShikshak: "Shri Soumik Chatterjee",
    location: "Bagbazar, Kolkata, West Bengal",
    state: "West Bengal",
    city: "Kolkata",
    numberOfPeople: 46,
    coordinates: { lat: 22.6026, lng: 88.3702 }
  },
  {
    id: "bengaluru-malleswaram",
    name: "Malleswaram Shakha",
    mukhyaShikshak: "Shri Keshav Murthy",
    location: "Malleswaram, Bengaluru, Karnataka",
    state: "Karnataka",
    city: "Bengaluru",
    numberOfPeople: 63,
    coordinates: { lat: 13.0035, lng: 77.5706 }
  },
  {
    id: "chennai-mylapore",
    name: "Mylapore Shakha",
    mukhyaShikshak: "Shri Sriram Iyer",
    location: "Mylapore, Chennai, Tamil Nadu",
    state: "Tamil Nadu",
    city: "Chennai",
    numberOfPeople: 48,
    coordinates: { lat: 13.0317, lng: 80.2697 }
  }
];

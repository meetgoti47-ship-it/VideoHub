// This file stores your API keys and configuration.
// WARNING: Do NOT expose this file in a public web directory.
// For production, these should be loaded from secure environment variables on a backend server.

const firebaseConfig = {
    apiKey: "AIzaSyC4VVwJcMdKlZV3eEXvJ5RKHMt-kUq_fnI",
    authDomain: "videohubmeet.firebaseapp.com",
    projectId: "videohubmeet",
    storageBucket: "videohubmeet.firebasestorage.app",
    messagingSenderId: "800957297857",
    appId: "1:800957297857:web:22130a05980c6f87979040"
};

const cloudinaryConfig = {
    cloudName: "dirg3ibdg",
    apiKey: "846372637261926",
    apiSecret: "LIzsoWo4CpZLat6aaPdGkUkVquM"
};

// You would typically export these from a backend file like this
// module.exports = {
//     firebaseConfig,
//     cloudinaryConfig
// };

// For client-side, you might do this, but again, it's not secure for the apiSecret
// export {
//     firebaseConfig,
//     cloudinaryConfig
// };
// This file stores your API keys and configuration.
// WARNING: Do NOT expose this file in a public web directory.
// For production, these should be loaded from secure environment variables on a backend server.

const firebaseConfig = {
  apiKey: "AIzaSyBKokoVhxRf37agssBBvaMLfGdkusNNSsU",
  authDomain: "streamverse-b8e76.firebaseapp.com",
  projectId: "streamverse-b8e76",
  storageBucket: "streamverse-b8e76.firebasestorage.app",
  messagingSenderId: "468705709242",
  appId: "1:468705709242:web:f46a0e53e5a4e90d4a8683"
};

const cloudinaryConfig = {
    cloudName: "dx3ovohb4",
    apiKey: "572875668873198",
    apiSecret: "KNnKJzFzhfuuDtpUuB-vURDRBY8"
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

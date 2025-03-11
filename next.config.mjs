// Archivo: next.config.mjs
const nextConfig = {
    images: {
      remotePatterns: [
        {
          protocol: "https",
          hostname: "i.gifer.com",
        },
      ],
    },
  };
  
  export default nextConfig; // Uso de export ES Module
  
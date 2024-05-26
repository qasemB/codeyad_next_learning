/** @type {import('next').NextConfig} */
const nextConfig = {
    // images: {
    //     remotePatterns:[
    //         {
    //             protocol: "https",
    //             hostname: "codeyad.com",
    //             pathname: "/**",
    //             port:""
    //         }
    //     ]
    // }
    images: {
        unoptimized: true
    }
};

export default nextConfig;

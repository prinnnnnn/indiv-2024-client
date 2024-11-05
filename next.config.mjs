/** @type {import('next').NextConfig} */
const nextConfig = {
    env: {
        SERVER_ADDRESS: process.env.SERVER_ADDRESS,
        R2_REGION: process.env.R2_REGION,
        CLOUDFLARE_ACCOUNT_ID: process.env.CLOUDFLARE_ACCOUNT_ID,
        R2_ACCESS_KEY: process.env.R2_ACCESS_KEY,
        R2_SECRET_ACCESS_KEY: process.env.R2_SECRET_ACCESS_KEY,
        R2_BUCKET_NAME: process.env.R2_BUCKET_NAME,
        ENDPOINS: process.env.ENDPOINS
    }
};

export default nextConfig;

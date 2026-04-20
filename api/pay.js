const crypto = require('crypto');
const axios = require('axios');

const PRIVATE_KEY = process.env.PRIVATE_KEY;
const MERCHANT_CODE = process.env.MERCHANT_CODE;
const API_KEY = process.env.API_KEY;

export default async function handler(req, res) {
    if (req.method !== 'POST') {
        res.status(405).json({ message: 'Method not allowed' });
        return;
    }

    const { product, price } = req.body;

    const merchant_ref = 'SH-' + Date.now(); // Prefix SUYA HOSST
    const amount = parseInt(price.replace(/[^0-9]/g, '')); // Bersihkan input Rp dan Titik

    const signature = crypto
        .createHmac('sha256', PRIVATE_KEY)
        .update(MERCHANT_CODE + merchant_ref + amount)
        .digest('hex');

    try {
        const response = await axios.post(
            'https://tripay.co.id/api-sandbox/transaction/create',
            {
                method: 'QRIS',
                merchant_ref,
                amount,
                customer_name: 'Zirien Customer',
                customer_email: 'customer@email.com',
                order_items: [
                    {
                        name: product,
                        price: amount,
                        quantity: 1
                    }
                ],
                // Pastikan ini mengarah ke file success Anda
                return_url: process.env.RETURN_URL || 'https://yourdomain.vercel.app/payment-success.html',
                expired_time: Math.floor(Date.now() / 1000) + (60 * 60)
            },
            {
                headers: { Authorization: 'Bearer ' + API_KEY }
            }
        );

        res.json(response.data.data);
    } catch (err) {
        res.status(500).json({ error: err.response ? err.response.data.message : err.message });
    }
}
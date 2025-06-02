export default function FormatPrice({ price }) {
    return Number(price).toLocaleString('vi-VN', {
        style: 'currency',
        currency: 'VND',
    });
}


export default function is_expired() {
    const expiryTime = localStorage.getItem('expiry_time');
    const timeNow = new Date().getTime();
    const is_expired = timeNow >= expiryTime;
    return is_expired;
}

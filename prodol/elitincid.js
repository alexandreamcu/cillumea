const now = new Date();

// ISO 8601 format
const isoFormat = now.toISOString();
console.log(isoFormat);  // Example: '2024-06-22T13:49:08.123Z'

// Custom format using template literals
const customFormat = `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, '0')}-${String(now.getDate()).padStart(2, '0')} ${String(now.getHours()).padStart(2, '0')}:${String(now.getMinutes()).padStart(2, '0')}:${String(now.getSeconds()).padStart(2, '0')}`;
console.log(customFormat);  // Example: '2024-06-22 13:49:08'

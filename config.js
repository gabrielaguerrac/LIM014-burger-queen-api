require('dotenv').config();

exports.port = process.argv[2] || process.env.PORT || 8081;
exports.dbUrl = process.env.MONGO_URL || process.env.DB_URL;
exports.secret = process.env.JWT_SECRET || 'papanoel';
exports.adminEmail = process.env.ADMIN_EMAIL || 'admin@localhost.com';
exports.adminPassword = process.env.ADMIN_PASSWORD || 'QWERTY12345678';

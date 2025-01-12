const bcrypt = require('bcrypt');

async function testHash({ password }) {
    try {
        const hash = await bcrypt.hash(password,10);
        return hash;
    } catch (err) {
        console.error("Error hashing password:", err);
        throw err;
    }
}

module.exports = { testHash };

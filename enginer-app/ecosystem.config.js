module.exports = {
    apps: [
        {
            name: "enginer-app",
            script: "npm.cmd", // Pakai .cmd khusus Windows
            args: "start",
            env: {
                NODE_ENV: "production",
            },
        },
        {
            name: "enginer-dev",
            script: "npm.cmd", // Pakai .cmd khusus Windows
            args: "run dev",
            watch: false, // Matikan watch PM2 karena Next.js sudah punya hot reload sendiri
            env: {
                NODE_ENV: "development",
            },
        }
    ],
};

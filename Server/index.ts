import * as server from './src/server';

async function main() {
    const srv = new server.server((process.env.PORT || 8080) as number);

    await srv.init();
    srv.launch();
}

main()
    .catch((exc) => console.error(exc));
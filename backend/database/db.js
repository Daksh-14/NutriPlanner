import pg from 'pg';

export const db = new pg.Client({
    user: "postgres",
    host: "localhost",
    database: "Nutriplan",
    password: "Adi@1496",
    port: 5432,
});


import pg from 'pg';

export const db = new pg.Client({
    user: "postgres",
    host: "localhost",
    database: "Nutriplan",
    password: "",
    port: 5432,
});


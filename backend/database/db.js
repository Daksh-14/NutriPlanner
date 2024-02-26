import pg from 'pg';

export const db = new pg.Client({
    user: "postgres",
    host: "localhost",
    database: "Nutriplan",
    password: "DV@11050905",
    port: 5432,
});


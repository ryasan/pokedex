# pokedex

**Prerequisites**
Must have postgres instance running with `root` as the user and `123` as the password. \*Or change ./server/database.js to whatever user and password you want.

## Database setup

1.  Open terminal then run `psql --username=root`
2.  Enter `123` for the password
3.  create database `CREATE DATABASE POKEMON_DB;`
4.  exit out of psql by running `\q`
5.  run `yarn db:setup` to create data table

## Server & client

1.  run `yarn install`
2.  run `yarn start:all`
3.  browser to `localhost:1128`

Notes

1.  [pokemon card design](https://www.bbtoystore.com/store/pokemon-cards.html)

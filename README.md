# Nadia’s Garden Restaurant

This is a Node.js and Express website that accepts and lists restaurant reservations.

## Getting Started

```bash
npm install
npm start
```

The server runs on port 3000.

There are three routes:

- http://localhost:3000/ - homepage
- http://localhost:3000/reservations - submit a reservation booking request
- http://localhost:3000/admin - view all booking requests; basic auth login/password `admin`

The server persists using a SQLite3 database named `database.sqlite` in the site root.

## Development

This project uses EditorConfig to standardize text editor configuration.
Visit http://editorconfig.org for details.

This project uses ESLint to detect suspicious code in JavaScript files.
Visit http://eslint.org for details.

### Debugging

This project uses https://www.npmjs.com/package/debug for development logging. To start `nodemon` and enable logging:

```bash
npm run debug
```

## Credits

This is an adaptation of a WordPress site hosted at http://587672.youcanlearnit.net/

The conversion:

- Archive original with wget
- Strip out unrelated functionality
- Reorganize JavaScript and Stylesheets into logical directories
- Converted HTML into Jade / Pug templates using http://html2jade.org/

The front end should be mostly unchanged from the original.

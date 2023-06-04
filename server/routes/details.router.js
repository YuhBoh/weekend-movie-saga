const express = require("express");
const router = express.Router();
const pool = require("../modules/pool");

router.get("/:id", (req, res) => {
  // Add query to get all genres
  const query = `
    SELECT movies.title, movies.poster, movies.description, genres.name, genres.id
    FROM genres
    JOIN movies_genres ON movies_genres.genre_id = genres.id
    JOIN movies ON movies_genres.movie_id = movies.id
    WHERE movies.id = $1;
  `;
  pool
    .query(query, [req.params.id])
    .then((result) => {
      res.send(result.rows);
    })
    .catch((err) => {
      console.log("ERROR: Get all movies", err);
      res.sendStatus(500);
    });
});

module.exports = router;

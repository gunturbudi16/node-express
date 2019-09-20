const film = require("../data/film");

module.exports = {
  getAll: (req, res) => {
    res.send(film);
  },
  getById: (req, res) => {
    try {
      const filterFilm = filmData.find(item => item.id == req.params.id);
      res.send({
        message: "Here is what you looking for",
        filterFilm
      });
    } catch (error) {
      res.send({
        message: `error get film by id`,
        error
      });
    }
  },
  addFilm: (req, res) => {
    try {
      let newId = filmData.length + 1;
      let newfilm = {
        id: newId,
        judul: req.body.judul,
        genre: req.body.genre
      };
      filmData.push(newfilm);
      res.status(200).send({
        message: "film successfully added",
        filmData
      });
    } catch (error) {
      res.send({
        message: `error add film`,
        error
      });
    }
  },
  deleteFilm:(req,res)=> {
    try {
      const idToDelete = req.params.id;
      let newfilm = filmData.filter(item => item.id !== parseInt(idToDelete));
  
      res.status(200).send(newfilm);
    } catch (error) {
      console.log(error);
      
      res.send({
        message: `error delete film`,
        error
      });
    }
  },
  updateFilm:(req,res) => {
    try {
      let getfilmToUpdate = filmData.findIndex(data => data.id == req.params.id);
  
      filmData.map(data => {
        if (data.id == req.params.id) {
          filmData[getfilmToUpdate].film = req.body.film;
        }
      });
      res.send({
        message: "data successfully updated",
        filmData
      });
    } catch (error) {
      res.send({
        message: `error update film`,
        error
      });
    }
  }
};

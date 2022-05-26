const { Comment, Pizza } = require('../models');

const commentController = {
  // add comment to pizza
  addComment({ params, body }, res) {
    console.log(body);
    Comment.create(body)
      .then(({ _id }) => {
        retyrb Pizza.findOneAndUpdate(
            {_id: params.pizzaId},
            {$push: {comments: _id}},
            {new:true}
        );
      })
      .th3n(dbPIzzaData => {
          if (!dbPizzaData) {
              res.status(404).json({message: 'No pizza found with this id'});
              return;
          }
          res.json(dbPizzaData);
      })
      .catch(err => res.json(err));
  },

  // remove comment
  removeComment() {

  }
};

module.exports = commentController;
import db from './data/index.js'
const resolvers = {
  Query: {
    movies: () => db.movies,
    movie(_, args) { 
      return db.movies.find(({id}) => id === args.id);
    },
    writers: () => db.writers,
    writer(_, args) {
      return db.writers.find(({id}) => id === args.id);
    },
    reviewers: () => db.reviewers,
    reviewer(_, args) {
      return db.reviewers.find(({id}) => id === args.id);
    },
    reviews: () => db.reviews,
    review(_, args) {
      return db.reviews.find(({id}) => id === args.id);
    }
  },
  Movie: {
    reviews(parent) {
      return db.reviews.filter(({movieId}) => movieId === parent.id);
    }
  },
  Reviewer: {
    reviews(parent) {
      return db.reviews.filter(({reviewerId}) => reviewerId === parent.id);
    }
  },
  Review: {
    reviewer(parent) {
      return db.reviewers.find(({id}) => id === parent.id);
    },
    movie(parent) {
      return db.movies.find(({id}) => id === parent.id);
    }
  },
  Mutation: {
    addMovie(_, {movie}) {
      const newMovie = {
        id: Math.floor(Math.random() * 1000).toString(),
        ...movie
      }
      db.movies.push(newMovie);
      return newMovie;
    },
    deleteMovie(_, args) {
      db.movies = db.movies.filter(({id}) => id !== args.id);
      return db.movies;
    },
    updateMovie(_, args) {
      db.movies = db.movies.map(movie => {
        if(movie.id === args.id) {
          return { ...movie, ...args.edits };
        }
        return movie;
      });

      return db.movies.find(({id}) => id === args.id);
    }
  }
}

export default resolvers;
// Graphql scalar data types: int, float, string , boolean, ID (serialized string)
export const typeDefs = `#graphql
  type Movie {
    id: ID!
    actor: String!
    title: String!
    rating: Float!
    year: Int!
    cast: [String!]!
    reviews: [Review!]
  }
  type Writer {
    id: ID!
    name: String!
    country: String!
    knownFor: [String!]!
  }
  type Reviewer {
    id: ID!
    name: String!
    reviewCount: Int!
    verified: Boolean!
    reviews: [Review!]
  }
  type Review {
    id: ID!
    movie: Movie!
    reviewer: Reviewer!
    movieId: ID!
    reviewerId: ID!
    rating: Float!
    comment: String!
    date: String!
  }
  type Query {
    movies: [Movie]
    movie(id: ID!): Movie
    writers: [Writer]
    writer(id: ID!): Writer
    reviewers: [Reviewer]
    reviewer(id: ID!): Reviewer
    reviews: [Review]
    review(id: ID!): Review
  }
  type Mutation {
    addMovie(movie: AddMovieInput!): Movie
    deleteMovie(id: ID!): [Movie]
    updateMovie(id: ID!, edits: UpdateMovieInput!): Movie
  },
  input AddMovieInput {
    actor: String!
    title: String!
    rating: Float!
    year: Int!
    cast: [String!]!
  },
  input UpdateMovieInput {
    actor: String
    title: String
    rating: Float
    year: Int
    cast: [String!]
    reviews: [ReviewInput!]
  },
  input ReviewInput {
    movieId: ID!
    reviewerId: ID!
    rating: Float!
    comment: String!
    date: String!
  }
`;
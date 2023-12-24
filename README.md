# graphql-movie-review-api

 
A simple GraphQL API powered by Apollo Sever for querying/mutating movies and the corresponding reviews.

## Schema
    type Movie {
	    id:  ID!
	    actor:  String!
	    title:  String!
	    rating:  Float!
	    year:  Int!
	    cast:  [String!]!
	    reviews:  [Review!]
    }
    
    type Writer {
	    id:  ID!
	    name:  String!
	    country:  String!
	    knownFor:  [String!]!
    }
    
    type Reviewer {
	    id:  ID!
	    name:  String!
	    reviewCount:  Int!
	    verified:  Boolean!
	    reviews:  [Review!]
    }

    type Review {
	    id:  ID!
	    movie:  Movie!
	    reviewer:  Reviewer!
	    movieId:  ID!
	    reviewerId:  ID!
	    rating:  Float!
	    comment:  String!
	    date:  String!
    }
    
    type Query {
	    movies:  [Movie]
	    movie(id:  ID!):  Movie
	    writers:  [Writer]
		writer(id:  ID!):  Writer
	    reviewers:  [Reviewer]
	    reviewer(id:  ID!):  Reviewer
	    reviews:  [Review]
	    review(id:  ID!):  Review
    }
    
    type Mutation {
	    addMovie(movie:  AddMovieInput!):  Movie
	    deleteMovie(id:  ID!):  [Movie]
	    updateMovie(id:  ID!, edits:  UpdateMovieInput!):  Movie
    }

    input AddMovieInput {
	    actor:  String!
	    title:  String!
	    rating:  Float!
	    year:  Int!
	    cast:  [String!]!
    }

    input UpdateMovieInput {
	    actor:  String
	    title:  String  
	    rating:  Float
	    year:  Int
	    cast:  [String!]
	    reviews:  [ReviewInput!]
    }

    input ReviewInput {
	    movieId:  ID!
	    reviewerId:  ID!
	    rating:  Float!
	    comment:  String!
	    date:  String!
    }

## Queries
**Fetch all movies**

    query MoviesQuery {
      movies {
        actor
        title
        year
        rating
        cast
      }
    }

**Fetch all writers**

    query WritersQuery {
      writers {
        id
        name
        country
        knownFor
      }
    }

**Fetch all reviewers**

    query ReviewersQuery {
      reviewers {
        id
        name
        reviewCount
        verified
      }
    }

**Fetch all reviews**

    query ReviewsQuery {
      reviews {
        reviewerId
        movieId
        rating
        comment
        date
      }
    }

**Fetch movie by ID**

    query MovieQuery($id: ID!) {
      movie(id: $id) {
        title,
        actor,
        rating,
        year
      }
    }

**Fetch writer by ID**

    query WriterQuery($id: ID!) {
      writer(id: $id) {
        name,
        country,
        knownFor
      }
    }

**Fetch reviewer by ID**

    query ReviewerQuery($id: ID!){
      reviewer(id: $id) {
        name,
        reviewCount,
        verified
      }
    }
    
**Fetch review by ID**

    query ReviewQuery($id: ID!) {
      review(id: $id) {
        movieId,
        reviewerId
        comment,
        rating,
        date,
      }
    }

## Nested Queries
**Get movie by ID**

    query MovieQuery($id: ID!) {
      movie(id: $id) {
        id
        title
        actor
        cast
        year
        reviews {
          id
          movieId
          rating
          comment
          date
        }
      }
    }
    
**Get reviewer by ID**

    query ReviewerQuery($id: ID!){
      reviewer(id: $id){
        name
        reviewCount
        verified
        reviews {
          reviewerId
          movieId
          comment
          rating
        }
      }
    }

**Get reviewer by ID**

    query ReviewQuery($id: ID!){
      review(id: $id){
        movieId
        rating
        movie {
          title
          actor
          rating
          cast
          year
        }
        reviewer {
          id
          name
          reviewCount
          verified
        }
      }
    }

## Mutations
**Add a movie**

    mutation AddMutation($movie: AddMovieInput!){
      addMovie(movie: $movie) {
        id
        title
        actor
        year
        rating
        cast
      }
    }

**Delete a movie**

    mutation DeleteMutation($id: ID!){
      deleteMovie(id: $id) {
        id
        actor
        rating
        year
        cast
      }
    }

## Input Variables

**Query by ID**

    {
      "id": "3"
    }

**Add/update a movie**

    {
      "movie": {
      "title": "The Matrix",
      "actor": "Keanu Reeves",
      "rating": 8.7,
      "year": 1999,
      "cast": ["Laurence Fishburne",  "Carrie-Anne Moss", "Hugo Weaving", "Joe Pantoliano"]
      }
    }
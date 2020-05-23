import gql from 'graphql-tag';

export const getAllPostsQuery = () => gql`
    query allPosts($first: Int!, $skip: Int!) {
      allPosts(orderBy: createdAt_DESC, first: $first, skip: $skip) {
        id
        title
        votes
        url
        createdAt
      }
      _allPostsMeta {
        count
      }
    }
  `;

export const getSomeOtherQuery = () => {};

import { gql } from "@apollo/client";

export const RESOURCES_BY_TYPE = gql`
  query ResourcesByType($type: String!) {
    resourcesByType(type: $type) {
      _id
      title
      type
      description
      content
      externalUrl
      createdAt
      updatedAt
    }
  }
`;

export const RESOURCE_BY_ID = gql`
  query ResourceById($id: ID!) {
    resourceById(id: $id) {
      _id
      title
      type
      description
      content
      externalUrl
      createdAt
      updatedAt
    }
  }
`;

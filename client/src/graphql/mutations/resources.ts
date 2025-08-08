import { gql } from "@apollo/client";

export const CREATE_RESOURCE = gql`
  mutation CreateResource($input: CreateResourceInput!) {
    createResource(input: $input) {
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

export const DELETE_RESOURCE = gql`
  mutation DeleteResource($id: ID!) {
    deleteResource(id: $id)
  }
`;
export const UPDATE_RESOURCE = gql`
  mutation UpdateResource($id: ID!, $input: CreateResourceInput!) {
    updateResource(id: $id, input: $input) {
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

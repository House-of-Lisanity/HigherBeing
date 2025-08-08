import { gql } from "@apollo/client";

export const CREATE_SERVICE = gql`
  mutation CreateService($input: CreateServicesInput!) {
    createService(input: $input) {
      _id
      title
      type
      description
      price
      features
    }
  }
`;

export const DELETE_SERVICE = gql`
  mutation DeleteService($id: ID!) {
    deleteService(id: $id)
  }
`;

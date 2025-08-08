import { gql } from "@apollo/client";

export const GET_ALL_SERVICES = gql`
  query GetAllServices {
    allServices {
      _id
      title
      type
      description
      price
      features
      createdAt
      updatedAt
    }
  }
`;

export const GET_SERVICES_BY_TYPE = gql`
  query ServicesByType($type: String!) {
    servicesByType(type: $type) {
      _id
      title
      type
      description
      price
      features
      createdAt
      updatedAt
    }
  }
`;

export const GET_SERVICE_BY_ID = gql`
  query ServiceById($id: ID!) {
    serviceById(id: $id) {
      _id
      title
      type
      description
      price
      features
      createdAt
      updatedAt
    }
  }
`;

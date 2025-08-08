import { gql } from "@apollo/client";

export const GET_USER = gql`
  query GetUser($id: ID!) {
    getUser(id: $id) {
      id
      firstName
      lastName
      fullName
      email
      phone
      address {
        street
        city
        state
        zip
      }
      age
      weight
      height
      medicalConditions
      goals
      allergies
      emergencyContact {
        firstName
        lastName
        fullName
        phone
        relationship
      }
      gender
      preferredContactMethod
      notes
      role
      createdAt
      updatedAt
    }
  }
`;

export const GET_ALL_USERS = gql`
  query GetAllUsers {
    getAllUsers {
      id
      firstName
      lastName
      fullName
      email
      phone
      role
    }
  }
`;

export const ME = gql`
  query Me {
    me {
      id
      firstName
      lastName
      fullName
      email
      phone
      address {
        street
        city
        state
        zip
      }
      age
      weight
      height
      medicalConditions
      goals
      allergies
      emergencyContact {
        firstName
        lastName
        fullName
        phone
        relationship
      }
      gender
      preferredContactMethod
      notes
      role
      createdAt
      updatedAt
    }
  }
`;

import { gql } from "@apollo/client";

export const REGISTER_USER = gql`
  mutation RegisterUser($input: UserInput!) {
    registerUser(input: $input) {
      token
      user {
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
  }
`;

export const UPDATE_USER = gql`
  mutation UpdateUser($id: ID!, $input: UserInput!) {
    updateUser(id: $id, input: $input) {
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

export const DELETE_USER = gql`
  mutation DeleteUser($id: ID!) {
    deleteUser(id: $id)
  }
`;

export const LOGIN_USER = gql`
  mutation Login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
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
  }
`;

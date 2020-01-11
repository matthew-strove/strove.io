import gql from 'graphql-tag'
import { UserFragment } from '../fragments/user'
import { ProjectFragment } from '../fragments/project'

export const TeamFragment = gql`
  fragment Team on Team {
    id
    name
    projects { id }
    owner {id}
    users { id}
  }
`

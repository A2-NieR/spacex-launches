import gql from 'graphql-tag';

export const PAST_LAUNCHES = gql`
  query pastLaunchesList($limit: Int!) {
    launchesPast(limit: $limit) {
      id
      mission_name
      links {
        flickr_images
        mission_patch_small
        mission_patch
      }
      rocket {
        rocket_name
      }
      launch_date_utc
    }
  }
`;

export const LAUNCH_DETAILS = gql`
  query launchDetails($id: ID!) {
    launch(id: $id) {
      id
      mission_name
      details
      links {
        flickr_images
        mission_patch
      }
    }
  }
`;

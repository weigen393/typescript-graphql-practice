import User from './data/user_data.json';

const resolvers = {
  Query: {
    me: () => {
      return User;
    }
  }
}

export default resolvers;
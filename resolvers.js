const resolvers = {
  Query: {
    async user(root, { id }, { models }) {
      return models.User.findByPk(id);
    },
    async users(root, args, { models }) {
      return models.User.findAll();
    },
  },
  Mutation: {
    async createUser(root, { id, name, email, role }, { models }) {
      return models.User.create({
        id,
        name,
        email,
        role,
      });
    },

    updateUser: async (root, { id, name }, { models }) => {
      const user = await models.User.update(
        {
          name,
        },
        { where: { id } }
      );
      var message;
      if (user) message = "User updated successfully";
      else message = "Cannot find the User.";
      return message;
    },

    deleteUser: async (root, { id }, { models }) => {
      const user = await models.User.destroy({ where: { id } });
      var message;
      if (user) message = "User deleted successfully";
      else message = "Cannot find the User.";
      return message;
    },
  },
};

module.exports = resolvers;

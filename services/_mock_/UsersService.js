const Services = jest.genMockFromModule('../../services/UsersService');

function create(body) {
  const keys = ['email', 'first_name', 'last_name'];
  const newUser = {
    "_id": "5ec2fd8f2115291c28ef8539",
    "is_active": true,
    "first_name": "Juan Camilo",
    "last_name": "Gaviria Villa",
    "email": "camilogaviria1@hotmail.com",
    "__v": 6,
    "roles": [],
    "sensors": [],
  };
  return new Promise((resolve) => {
    if (keys.every(key => Object.keys(body).includes(key))) {
      resolve(newUser);
    }
    throw new Error("Mongo error");
  });
}

Services.create = create;

module.exports = Services;
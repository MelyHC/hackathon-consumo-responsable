const business = require('./data/business.json');

const filterCategory = (arr, find, value) => {
  const businessCategory = arr.filter(company => {
    const category = company[find];
    if (category.includes(value)) {
      return category;
    };
  })
  return businessCategory;
}

const extractDepartments = (arr, find) => {
  const department = [];
  arr.forEach(company => {
    const location = company[find];

    if (!department.find(place => place === location)) {
      department.push(location);
    }
  });
  return department;
};

const findBusiness = (arr, find, value) => {
  const business = [];
  arr.forEach(company => {
    const department = company[find];
    if (value === department) {
      business.push(company)
    }
  })
  return business;
}

console.log(filterCategory(business, 'item', 'Moda'))
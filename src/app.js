const filterCategorys = (arr, find, value) => {
  console.log(value)

  if (find && value) {
    const businessCategory = arr.filter(company => {
      const category = company[find];
      if (category.includes(value)) {
        return category;
      };
    })
    return businessCategory;
  }
  return arr;
}

const extractDepartments = (arr, find) => {
  if (find) {
    const department = [];
    arr.forEach(company => {
      const location = company[find];

      if (!department.find(place => place === location)) {
        department.push(location);
      }
    });
    return department;
  }
  return arr
};

const findBusiness = (arr, find, value) => {
  if (find && value) {
    const business = [];
    arr.forEach(company => {
      const department = company[find];
      if (value === department) {
        business.push(company)
      }
    })
    return business;
  }
  return arr;
}

const cotrollerBusinnes = (arr, option) => {
  console.log(option)
  const filterCategory = filterCategorys(arr, option.findItem, option.category);
  const findCompany = findBusiness(filterCategory, option.findDepartment, option.department);

  return findCompany;
}

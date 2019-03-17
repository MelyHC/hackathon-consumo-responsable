const printDepartments = (arr) => {
  let template = '';
  arr.sort().forEach(department => {
    template += `
      <option value="${department}">${department}</option>
      `
  });
  return template;
};

const printBusiness = (arr) => {
  let template = '';
  arr.sort().forEach(({name, description, link}) => {
    template += `
    <tr>
      <td>${name}</td>
      <td>${description}</td> 
      <td><a href="${link}" target="_blank">${link}</a></td>
    </tr>
    `
  })
  return template;
}
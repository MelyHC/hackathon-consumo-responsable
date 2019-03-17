let business = [];
const categorys = document.getElementById('category');
const department = document.getElementById('department');
const bodyTable = document.getElementById('bodyTable');

fetch('../data/business.json')
  .then(res => res.json())
  .then(data => {
    business = data
    bodyTable.innerHTML = printBusiness(data);
    department.innerHTML += printDepartments(extractDepartments(business, 'department'))
  });

const options = {
  department: null,
  category: null,
  findItem: null,
  findDepartment: null
}

const noFount = `<tr>
  <td colspan=6>No se encontro lo que buscabas intentalo denuevo</td>
</tr>`;

const printDepartments = (arr) => {
  let template = '';
  arr.sort().forEach(department => {
    template += `
      <option value="${department}">${department}</option>
      `
  });
  return template.length ? template : noFount;
};

const printBusiness = (arr) => {
  let template = '';
  arr.sort().forEach(({ name, image, description, link }) => {
    template += `
    <tr>
      <td><img alt="${name}" class="img" src="${image}" />
      <td>${name}</td>
      <td colspan=4>${description}</td> 
      <td><a href="${link}" target="_blank">${link}</a></td>
    </tr>
    `
  })
  return template.length ? template : noFount;
}

department.addEventListener('change', (e) => {
  options.department = e.target.value;
  options.findDepartment = 'department';
  bodyTable.innerHTML = printBusiness(cotrollerBusinnes(business, options))
})

categorys.addEventListener('click', (e) => {
  options.category = e.target.value;
  options.findItem = 'item';
  console.log(options)
  bodyTable.innerHTML = printBusiness(cotrollerBusinnes(business, options));
})
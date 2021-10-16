var orders, equipment, pickupdelivery, customer, tasks;
window.onload = function() {
    if(localStorage.getItem("userType") == 'Manager') {
        document.getElementById('graph-view').style.display = 'none';
    } else {
        document.getElementById('heading-container').innerText = 'InstaWash Admin';
        document.getElementById('manager-actions').style.display = 'none';
    }
    fetch("../../assets/staticData/ManageOrder.json")
    .then(response => {
        return response.json();
    }).then(data => {
     this.orders = data
    populateOrderList(this.orders['Manage Orders'])});

    fetch("../../assets/staticData/ManageEqupment.json")
    .then(response => {
        return response.json();
    }).then(data => {
     this.equipment = data
    populateEquipmentList(this.equipment['ManageEquipment'])});

    fetch("../../assets/staticData/ManageService.json")
    .then(response => {
        return response.json();
    }).then(data => {
     this.pickupdelivery = data
     populatePickupDeliveryList(this.pickupdelivery['ManageService'])});

    fetch("../../assets/staticData/ManageCustomers.json")
    .then(response => {
        return response.json();
    }).then(data => {
     this.customer = data
     populateCustomerList(this.customer['ManageCustomer'])});

     fetch("../../assets/staticData/ManageTask.json")
     .then(response => {
         return response.json();
     }).then(data => {
      this.tasks = data
      populateTaskList(this.tasks['ManageTask'])});
  };

function populateOrderList(orders) {
    var orderTable = document.getElementById('order-table').childNodes[1];
    orders.forEach(element => {
        orderTable.innerHTML += `<tr id="${`order_`+ element.No}">
            <td>${element.No}</td>
            <td>${element.OrderNo}</td>
            <td>${element.CustomerName}</td>
            <td>${element.Phone}</td>
            <td>${element.Type}</td>
            <td><span class="action-icons"><img src="../../assets/images/edit.png" onclick= "editOrder(${`order_`+ element.No})" title="edit"> <img src="../../assets/images/delete.png" onclick="deleteRecord(order_${element.No})" title="delete"></span></td>
        </tr>`;  
    });
}

function populateEquipmentList(equipment) {
    var equipmentTable = document.getElementById('equipment-table').childNodes[1];
    equipment.forEach(element => {
        equipmentTable.innerHTML += `<tr id="${`equipment_`+ element.No}">
            <td>${element.No}</td>
            <td>${element.EquipmentName}</td>
            <td>${element.Status}</td>
            <td>${element.OrderNo}</td>
            <td>${element.CustomerName}</td>
            <td><span class="action-icons"><img src="../../assets/images/edit.png" onclick="editEquipment(${`equipment_`+ element.No}) title="edit"> <img src="../../assets/images/delete.png" onclick="deleteRecord(equipment_${element.No})" title="delete"></span></td>
        </tr>`;
    });
}

function populateCustomerList(customers) {
    let customerTable = document.getElementById('customer-table').childNodes[1];
    customers.forEach(element => {
        customerTable.innerHTML += `<tr id="${`customer_`+ element.id}">
            <td>${element.id}</td>
            <td>${element.name}</td>
            <td>${element.Address}</td>
            <td>${element.email}</td>
            <td>${element.PhoneNo}</td>
            <td>${element.Gender}</td>
            <td><span class="action-icons"><img src="../../assets/images/edit.png" onclick="editEquipment(${`customer_`+ element.id}) title="edit"> <img src="../../assets/images/delete.png" onclick="deleteRecord(customer_${element.id})" title="delete"></span></td>
        </tr>`;
    });
}

function populatePickupDeliveryList(pickupdeliveries) {
    let pickupdeliveryTable = document.getElementById('delivery-table').childNodes[1];
    pickupdeliveries.forEach(element => {
        pickupdeliveryTable.innerHTML += `<tr id="${`pickupdelivery_`+ element.Sno}">
            <td>${element.Sno}</td>
            <td>${element.OrderNo}</td>
            <td>${element.Name}</td>
            <td>${element.Address}</td>
            <td>${element.PhoneNo}</td>
            <td>${element.AssignedTo}</td>
            <td>${element.ServiceType}</td>
            <td><span class="action-icons"><img src="../../assets/images/edit.png" onclick="editEquipment(${`pickupdelivery_`+ element.Sno}) title="edit"> <img src="../../assets/images/delete.png" onclick="deleteRecord(pickupdelivery_${element.Sno})" title="delete"></span></td>
        </tr>`;
    });
}

function populateTaskList(tasks) {
    let tasksTable = document.getElementById('tasks-table').childNodes[1];
    tasks.forEach(element => {
        tasksTable.innerHTML += `<tr id="${`tasks_`+ element.Sno}">
            <td>${element.Sno}</td>
            <td>${element.CustomerName}</td>
            <td>${element['Assigned To']}</td>
            <td>${element.Desc}</td>
            <td>${element.Services}</td>
            <td><span class="action-icons"><img src="../../assets/images/edit.png" onclick="editEquipment(${`tasks_`+ element.Sno}) title="edit"> <img src="../../assets/images/delete.png" onclick="deleteRecord(tasks_${element.Sno})" title="delete"></span></td>
        </tr>`;
    });
}

function addOrder() {
    var orderTable = document.getElementById('order-table').childNodes[1];
    let number = this.orders['Manage Orders'].length+1;
    orderTable.innerHTML += `<tr id="order_${number}">
    <td>${number}</td>
    <td>${(Number((this.orders['Manage Orders'])[this.orders['Manage Orders'].length-1].OrderNo) + 1).toString()}</td>
    <td><input type="text" placeholder="Customer Name"></td>
    <td><input type="number" maxlength="10" placeholder="Phone"></td>
    <td><input type="text" placeholder="Type"></td>
    <td><span class="action-icons"><img src="../../assets/images/tick.png" title="accept"> <img src="../../assets/images/close.png" title="discard" onclick="discardRow(order_${number})"></span></td></tr>`
}

function addEquipment() {
    let number = Number(this.equipment['ManageEquipment'][this.equipment['ManageEquipment'].length -1].No)
    var equipmentTable = document.getElementById('equipment-table').childNodes[1];
    equipmentTable.innerHTML += `<tr id="equipment_${number+1}">
            <td>${number+1}</td>
            <td><input type="text" placeholder="Equipment Name"></td>
            <td><input type="text" placeholder="Status"></td>
            <td><input type="text" placeholder="Order No"></td>
            <td><input type="text" placeholder="Customer Name"></td>
            <td><span class="action-icons"><img src="../../assets/images/tick.png" title="accept"> <img src="../../assets/images/close.png" title="discard" onclick="discardRow(equipment_${number+1})"></span></td>
        </tr>`;
}

function addTasks() {
    let number = Number(this.tasks['ManageTask'][this.tasks['ManageTask'].length -1].Sno)
    var taskTable = document.getElementById('tasks-table').childNodes[1];
    taskTable.innerHTML += `<tr id="tasks_${number+1}">
            <td>${number+1}</td>
            <td><input type="text" placeholder="Customer Name"></td>
            <td><input type="text" placeholder="Assigned to"></td>
            <td><input type="text" placeholder="Desc"></td>
            <td><input type="text" placeholder="Services"></td>
            <td><span class="action-icons"><img src="../../assets/images/tick.png" title="accept"> <img src="../../assets/images/close.png" title="discard" onclick="discardRow(tasks_${number+1})"></span></td>
        </tr>`;
}

function addCustomer() {
    let number = Number(this.customer['ManageCustomer'][this.customer['ManageCustomer'].length -1].id)
    var customerTable = document.getElementById('customer-table').childNodes[1];
    customerTable.innerHTML += `<tr id="customer_${number+1}">
            <td>${number+1}</td>
            <td><input type="text" placeholder="Name"></td>
            <td><input type="text" placeholder="Address"></td>
            <td><input type="email" placeholder="Email"></td>
            <td><input type="number" placeholder="Phone No"></td>
            <td><input type="text" placeholder="Gender"></td>
            <td><span class="action-icons"><img src="../../assets/images/tick.png" title="accept"> <img src="../../assets/images/close.png" title="discard" onclick="discardRow(customer_${number+1})"></span></td>
        </tr>`;
}

function addDeliveries() {
    let number = Number(this.pickupdelivery['ManageService'][this.pickupdelivery['ManageService'].length -1].Sno)
    var pickupdeliveryTable = document.getElementById('delivery-table').childNodes[1];
    pickupdeliveryTable.innerHTML += `<tr id="pickupdelivery_${number+1}">
            <td>${number+1}</td>
            <td><input type="text" placeholder="Order No"></td>
            <td><input type="text" placeholder="Name"></td>
            <td><input type="text" placeholder="Address"></td>
            <td><input type="text" placeholder="Phone No"></td>
            <td><input type="text" placeholder="Assigned To"></td>
            <td><input type="text" placeholder="Service Type"></td>
            <td><span class="action-icons"><img src="../../assets/images/tick.png" title="accept"> <img src="../../assets/images/close.png" title="discard" onclick="discardRow(pickupdelivery_${number+1})"></span></td>
        </tr>`;
}

function discardRow(element) {
    element.remove();
}


function editOrder(element) {

}

function editEquipment(element) {

}

function deleteRecord(element) {
    element.remove();
}
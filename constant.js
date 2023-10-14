var customer =  [
    {id:"PT Javan Cipta Solusi", amount:"450"},
    {id:"CV ABCD", amount:"449"},
    {id:"CV OQURY TRESNA ANJANI", amount:"443"},
    {id:"PT Javan Solusi", amount:"441"},
    {id:"PT Insan Cipta Solusi", amount:"420"},
    {id:"PT Mitra Informatika", amount:"412"},
    {id:"PT Gamatechno Indonesia", amount:"411"},
    {id:"Patra Jasa", amount:"390"},
    {id:"Patra Arun Badak", amount:"387"},
    {id:"Pertamina Corporate University", amount:"376"},
    {id:"Pertamina RU IV", amount:"361"},
    {id:"PT Pertamina Kilang Balikpapan", amount:"355"},
];

document.getElementById('stat-list').innerHTML = customer.map(user =>
    `<li class="stat-list-item"><p class="username">${user.id}</p><p class="user-amount">${user.amount}</p></li>`).join('');


    
var overPem = [
    { id:"No", name:"Customer's Name", type:"Jenis", quantity:"Kuantitas", date:"Date" },
    { id:"1", name:"Brad Simmons", type:"Pertamax", quantity:"2000 Liter", date:"21 Décembre 2021" },
    { id:"2", name:"Jessie Clarcson", type:"Turbo", quantity:"2000 Liter", date:"20 Décembre 2021" },
    { id:"1", name:"Brad Simmons", type:"Pertamax", quantity:"2000 Liter", date:"21 Décembre 2021" },
    { id:"2", name:"Jessie Clarcson", type:"Turbo", quantity:"2000 Liter", date:"20 Décembre 2021" },
    { id:"1", name:"Brad Simmons", type:"Pertamax", quantity:"2000 Liter", date:"21 Décembre 2021" },
    { id:"2", name:"Jessie Clarcson", type:"Turbo", quantity:"2000 Liter", date:"20 Décembre 2021" },
];
document.getElementById('overview-tab').innerHTML = overPem.map(test =>
    `<tr class="tab-tr">
        <td class="tab-no">${test.id}</td>
        <td class="tab-name">${test.name}</td>
        <td>${test.type}</td>
        <td>${test.quantity}</td>
        <td>${test.date}</td>
    </tr>`
    ).join('');

function changeColor(e){
    let el=document.getElementsByClassName("page-item-active")[0];
    el.classList.remove(el.classList);
    el.classList.add("page-item");
    e.classList.remove(e.classList);
    e.classList.add("page-item-active");
}

function next(){
    let i = document.getElementsByClassName("page-item-active")[0]
    let e = document.getElementsByClassName("page-item-active")[0].nextElementSibling;
    let children = document.getElementById('pagination').children;
        if (children[4].classList!="page-item-active"){
            e.classList.remove("page-item");
            e.classList.add("page-item-active");
            i.classList.remove("page-item-active");
            i.classList.add("page-item");
        } else {
            return false;
        }
    
    
}
function prev(){
    let i = document.getElementsByClassName("page-item-active")[0]
    let e = document.getElementsByClassName("page-item-active")[0].previousElementSibling;
    let children = document.getElementById('pagination').children;
        if (children[0].classList!="page-item-active"){
            i.classList.remove("page-item-active");
            i.classList.add("page-item");
            e.classList.remove("page-item");
            e.classList.add("page-item-active");
        } else {
            return false;
        }
}

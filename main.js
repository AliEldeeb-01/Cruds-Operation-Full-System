



let parentBtn = document.querySelector('.who')


let title = document.getElementById('title')
let price = document.getElementById('price')
let taxes = document.getElementById('taxes')
let ads = document.getElementById('ads')
let discount = document.getElementById('discount')
let total = document.getElementById('total')
let count = document.getElementById('count')
let category = document.getElementById('category')
let create = document.getElementById('create')
let update = document.getElementById('update')

let del = document.getElementById('delete')
let search = document.querySelector('#search')

let titleS = document.querySelector('#titles')
let categoryC = document.querySelector('#categorys')
// console.log(titleS, categoryC);


let mood = 'create'

let modify =
    //total price 


    total.innerHTML = ''

function totalPrice() {
    total.innerHTML = +price.value + +taxes.value + +ads.value - +discount.value
    console.log();
    //الكود صح بس انت لسه محطتش انه هيشتغل امتي
    /*
    لما حطينا الايفنت الخاص ب "keyup " 
    اديناله امر انه يشتغل لانه مش بيعمل حاجه انت مقولتلهوش يعملها
    */
    if (price.value != '' || taxes.value != '' || ads.value != '' || discount.value != '') {
        /*
        من غير .value
        انت كده تبقي بتقارن ال input 
        مش القيمه
        */
        total.style.background = 'green'
    } else {

        total.innerHTML = ''
        total.style.background = 'red'
    }
}

//create element 

/*
باختصار العملية الاولي هي انك تنشئ "object"
وتضع فيه قيم المداخل ثم بعد ذالك تخزنهم في "array"
ثم تربطهم بزر الانشاء مع حفظهم في "localStorge"

*/

//لما يبقي معاك داتا اسال نفسك الاول هتخزنها فين قبل ازاي
let dataPro;

if (localStorage.product != null) {


    dataPro = JSON.parse(localStorage.getItem('product'))
} else {
    dataPro = []
}

// اخطاء اخطاء.... تبا للاخطاء

create.onclick = () => {


    if (title.value == '') {
        mood = 0
        if (mood == 0) {
            deleteBll()
            title.placeholder ='YOU MUST WRITE  BEFORE CREATING .'
            title.focus()

        }
    }

    let newPro = {
        title: title.value,
        price: price.value,
        taxes: taxes.value,
        ads: ads.value,
        discount: discount.value,
        total: total.innerHTML,
        count: count.value,
        category: category.value,

    }


    if (mood === 'create') {

        if (newPro.count > 1) {
            for (let i = 0; i < newPro.count; i++) {

                dataPro.push(newPro)
                total.style.background = 'red'

            }
        } else {
            dataPro.push(newPro)
            total.style.background = 'red'

        }
    } else {
        dataPro[modify] = newPro  // هنا بنقوله خش جوه المصفوفه وهات رقم الاندكس اللي ضغطنا عليه بس التعريف العام وغيره باللي مكتوب في الاوبكجت س newPro
        mood = 'create'
        create.innerHTML = mood
        count.style.display = 'block'
        total.style.background = 'red'
    }




    localStorage.setItem('product', JSON.stringify(dataPro))

    clearData()
    showData()
    deleteBll()

}



function clearData() {
    title.value = ''
    price.value = ''
    taxes.value = ''
    ads.value = ''
    discount.value = ''
    total.innerHTML = ''
    count.value = ''
    category.value = ''
}

let tbody = document.getElementById('tbody')

function showData() {

    tbody.innerHTML = ''
    for (let i = 0; i < dataPro.length; i++) {
        deleteBll()

        tbody.innerHTML += `
            <tr>
                <td>${[i + 1]}</td>
                <td>${dataPro[i].title}</td>
                <td>${dataPro[i].price}</td>
                <td>${dataPro[i].taxes}</td>
                <td>${dataPro[i].ads}</td>
                <td>${dataPro[i].discount}</td>
                <td>${dataPro[i].total}</td>
                <td>${dataPro[i].category}</td>
                <td><button id="update" onclick="updateData(${i})">update</button></td>
                <td><button id="delete" onclick="deletePro(${i})">delete</button> </td>
            </tr>
`



    }

}
showData()     // to stay work when making reload

function deletePro(i) {

    dataPro.splice(i, 1)
    localStorage.product = JSON.stringify(dataPro)
    showData()
    deleteBll()
}



function deleteBll() {
    if (dataPro.length > 0) {


        parentBtn.innerHTML = `<button id="deleteall">delete all products  (${dataPro.length})</button>`



        let delAll = document.getElementById('deleteall')
        delAll.onclick = () => {
            dataPro.splice(0, dataPro.length)
            // وتقدر تعيد تعريف ال <array> كلها عن طريق 
            // dataPro = []
            localStorage.clear()
            showData()
            parentBtn.innerHTML = ''


            // اول مشكلة ظهرت اني لازم اعمل reload عشان يشتغل 
            //عالجتها باني اعمل setinterval 
            // وفي حل تاني اني احطها مع زرار الcreate
        }
    } else {
        parentBtn.innerHTML = ''
    }

}



function updateData(i) {
    modify = i


    title.value = dataPro[i].title
    price.value = dataPro[i].price
    taxes.value = dataPro[i].taxes
    ads.value = dataPro[i].ads
    discount.value = dataPro[i].discount
    category.value = dataPro[i].category
    count.style.display = 'none'
    totalPrice()



    mood = 'Update'
    create.innerHTML = mood



}




// let search =document.getElementById('search')
// console.log(search);

let moodSearch = 'titles'

function searchMood(id) {


    // search.style.transform = 'scale(1.1)'   
    // search 

    search.focus()

    if (id == 'titles') {
        search.value = ''
        search.placeholder = 'Search by title....'
        moodSearch = 'titles'
    } else {
        search.value = ''
        search.placeholder = 'Search by category....'
        moodSearch = 'category'
    }

    showData()
}



function actionSearch(value) {
    // console.log(value);
    if (moodSearch === 'titles') {
        tbody.innerHTML = ''
        for (let i = 0; i < dataPro.length; i++) {
            if (dataPro[i].title.toLowerCase().includes(value.toLowerCase())) {

                tbody.innerHTML += `
                                    <tr>
                                        <td>${[i + 1]}</td>
                                        <td>${dataPro[i].title}</td>
                                        <td>${dataPro[i].price}</td>
                                        <td>${dataPro[i].taxes}</td>
                                        <td>${dataPro[i].ads}</td>
                                        <td>${dataPro[i].discount}</td>
                                        <td>${dataPro[i].total}</td>
                                        <td>${dataPro[i].category}</td>
                                        <td><button id="update" onclick="updateData(${i})">update</button></td>
                                        <td><button id="delete" onclick="deletePro(${i})">delete</button> </td>
                                    </tr>
                        `

            }
            // deleteBll()


        }
    } else {
        tbody.innerHTML = ''

        for (let i = 0; i < dataPro.length; i++) {
            if (dataPro[i].category.includes(value)) {

                tbody.innerHTML += `
                                    <tr>
                                        <td>${[i + 1]}</td>
                                        <td>${dataPro[i].title}</td>
                                        <td>${dataPro[i].price}</td>
                                        <td>${dataPro[i].taxes}</td>
                                        <td>${dataPro[i].ads}</td>
                                        <td>${dataPro[i].discount}</td>
                                        <td>${dataPro[i].total}</td>
                                        <td>${dataPro[i].category}</td>
                                        <td><button id="update" onclick="updateData(${i})">update</button></td>
                                        <td><button id="delete" onclick="deletePro(${i})">delete</button> </td>
                                    </tr>
                        `
                // deleteBll()
            }

        }
    }
}







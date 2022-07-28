// selector
const data = document.getElementById('data')
const btn = document.getElementById('btn')
const input = document.getElementById('text')
const allList = document.getElementById('all-list')

// time
const currentTime = new Date();
const year = currentTime.getFullYear()
const month = currentTime.getMonth()
const day = currentTime.getDay()

const fullTime = `${year} ${month + 1} ${day}`

data.textContent = fullTime

// add event leistner
btn.addEventListener('click', () => {
    if (input.value == '') {
        alert('pleas weite somthing')
    } else {
        const list = document.createElement('div');
        list.setAttribute('class' , 'list')
        allList.append(list)

        const plist = document.createElement('p')
        plist.textContent = input.value;
        list.append(plist)

        
        const divlist = document.createElement('div')
        divlist.setAttribute('class' ,'btn')
        divlist.setAttribute('id' , 'but')
        list.append(divlist)

        const pdone = document.createElement('p')
        pdone.setAttribute('class' , 'done')
        pdone.textContent = 'done'
        divlist.append(pdone)

        const pdelete = document.createElement('p')
        pdelete.setAttribute('class' , 'delete')
        pdelete.textContent = 'delete';
        divlist.append(pdelete)

        pdone.addEventListener('click', (e) => {
            e.target.parentElement.parentElement.firstChild.classList.toggle('itsdone')  
        })
        pdelete.addEventListener('click', (e) => {
            e.target.parentElement.parentElement.remove()
        })

    }
})

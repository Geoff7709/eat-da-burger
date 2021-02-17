$(document).ready(() => {
    const form = $('form')
    const textarea = $('textarea')
    const devour = $('.devour')
    form.on('submit', function (e) {
        e.preventDefault()
        makeBurger()
    })
    function makeBurger() {
        function capitalize(str) {
            return str.charAt(0).toUpperCase() + str.slice(1);
        }
        const burgerEntry = (textarea.val()).split(' ').map(capitalize).join(' ')
        console.log(burgerEntry)
        $.ajax({
            url: '/',
            method: 'POST',
            data: {
                burger_name: burgerEntry
            }
        })
            .then(response => {
                console.log('makeBurger reponse ')
                console.log(response)
                window.location = '/'
            })
            .catch(err => console.log(err))
    }
    devour.on('click', function () {
        console.log($('.devour').attr('data-id'))
        const id = $(this).attr('data-id')
        console.log(id)
        $.ajax({
            url: '/' + id,
            method: 'PUT',
        })
            .then(response => {
                console.log("devourResponse: " + response)
               location.reload()
            })
            .catch(err => console.log(err))
    })
    console.log('documentReady finished')
})


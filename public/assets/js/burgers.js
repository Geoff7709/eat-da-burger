$(document).ready(() => {
    const form = $('form')
    const textarea = $('textarea')
    const devour = $('.devour')
    form.on('submit', function(e) {
        e.preventDefault()
        makeBurger()
    })
    function makeBurger() {
        console.log(textarea.val())
        $.ajax({
            url: '/',
            method: 'POST',
            data: {
              burger_name: textarea.val()
            }
          })  
          .then(response => {
              console.log(response + "response")
             window.location = '/'
          })
          .catch(err => console.log(err))
    }
    devour.on('click', function() {
        const id = $(this).attr('data-id')
        function eatBurger() {
            console.log(id)
            $.ajax({
                url: '/' + id,
                method: 'PUT',
            })
                .then(response => {
                    console.log(response + "response")
                    window.location = '/'
                })
                .catch(err => console.log(err))
        }
        eatBurger()
    })
})


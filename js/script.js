window.addEventListener('DOMContentLoaded', function() {
  document.querySelectorAll('.services-item').forEach(function(items) {
    items.addEventListener('click', function(e) {
      const path = e.currentTarget.dataset.path;

      document.querySelectorAll('.services-item').forEach(function(itemrem) {
        itemrem.classList.remove('services__active')

        e.currentTarget.classList.add('services__active')

        document.querySelectorAll('.services__tab').forEach(function(tabrem) {
          tabrem.classList.remove('services__tab-active')

          document.querySelector(`[data-target="${path}"]`).classList.add('services__tab-active')
        })
      })
    })
  })
})
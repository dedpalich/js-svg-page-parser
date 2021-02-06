$(function () {
            $('svg').each(function (i, e) {
              const parent = $(this).closest('.d-flex.flex-grow-1.align-items-center.overlay-wrapper')
              const child = parent.find('.text-muted')
              const name = child.text()
              if (name.match('.svg')) {
                const svg = $(this).parent().html()

                setTimeout(function () {
                  const atag = document.createElement('a')
                  const file = new Blob([svg], { type: 'image/svg+xml' })
                  atag.href = URL.createObjectURL(file)
                  atag.download = name
                  atag.click()
                }, i * i)
              }
              // console.log(svg)
            })
          })
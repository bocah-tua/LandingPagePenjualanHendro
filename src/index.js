document.addEventListener('DOMContentLoaded', function () {
    var toggles = document.querySelectorAll('.accordion-toggle');
    toggles.forEach(function (toggle) {
        toggle.addEventListener('click', function () {
            var icon = toggle.querySelector('i');
            if (icon.classList.contains('bi-chevron-down')) {
                icon.classList.remove('bi-chevron-down');
                icon.classList.add('bi-chevron-up');
            } else {
                icon.classList.remove('bi-chevron-up');
                icon.classList.add('bi-chevron-down');
            }

            var target = document.querySelector(toggle.getAttribute('data-target'));
            if (target.classList.contains('show')) {
                target.classList.remove('show');
            } else {
                target.classList.add('show');
            }
        });
    });
});

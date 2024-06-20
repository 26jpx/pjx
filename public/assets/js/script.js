AOS.init();

document.addEventListener("DOMContentLoaded", function() {

    const contact = document.getElementsByClassName('contact');

    for(let i = 0; i < contact.length; i++) {

        contact[i].addEventListener("click", function() {

            window.open("https://api.whatsapp.com/send?phone=6282177776110&text=Hi%20PJX%2C%20saya%20mau%20bertanya%20tentang%20kirim%20barang%20paket");

        });

    }

});

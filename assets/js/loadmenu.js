/* ===================================================================
    
    Author          : Valid Theme
    Template Name   : Rescaf - Food & Restauratn Template
    Version         : 1.1
    
* ================================================================= */

(function ($) {
  "use strict";

  $(document).on("ready", function () {
    const menuActive = window.location.hash;

    const listMenu = [];

    function formatRupiah(angka) {
      var reverse = angka.toString().split("").reverse().join(""),
      ribuan = reverse.match(/\d{1,3}/g);
      ribuan = ribuan.join(".").split("").reverse().join("");
      return "Rp " + ribuan;
    }

    async function fetchMenu() {
      try {
        const response = await fetch("assets/AllMenu.json");
        const data = await response.json();
        const allMenuLists = data.data;

        allMenuLists.forEach((warung) => {
          if ("#" + warung.id == menuActive) {
            listMenu.push(warung);
          }
        });
        console.log('list menu',listMenu)
        showData(listMenu)
      } catch (error) {
        console.error("Error fetching JSON:", error);
      }
    }
    fetchMenu();

    function showData(listMenu){
      const menuGrid = document.getElementById("portfolio-grid");
        menuGrid.innerHTML = "";

        listMenu.forEach((menu) => {

          let harga = '';
          if(menu.harga != '-'){
            harga = formatRupiah(menu.harga)
          } else {
            harga = 'Harga Spesial'
          }
          // membuat list
          const innerHtml = `
          
        <div class="item-single">
          <div class="item">
              <div class="thumb">
                  <a href="#">
                      <img src="assets/img/tenant/${warungActive.foto}" alt="Thumb">
                      <h5>${harga}</h5>
                  </a>
              </div>
              <div class="info">
                  <h4><a href="#">${menu.menu}</a></h4>
                  ${menu.deskripsi_menu ? `<p>${menu.deskripsi_menu}</p>` : ""}
                  <span class="bg-second">${menu.kategori.length > 1 ? menu.kategori.join(' / ') : menu.kategori[0]}</span>
              </div>
          </div>
          <div style="display:flex;justify-content:center;">
          <hr style="border:1.5px #dcdcdc solid;width:80%;">
          </div>
      </div>
      `;
          menuGrid.insertAdjacentHTML("beforeend", innerHtml);
        });
    }

    const namaWarung = document.getElementById("namaWarung");
    const deskripsiWarung = document.getElementById("deskripsiWarung");
    const tenantLists = [
      {
        lokasi: "A1",
        idWarung: "sotoArema",
        nama_warung: "Soto Arema",
        deskripsi_warung:
          "Menyediakan aneka soto mulai dari soto daging, soto ayam, hingga soto betawi.",
        foto: "soto_arema.webp",
        min: 2500,
        max: 25000,
      },
      {
        lokasi: "A2",
        idWarung: "warungUniYeti",
        nama_warung: "Warung Uni Yeti",
        deskripsi_warung: "Menyediakan menu mi ayam dan mi ayam yamin.",
        foto: "warung_uni_yeti.webp",
        min: 2000,
        max: 35000,
      },
      {
        lokasi: "A3",
        idWarung: "menggugahSelera",
        nama_warung: "Menggugah Selera",
        deskripsi_warung:
          "Menyediakan aneka makanan sehat yang menggugah selera mulai dari capcay, gado-gado, ketoprak, dan tahu gimbal. Ada pula Nasi goreng dan pindang/sop ikan pelet",
        foto: "menggugah_selera.webp",
        min: 15000,
        max: 30000,
      },
      {
        lokasi: "B1",
        idWarung: "dapurTamanAyun",
        nama_warung: "Dapur Taman Ayun",
        deskripsi_warung:
          "Menyediakan tongseng, soto banjar, nasi bebek, dam aneka cemilan",
        foto: "dapur_taman_ayun.webp",
        min: 5000,
        max: 25000,
      },
      {
        lokasi: "B2",
        idWarung: "deLima",
        nama_warung: "deLima",
        deskripsi_warung:
          "Menyediakan berbagai paket nasi dengan lauk ayam/ikan/paru, dan menu spesial Sroto Sokaraja Banyumas.",
        foto: "deLima.webp",
        min: 15000,
        max: 35000,
      },
      {
        lokasi: "B3",
        idWarung: "nasiRamesTehWati",
        nama_warung: "Nasi Rames Teh Wati",
        deskripsi_warung:
          "Nasi Rames atau nasi campur adalah salah satu hidangan  yang terdiri atas nasi putih yang dihidangkan dengan bermacam-macam lauk yang bebas anda pilih.",
        foto: "nasi_rames_teh_wati.webp",
        min: 0,
        max: 0,
      },
      {
        lokasi: "B5",
        idWarung: "warungSiAkang",
        nama_warung: "Warung Si Akang",
        deskripsi_warung:
          "Menyediakan menu rawon, tahu telur, bakwan malang, bakso tahu bandung, hingga chicken katsu.",
        foto: "warung_si_akang.webp",
        min: 3000,
        max: 25000,
      },
      {
        lokasi: "Booth Container",
        idWarung: "kopiReman",
        nama_warung: "Kopi Reman",
        deskripsi_warung:
          "Nikmati berbagai racikan kopi spesial dari kedai kopi reman mulai dari Reman Zilla, Moka, Bundit, hingga Gibaz.",
        foto: "kopi_reman.webp",
        min: 7000,
        max: 23000,
      },
      {
        lokasi: "C1",
        idWarung: "henimsKitchen",
        nama_warung: "Henims Kitchen",
        deskripsi_warung:
          "Menyediakan Chicken Steak (Crispy/Original), Teriyaki Ricebowl, Nasi Tempong, dan Sop Iga. Khusus Sop Iga by request H-1.",
        foto: "henims_kitchen.webp",
        min: 5000,
        max: 35000,
      },
      {
        lokasi: "C2",
        idWarung: "nasiRamesBuErna",
        nama_warung: "Nasi Rames Bu Erna",
        deskripsi_warung:
          "Nasi Rames atau nasi campur adalah salah satu hidangan  yang terdiri atas nasi putih yang dihidangkan dengan bermacam-macam lauk yang bebas anda pilih.",
        foto: "nasi_rames_bu_erna.webp",
        min: 0,
        max: 0,
      },
      {
        lokasi: "C3",
        idWarung: "yenKitchen",
        nama_warung: "Yen Kitchen",
        deskripsi_warung:
          "Menyediakan pangsit goreng ayam, nasi liwet, nasi ulam, dam aneka cemilan",
        foto: "yen_kitchen.webp",
        min: 3000,
        max: 25000,
      },
      {
        lokasi: "C4",
        idWarung: "sariLaras",
        nama_warung: "Sari Laras",
        deskripsi_warung:
          "Menyediakan pecel ayam, lele, ikan mas, nila, bawal, jambal, dan lain-lain.",
        foto: "sari_laras.webp",
        min: 2000,
        max: 20000,
      },
      {
        lokasi: "C6",
        idWarung: "bakmiAyamRahayu",
        nama_warung: "Bakmi Ayam Rahayu",
        deskripsi_warung:
          "Menghidangkan bakmi ayam dengan cita rasa yang autentik dan menggunakan bahan-bahan segar",
        foto: "bakmi_ayam_rahayu.webp",
        min: 0,
        max: 0,
      },
      {
        lokasi: "C7",
        idWarung: "warungJuragan",
        nama_warung: "Warung Juragan",
        deskripsi_warung:
          "Menyediakan gudeg khas Jogja hingga tomyam khas negeri gajah putih, dan buah-buahan.",
        foto: "warung_juragan.webp",
        min: 5000,
        max: 25000,
      },
      {
        lokasi: "VIP",
        idWarung: "in-Fusion",
        nama_warung: "In-Fusion",
        deskripsi_warung:
          "Kafe kekinian dengan menu makanan ala korea dan berbagai minuman sehat.",
        foto: "In-Fusion.webp",
        min: 15000,
        max: 25000,
      },
    ];

    let warungActive = {};

    tenantLists.forEach((tenant) => {
      if ("#" + tenant.idWarung == menuActive) {
        namaWarung.innerText = tenant.nama_warung;
        deskripsiWarung.innerText = tenant.deskripsi_warung;
        warungActive = tenant;
        return;
      }
    });

    function filterByCategory(inputText) {
      const filteredData = listMenu.filter(item => {
        const regex = new RegExp(inputText, 'i');
        return item.kategori.some(category => regex.test(category));
        // const lowerInputText = inputText.toLowerCase();
        // return item.kategori.some(category => category.toLowerCase().includes(lowerInputText));
      });
      
      return filteredData;
    }

    const searchForm = document.getElementById("searchMenuForm");
    const searchInput = document.getElementById("searchMenuInput");

    searchForm.addEventListener("submit", function (event) {
      event.preventDefault();
      const searchTerm = searchInput.value.trim();
      if(searchTerm){
        const listNew = filterByCategory(searchTerm);
        showData(listNew)
      } else {
        showData(listMenu)
      }
    });

    const backButton = document.getElementById("backToHome");
    backButton.addEventListener("click", () => {
      window.location.href = "index.html";
    });

    
  });
})(jQuery);

/* ===================================================================
    
    Author          : Drama Rupa Studio
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

    fetch("assets/AllMenu.json")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        const allMenuLists = data.data;
        allMenuLists.forEach((warung) => {
          if ("#" + warung.id == menuActive) {
            listMenu.push(warung);
          }
        });
        showData(listMenu);
      });

    function showData(listMenu) {
      const listMinuman = [];
      const listMakanan = [];
      for (let menu of listMenu) {
        if (
          menu.kategori.includes("Minuman") ||
          menu.kategori.includes("Kopi")
        ) {
          listMinuman.push(menu);
        } else {
          listMakanan.push(menu);
        }
      }

      const menuGrid = document.getElementById("menu-grid");
      menuGrid.innerHTML = "";
      const buttonGrid = document.getElementById("button-grid");
      buttonGrid.innerHTML = "";
      const buttonHtml = `
        <div id="list-button" class="btn-group">
          ${
            listMakanan.length > 0
              ? `<button class="btn btn-primary" id="list-makanan">Makanan</button>`
              : ``
          }
          ${
            listMinuman.length > 0
              ? `<button class="btn btn-warning" id="list-minuman">Minuman</button>`
              : ``
          }          
        </div>
      `;
      buttonGrid.insertAdjacentHTML("beforeend", buttonHtml);

      if (listMakanan.length > 0) {
        const makananOuterHtml = `
        <div id="panel-makanan" class="panel panel-primary">
            <div class="panel-heading">
                <h3 class="panel-title text-center" style="font-weight: 500;">Makanan</h3>
            </div>
            <div class="panel-body">
                <div class="row">
                    <div class="col-md-12">
                        <div class="food-menu-area">
                            <div class="row">
                                <div class="col-md-12 text-center food-menu-content">
                                    <div class="row masonary">
                                        <div id="portfolio-grid" class="menu-flex col-2">
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;
        menuGrid.insertAdjacentHTML("beforeend", makananOuterHtml);
        document
          .getElementById("list-makanan")
          .addEventListener("click", () => {
            const targetMakanan = document.getElementById("panel-makanan");
            targetMakanan.scrollIntoView({
              behavior: "smooth",
              block: "start",
            });
          });
      }

      if (listMinuman.length > 0) {
        const minumanOuterHtml = `
        <div id="panel-minuman" class="panel panel-primary">
            <div class="panel-heading">
                <h3 class="panel-title text-center" style="font-weight: 500;">Minuman</h3>
            </div>
            <div class="panel-body">
                <div class="row">
                    <div class="col-md-12">
                        <div class="food-menu-area">
                            <div class="row">
                                <div class="col-md-12 text-center food-menu-content">
                                    <div class="row masonary">
                                        <div id="minuman-grid" class="menu-flex col-2">
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;
        menuGrid.insertAdjacentHTML("beforeend", minumanOuterHtml);
        document
          .getElementById("list-minuman")
          .addEventListener("click", () => {
            const targetMinuman = document.getElementById("panel-minuman");
            targetMinuman.scrollIntoView({
              behavior: "smooth",
              block: "start",
            });
          });
      }

      if (listMakanan.length > 0) {
        const makananGrid = document.getElementById("portfolio-grid");
        makananGrid.innerHTML = "";
        addContent(listMakanan, makananGrid);
      }

      if (listMinuman.length > 0) {
        const minumanGrid = document.getElementById("minuman-grid");
        minumanGrid.innerHTML = "";
        addContent(listMinuman, minumanGrid);
      }
    }

    function addContent(list, grid) {
      for (let i = 0; i < list.length; i += 2) {
        const menu1 = list[i];
        const menu2 = list[i + 1];

        let harga1 = "";
        let harga2 = "";
        if (menu1.harga != "-") {
          harga1 = formatRupiah(menu1.harga);
        } else {
          harga1 = "Harga Spesial";
        }
        if (menu2 && menu2.harga != "-") {
          harga2 = formatRupiah(menu2.harga);
        } else if (menu2) {
          harga2 = "Harga Spesial";
        }
        const innerHtml = `
                <div class="row">
                    <div class="col-xs-6">
                        <div class="item">
                            <div class="thumb">
                                <a href="#" style="display:flex;align-items: center;justify-content: center;">
                                  <img src="assets/img/tenant/menu/${
                                    menu1.menu
                                  }.webp" alt="Thumb" style="width:125px;height:125px;max-width:125px;object-fit:cover;object-position: center;"
                                  onerror="this.src='assets/img/tenant/${warungActive.foto}'
                                  ">  
                                <h5>${harga1}</h5>
                                </a>
                            </div>
                            <div class="info">
                                <h4 style="margin-bottom:0;"><a href="#">${
                                  menu1.menu
                                }</a></h4>
                                ${
                                  menu1.deskripsi_menu
                                    ? `<p>${menu1.deskripsi_menu}</p>`
                                    : ""
                                }
                                <span class="bg-second">${
                                  menu1.kategori.length > 1
                                    ? menu1.kategori.join(" / ")
                                    : menu1.kategori[0]
                                }</span>
                            </div>
                        </div>
                    </div>
                    <div class="col-xs-6">
                        ${
                          menu2
                            ? `
                        <div class="item">
                            <div class="thumb">
                                <a href="#" style="display:flex;align-items: center;justify-content: center;">
                                    <img src="assets/img/tenant/menu/${
                                      menu2.menu
                                    }.webp" alt="Thumb" style="width:125px;height:125px;max-width:125px;object-fit:cover;object-position: center;"
                                    onerror="this.src='assets/img/tenant/${warungActive.foto}'
                                    ">  
                                    <h5>${harga2}</h5>
                                </a>
                            </div>
                            <div class="info">
                                <h4 style="margin-bottom:0;"><a href="#">${
                                  menu2.menu
                                }</a></h4>
                                ${
                                  menu2.deskripsi_menu
                                    ? `<p>${menu2.deskripsi_menu}</p>`
                                    : ""
                                }
                                <span class="bg-second">${
                                  menu2.kategori.length > 1
                                    ? menu2.kategori.join(" / ")
                                    : menu2.kategori[0]
                                }</span>
                            </div>
                        </div>
    
                        `
                            : ``
                        }
                    </div>
                </div>
                <div style="display:flex;justify-content:center;">
                    <hr style="border:1.5px #dcdcdc solid;width:80%;">
                </div>
            `;
        grid.insertAdjacentHTML("beforeend", innerHtml);
      }
    }

    const namaWarung = document.getElementById("namaWarung");
    const deskripsiWarung = document.getElementById("deskripsiWarung");
    const lokasiWarung = document.getElementById("lokasiWarung");
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
        lokasiWarung.innerText = tenant.lokasi;
        warungActive = tenant;
        return;
      }
    });

    function filterByCategory(inputText) {
      const filteredData = listMenu.filter((item) => {
        const regex = new RegExp(inputText, "i");
        return (
          regex.test(item.menu) ||
          item.kategori.some((category) => regex.test(category))
        );
      });
      return filteredData;
    }

    const searchForm = document.getElementById("searchMenuForm");
    const searchInput = document.getElementById("searchMenuInput");

    searchForm.addEventListener("submit", function (event) {
      event.preventDefault();
      const searchTerm = searchInput.value.trim();
      if (searchTerm) {
        const listNew = filterByCategory(searchTerm);
        showData(listNew);
      } else {
        showData(listMenu);
      }
    });

    const backButton = document.getElementById("backToHome");
    backButton.addEventListener("click", () => {
      window.location.href = "index.html";
    });
  });
})(jQuery);

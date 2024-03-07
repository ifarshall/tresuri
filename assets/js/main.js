/* ===================================================================
    
    Author          : Drama Rupa Studio
    Version         : 1.1
    
* ================================================================= */

(function ($) {
  "use strict";

  // scrollToTop
  $(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
      $(".scrollToTop").fadeIn();
    } else {
      $(".scrollToTop").fadeOut();
    }
  });
  //Click event to scroll to top
  $(".scrollToTop").click(function () {
    $("html, body").animate(
      {
        scrollTop: 0,
      },
      800
    );
    return false;
  });

  $(document).on("ready", function () {
    const tenantLists = [
      {
        lokasi: "A1",
        nama_warung: "Soto Arema",
        deskripsi_warung:
          "Menyediakan aneka soto mulai dari soto daging, soto ayam, hingga soto betawi.",
        foto: "soto_arema.webp",
        min: 2500,
        max: 25000,
      },
      {
        lokasi: "A2",
        nama_warung: "Warung Uni Yeti",
        deskripsi_warung: "Menyediakan menu mi ayam dan mi ayam yamin.",
        foto: "warung_uni_yeti.webp",
        min: 2000,
        max: 35000,
      },
      {
        lokasi: "A3",
        nama_warung: "Menggugah Selera",
        deskripsi_warung:
          "Menyediakan aneka makanan sehat yang menggugah selera mulai dari capcay, gado-gado, ketoprak, dan tahu gimbal. Ada pula Nasi goreng dan pindang/sop ikan pelet",
        foto: "menggugah_selera.webp",
        min: 15000,
        max: 30000,
      },
      {
        lokasi: "B1",
        nama_warung: "Dapur Taman Ayun",
        deskripsi_warung:
          "Menyediakan tongseng, soto banjar, nasi bebek, dam aneka cemilan",
        foto: "dapur_taman_ayun.webp",
        min: 5000,
        max: 25000,
      },
      {
        lokasi: "B2",
        nama_warung: "deLima",
        deskripsi_warung:
          "Menyediakan berbagai paket nasi dengan lauk ayam/ikan/paru, dan menu spesial Sroto Sokaraja Banyumas.",
        foto: "deLima.webp",
        min: 15000,
        max: 35000,
      },
      {
        lokasi: "B3",
        nama_warung: "Nasi Rames Teh Wati",
        deskripsi_warung:
          "Nasi Rames atau nasi campur adalah salah satu hidangan  yang terdiri atas nasi putih yang dihidangkan dengan bermacam-macam lauk yang bebas anda pilih.",
        foto: "nasi_rames_teh_wati.webp",
        min: 0,
        max: 0,
      },
      {
        lokasi: "B5",
        nama_warung: "Warung Si Akang",
        deskripsi_warung:
          "Menyediakan menu rawon, tahu telur, bakwan malang, bakso tahu bandung, hingga chicken katsu.",
        foto: "warung_si_akang.webp",
        min: 3000,
        max: 25000,
      },
      {
        lokasi: "Booth Container",
        nama_warung: "Kopi Reman",
        deskripsi_warung:
          "Nikmati berbagai racikan kopi spesial dari kedai kopi reman mulai dari Reman Zilla, Moka, Bundit, hingga Gibaz.",
        foto: "kopi_reman.webp",
        min: 7000,
        max: 23000,
      },
      {
        lokasi: "C1",
        nama_warung: "Henims Kitchen",
        deskripsi_warung:
          "Menyediakan Chicken Steak (Crispy/Original), Teriyaki Ricebowl, Nasi Tempong, dan Sop Iga. Khusus Sop Iga by request H-1.",
        foto: "henims_kitchen.webp",
        min: 5000,
        max: 35000,
      },
      {
        lokasi: "C2",
        nama_warung: "Nasi Rames Bu Erna",
        deskripsi_warung:
          "Nasi Rames atau nasi campur adalah salah satu hidangan  yang terdiri atas nasi putih yang dihidangkan dengan bermacam-macam lauk yang bebas anda pilih.",
        foto: "nasi_rames_bu_erna.webp",
        min: 0,
        max: 0,
      },
      {
        lokasi: "C3",
        nama_warung: "Yen Kitchen",
        deskripsi_warung:
          "Menyediakan pangsit goreng ayam, nasi liwet, nasi ulam, dam aneka cemilan",
        foto: "yen_kitchen.webp",
        min: 3000,
        max: 25000,
      },
      {
        lokasi: "C4",
        nama_warung: "Sari Laras",
        deskripsi_warung:
          "Menyediakan pecel ayam, lele, ikan mas, nila, bawal, jambal, dan lain-lain.",
        foto: "sari_laras.webp",
        min: 2000,
        max: 20000,
      },
      {
        lokasi: "C6",
        nama_warung: "Bakmi Ayam Rahayu",
        deskripsi_warung:
          "Menghidangkan bakmi ayam dengan cita rasa yang autentik dan menggunakan bahan-bahan segar",
        foto: "bakmi_ayam_rahayu.webp",
        min: 0,
        max: 0,
      },
      {
        lokasi: "C7",
        nama_warung: "Warung Juragan",
        deskripsi_warung:
          "Menyediakan gudeg khas Jogja hingga tomyam khas negeri gajah putih, dan buah-buahan.",
        foto: "warung_juragan.webp",
        min: 5000,
        max: 25000,
      },
      {
        lokasi: "VIP",
        nama_warung: "In-Fusion",
        deskripsi_warung:
          "Kafe kekinian dengan menu makanan ala korea dan berbagai minuman sehat.",
        foto: "In-Fusion.webp",
        min: 15000,
        max: 25000,
      },
    ];

    function formatRupiah(angka) {
      var reverse = angka.toString().split("").reverse().join(""),
        ribuan = reverse.match(/\d{1,3}/g);
      ribuan = ribuan.join(".").split("").reverse().join("");
      return "Rp " + ribuan;
    }

    function shuffleArray(array) {
      for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
      }
    }

    shuffleArray(tenantLists);

    function showData(listMenu) {
      const listMinuman = [];
      const listMakanan = [];

      // Logika pemisahan makanan dan minuman
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
        const warungActive1 = tenantLists.find(obj => obj.nama_warung === menu1.nama_warung);
        let warungActive2 = {};
        if(menu2){
          warungActive2 = tenantLists.find(obj => obj.nama_warung === menu2.nama_warung);
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
                                    onerror="this.src='assets/img/tenant/${warungActive1.foto}'
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
                                  onerror="this.src='assets/img/tenant/${warungActive2.foto}'
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

    function loadTenant(tenantLists) {
      if (
        window.location.pathname.includes("index.html") ||
        window.location.pathname === "/"
      ) {
        const tenantListsElement = document.getElementById("list-tenant");
        tenantListsElement.innerHTML = "";

        fetch("assets/AllMenu.json")
          .then((response) => {
            return response.json();
          })
          .then((data) => {
            const allMenuLists = data.data;
            const lastGeneratedDate = localStorage.getItem('lastGeneratedDate');
            const currentDate = new Date().toLocaleDateString();
            let randomNumber;
            if (!lastGeneratedDate || lastGeneratedDate !== currentDate) {
              randomNumber = Math.floor(
                Math.random() * allMenuLists.length
              );
              localStorage.setItem('lastGeneratedDate',currentDate)
            } else {
              randomNumber = parseInt(localStorage.getItem('lastGeneratedDate'))
            }
            const menuRandom = allMenuLists[randomNumber];
            if(menuRandom){
              const namaWarungRandom = document.getElementById('namaWarungRandom');
              namaWarungRandom.textContent = menuRandom.nama_warung;
              const deskripsiWarungRandom = document.getElementById('deskripsiWarungRandom');
              deskripsiWarungRandom.textContent = menuRandom.deskripsi_warung;
              const lokasiWarungRandom = document.getElementById('lokasiWarungRandom');
              lokasiWarungRandom.textContent = menuRandom.lokasi;
              const menuLists = [];
              for(let menu of allMenuLists){
                if(menu.nama_warung == menuRandom.nama_warung){
                  menuLists.push(menu);
                }
              }
              showData(menuLists);

              function filterByCategory(inputText) {
                const filteredData = menuLists.filter((item) => {
                  const regex = new RegExp(inputText, "i");
                  return (
                    regex.test(item.menu) ||
                    item.kategori.some((category) => regex.test(category))
                  );
                });
                return filteredData;
              }
          
              const searchMenuForm = document.getElementById("searchMenuForm");
              const searchMenuInput = document.getElementById("searchMenuInput");
              searchMenuInput.placeholder = 'Cari menu pada ' + menuRandom.nama_warung;
          
              searchMenuForm.addEventListener("submit", function (event) {
                event.preventDefault();
                const searchTerm = searchMenuInput.value.trim();
                if (searchTerm) {
                  const listNew = filterByCategory(searchTerm);
                  showData(listNew);
                } else {
                  showData(menuLists);
                }
              });
            }
          });

          

        // Memuat ulang daftar tenant yang telah difilter
        tenantLists.forEach((tenant) => {
          const minHarga = formatRupiah(tenant.min);
          const maxHarga = formatRupiah(tenant.max);
          const id = tenant.nama_warung.toLowerCase().replace(/\s+/g, "_");
          let warungPage = tenant.nama_warung.replace(
            /\s+(\w)/g,
            function (match, firstLetter) {
              return firstLetter.toUpperCase();
            }
          );
          // Huruf pertama tetap huruf kecil
          warungPage = warungPage.charAt(0).toLowerCase() + warungPage.slice(1);
          const itemHTML = `
                    <div class="item ${id}">
                        <div class="thumb">
                            <a href="menu.html#${warungPage}">
                                <img src="assets/img/tenant/${
                                  tenant.foto
                                }" alt="${tenant.nama_warung}">
                            </a>
                            <div class="price">
                              <h5>${
                                minHarga !== "Rp 0" || maxHarga !== "Rp 0"
                                  ? `${minHarga} - ${maxHarga}`
                                  : "Harga Spesial"
                              }</h5>
                            </div>
                        </div>
                        <div class="info">
                            <h4><a href="menu.html#${warungPage}">${
            tenant.nama_warung
          }</a></h4>
                            <p>
                              ${tenant.deskripsi_warung}
                            </p>
                            <div class="button">
                                <a href="menu.html#${warungPage}">Pesan Sekarang</a>
                            </div>
                        </div>
                    </div>
                `;
          tenantListsElement.insertAdjacentHTML("beforeend", itemHTML);
        });

        const searchForm = document.getElementById("searchForm");
        const searchInput = document.getElementById("searchInput");

        searchForm.addEventListener(
          "submit",
          function (event) {
            event.preventDefault();

            const searchTerm = searchInput.value.trim();
            if (searchTerm) {
              // tenantCarousel.owlcarousel2_filter(`.${searchTerm}`)
              const regex = new RegExp(searchTerm, "i");
              const filteredItems = tenantLists.filter((tenant) =>
                regex.test(tenant.nama_warung.toLowerCase())
              );
              const filteredIds = filteredItems.map(
                (item) =>
                  `.${item.nama_warung.toLowerCase().replace(/\s+/g, "_")}`
              );
              tenantCarousel.owlcarousel2_filter(filteredIds.join(","));
            } else {
              tenantCarousel.owlcarousel2_filter("*");
            }
          },
          { passive: false }
        );
      }
    }

    loadTenant(tenantLists);

    /* ==================================================
            # Wow Init
         ===============================================*/
    var wow = new WOW({
      boxClass: "wow", // animated element css class (default is wow)
      animateClass: "animated", // animation css class (default is animated)
      offset: 0, // distance to the element when triggering the animation (default is 0)
      mobile: true, // trigger animations on mobile devices (default is true)
      live: true, // act on asynchronously loaded content (default is true)
    });
    wow.init();

    /* ==================================================
            # Smooth Scroll
         ===============================================*/
    $("body").scrollspy({
      target: ".navbar-collapse",
      offset: 200,
    });
    $("a.smooth-menu").on("click", function (event) {
      var $anchor = $(this);
      var headerH = "75";
      $("html, body")
        .stop()
        .animate(
          {
            scrollTop: $($anchor.attr("href")).offset().top - headerH + "px",
          },
          1500,
          "easeInOutExpo"
        );
    });

    /* ==================================================
            # Banner Animation
        ===============================================*/
    function doAnimations(elems) {
      //Cache the animationend event in a variable
      var animEndEv = "webkitAnimationEnd animationend";
      elems.each(function () {
        var $this = $(this),
          $animationType = $this.data("animation");
        $this.addClass($animationType).one(animEndEv, function () {
          $this.removeClass($animationType);
        });
      });
    }

    //Variables on page load
    var $immortalCarousel = $(".animate_text"),
      $firstAnimatingElems = $immortalCarousel
        .find(".item:first")
        .find("[data-animation ^= 'animated']");
    //Initialize carousel
    $immortalCarousel.carousel();
    //Animate captions in first slide on page load
    doAnimations($firstAnimatingElems);
    //Other slides to be animated on carousel slide event
    $immortalCarousel.on("slide.bs.carousel", function (e) {
      var $animatingElems = $(e.relatedTarget).find(
        "[data-animation ^= 'animated']"
      );
      doAnimations($animatingElems);
    });

    /* ==================================================
            # Equal Height Init
        ===============================================*/
    $(window).on("resize", function () {
      $(".equal-height").equalHeights();
    });

    $(".equal-height")
      .equalHeights()
      .find("img, iframe, object")
      .on("load", function () {
        $(".equal-height").equalHeights();
      });

    /* ==================================================
            # Food Menu Carousel
         ===============================================*/
    let tenantCarousel = $(".food-menu-carousel").owlCarousel({
      loop: true,
      margin: 30,
      nav: false,
      navText: [
        "<i class='fa fa-angle-left'></i>",
        "<i class='fa fa-angle-right'></i>",
      ],
      dots: true,
      autoplay: false,
      responsive: {
        0: {
          items: 1.3,
        },
        600: {
          items: 2,
        },
        1000: {
          items: 4,
        },
      },
    });

    /* ==================================================
            # Banner Carousel
         ===============================================*/
    $(".banner-pantun-carousel").owlCarousel({
      loop: true,
      navigation: true,
      dots: true,
      items: 1,
      autoplay: true,
      smartSpeed: 500,
      autoplayTimeout: 20000,
    });

    /* ==================================================
            Preloader Init
         ===============================================*/
    $(window).on("load", function () {
      setTimeout(function () {
        $("#preloader").fadeOut(500, function () {
          $("#preloader").removeClass("loading");
        });
      }, 500);
    });

    /* ==================================================
            Nice Select Init
         ===============================================*/
    $("select").niceSelect();
  }); // end document ready function
})(jQuery); // End jQuery

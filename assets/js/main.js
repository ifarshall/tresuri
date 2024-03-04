/* ===================================================================
    
    Author          : Valid Theme
    Template Name   : Rescaf - Food & Restauratn Template
    Version         : 1.1
    
* ================================================================= */

(function ($) {
  "use strict";

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

    function loadTenant(tenantLists) {
      if(window.location.pathname.includes('index.html')|| window.location.pathname === '/'){
        const tenantListsElement = document.getElementById("list-tenant");
        // Mengosongkan isi tenantListsElement sebelum menambahkan tenant baru
        tenantListsElement.innerHTML = "";
  
  
        // Memuat ulang daftar tenant yang telah difilter
        tenantLists.forEach((tenant) => {
          const minHarga = formatRupiah(tenant.min);
          const maxHarga = formatRupiah(tenant.max);
          const id = (tenant.nama_warung).toLowerCase().replace(/\s+/g, '_');
          let warungPage = (tenant.nama_warung).replace(/\s+(\w)/g, function(match, firstLetter) {
            return firstLetter.toUpperCase();
          });
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
                            <h4><a href="menu.html#${warungPage}">${tenant.nama_warung}</a></h4>
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

        searchForm.addEventListener("submit", function (event) {
          event.preventDefault();

          const searchTerm = searchInput.value.trim();
          if(searchTerm){
            // tenantCarousel.owlcarousel2_filter(`.${searchTerm}`)
            const regex = new RegExp(searchTerm, 'i');
            const filteredItems = tenantLists.filter(tenant => regex.test(tenant.nama_warung.toLowerCase()));
            const filteredIds = filteredItems.map(item => `.${item.nama_warung.toLowerCase().replace(/\s+/g, '_')}`);
            tenantCarousel.owlcarousel2_filter(filteredIds.join(','));
          } else {
            tenantCarousel.owlcarousel2_filter('*')
          }
        });
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
      event.preventDefault();
    },{passive:false});

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
          items: 3,
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

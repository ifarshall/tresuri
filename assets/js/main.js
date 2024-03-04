/* ===================================================================
    
    Author          : Valid Theme
    Template Name   : Rescaf - Food & Restauratn Template
    Version         : 1.1
    
* ================================================================= */

(function ($) {
  "use strict";

  $(document).on("ready", function () {
    let menuData = [];

    // fetch("assets/menu.json")
    //   .then((response) => {
    //     return response.json();
    //   })
    //   .then((data) => {
    //     menuData = data.data;
    //     const portfolioGrid = document.getElementById("portfolio-grid");
    //     // Loop melalui data menu dan buat elemen HTML sesuai dengan struktur yang diberikan

    //     menuData.forEach((menu) => {
    //       const categories = menu.kategori.join(" "); // Menggabungkan kelas kategori

    //       // Membuat elemen HTML untuk item menu
    //       const itemHTML = `
    //             <div class="item-single pf-item ${categories.toLowerCase()}">
    //                 <div class="item">
    //                     <div class="thumb">
    //                         <a href="#">
    //                             <img src="assets/img/800x800.png" alt="Thumb">
    //                             <h5>${menu.harga}</h5>
    //                         </a>
    //                     </div>
    //                     <div class="info">
    //                         <h4><a class="tenant" href="#">${menu.nama_warung}</a></h4>
    //                         <p>${menu.menu}</p>
    //                         <span>${menu.lokasi}</span>
    //                     </div>
    //                 </div>
    //             </div>
    //         `;

    //       // Menambahkan elemen HTML ke dalam portfolioGrid
    //       portfolioGrid.insertAdjacentHTML("beforeend", itemHTML);
    //     });
    //   });

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
      var reverse = angka.toString().split('').reverse().join(''),
      ribuan = reverse.match(/\d{1,3}/g);
      ribuan = ribuan.join('.').split('').reverse().join('');
      return 'Rp ' + ribuan;
    }

    function shuffleArray(array) {
      for (let i = array.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          [array[i], array[j]] = [array[j], array[i]];
      }
    }

    shuffleArray(tenantLists)

    const tenantListsElement = document.getElementById("list-tenant");
    tenantLists.forEach((tenant) => {
      const minHarga = formatRupiah(tenant.min);
      const maxHarga = formatRupiah(tenant.max);
      const itemHTML = `
              <div class="item">
                  <div class="thumb">
                      <a href="#">
                          <img src="assets/img/tenant/${tenant.foto}" alt="${tenant.nama_warung}">
                      </a>
                      <div class="price">
                        <h5>${minHarga !== 'Rp 0' || maxHarga !== 'Rp 0' ? `${minHarga} - ${maxHarga}` : 'Harga Spesial'}</h5>
                      </div>
                  </div>
                  <div class="info">
                      <h4><a href="#">${tenant.nama_warung}</a></h4>
                      <span>Mutton / Olive Oil / Salt</span>
                      <p>
                        ${tenant.deskripsi_warung}
                      </p>
                      <div class="button">
                          <a href="#">Pesan Sekarang</a>
                      </div>
                  </div>
              </div>
          `;
      tenantListsElement.insertAdjacentHTML("beforeend", itemHTML);
    });

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
            # Youtube Video Init
         ===============================================*/
    $(".player").mb_YTPlayer();

    // Data filter untuk setiap kategori
    // const filters = [
    //   { name: "Semua Menu", class: "*" },
    //   { name: "Nasi", class: ".nasi" },
    //   { name: "Berkuah", class: ".berkuah" },
    //   { name: "Sayuran", class: ".sayuran" },
    //   { name: "Snack", class: ".snack" },
    //   { name: "Ayam", class: ".ayam" },
    //   { name: "Ikan", class: ".ikan" },
    //   { name: "Daging", class: ".daging" },
    //   { name: "Gorengan", class: ".gorengan" },
    //   { name: "Minuman", class: ".minuman" },
    //   { name: "Kopi", class: ".kopi" },
    // ];

    // Ambil elemen menu
    // const mixItemMenu = document.getElementById("mixItemMenu");

    // // Loop melalui setiap filter dan buat tombol
    // filters.forEach((filter) => {
    //   const button = document.createElement("button");
    //   button.textContent = filter.name;
    //   button.setAttribute("data-filter", filter.class);
    //   mixItemMenu.appendChild(button);
    // });

    // const firstButton = mixItemMenu.querySelector("button");
    // if (firstButton) {
    //   firstButton.classList.add("active");
    // }

    // $(".menu-carousel").owlCarousel({
    //   loop: true,
    //   dots: false,
    //   responsive: {
    //     0: {
    //       items: 2,
    //       margin: 20,
    //     },
    //     600: {
    //       items: 5,
    //       margin: 10,
    //     },
    //     1000: {
    //       items: 6,
    //       margin: 0,
    //     },
    //   },
    //   autoplay: false,
    // });

    /* ==================================================
            # imagesLoaded active
        ===============================================*/
    $("#portfolio-grid,.blog-masonry").imagesLoaded(function () {
      /* Filter menu */
      $(".mix-item-menu").on("click", "button", function () {
        var filterValue = $(this).attr("data-filter");
        $grid.isotope({
          filter: filterValue,
        });
      });

      const buttons = document.querySelectorAll(
        ".mix-item-menu .owl-stage button"
      );
      buttons.forEach(function (button) {
        button.addEventListener("click", function () {
          buttons.forEach(function (btn) {
            btn.classList.remove("active");
          });

          this.classList.add("active");
        });
      });

      /* Filter active */
      var $grid = $("#portfolio-grid").isotope({
        itemSelector: ".pf-item",
        percentPosition: true,
        masonry: {
          columnWidth: ".pf-item",
        },
      });

      const searchForm = document.getElementById("searchForm");
      const searchInput = document.getElementById("searchInput");

      // Tambahkan event listener pada form saat submit
      searchForm.addEventListener("submit", function (event) {
        // Menghentikan aksi default dari form (mengirimkan data)
        event.preventDefault();

        // Mendapatkan nilai dari input search
        const searchTerm = searchInput.value.trim();

        // Lakukan sesuatu dengan nilai search term
        if (searchTerm) {
          $grid.isotope({
            filter: function () {
              var name = $(this).find(".tenant").text().toLowerCase();
              return name.includes(searchTerm);
            },
          });
        } else {
          $grid.isotope({
            filter: "*",
          });
        }
      });
    });

    /* ==================================================
            # Fun Factor Init
        ===============================================*/
    $(".timer").countTo();
    $(".fun-fact").appear(
      function () {
        $(".timer").countTo();
      },
      {
        accY: -100,
      }
    );

    /* ==================================================
            # Magnific popup init
         ===============================================*/
    $(".popup-link").magnificPopup({
      type: "image",
      // other options
    });

    $(".popup-gallery").magnificPopup({
      type: "image",
      gallery: {
        enabled: true,
      },
      // other options
    });

    $(".popup-youtube, .popup-vimeo, .popup-gmaps").magnificPopup({
      type: "iframe",
      mainClass: "mfp-fade",
      removalDelay: 160,
      preloader: false,
      fixedContentPos: false,
    });

    $(".magnific-mix-gallery").each(function () {
      var $container = $(this);
      var $imageLinks = $container.find(".item");

      var items = [];
      $imageLinks.each(function () {
        var $item = $(this);
        var type = "image";
        if ($item.hasClass("magnific-iframe")) {
          type = "iframe";
        }
        var magItem = {
          src: $item.attr("href"),
          type: type,
        };
        magItem.title = $item.data("title");
        items.push(magItem);
      });

      $imageLinks.magnificPopup({
        mainClass: "mfp-fade",
        items: items,
        gallery: {
          enabled: true,
          tPrev: $(this).data("prev-text"),
          tNext: $(this).data("next-text"),
        },
        type: "image",
        callbacks: {
          beforeOpen: function () {
            var index = $imageLinks.index(this.st.el);
            if (-1 !== index) {
              this.goTo(index);
            }
          },
        },
      });
    });

    /* ==================================================
            # Content Carousel
         ===============================================*/
    $(".content-carousel").owlCarousel({
      loop: false,
      nav: false,
      dots: true,
      items: 1,
      navText: [
        "<i class='fa fa-angle-left'></i>",
        "<i class='fa fa-angle-right'></i>",
      ],
    });

    /* ==================================================
            # Offer Carousel
         ===============================================*/
    $(".offer-carousel").owlCarousel({
      loop: false,
      nav: true,
      dots: false,
      items: 1,
      navText: [
        "<i class='fa fa-angle-left'></i>",
        "<i class='fa fa-angle-right'></i>",
      ],
    });

    /* ==================================================
            # Services Carousel
         ===============================================*/
    $(".services-carousel").owlCarousel({
      loop: false,
      margin: 15,
      nav: true,
      navText: [
        "<i class='fa fa-angle-left'></i>",
        "<i class='fa fa-angle-right'></i>",
      ],
      dots: false,
      autoplay: true,
      responsive: {
        0: {
          items: 1,
        },
        600: {
          items: 2,
        },
        1000: {
          items: 3,
        },
      },
    });

    /* ==================================================
            #  Testimonials Carousel
         ===============================================*/
    $(".testimonials-carousel").owlCarousel({
      loop: false,
      margin: 30,
      nav: false,
      navText: [
        "<i class='fa fa-angle-left'></i>",
        "<i class='fa fa-angle-right'></i>",
      ],
      dots: true,
      autoplay: true,
      responsive: {
        0: {
          items: 1,
        },
        600: {
          items: 2,
        },
        1000: {
          items: 2,
        },
      },
    });

    /* ==================================================
            # Food Menu Carousel
         ===============================================*/
    $(".food-menu-carousel").owlCarousel({
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
          items: 1,
        },
        600: {
          items: 2,
        },
        1000: {
          items: 3,
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

    // const items = [
    //     { filter: ".nasi", imgSrc: "assets/img/icon/Nasi.svg", text: "Nasi" },
    //     { filter: ".kuah", imgSrc: "assets/img/icon/Bakmi & Soto.svg", text: "Berkuah" },
    //     { filter: ".sayur", imgSrc: "assets/img/icon/Sayuran.svg", text: "Sayuran" },
    //     { filter: ".snack", imgSrc: "assets/img/icon/Snack.svg", text: "Snack" },
    //     { filter: ".ayam", imgSrc: "assets/img/icon/033-fried chicken.svg", text: "Ayam" },
    //     { filter: ".ikan", imgSrc: "assets/img/icon/071-tom yum.svg", text: "Ikan" },
    //     { filter: ".daging", imgSrc: "assets/img/icon/023-curry.svg", text: "Daging" },
    //     { filter: ".gorengan", imgSrc: "assets/img/icon/028-empanada.svg", text: "Gorengan" },
    //     { filter: ".minuman", imgSrc: "assets/img/icon/Minuman.svg", text: "Minuman" },
    //     { filter: ".kopi", imgSrc: "assets/img/icon/001-afternoon tea.svg", text: "Kopi" }
    // ];

    // const menuCarousel = document.getElementById("menu-carousel");
    // items.forEach(item => {
    //     const link = document.createElement("a");
    //     link.href = "#";
    //     link.classList.add("item");
    //     link.setAttribute("data-filter", item.filter);

    //     const img = document.createElement("img");
    //     img.src = item.imgSrc;
    //     img.style.height = "fit-content";
    //     img.style.maxHeight = "100px";
    //     img.alt = "Image";
    //     img.height = 100;

    //     const div = document.createElement("div");
    //     div.classList.add("text-center");
    //     div.style.fontSize = "smaller";
    //     div.textContent = item.text;

    //     link.appendChild(img);
    //     link.appendChild(div);

    //     menuCarousel.appendChild(link);
    // });

    // let isOpenMenu = false;
    // const buttonMenu = document.getElementById("allMenu");
    // buttonMenu.addEventListener("click",(e)=>{
    //     e.preventDefault();
    //     if(isOpenMenu){
    //         isOpenMenu = false;
    //         buttonMenu.textContent = "Lihat Semua";
    //         menuCarousel.classList.add("fade-in");
    //         menuCarousel.classList.remove("fade-out");
    //         menuCarousel.classList.remove("hidden");
    //     } else {
    //         isOpenMenu = true;
    //         buttonMenu.textContent = "Tutup";
    //         menuCarousel.classList.remove("fade-in");
    //         menuCarousel.classList.add("fade-out");
    //         menuCarousel.classList.add("hidden");
    //     }

    // })

    /* ==================================================
            Preloader Init
         ===============================================*/
    // $('#preloader').addClass('loading');
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

    /* ==================================================
            Contact Form Validations
        ================================================== */
    $(".contact-form").each(function () {
      var formInstance = $(this);
      formInstance.submit(function () {
        var action = $(this).attr("action");

        $("#message").slideUp(750, function () {
          $("#message").hide();

          $("#submit")
            .after('<img src="assets/img/ajax-loader.gif" class="loader" />')
            .attr("disabled", "disabled");

          $.post(
            action,
            {
              name: $("#name").val(),
              email: $("#email").val(),
              phone: $("#phone").val(),
              comments: $("#comments").val(),
            },
            function (data) {
              document.getElementById("message").innerHTML = data;
              $("#message").slideDown("slow");
              $(".contact-form img.loader").fadeOut("slow", function () {
                $(this).remove();
              });
              $("#submit").removeAttr("disabled");
            }
          );
        });
        return false;
      });
    });
  }); // end document ready function
})(jQuery); // End jQuery

// ساخت محتوای صفحه داخل #root
const root = document.getElementById("root");

root.innerHTML = `
  <div class="container">
    <h1>انجمن علمی دانشگاه مازندران</h1>

    <!-- بخش ۱: شورای مرکزی -->
    <div class="accordion-item">
      <button class="accordion-header">
        <span>شورای مرکزی انجمن علمی</span>
        <div class="accordion-icon">›</div>
      </button>
      <div class="accordion-body">
        <div class="inner-scroll">
          <ul class="members">
            <li>
              <strong>دکتر عنایتی</strong> – معاونت پژوهشی انجمن‌های علمی دانشگاه مازندران<br>
              آیدی تلگرام:
              <a href="https://t.me/Za0zaaaa" target="_blank">@Za0zaaaa</a>
            </li>
            <li>
              <strong>مهدیه عابد</strong> – دبیر دبیران<br>
              آیدی تلگرام:
              <a href="https://t.me/Mhdieabed" target="_blank">@Mhdieabed</a>
            </li>
            <li>
              <strong>مهدی ذبیحی</strong> – دبیر انجمن علمی مهندسی کامپیوتر<br>
              آیدی تلگرام:
              <a href="https://t.me/Zabihi_Mahdi" target="_blank">@Zabihi_Mahdi</a>
            </li>
            <li>
              <strong>عادل لعلی</strong> – دبیر انجمن علمی روابط بین‌الملل و مطالعات منطقه‌ای<br>
              آیدی تلگرام:
              <a href="https://t.me/Adel_Laali" target="_blank">@Adel_Laali</a>
            </li>
            <li>
              <strong>مبینا ابوالفضلیان</strong> – دبیر انجمن علمی کارآفرینی<br>
              آیدی تلگرام:
              <a href="https://t.me/Mobinaabolfazlian" target="_blank">@Mobinaabolfazlian</a>
            </li>
            <li>
              <strong>بهرام مداح</strong> – دبیر انجمن علمی حسابداری<br>
              آیدی تلگرام:
              <a href="https://t.me/Bahram_maddah" target="_blank">@Bahram_maddah</a>
            </li>
            <li>
              <strong>فاطمه خسروی</strong> – دبیر انجمن علمی مردم‌شناسی<br>
              آیدی تلگرام:
              <a href="https://t.me/Wavemmm" target="_blank">@Wavemmm</a>
            </li>
            <li>
              <strong>امیرحسین قنبرزاده</strong> – دبیر انجمن علمی جامعه‌شناسی<br>
              آیدی تلگرام:
              <a href="https://t.me/@Amir_ho3yngh" target="_blank">@Amir_ho3yngh</a>
            </li>
            <li>
              <strong>محمد مهدی زاهدی</strong> – دبیر انجمن علمی مهندسی شهرسازی<br>
              آیدی تلگرام:
              <a href="https://t.me/MhmdMHDI75" target="_blank">@MhmdMHDI75</a>
            </li>
          </ul>
        </div>
      </div>
    </div>

    <!-- بخش ۲: اطلاعات دانشگاه و مجمع مرکزی -->
    <div class="accordion-item">
      <button class="accordion-header">
        <span>اطلاعات دانشگاه و مجمع مرکزی</span>
        <div class="accordion-icon">›</div>
      </button>
      <div class="accordion-body">
        <div class="inner-scroll details-scroll">
          <h2>راه‌های ارتباطی</h2>
          <p>
            کانال انجمن‌های علمی دانشگاه مازندران:
            <a href="https://t.me/sa_umz" target="_blank">https://t.me/sa_umz</a>
          </p>
          <p>
            وب‌سایت دانشگاه:
            <a href="https://umz.ac.ir" target="_blank">https://umz.ac.ir</a>
          </p>
          <p>
            نشانی:
            مازندران - بابلسر - خيابان پاسداران - سازمان مركزی
          </p>
          <p>
            کدپستی:
            47416-13534
          </p>
          <p>
            شماره تماس:
            01135302000
          </p>
          <p style="padding-bottom: 20px;">
            ایمیل:
            <a href="mailto:info@umz.ac.ir">info@umz.ac.ir</a>
          </p>
        </div>
      </div>
    </div>
  </div>

  <!-- امضای ثابت پایین صفحه -->
  <div class="z-50 fixed left-2 bottom-1 text-[11px] signature">
    Zabihi
  </div>
`;

// اضافه کردن لودینگ اسپینر داخل #loading-bg
const loadingBg = document.getElementById("loading-bg");
loadingBg.innerHTML = '<div id="loading-spinner"></div>';

// آکاردئون: چند بخش می‌توانند هم‌زمان باز باشند
const accordionItems = document.querySelectorAll(".accordion-item");

accordionItems.forEach((item) => {
  const header = item.querySelector(".accordion-header");
  const body = item.querySelector(".accordion-body");

  header.addEventListener("click", () => {
    const isOpen = item.classList.contains("open");

    if (isOpen) {
      item.classList.remove("open");
      body.style.maxHeight = null;
    } else {
      item.classList.add("open");
      body.style.maxHeight = body.scrollHeight + "px";
    }
  });
});

// حذف لودینگ بعد از لود صفحه
window.addEventListener("load", () => {
  setTimeout(() => {
    loadingBg.remove();
  }, 500);
});


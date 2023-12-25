let allComments = [
  {
    id: 1,
    nameUser: "صدرا رحمتی",
    date: "25/6/02",
    Comment:
      "بهترین و درجه یک. خیلی کمک زیادی میکنن و پشتیبانی عالی دارند حتما پیشنهاد میکنم براتون",
  },
  {
    id: 2,
    nameUser: "فاطمه خاتونی",
    date: "12/6/02",
    Comment:
      "پشتیبانی خیلی خوبی دارند و برنامه ریزی که نگم خیلی خوبه گزارشات هم مرتبا چک میشه من واقعا راضیم",
  },
  {
    id: 3,
    nameUser: "مبینا فدایی",
    date: "10/4/02",
    Comment:
      "فقط میتونم بگم دستتون درد نکنه بابت زحماتی که کشیدید من بسیار لذت بردم از کار شما ممنون ازتون",
  },
  {
    id: 4,
    nameUser: "ماهان جهانی",
    date: "8/4/02",
    Comment:
      "خیلی خوشحالم که شاگرد شما بودم من با برنامه های شما به رتبه دلخواهم دست پیدا کردم وافعا ممنون",
  },
  {
    id: 5,
    nameUser: "آتنا رضا زاده",
    date: "22/3/02",
    Comment:
      "خیلی تویه درسم ضعیف بودم من اصلا فکرشم نمیکردم یک روزی این رتبه رو بدست بیارم کاری که با شما تونستم انجام بدم ممنون بابت زحماتتون",
  },
  {
    id: 6,
    nameUser: "امیرحسین کریمی",
    date: "21/3/02",
    Comment:
      "از هر لحاظی عالین هم در تحصیلات هم در انتخاب رشته انتخاب اول و آخر من همین مشاوره هست. مرسی از همتون",
  },
  {
    id: 7,
    nameUser: "اسرا حبیبی",
    date: "3/3/02",
    Comment:
      "بهترین و درجه یک اند و پشتیبانی بسیار خوبی دارند من خیلی راضیم و خوشحالم که شمارو انتخاب کردم با تشکر ازتون",
  },
];

let plans = [
  {
    id: 1,
    name: "یاقوت",
    price: "200,000",
    Property1: "معرفی منابع برای هر سطح",
    Property2: "برنامه ریزی شخصی دو هفته یکبار",
    Property3: "آموزش تکنیک ها و روش های مطالعاتی",
    Property4: "پیگیری روزانه و بررسی گزارش شبانه",
    Property5: "ارتباط روزانه با مشاور",
    Property6: "تماس صوتی دو هفته یک بار",
    img: "data:image/png;base64,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",
  },
  {
    id: 2,
    name: "طلا",
    price: "480,000",
    Property1: "معرفی منابع برای هر سطح",
    Property2: "برنامه ریزی شخصی هفتگی",
    Property3: "آموزش تکنیک ها و روش های مطالعاتی",
    Property4: "پیگیری روزانه و بررسی گزارش شبانه",
    Property5: "ارتباط روزانه با مشاور",
    Property6: "تماس صوتی هفتگی",
    img: "https://img.icons8.com/emoji/100/coin-emoji.png",
  },
  {
    id: 3,
    name: "الماس",
    price: "680,000",
    Property1: "معرفی منابع برای هر سطح",
    Property2: "برنامه ریزی شخصی هفتگی",
    Property3: "آموزش تکنیک ها و روش های مطالعاتی",
    Property4: "پیگیری روزانه و بررسی گزارش شبانه",
    Property5: "ارتباط روزانه با مشاور",
    Property6: "تماس صوتی هفتگی",
    img: "https://img.icons8.com/arcade/100/diamond.png",
  },
];

let parentCardPlans = document.querySelector(".parent-card-plans");
let listComments = document.querySelector(".list-comments");

function comments(comment) {
  listComments.innerHTML = "";
  let card;
  comment.forEach(function (user) {
    card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `
        <div class="stars">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            class="star"
          >
            <path
              d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
            ></path>
          </svg>
        
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            class="star"
          >
            <path
              d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
            ></path>
          </svg>
        
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            class="star"
          >
            <path
              d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
            ></path>
          </svg>
        
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            class="star"
          >
            <path
              d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
            ></path>
          </svg>
        
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            class="star"
          >
            <path
              d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
            ></path>
          </svg>
        </div>
        
        <div class="infos">
          <p class="date-time">${user.date}</p>
          <p class="description">
          ${user.Comment}
          </p>
        </div>
        
        <div class="author">— ${user.nameUser}</div>
        `;
    listComments.append(card);
  });
}

function plan(allPlans) {
  let mainCard;
  allPlans.forEach(function (item) {
    mainCard = document.createElement("div");
    mainCard.className = "main-card";
    mainCard.innerHTML = `
    <div class="main-card">
    <div class="card-plan">
      <div class="icon-card-plan">
        <img
          src="${item.img}"
        />
      </div>
      <div class="title-card-plan">مشاوره ماهانه</div>
      <div class="header-card-plan">${item.name}</div>
      <div class="price-card-plan">
      ${item.price}
        <span class="price">تومان</span>
      </div>
      <div class="list-card-plan">
        <li class="item-card-plan">
          <i class="bi bi-check-lg"></i>
          ${item.Property1}
        </li>
        <li class="item-card-plan">
          <i class="bi bi-check-lg"></i>
          ${item.Property2}
        </li>
        <li class="item-card-plan">
          <i class="bi bi-check-lg"></i>
          ${item.Property3}
        </li>
        <li class="item-card-plan">
          <i class="bi bi-check-lg"></i>
          ${item.Property4}
          </li>
        <li class="item-card-plan">
          <i class="bi bi-check-lg"></i>
          ${item.Property5}
        </li>
        <li class="item-card-plan">
          <i class="bi bi-check-lg"></i>
          ${item.Property6}
        </li>
      </div>
      <button class="button btn-plan">
        <p class="text">انتخاب طرح</p>
      </button>
    </div>
  </div>
    `;
    parentCardPlans.append(mainCard);
  });
}
plan(plans);
comments(allComments);

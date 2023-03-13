const cateNewCategories = [];
dataNew.map((item) => {
  cateNewCategories.push(item.cateGroup);
});
const cateNewCategory = cateNewCategories.filter((item, index) => {
  return cateNewCategories.indexOf(item) === index;
});

let catNewCate = [];

if (cateNewCategory.length > 2) {
  const addCateList = (name, index) => {
    catNewCate[index] = name;
  };

  for (let i = 0; i < cateNewCategory.length; i++) {
    switch (cateNewCategory[i]) {
      case "Phẫu thuật thẩm mỹ":
        addCateList(cateNewCategory[i], 0);
        break;
      case "Điều trị trẻ hóa da":
        addCateList(cateNewCategory[i], 1);
        break;
      case "Tin tức làm đẹp":
        addCateList(cateNewCategory[i], 2);
        break;
    }
  }
} else {
  catNewCate = cateNewCategory;
}

const sortData = (obj) => {
  let categoriesSort = [];
  obj.map((item) => {
    categoriesSort.push(item.cate);
  });
  let categorySort = categoriesSort.filter((item, index) => {
    return categoriesSort.indexOf(item) === index;
  });
  return categorySort;
};

const renderTabsCateNew = (arr) => {
  let html = "";
  for (item of arr) {
    html += `<div class="tabNew_da_1_0_0__tablink" data-tab="${item}" onclick="renderDataCateNew(this)">${item}</div>`;
  }
  return html;
};

document.getElementById("tab").innerHTML = renderTabsCateNew(catNewCate);

const renderDataCateNew = (ele) => {
  const elements = document.querySelectorAll(".tabNew_da_1_0_0__tablink");
  elements.forEach(function (element) {
    element.classList.remove("current");
  });
  ele.classList.add("current");
  const dataID = ele.getAttribute("data-tab");
  let lNew = renderListCateNew(dataNew, dataID);
  let lCateGroup = listCateGroup(lNew);
  renderContentTab(lCateGroup);
};

const renderListCateNew = (arr, filter) => {
  let dataTab = arr.filter((item) => {
    return item.cateGroup === filter;
  });
  return dataTab;
};

const listCateGroup = (obj) => {
  let listCateG = [];
  let newsCateG = renderListCateNew(obj, obj[0].cateGroup);
  let listCateName = sortData(newsCateG);
  listCateName.map((item2) => {
    let itemPush = newsCateG.filter((item) => {
      return item.cate === item2;
    });
    listCateG.push(itemPush);
  });
  return listCateG;
};

const renderListNews = (obj) => {
  let htmlSide = "";
  let objLimit = obj.slice(0, 5);
  let objLenght = objLimit.length;

  let htmlMain = `
        <a href="${objLimit[0].link}" class="cateNew_da_1_0_0__content cateNew_da_1_0_0__content--custom">
            <div class="cateNew_da_1_0_0__video">
                <img width="390" height="230" src="${objLimit[0].img}" alt="${objLimit[0].name}">
            </div>
            <div class="cateNew_da_1_0_0__wrap">
                <h3 class="cateNew_da_1_0_0__titleDetail">${objLimit[0].name}</h3>
                <p>${objLimit[0].excerpt}</p>
                <div class="cateNew_da_1_0_0__numb">
                    <img width="15" height="15" src="https://benhvienthammydonga.vn/wp-content/themes/SCI_Theme/Module/Home/cateNew_da_1_0_0/images/icon.png" alt=""> ${objLimit[0].date}
                </div>
            </div>
        </a>
    `;

  for (let i = 1; i < objLenght; i++) {
    htmlSide += `
        <a href="${objLimit[i].link}" class="cateNew_da_1_0_0__item">
            <div class="cateNew_da_1_0_0__pic">
                <img width="120" height="90" src="${objLimit[i].img}" alt="${objLimit[i].name}">
            </div>
            <div class="cateNew_da_1_0_0__detail">
                <h3 class="cateNew_da_1_0_0__titleDetail cateNew_da_1_0_0__titleDetail--side">${objLimit[i].name}</h3>
                <div class="cateNew_da_1_0_0__numb">
                    <img width="15" height="15" src="https://benhvienthammydonga.vn/wp-content/themes/SCI_Theme/Module/Home/cateNew_da_1_0_0/images/icon.png" alt=""> 08/12/2022
                </div>
            </div>
        </a>
        `;
  }

  let htmlBody = `
    <div class="cateNew_da_1_0_0__service">
      <h1 class="cateNew_da_1_0_0__title">
        ${objLimit[0].cate}
        <a href="${objLimit[0].cateLink}" class="cateNew_da_1_0_0__btn cateNew_da_1_0_0__btn--mb">Xem thêm</a>
      </h1>
      <div class="cateNew_da_1_0_0__box">
          ${htmlMain}
          <div class="cateNew_da_1_0_0__content">
            ${htmlSide}
            <a href="${objLimit[0].cateLink}" class="cateNew_da_1_0_0__btn cateNew_da_1_0_0__btn--pc">Xem thêm</a>
          </div>
      </div>
    </div>
    `;

  return htmlBody;
};

const renderContentTab = (obj) => {
  let html = "";
  let objLenght = obj.length;
  for (let i = 0; i < objLenght; i++) {
    html += `${renderListNews(obj[i])}`;
  }

  document.getElementById("data_cate").innerHTML = html;
};

const elementsCateNew = document.querySelectorAll(".tabNew_da_1_0_0__tablink");
elementsCateNew[0].classList.add("current");
const lNew = renderListCateNew(dataNew, "Phẫu thuật thẩm mỹ");
const lCateGroup = listCateGroup(lNew);
renderContentTab(lCateGroup);

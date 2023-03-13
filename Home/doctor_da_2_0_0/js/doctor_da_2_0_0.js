const categories = [];
dataDoctor.map((item) => {
  categories.push(item.category);
});
const category = categories.filter((item, index) => {
  return categories.indexOf(item) === index;
});

const renderTabs = (arr) => {
  let html = "";
  for (item of arr) {
    html += `<div class="doctor_da_2_0_0__tablink" data-tab="${item}" onclick="renderDataDoctor(this)">${item}</div>`;
  }
  return html;
};

document.getElementsByClassName("doctor_da_2_0_0__tabs")[0].innerHTML =
  renderTabs(category);

const showModal = (id, arr) => {
  let html = "";
  let data = arr.filter((item) => {
    return item.id == id;
  });
  html = `
      <div class="modal popupdoctor_da_1_0_0" id="modal-doctor" style="display: flex">
          <div class="modal-bg modal-bg--1"></div>
          <div class="modal-box animate-pop popupdoctor_da_1_0_0__box">
              <div class="popupdoctor_da_1_0_0__header">
                  <div class="modal-close popupdoctor_da_1_0_0__close">&times;</div>
                  <div class="popupdoctor_da_1_0_0__title">
                      <div class="popupdoctor_da_1_0_0__pic">
                          <img width="270" height="400" src="${data[0].image}" alt="">
                      </div>
                      <div class="popupdoctor_da_1_0_0__info">
                          ${data[0].name}
                          <p>${data[0].position}</p>
                      </div>
                  </div>
              </div>
              <div class="popupdoctor_da_1_0_0__body">
                ${data[0].dataModal}
              </div>
              <div class="popupdoctor_da_1_0_0__regist" onclick="showModalRegister()">
                  <a href="javascript:void(0)">
                      <div class="popupdoctor_da_1_0_0__coating">
                          <p>Đăng ký khám</p>
                      </div>
                      <div class="popupdoctor_da_1_0_0__iconReg">
                          <img width="12" height="15" src="https://benhvienthammydonga.vn/wp-content/themes/SCI_Theme/Module/Home/form_da_1_0_0/images/icon.png" alt="">
                      </div>
                  </a>
              </div>
          </div>
      </div>
     `;
  document.getElementsByClassName("doctor_da_2_0_0")[0].insertAdjacentHTML("beforeend", html);
};

const showModalRegister = () => {
  let html = `
      <div class="modal popupRegister_da_1_0_0" id="modal-register" style="display: flex">
        <div class="modal-bg modal-bg--2"></div>
        <div class="modal-box animate-pop popupRegister_da_1_0_0__box">
            <div class="popupRegister_da_1_0_0__form">
                <span>ĐẶT LỊCH TƯ VẤN CÙNG BÁC SĨ</span>
                <article>
                    <div class="popupRegister_da_1_0_0__formRegist ">
                        <div class="input"><i class="icon-user"></i><input id="iname" name="iname" required=""
                                placeholder="(*) Họ và tên" type="text"></div>
                        <input type="hidden" id="gclid_field" name="gclid_field" value="">
                        <input type="hidden" id="code_campaign" name="code_campaign" value="530039326">
                        <input type="hidden" id="name_campaign" name="name_campaign"
                            value="[Đông Á] SALE ĐẸP KỊP TẾT">
                        <div class="input"><i class="icon-phone"></i><input id="imob" name="imob" required=""
                                placeholder="(*) Số điện thoại" type="text"></div>
                        <div class="input" style="display: none;"><i class="icon-mail-alt"></i><input id="iemail"
                                style="display: none;" name="iemail" type="email" placeholder="Email:"></div>
                        <input placeholder="Dịch vụ bạn muốn tư vấn *:" id="itext" name="itext"></input>
                    </div>
                    <div class="popupRegister_da_1_0_0__regist" onclick="ants_send_contact(this)">
                            <div class="popupRegister_da_1_0_0__coating">
                                <p>Gửi thông tin</p>
                            </div>
                            <div class="popupRegister_da_1_0_0__iconReg">
                                <img width="15" height="12" src="https://benhvienthammydonga.vn/wp-content/themes/SCI_Theme/Module/Home/form_da_1_0_0/images/icon.png" alt="">
                            </div>
                    </div>
                </article>
            </div>
        </div>
      </div>
       `;
  document.getElementsByTagName("body")[0].insertAdjacentHTML("beforeend", html);
};

window.addEventListener("click", (e) => {
  if (e.target == document.getElementsByClassName("modal-bg--2")[0]) {
    document.getElementById("modal-register").remove();
  }
});

const renderDataDoctor = (ele) => {
  const elements = document.querySelectorAll(".doctor_da_2_0_0__tablink");
  elements.forEach(function (element) {
    element.classList.remove("current");
  });
  ele.classList.add("current");
  const dataID = ele.getAttribute("data-tab");
  renderList(dataDoctor, dataID);
  clickPop();
};

const renderList = (arr, filter) => {
  let html = "";
  const dataTab = arr.filter((item) => {
    return item.category === filter;
  });
  for (let dataIndex of dataTab) {
    html += `
      <div class="doctor_da_2_0_0__item">
          <div class="doctor_da_2_0_0__person">
              <img width="240" height="700" src="${dataIndex.image}" alt="">
          </div>
          <div class="doctor_da_2_0_0__info">
              <div class="doctor_da_2_0_0__name">${dataIndex.name}
              ${dataIndex.imageRegion === "none"
        ? ""
        : `<div class="doctor_da_2_0_0__country"><img width="50" height="26" src="${dataIndex.imageRegion}" alt=""></div>`
      }
              </div>
              <div class="doctor_da_2_0_0__position">${dataIndex.position}</div>
              <div class="doctor_da_2_0_0__content">
                  ${dataIndex.description}
                  <a href="#" class="doctor_da_2_0_0__more" data-id="${dataIndex.id
      }">Xem thêm</a>
              </div>
          </div>
          <div class="doctor_da_2_0_0__reg" onclick="showModalRegister()">
              <div class="doctor_da_2_0_0__regist btn-2">
                  <a href="javascript:void(0)">
                      <div class="doctor_da_2_0_0__coating">
                          <p>Đăng ký khám</p>
                      </div>
                      <div class="doctor_da_2_0_0__iconReg">
                          <img width="12" height="15" src="https://benhvienthammydonga.vn/wp-content/themes/SCI_Theme/Module/Home/form_da_1_0_0/images/icon.png" alt="">
                      </div>
                  </a>
              </div>
          </div>
      </div>
    `;
  }
  document.getElementById("box-data").innerHTML = html;
};

const clickPop = () => {
  const popBtn = document.querySelectorAll(".doctor_da_2_0_0__more");
  for (let i = 0; i < popBtn.length; i++) {
    popBtn[i].addEventListener("click", () => {
      const idPop = popBtn[i].getAttribute("data-id");
      showModal(idPop, dataDoctor);
      document
        .querySelectorAll(".popupdoctor_da_1_0_0__close")[0]
        .addEventListener("click", () => {
          document.getElementById("modal-doctor").remove();
        });
    });
  }
  window.addEventListener("click", (e) => {
    if (e.target == document.getElementsByClassName("modal-bg--1")[0]) {
      document.getElementById("modal-doctor").remove();
    }
  })
};

const elements = document.querySelectorAll(".doctor_da_2_0_0__tablink");
elements[0].classList.add("current");
renderList(dataDoctor, dataDoctor[0].category);
clickPop();

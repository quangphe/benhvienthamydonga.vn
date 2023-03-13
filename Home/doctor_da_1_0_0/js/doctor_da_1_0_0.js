const dataDoctorHome = dataDoctor.filter((item) => {
  return item.showHome === "true";
});

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
                          <img src="${data[0].image}" alt="">
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
                          <img width="12" height="15" src="https://benhvienthammydonga.vn/wp-content/themes/SCI_Theme/Module/Home/service_da_1_0_0/images/icon.png" alt="">
                      </div>
                  </a>
              </div>
          </div>
      </div>
     `;
  document.getElementsByClassName("doctor_da_1_0_0")[0].insertAdjacentHTML("beforeend", html);
};

const renderData = (arr) => {
  let html = "";
  for (itemData of arr) {
    html += `
        <div class="doctor_da_1_0_0__item modal-btn" data-id="${itemData.id}">
            <div class="doctor_da_1_0_0__img">
                <img width="110" height="110" src="${itemData.image}" alt="">
            </div>
            <div class="doctor_da_1_0_0__content">
                <h3 class="doctor_da_1_0_0__name">
                    <p>${itemData.name}</p>
                </h3>
                <span>
                    ${itemData.position}
                </span>
                ${itemData.imageRegion === "none"
        ? ""
        : `<div class="doctor_da_1_0_0__country"><img width="50" height="26" src="${itemData.imageRegion}" alt=""></div>`
      }
            </div>
            <div class="doctor_da_1_0_0__icon"></div>
        </div>
        `;
  }
  return html;
};

document.getElementsByClassName("doctor_da_1_0_0__box")[0].innerHTML = renderData(dataDoctorHome);
const popBtn = document.querySelectorAll(".doctor_da_1_0_0__item");
for (let i = 0; i < popBtn.length; i++) {
  popBtn[i].addEventListener("click", () => {
    const idPop = popBtn[i].getAttribute("data-id");
    showModal(idPop, dataDoctorHome);
    document.querySelectorAll(".popupdoctor_da_1_0_0__close")[0].addEventListener("click", () => {
      document.getElementById("modal-doctor").remove();
    });
  });
}
window.addEventListener("click", (e) => {
  if (e.target == document.getElementsByClassName("modal-bg--1")[0]) {
    document.getElementById("modal-doctor").remove();
  }
})

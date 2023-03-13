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

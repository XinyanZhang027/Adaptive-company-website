<template>
  <div id="footer" class="container-fluid">
    <!--<div class="logo">
      <img src="@/assets/img/company_logo.png" alt="logo图">
    </div>
    -->
    <p class="title">CHENYU ENTERPRISES CANADA LTD</p>
    <p class="address_tel_fax">
      <p>Address：#617- 808 Nelson St Vancouver, BC Canada V6Z 2H1</p>
      <p>Tel：+1 604-423-4333</p>
    </p>
    <p class="email_wx">
      <p>Email：chenyu201912@yeah.net</p>
      <!--<span>公司微信号：ilyk_gg</span>-->
    </p>
    <p class="copy">Copyright &copy; 2019-2022 CHENYU ENTERPRISES CANADA LTD. All Rights Reserved</p>
  </div>
</template>
<script>
export default {
  name: "Footer",
  data() {
    return {};
  }
};
</script>
<style scoped>
#footer {
  width: 100%;
  height: 100%;
  color: #fff;
  background: #53A748;
  overflow: hidden;
  text-align: center;
}
.logo {
  width: 95px;
  height: 45px;
  margin: 50px auto 20px;
}
.title {
  font-size: 25px;
  margin-top: 50px;
  margin-bottom: 20px;
  font-family: "system-ui,-apple-system,Segoe UI,Rototo,Helvetica,Arial,sans-serif";
  font-weight: bold;
}
.address_tel_fax {
  color: #d3d3d3;
  font-size: 14px;
  margin: 10px 0;
}
.email_wx {
  color: #d3d3d3;
  font-size: 14px;
}
.copy {
  color: #d3d3d3;
  font-size: 14px;
  margin: 50px 0 10px;
}
@media screen and (max-width: 997px) {
  .title {
    font-size: 20px;
  }
  .address_tel_fax {
    font-size: 12px;
  }
  .email_wx {

  font-size: 12px;
}
.copy {
  font-size: 12px;
  margin: 30px 0 10px;
}
}
</style>


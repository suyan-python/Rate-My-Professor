function updateQRCode() {
  let textValue = $("#text").val();

  $("#qr_code").html("");

  var qrcode = new QRCode("qr_code", {
    text: textValue,
    width: 128,
    height: 128,
    colorDark: "#000000",
    colorLight: "#ffffff",
    correctLevel: QRCode.CorrectLevel.H,
  });
}

$(document).ready(function () {
  $("#text").on("change keydown paste input", function () {
    updateQRCode();
  });
});

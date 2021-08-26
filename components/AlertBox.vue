<template>
  <div  id="alert-modal"  class="modal alert-modal" tabindex="-1" role="dialog">
  <div class="modal-dialog" role="document">
    <div class="modal-content alert-modal_content center">
      <div id="alert-modal-icon" class="alert-modal_icon">
          <img src="images/icon/warning.svg" class="alertIcon" />
        </div>
        <div id="success-modal-icon" class="alert-modal_icon">
          <img src="images/icon/check.svg" class="alertIcon" />
        </div>
        <div id="alert-message" class="alert-modal_msg"></div>
        <button
          class="btn close-btn"
          onclick="closeAlertModal()"
        >
          Close
        </button>
    </div>
  </div>
</div>
</template>




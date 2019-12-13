import SweetAlertHelper from '../../assets/js/sweet-alert-helper.js';

// Hook dùng để báo hiệu nếu người dùng đang làm bài mà có ý định chuyển trang
export let isDoingQuizHook = ($transitions) => {

  let isDoingQuizIndicator = async (trans) => {
    let quizService = trans.injector().get('quizService');

    if (quizService.dangLamBai) {
      let hoi = await SweetAlertHelper.hoi("Bạn đang trong trạng thái làm bài, bạn muốn hủy bài làm?")
        .then(
          (result) => {
            if (result.value) {
              return trans.router.stateService.target(trans.to().name);
            }

            return false;
          }
        );

        console.log(hoi);
        return hoi;
    }
  };

  $transitions.onBefore({ from: 'bai-tap-trac-nghiem' }, isDoingQuizIndicator);
}
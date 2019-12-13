// Hook dùng để báo hiệu nếu người dùng đang làm bài mà có ý định chuyển trang
export let isDoingQuizHook = ($transitions) => {

  let isDoingQuizIndicator = async (trans) => {
    let quizService = trans.injector().get('quizService');

    console.log(quizService.dangLamBai);
    console.log("change");
    console.log(trans.params('from'));
  };

  $transitions.onBefore({ from: 'bai-tap-trac-nghiem' }, isDoingQuizIndicator);
}
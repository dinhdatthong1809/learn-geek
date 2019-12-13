// Hook dùng để báo hiệu nếu người dùng đang làm bài mà có ý định chuyển trang
export let isDoingQuizHook = async ($transitions) => {

  let isDoingQuizIndicator = () => {
    console.log("change");
  };

  $transitions.onBefore({ from: 'bai-tap-trac-nghiem' }, isDoingQuizIndicator);
}
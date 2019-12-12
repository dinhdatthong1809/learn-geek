// Hook dùng để báo hiệu nếu người dùng đang làm bài mà có ý định chuyển trang
export let loadingIndicatorHook = ($transitions, $document) => {
  
    let body = $document.find("body");
  
    let showLoadingIndicator = () => {
      body.append(angular.element('<div class="text-primary" id="spinner"><i class="fas fa-circle-notch fa-10x fa-spin" aria-hidden="true"></i></div>'));
    };
  
    let hideLoadingIndicator = () => {
      let spinner = document.getElementById("spinner");
      spinner.parentElement.removeChild(spinner);
    };
  
    $transitions.onStart({from: 'bai-tap-trac-nghiem'}, showLoadingIndicator);
  }
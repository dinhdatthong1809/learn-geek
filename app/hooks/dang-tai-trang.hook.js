// Hook dùng để hiện dấu hiệu đang tải trang trong khi chuyển trang
export let loadingIndicatorHook = ($transitions, $document) => {
    let body = $document.find("body");

    let showLoadingIndicator = () => {
      body.append(angular.element('<div id="spinner"><i class="fa fa-spinner fa-pulse fa-3x fa-fw" aria-hidden="true"></i>heheehe</div>'));
    };

    let hideLoadingIndicator = () => {
      let spinner = document.getElementById("spinner");
      spinner.parentElement.removeChild(spinner);
    };

    $transitions.onStart({}, showLoadingIndicator);
    $transitions.onFinish({}, hideLoadingIndicator);
}
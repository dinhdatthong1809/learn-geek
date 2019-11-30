import Swal from 'https://cdn.jsdelivr.net/npm/sweetalert2@9.3.17/src/sweetalert2.js'

export default class SweetAlertHelper {

	static thanhCong = (thongBao) => {
    	Swal.fire({
			icon : 'success',
			title : 'Thành công',
			html : thongBao,
			showConfirmButton : true
		});
    };
    
    static thatBai = (thongBao) => {
    	Swal.fire({
			typicone : 'error',
			title : 'Lỗi',
			html : thongBao,
			showConfirmButton : true
		});
    }
    
    static canhBao = (thongBao) => {
    	Swal.fire({
			icon : 'warning',
			title : 'Cảnh báo',
			html : thongBao,
			showConfirmButton : true
		});
    }
    
    static hoi = (thongBao, hamDongY) => {
    	Swal.fire({
    		icon: 'warning',
    		title: 'Bạn chắc chắn chứ?',
    		html: thongBao,
    		showCancelButton: true,
    		focusCancel: true,
    		cancelButtonText: 'Hủy!',
    		cancelButtonColor: '#d33',
    		confirmButtonText: 'Đồng ý!',
    		confirmButtonColor: '#3085d6'
    	}).then((result) => {
    		if (result.value) {
    			hamDongY();
    		}
    	});
    }
    
    static choXuLy = () => {
    	Swal.fire({
    		title: "Đang xử lý",
    		html: "Vui lòng chờ kết quả",
    		showConfirmButton: false,
    		allowOutsideClick: false
    	});
    }
    
}

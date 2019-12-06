import SweetAlertHelper from '../../assets/js/sweet-alert-helper.js';
import {learnGeekDB} from '../../assets/js/init-firebase.js';

export let DangKyComponent = {
    templateUrl: './app/dang-ky/dang-ky.component.html',
    controller: controller,
    controllerAs: '$scope'
};

function controller() {
    this.account = {
        username: "",
        password: "",
        fullName: "",
        email: "",
        gender: true,
        phoneNumber: ""
    };

    this.addAccount = () => {
        learnGeekDB.collection("accounts").add(this.account)
        .then(
            (docRef) => {
                SweetAlertHelper.thanhCong("Đăng ký thành công!");
                console.log("Document written with ID: ", docRef.id);
            },
            (error) => {
                SweetAlertHelper.thatBai("Đăng ký thất bại!");
                console.log("Error adding document: ", error);
            },
        )

        // let ref = learnGeekDB.ref("accounts");
        // $firebaseArray(ref)
        //     .$add(this.account)
        //     .then(
        //         (ref) => {
        //             SweetAlertHelper.thanhCong("Đăng ký thành công!");

        //             this.account = {
        //                 username: "",
        //                 password: "",
        //                 fullName: "",
        //                 email: "",
        //                 gender: true,
        //                 phoneNumber: ""
        //             };
        //         },
        //         (error) => {
        //             console.log(error);
        //         }
        //     );
    }
}

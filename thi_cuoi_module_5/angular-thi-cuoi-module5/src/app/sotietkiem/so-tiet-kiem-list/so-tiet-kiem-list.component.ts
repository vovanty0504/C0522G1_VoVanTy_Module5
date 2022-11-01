import {Component, OnInit} from '@angular/core';
import {SoTietKiemService} from '../../service/so-tiet-kiem.service';
import {KhachHang} from '../../model/khach-hang';
import {SoTietKiem} from '../../model/so-tiet-kiem';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-so-tiet-kiem-list',
  templateUrl: './so-tiet-kiem-list.component.html',
  styleUrls: ['./so-tiet-kiem-list.component.css']
})
export class SoTietKiemListComponent implements OnInit {

  listPaging: SoTietKiem[];
  numberRecord = 5;
  curPage = 1;
  totalPage: number;
  khachHangList: KhachHang[];
  nameSearch: KhachHang = {id: 100, name: ''};
  idDelete: number;


  constructor(private soTietKiem: SoTietKiemService) {

  }


  ngOnInit(): void {
    // this.soTietKiem.getAll().subscribe(value => {
    //   this.listPaging = value;
    //   console.log( this.khachHangList );
    // });
    this.soTietKiem.getAllKhachHang().subscribe(value => {
      this.khachHangList = value;
    });

    this.soTietKiem.findAllSoTietKiemSearch(this.nameSearch.name)
      .subscribe(list => {
        console.log(list);
        this.totalPage = Math.ceil(list.length / this.numberRecord);
      }, error => {
        console.log(error);
      }, () => {
        console.log('OK!');
      });

    this.soTietKiem.findAllSearchPaging(this.numberRecord, this.curPage
      , this.nameSearch.name).subscribe(pagingList => {
      console.log('a');
      console.log(pagingList);
      this.listPaging = pagingList;
    }, error => {
      console.log(error);
    }, () => {
      console.log('Hiển thị khách hàng ở trang ' + this.curPage);
    });

  }

  // next(): void {
  //   this.curPage++;
  //   this.ngOnInit();
  // }
  //
  // previous(): void {
  //   this.curPage--;
  //   this.ngOnInit();
  // }
  //
  // searchByMore() {
  //   this.curPage = 1;
  //   this.ngOnInit();
  // }
  //
  // compareWithId(item1, item2) {
  //   return item1 && item2 && item1.id === item2.id;
  // }
  //
  // resetSearchInput(): void {
  //   this.nameSearch = {id: 100, name: ''};
  //   this.curPage = 1;
  //   this.ngOnInit();
  // }
  //
  // getInfoDelete(id: number) {
  //   this.idDelete = id;
  // }
  //
  //
  // deleteCustomer(): void {
  //   this.soTietKiem.delete(this.idDelete).subscribe(() => {
  //     Swal.fire({
  //       icon: 'success',
  //       title: 'Xóa thành công!',
  //       text: 'Số Tiết Kiệm: ' + this.idDelete,
  //       showClass: {
  //         popup: 'animate__animated animate__fadeInDown'
  //       },
  //       hideClass: {
  //         popup: 'animate__animated animate__fadeOutUp'
  //       }
  //     });
  //
  //     this.ngOnInit();
  //
  //   }, error => {
  //     console.log(error);
  //   }, () => {
  //     console.log('Xóa khách hàng thành công!');
  //   });
  // }

}

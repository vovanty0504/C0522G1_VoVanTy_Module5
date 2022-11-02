import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {KhachHang} from '../../model/khach-hang';
import {SoTietKiemService} from '../../service/so-tiet-kiem.service';
import {ActivatedRoute, Router} from '@angular/router';
import {SoTietKiem} from '../../model/so-tiet-kiem';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-so-tiet-kiem-edit',
  templateUrl: './so-tiet-kiem-edit.component.html',
  styleUrls: ['./so-tiet-kiem-edit.component.css']
})
export class SoTietKiemEditComponent implements OnInit {
  formEdit: FormGroup;
  khachHangList: KhachHang[];
  khachHang: KhachHang;
  soTietKiem: SoTietKiem;


  constructor(private soTietKiemService: SoTietKiemService,
              private router: Router,
              private activatedRoute: ActivatedRoute) {
  }

  getAllKhachHang() {
    this.soTietKiemService.getAllKhachHang().subscribe(value => {
      this.khachHangList = value;
    });
  }

  ngOnInit(): void {
    const id = Number(this.activatedRoute.snapshot.params.id);
    this.soTietKiemService.findById(id).subscribe(value => {
      this.soTietKiem = value;
      console.log(value );
      this.formEdit.patchValue(value);
    });
    this.formEdit = new FormGroup({
      id: new FormControl(),
      ngayMoSo: new FormControl(),
      thoiGianBatDauGui: new FormControl(),
      kyHan: new FormControl(),
      soTienGui: new FormControl(),
      laiXuat: new FormControl(),
      uuDai: new FormControl(),
      khachHang: new FormGroup({
        id: new FormControl(),
        name: new FormControl()
      })
    });
    this.getAllKhachHang();
  }

  compareWithId(item1, item2) {
    return item1 && item2 && item1.id === item2.id;
  }


  submitUpdate() {
    const soTietKiemObj = this.formEdit.value;
    this.soTietKiemService.update(soTietKiemObj).subscribe(value => {
      Swal.fire({
        icon: 'success',
        title: 'Cập nhập thành công!',
        text: 'Sổ Tiết Kiệm: ',
        showClass: {
          popup: 'animate__animated animate__fadeInDown'
        },
        hideClass: {
          popup: 'animate__animated animate__fadeOutUp'
        }
      });
      this.router.navigateByUrl('');
    });
  }
}


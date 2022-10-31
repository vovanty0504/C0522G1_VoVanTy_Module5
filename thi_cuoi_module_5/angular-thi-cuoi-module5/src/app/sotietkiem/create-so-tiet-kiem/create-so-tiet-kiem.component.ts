import {Component, OnInit} from '@angular/core';
import {FormGroup} from '@angular/forms';
import {KhachHang} from '../../model/khach-hang';
import {SoTietKiemService} from '../../service/so-tiet-kiem.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-create-so-tiet-kiem',
  templateUrl: './create-so-tiet-kiem.component.html',
  styleUrls: ['./create-so-tiet-kiem.component.css']
})
export class CreateSoTietKiemComponent implements OnInit {

  formCreate: FormGroup;
  khachHangList: KhachHang[];

  constructor(private soTietKiemService: SoTietKiemService,
              private router: Router) {
  }

  getAllKhachHang() {
    this.soTietKiemService.getAllKhachHang().subscribe(value => {
      this.khachHangList = value;
    });
  }

  ngOnInit(): void {
    this.formCreate = new FormGroup({

    });

  }

}

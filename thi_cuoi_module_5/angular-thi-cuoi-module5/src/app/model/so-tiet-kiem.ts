import {KhachHang} from './khach-hang';

export interface SoTietKiem {
  id?: number;
  ngayMoSo?: string;
  thoiGianBatDauGui?: string;
  kyHan?: string;
  soTienGui?: string;
  laiXuat?: string;
  uuDai?: string;
  khachHang?: KhachHang;

}

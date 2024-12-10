//Unit
export interface unitYPT {
  unit: string;
}

export const IUnit: unitYPT[] = [
  { unit: "SFO" },
  { unit: "IA" },
  { unit: "LEGAL" },
  { unit: "EDU STRATEGIC" },
  { unit: "EDU SYSTEM" },
  { unit: "HE MANAGEMENT" },
  { unit: "PSE MANAGEMENT" },
  { unit: "FINANCE" },
  { unit: "LOGFAM" },
  { unit: "HC" },
  { unit: "IT" },
  { unit: "SPSIP" },
  { unit: "SP" },
];

//Data Akun
export interface karyawanData {
  nama_karyawan: string;
  wa_karyawan: string;
  email_karyawan: string;
  unit: string;
  role_karyawan: string;
  status_karyawan: string;
}

export const dataKaryawan: karyawanData[] = [
  {
    nama_karyawan: "Nadir Septian Hadiansyah",
    wa_karyawan: "+6281234567891",
    email_karyawan: "nadir.septian@ypt.or.id",
    unit: "IA",
    role_karyawan: "0",
    status_karyawan: "1",
  },
  {
    nama_karyawan: "Bima Pramudya Laksana",
    wa_karyawan: "+6281234567890",
    email_karyawan: "bima.pramudya@ypt.or.id",
    unit: "SFO",
    role_karyawan: "1",
    status_karyawan: "1",
  },
  {
    nama_karyawan: "Rafi Azizi Raya",
    wa_karyawan: "+6281234567892",
    email_karyawan: "rafi.azizi@ypt.or.id",
    unit: "LEGAL",
    role_karyawan: "1",
    status_karyawan: "0",
  },
  {
    nama_karyawan: "Aulia Arief",
    wa_karyawan: "+6281234567893",
    email_karyawan: "aulia.arief@ypt.or.id",
    unit: "EDU STRATEGIC",
    role_karyawan: "0",
    status_karyawan: "1",
  },
];

//Presensi
export interface karyawanPresensi {
  tanggal_presensi: string;
  karyawan: string;
  lokasi: string;
  status_kerja: "WFO" | "WFH" | "WFA";
  check_in: string;
  check_out: string;
}

export const presensiKaryawan: karyawanPresensi[] = [
  {
    tanggal_presensi: "2024/08/01",
    karyawan: "Nadir Septian Hadiansyah",
    lokasi: "-6.200000,106.816666",
    status_kerja: "WFO",
    check_in: "2024/08/01 08:00:00",
    check_out: "2024/08/01 17:00:00",
  },
  {
    tanggal_presensi: "2024/08/01",
    karyawan: "Bima Pramudya Laksana",
    lokasi: "-6.917464,107.619125",
    status_kerja: "WFH",
    check_in: "2024/08/01 08:15:00",
    check_out: "2024/08/01 16:45:00",
  },
  {
    tanggal_presensi: "2024/08/01",
    karyawan: "Rafi Azizi Raya",
    lokasi: "-7.250445,112.768845",
    status_kerja: "WFA",
    check_in: "2024/08/01 09:00:00",
    check_out: "2024/08/01 18:00:00",
  },
  {
    tanggal_presensi: "2024/08/02",
    karyawan: "Aulia Arief",
    lokasi: "-6.200000,106.816666",
    status_kerja: "WFO",
    check_in: "2024/08/02 08:05:00",
    check_out: "2024/08/02 17:05:00",
  },
];

export interface admin {
  nama: string;
  nip: string;
  role: string;
  password: string;
}

export const akunAdmin: admin[] = [
  {
    nama: "Dummy",
    nip: "12345",
    role: "Admin",
    password: "admin123",
  },
];
